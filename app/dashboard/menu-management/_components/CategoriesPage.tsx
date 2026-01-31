/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { MenuCategory } from "@/types/types";
import {
  useGetCategoryListQuery,
  useDeleteCategoryMutation,
} from "@/lib/redux/features/api/category/categoryApiSlice";
import { MenuHeader } from "./MenuHeader";
import { MenuTabs } from "./MenuTabs";
import { CategoriesView } from "./CategoriesView";
import { MenuModal } from "../MenuModals";

interface CategoriesPageProps {
  navigateToPackages: () => void;
  navigateToItems: (categoryId: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  navigateToPackages,
  navigateToItems,
}) => {
  const [categoriesList, setCategoriesList] = useState<MenuCategory[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [deleteCategory] = useDeleteCategoryMutation();
  const { data: categoriesData, refetch } = useGetCategoryListQuery(null);

  useEffect(() => {
    if (categoriesData?.data) {
      setCategoriesList(categoriesData.data.data);
    }
  }, [categoriesData]);

  const handleDeleteCategory = async (id: string) => {
    try {
      await deleteCategory(id).unwrap();
    } catch (error) {
      console.error("Failed to delete category", error);
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleOpenModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const filteredCategories = categoriesList.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <MenuHeader searchValue={searchTerm} onSearchChange={setSearchTerm} />

      <MenuTabs
        activeTab="BUILD_OWN"
        setActiveTab={(tab) => {
          if (tab === "PACKAGES") navigateToPackages();
        }}
        setBuildOwnView={() => {
          // If user clicks "Categories" in build own, it might re-trigger but we are already here.
          // If user clicks "Items" (not possible from tab unless we allow it? Actually current MenuTabs allows clicking 'BUILD YOUR OWN' which resets to categories)
          // The MenuTabs implementation:
          /* 
                onClick={() => {
                    setActiveTab("BUILD_OWN");
                    setBuildOwnView("CATEGORIES");
                }}
             */
          // So it always forces categories when clicking the tab.
        }}
        onOpenModal={handleOpenModal}
        addButtonLabel="Add Category"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CategoriesView
          categoriesList={filteredCategories}
          onCategoryClick={(id) => navigateToItems(id)}
          onDelete={handleDeleteCategory}
          onEdit={handleEdit}
        />
      </div>

      <MenuModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type="CATEGORY"
        editingItem={editingItem}
        refetch={refetch}
      />
    </>
  );
};

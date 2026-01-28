/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { MenuItem } from "@/types/types";
import {
  useGetBuildPackageListQuery,
  useDeleteBuildPackageMutation,
} from "@/lib/redux/features/api/buildPackage/buildPackageApiSlice";
import { MenuHeader } from "./MenuHeader";
import { MenuTabs } from "./MenuTabs";
import { ItemsView } from "./ItemsView";
import { MenuModal } from "../MenuModals";

interface ItemsPageProps {
  categoryId: string | null;
  navigateToPackages: () => void;
  navigateToCategories: () => void;
}

export const ItemsPage: React.FC<ItemsPageProps> = ({
  categoryId,
  navigateToPackages,
  navigateToCategories,
}) => {
  const [itemsList, setItemsList] = useState<MenuItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [deleteBuildPackage] = useDeleteBuildPackageMutation();
  const { data: itemsData } = useGetBuildPackageListQuery(
    categoryId ? { category: categoryId } : null,
  );

  // console.log(categoryId);

  useEffect(() => {
    if (itemsData?.data) {
      setItemsList(itemsData.data.data);
    }
  }, [itemsData]);

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteBuildPackage(id).unwrap();
    } catch (error) {
      console.error("Failed to delete item", error);
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

  const filteredItems = itemsList.filter((item) =>
    (item.platterName || item.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <MenuHeader searchValue={searchTerm} onSearchChange={setSearchTerm} />

      <MenuTabs
        activeTab="BUILD_OWN"
        setActiveTab={(tab) => {
          if (tab === "PACKAGES") navigateToPackages();
        }}
        setBuildOwnView={(view) => {
          if (view === "CATEGORIES") navigateToCategories();
        }}
        onOpenModal={handleOpenModal}
        addButtonLabel="Add Item"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ItemsView
          items={filteredItems}
          onBack={navigateToCategories}
          onDelete={handleDeleteItem}
          onEdit={handleEdit}
        />
      </div>

      <MenuModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type="ITEM"
        editingItem={editingItem}
        categoryId={categoryId || ""}
      />
    </>
  );
};

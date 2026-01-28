/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { MenuPackage } from "@/types/types";
import {
  useGetSetPackageListQuery,
  useDeleteSetPackageMutation,
} from "@/lib/redux/features/api/set-package/setPackageApiSlice";
import { MenuHeader } from "./MenuHeader";
import { MenuTabs } from "./MenuTabs";
import { PackagesView } from "./PackagesView";
import { MenuModal } from "../MenuModals";

interface PackagesPageProps {
  navigateToBuildOwn: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  navigateToBuildOwn,
}) => {
  const [packagesList, setPackagesList] = useState<MenuPackage[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [deleteSetPackage] = useDeleteSetPackageMutation();
  const { data } = useGetSetPackageListQuery(null);

  useEffect(() => {
    if (data?.data) {
      setPackagesList(data.data.data);
    }
  }, [data]);

  const handleDeletePackage = async (id: string) => {
    try {
      await deleteSetPackage(id).unwrap();
    } catch (error) {
      console.error("Failed to delete package", error);
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

  const filteredPackages = packagesList.filter((pkg) =>
    pkg.platterName.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <MenuHeader searchValue={searchTerm} onSearchChange={setSearchTerm} />

      <MenuTabs
        activeTab="PACKAGES"
        setActiveTab={(tab) => {
          if (tab === "BUILD_OWN") navigateToBuildOwn();
        }}
        setBuildOwnView={() => {}}
        onOpenModal={handleOpenModal}
        addButtonLabel="Add Package"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <PackagesView
          packagesList={filteredPackages}
          onDelete={handleDeletePackage}
          onEdit={handleEdit}
        />
      </div>

      <MenuModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type="PACKAGE"
        editingItem={editingItem}
      />
    </>
  );
};

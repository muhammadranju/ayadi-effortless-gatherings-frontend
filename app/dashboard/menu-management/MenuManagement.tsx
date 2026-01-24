/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { PackagesPage } from "./_components/PackagesPage";
import { CategoriesPage } from "./_components/CategoriesPage";
import { ItemsPage } from "./_components/ItemsPage";

export const MenuManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"PACKAGES" | "BUILD_OWN">(
    "PACKAGES",
  );
  const [buildOwnView, setBuildOwnView] = useState<"CATEGORIES" | "ITEMS">(
    "CATEGORIES",
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="flex-1 px-6 py-8 lg:px-10">
      {activeTab === "PACKAGES" && (
        <PackagesPage
          navigateToBuildOwn={() => {
            setActiveTab("BUILD_OWN");
            setBuildOwnView("CATEGORIES");
            setSelectedCategory(null);
          }}
        />
      )}

      {activeTab === "BUILD_OWN" && buildOwnView === "CATEGORIES" && (
        <CategoriesPage
          navigateToPackages={() => setActiveTab("PACKAGES")}
          navigateToItems={(categoryId) => {
            setSelectedCategory(categoryId);
            setBuildOwnView("ITEMS");
          }}
        />
      )}

      {activeTab === "BUILD_OWN" && buildOwnView === "ITEMS" && (
        <ItemsPage
          categoryId={selectedCategory}
          navigateToPackages={() => setActiveTab("PACKAGES")}
          navigateToCategories={() => {
            setBuildOwnView("CATEGORIES");
            setSelectedCategory(null);
          }}
        />
      )}
    </div>
  );
};

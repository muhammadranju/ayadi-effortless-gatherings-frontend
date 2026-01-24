import React from "react";
import { Plus } from "lucide-react";

interface MenuTabsProps {
  activeTab: "PACKAGES" | "BUILD_OWN";
  setActiveTab: (tab: "PACKAGES" | "BUILD_OWN") => void;
  setBuildOwnView: (view: "CATEGORIES" | "ITEMS") => void;
  onOpenModal: () => void;
  addButtonLabel: string;
}

export const MenuTabs: React.FC<MenuTabsProps> = ({
  activeTab,
  setActiveTab,
  setBuildOwnView,
  onOpenModal,
  addButtonLabel,
}) => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 border-b border-gray-200 sm:flex-row sm:items-end">
      <div className="flex gap-8">
        <button
          onClick={() => setActiveTab("PACKAGES")}
          className={`
            relative pb-4 text-xs font-bold tracking-widest transition-colors uppercase
            ${
              activeTab === "PACKAGES"
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }
          `}
        >
          SET PACKAGES
          {activeTab === "PACKAGES" && (
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-900"></span>
          )}
        </button>

        <button
          onClick={() => {
            setActiveTab("BUILD_OWN");
            setBuildOwnView("CATEGORIES");
          }}
          className={`
            relative pb-4 text-xs font-bold tracking-widest transition-colors uppercase
            ${
              activeTab === "BUILD_OWN"
                ? "text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }
          `}
        >
          BUILD YOUR OWN
          {activeTab === "BUILD_OWN" && (
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-emerald-900"></span>
          )}
        </button>
      </div>

      <div className="pb-2">
        <button
          onClick={onOpenModal}
          className="flex items-center gap-2 rounded-lg bg-emerald-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-800"
        >
          <Plus size={18} />
          {addButtonLabel}
        </button>
      </div>
    </div>
  );
};

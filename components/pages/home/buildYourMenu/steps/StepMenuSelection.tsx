import MenuCard from "@/components/pages/home/buildYourMenu/MenuCard";
import { MenuItem } from "@/components/pages/home/buildYourMenu/types";
import React from "react";
import { useTranslation } from "react-i18next";

interface MenuSectionProps {
  title: string;
  subtitle: string;
  items: MenuItem[];
  selectedIds: string[] | string | null;
  onSelect: (id: string) => void;
  limit?: number;
}
interface StepMenuSelectionProps {
  selectedSalad: string | null;
  handleSaladSelect: (id: string) => void;
  selectedAppetizers: string[];
  handleAppetizerSelect: (id: string) => void;
  selectedMains: string[];
  handleMainSelect: (id: string) => void;
  selectedAddons: string[];
  handleAddonSelect: (id: string) => void;
  salads: MenuItem[];
  classics: MenuItem[];
  signatures: MenuItem[];
  addons: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({
  title,
  subtitle,
  items,
  selectedIds,
  onSelect,
  limit,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  // Only used for local toggle state of dropdowns
  const [expandedIds, setExpandedIds] = React.useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="mb-16">
      <h2 className=" text-3xl md:text-4xl text-charcoal mb-2">{title}</h2>
      <div className="flex flex-col gap-2 mb-6">
        <p className="text-gray-500 font-light text-lg">{subtitle}</p>
        {limit && (
          <div className="flex gap-2">
            {Array.from({ length: limit }).map((_, i) => {
              const count = Array.isArray(selectedIds)
                ? selectedIds.length
                : selectedIds
                  ? 1
                  : 0;
              const isActive = i < count;
              return (
                <div
                  key={i}
                  className={`h-3 w-16 rounded-full transition-colors duration-300 ${
                    isActive ? "bg-[#D4B09E]" : "bg-[#E8DED5]"
                  }`}
                ></div>
              );
            })}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const hasRelatedItems =
            item.relatedItems && item.relatedItems.length > 0;

          const isSelected = Array.isArray(selectedIds)
            ? selectedIds.includes(item.id)
            : selectedIds === item.id;

          const isDisabled = limit
            ? Array.isArray(selectedIds)
              ? selectedIds.length >= limit && !isSelected
              : selectedIds !== null && !isSelected
            : false;

          // If it has related items, we just show the card as a "folder"
          // Clicking it toggles the dropdown, NOT selection of the folder itself
          if (hasRelatedItems) {
            const isExpanded = expandedIds.includes(item.id);
            // Calculate if any child items are selected
            const selectedChildrenCount = item.relatedItems!.filter(
              (subItem) =>
                Array.isArray(selectedIds)
                  ? selectedIds.includes(subItem.id)
                  : selectedIds === subItem.id,
            ).length;

            const isParentSelected = selectedChildrenCount > 0;

            return (
              <div key={item.id} className="relative">
                <MenuCard
                  item={item}
                  // Show as selected if any children are selected
                  isSelected={isParentSelected}
                  onSelect={() => toggleExpanded(item.id)}
                  disabled={false} // Always allow opening the folder
                />
                {/* Show count of selected items if any */}
                {isParentSelected && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-sm pointer-events-none">
                    {selectedChildrenCount}
                  </div>
                )}

                {isExpanded && (
                  <div className="absolute top-full left-0 right-0 mt-2 p-4 border border-[#D4B09E] bg-white rounded-md shadow-xl z-20 grid gap-2 max-h-60 overflow-y-auto w-full">
                    {item.relatedItems!.map((subItem) => {
                      const isSubSelected = Array.isArray(selectedIds)
                        ? selectedIds.includes(subItem.id)
                        : selectedIds === subItem.id;

                      const isSubDisabled = limit
                        ? Array.isArray(selectedIds)
                          ? selectedIds.length >= limit && !isSubSelected
                          : selectedIds !== null && !isSubSelected
                        : false;

                      return (
                        <button
                          key={subItem.id}
                          disabled={isSubDisabled}
                          onClick={() => {
                            onSelect(subItem.id);
                            toggleExpanded(item.id); // Auto-close on select
                          }}
                          className={`text-left px-3 py-2 rounded-md transition-colors w-full flex justify-between items-center ${
                            isSubSelected
                              ? "bg-[#e4dcd6] text-charcoal border border-[#D4B09E]"
                              : "hover:bg-gray-100 text-gray-700"
                          } ${
                            isSubDisabled ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <span className="font-medium">
                            {isArabic
                              ? subItem.platterNameArabic ||
                                subItem.nameArabic ||
                                subItem.name
                              : t(subItem.name)}
                          </span>
                          {isSubSelected && (
                            <span className="text-green-600">✓</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <MenuCard
              key={item.id}
              item={item}
              isSelected={isSelected}
              onSelect={() => onSelect(item.id)}
              disabled={isDisabled as boolean}
            />
          );
        })}
      </div>
    </div>
  );
};

const StepMenuSelection: React.FC<StepMenuSelectionProps> = ({
  selectedSalad,
  handleSaladSelect,
  selectedAppetizers,
  handleAppetizerSelect,
  selectedMains,
  handleMainSelect,
  selectedAddons,
  handleAddonSelect,
  salads,
  classics,
  signatures,
  addons,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto px-6 md:px-12 py-10">
      <MenuSection
        title={t("menu.steps.salad")}
        subtitle={t("menu.steps.saladSubtitle")}
        items={salads}
        selectedIds={selectedSalad}
        onSelect={handleSaladSelect}
        limit={1}
      />
      <MenuSection
        title={t("menu.steps.classics")}
        subtitle={t("menu.steps.classicsSubtitle")}
        items={classics}
        selectedIds={selectedAppetizers}
        onSelect={handleAppetizerSelect}
        limit={2}
      />
      <MenuSection
        title={t("menu.steps.signatures")}
        subtitle={t("menu.steps.signaturesSubtitle")}
        items={signatures}
        selectedIds={selectedMains}
        onSelect={handleMainSelect}
        limit={3}
      />
      <MenuSection
        title={t("menu.steps.addons")}
        subtitle={t("menu.steps.addonsSubtitle")}
        items={addons}
        selectedIds={selectedAddons}
        onSelect={handleAddonSelect}
        limit={6}
      />
    </div>
  );
};

export default StepMenuSelection;

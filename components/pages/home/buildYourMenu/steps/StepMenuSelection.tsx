import {
  ADDONS,
  CLASSICS,
  SALADS,
  SIGNATURES,
} from "@/components/pages/home/buildYourMenu/data";
import MenuCard from "@/components/pages/home/buildYourMenu/MenuCard";
import { MenuItem } from "@/components/pages/home/buildYourMenu/types";
import React from "react";
import { useTranslation } from "react-i18next";

interface StepMenuSelectionProps {
  selectedSalad: string | null;
  handleSaladSelect: (id: string) => void;
  selectedAppetizers: string[];
  handleAppetizerSelect: (id: string) => void;
  selectedMains: string[];
  handleMainSelect: (id: string) => void;
  selectedAddons: string[];
  handleAddonSelect: (id: string) => void;
}

const StepMenuSelection: React.FC<StepMenuSelectionProps> = ({
  selectedSalad,
  handleSaladSelect,
  selectedAppetizers,
  handleAppetizerSelect,
  selectedMains,
  handleMainSelect,
  selectedAddons,
  handleAddonSelect,
}) => {
  const { t } = useTranslation();

  const renderSection = (
    title: string,
    subtitle: string,
    items: MenuItem[],
    selectedIds: string[] | string | null,
    onSelect: (id: string) => void,
    limit?: number,
  ) => {
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
            const isSelected = Array.isArray(selectedIds)
              ? selectedIds.includes(item.id)
              : selectedIds === item.id;
            const isDisabled =
              limit && Array.isArray(selectedIds)
                ? selectedIds.length >= limit && !isSelected
                : false;
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

  return (
    <div className="mx-auto px-6 md:px-12 py-10">
      {renderSection(
        t("menu.steps.salad"),
        t("menu.steps.saladSubtitle"),
        SALADS,
        selectedSalad,
        handleSaladSelect,
        1,
      )}
      {renderSection(
        t("menu.steps.classics"),
        t("menu.steps.classicsSubtitle"),
        CLASSICS,
        selectedAppetizers,
        handleAppetizerSelect,
        3,
      )}
      {renderSection(
        t("menu.steps.signatures"),
        t("menu.steps.signaturesSubtitle"),
        SIGNATURES,
        selectedMains,
        handleMainSelect,
        2,
      )}
      {renderSection(
        t("menu.steps.addons"),
        t("menu.steps.addonsSubtitle"),
        ADDONS,
        selectedAddons,
        handleAddonSelect,
        6,
      )}
    </div>
  );
};

export default StepMenuSelection;

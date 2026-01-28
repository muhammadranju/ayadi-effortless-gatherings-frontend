import React from "react";
import { MenuItem } from "./types";
import { Check, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface MenuCardProps {
  item: MenuItem;
  isSelected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({
  item,
  isSelected,
  onSelect,
  disabled,
}) => {
  const { t, i18n } = useTranslation();

  const isAribic = i18n.language === "ar";

  return (
    <div
      onClick={() => !disabled && onSelect()}
      className={`group relative flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 cursor-pointer border ${
        isSelected
          ? "border-forest ring-1 ring-forest shadow-md"
          : "border-gray-200 hover:shadow-lg"
      } ${disabled && !isSelected ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {/* Image Container */}
      {item.image && (
        <div className="relative aspect-[4/3] bg-white overflow-hidden p-5">
          <Image
            width={1080}
            height={720}
            src={`${process.env.NEXT_PUBLIC_BASE_SERVER_URL}${item.image}`}
            alt={t(item.name)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 rounded"
          />
          {isSelected && (
            <div className="absolute top-3 right-3 bg-forest text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md animate-in zoom-in">
              <Check className="w-4 h-4" />
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className=" text-lg text-charcoal  leading-tight">
            {isAribic ? item.platterNameArabic : item.name}
          </h3>
        </div>
        <p className="text-color text-sm font-light leading-relaxed mb-4 flex-grow">
          {isAribic ? item.descriptionArabic : item.description}
        </p>

        {item.price && (
          <div className="text-forest font-semibold text-sm mb-3">
            {item.price} {t("menu.SARprice")}
          </div>
        )}

        <div className="pt-4 mt-auto border-t border-gray-300 flex justify-between items-center bg-white">
          <span
            className={`text-xs font-bold tracking-wider transition-colors ${
              isSelected
                ? "text-forest"
                : "text-gray-400 group-hover:text-gray-600"
            }`}
          >
            {item.relatedItems && item.relatedItems.length > 0
              ? t("menu.chooseOption")
              : isSelected
                ? t("menu.selectOption")
                : t("menu.clickToSelect")}
          </span>
          {item.relatedItems && item.relatedItems.length > 0 && (
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 text-gray-400 ${
                isSelected ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

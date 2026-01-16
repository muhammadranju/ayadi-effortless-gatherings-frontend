import React from "react";
import { MenuItem } from "./types";
import { Check } from "lucide-react";

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
          <img
            src={item.image}
            alt={item.name}
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
            {item.name}
            {item.isVegetarian && (
              <span className="ml-2 text-xs text-forest font-sans font-bold bg-green-100 px-1.5 py-0.5 rounded-sm">
                V
              </span>
            )}
          </h3>
        </div>

        <p className="text-color text-sm font-light leading-relaxed mb-4 flex-grow">
          {item.description}
        </p>

        {item.price && (
          <div className="text-forest font-semibold text-sm mb-3">
            {item.price} SAR
          </div>
        )}

        <div className="pt-4 mt-auto border-t border-gray-300">
          <span
            className={`text-xs font-bold tracking-wider transition-colors ${
              isSelected
                ? "text-forest"
                : "text-gray-400 group-hover:text-gray-600"
            }`}
          >
            {isSelected ? "Selected" : "Click to select"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

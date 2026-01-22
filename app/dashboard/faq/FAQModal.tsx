import React from "react";

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "ADD" | "EDIT";
}

export const FAQModal: React.FC<FAQModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[600px] rounded-xl bg-white p-12 shadow-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 tracking-tight">
            {type === "ADD" ? "Add New FAQ" : "Edit FAQ"}
          </h2>
        </div>

        {/* Form Content */}
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">
              Question
            </label>
            <input
              type="text"
              placeholder="Enter your question"
              className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar transition-shadow"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-900">
              Answer
            </label>
            <input
              type="text"
              placeholder="Enter your answer"
              className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar transition-shadow"
            />
          </div>

          <div className="pt-6 flex justify-center">
            <button
              type="submit"
              onClick={onClose}
              className="w-48 rounded-md bg-sidebar py-3 text-base font-medium text-white shadow-sm hover:bg-sidebarHover transition-colors"
            >
              {type === "ADD" ? "Add" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

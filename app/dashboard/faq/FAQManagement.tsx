"use client";

import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { FAQItem } from "@/types/types";
import { FAQModal } from "./FAQModal";

const mockFAQs: FAQItem[] = Array(8)
  .fill({
    question: "Bero et velit interdum, ac aliquet odio mattis..........",
    answer: "Bero et velit interdum, ac aliquet odio mattis..........",
  })
  .map((item, index) => ({ ...item, id: index.toString() }));

export const FAQManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"ADD" | "EDIT">("ADD");

  const handleOpenAdd = () => {
    setModalType("ADD");
    setIsModalOpen(true);
  };

  const handleOpenEdit = () => {
    setModalType("EDIT");
    setIsModalOpen(true);
  };

  return (
    <div className="flex-1 px-6 py-8 lg:px-10 relative">
      <h3 className="text-4xl font-semibold mb-6 border-b border-gray-200">
        FAQ Management
      </h3>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search table..."
            className="w-full rounded-md border border-gray-300 py-3.5 pl-12 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 px-6 text-sm font-bold text-gray-900 w-2/5">
                FAQ (Question)
              </th>
              <th className="py-4 px-6 text-sm font-bold text-gray-900 w-2/5">
                FAQ (Answer)
              </th>
              <th className="py-4 px-6 text-sm font-bold text-gray-900 text-right">
                Action Button
              </th>
            </tr>
          </thead>
          <tbody>
            {mockFAQs.map((faq, index) => (
              <tr
                key={index}
                className="border-b border-gray-50 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-6 px-6 text-sm text-gray-600">
                  {faq.question}
                </td>
                <td className="py-6 px-6 text-sm text-gray-600">
                  {faq.answer}
                </td>
                <td className="py-6 px-6 text-right">
                  <button
                    onClick={handleOpenEdit}
                    className="p-1 rounded-full hover:bg-gray-200 text-gray-500 inline-block transition-colors"
                  >
                    <MoreVertical size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 p-6 bg-white border-t border-gray-100">
          <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-sidebar px-2 py-1 transition-colors">
            <ChevronLeft size={16} /> Previous
          </button>
          <button className="h-8 w-8 flex items-center justify-center rounded text-sm text-gray-600 hover:bg-gray-100 transition-colors">
            1
          </button>
          <button className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 bg-white text-sm font-medium text-gray-900">
            2
          </button>
          <button className="h-8 w-8 flex items-center justify-center rounded text-sm text-gray-600 hover:bg-gray-100 transition-colors">
            3
          </button>
          <span className="text-gray-400 px-1">...</span>
          <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-sidebar px-2 py-1 transition-colors">
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Floating Add Button - Positioned to be accessible but not intrusive to the table design */}
      <div className="fixed bottom-8 right-8 z-10">
        <button
          onClick={handleOpenAdd}
          className="flex items-center gap-2 rounded-lg bg-sidebar px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-sidebarHover transition-all"
        >
          <Plus size={18} /> Add New FAQ
        </button>
      </div>

      <FAQModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

import React from "react";
import { Search } from "lucide-react";

export const MenuHeader = () => {
  return (
    <>
      <h3 className="text-4xl font-semibold mb-6 border-b border-gray-200">
        Menu Management
      </h3>
      {/* Search and Search Box */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search here......."
            className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-emerald-900 focus:outline-none focus:ring-1 focus:ring-emerald-900"
          />
        </div>
      </div>
    </>
  );
};

"use client";

import { Order } from "@/interface/order.interface";
import { ChevronDown, Search } from "lucide-react";
import React, { useState } from "react";
import { OrderCard } from "../orders/OrderCard";
import { MenuManagement } from "./MenuManagement";

// Mock Data for Orders
const orders: Order[] = [
  {
    _id: "ORD-2024-001",
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
    orderType: "package",
    dateTime: {
      date: "2024-12-25",
      time: "8:00 PM",
    },
    deliveryDetails: {
      email: "prince@example.com",
      firstName: "Prince Ahmed",
      lastName: "Al-Saud",
    },
    selectedPackage: {
      platterName: "The Royal Banquet",
      person: 150,
    },
    pricing: {
      total: 12500,
    },
  },
  {
    _id: "ORD-2024-002",
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
    orderType: "package",
    dateTime: {
      date: "2024-12-25",
      time: "8:00 PM",
    },
    deliveryDetails: {
      email: "prince@example.com",
      firstName: "Prince Ahmed",
      lastName: "Al-Saud",
    },
    selectedPackage: {
      platterName: "The Royal Banquet",
      person: 150,
    },
    pricing: {
      total: 12500,
    },
  },
  {
    _id: "ORD-2024-003",
    status: "CONFIRMED",
    createdAt: new Date().toISOString(),
    orderType: "package",
    dateTime: {
      date: "2024-12-25",
      time: "8:00 PM",
    },
    deliveryDetails: {
      email: "prince@example.com",
      firstName: "Prince Ahmed",
      lastName: "Al-Saud",
    },
    selectedPackage: {
      platterName: "The Royal Banquet",
      person: 150,
    },
    pricing: {
      total: 12500,
    },
  },
];

const App: React.FC = () => {
  const [currentView] = useState<"PACKAGES" | "BUILD_YOUR_OWN">("PACKAGES");
  const [activeOrderTab, setActiveOrderTab] = useState("CONFIRMED");

  return (
    <>
      {/* View Routing */}

      {currentView === "PACKAGES" || currentView === "BUILD_YOUR_OWN" ? (
        <MenuManagement />
      ) : (
        /* Default/Orders View */
        <main className="flex-1 px-6 py-8 lg:px-10">
          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search here......."
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:border-sidebar focus:outline-none focus:ring-1 focus:ring-sidebar"
              />
            </div>
          </div>

          {/* Tabs and Filters */}
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-gray-200 sm:flex-row sm:items-center">
            <div className="flex gap-8">
              {["CONFIRMED", "IN PROGRESS", "COMPLETED"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveOrderTab(tab)}
                  className={`
                      relative py-3 text-xs font-bold tracking-widest transition-colors
                      ${
                        activeOrderTab === tab
                          ? "text-sidebar"
                          : "text-gray-400 hover:text-gray-600"
                      }
                    `}
                >
                  {tab}
                  {activeOrderTab === tab && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-sidebar"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="mb-2 sm:mb-0">
              <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
                Filter by <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order, index) => (
              <OrderCard key={`${order._id}-${index}`} order={order} />
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default App;

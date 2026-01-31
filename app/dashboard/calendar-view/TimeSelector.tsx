"use client";

import React from "react";
import { Clock } from "lucide-react";
import { format } from "date-fns";
import { useGetAllDeliverySlotsQuery } from "@/lib/redux/features/api/deliverySlots/deliverySlotsApiSlice";

const DEFAULT_TIME_SLOTS = [
  { startTime: "09:00", endTime: "10:00" },
  { startTime: "10:00", endTime: "11:00" },
  { startTime: "11:00", endTime: "12:00" },
  { startTime: "12:00", endTime: "13:00" },
  { startTime: "13:00", endTime: "14:00" },
  { startTime: "14:00", endTime: "15:00" },
  { startTime: "15:00", endTime: "16:00" },
  { startTime: "16:00", endTime: "17:00" },
  { startTime: "17:00", endTime: "18:00" },
  { startTime: "18:00", endTime: "19:00" },
  { startTime: "19:00", endTime: "20:00" },
  { startTime: "20:00", endTime: "21:00" },
];

interface TimeSelectorProps {
  selectedDate: Date | null;
  startTime: string;
  endTime: string;
  setStartTime: (time: string) => void;
  setEndTime: (time: string) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedDate,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
}) => {
  const { data: deliverySlots } = useGetAllDeliverySlotsQuery({
    startDate: format(new Date(), "yyyy-MM-dd"),
    endDate: format(
      new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
      "yyyy-MM-dd",
    ),
  });

  // Get time slots for selected date
  const getTimeSlotsForSelectedDate = () => {
    if (!selectedDate) return DEFAULT_TIME_SLOTS;
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    const slotsData = Array.isArray(deliverySlots?.data)
      ? deliverySlots.data
      : [];
    const slot = slotsData.find((s) => s.date === dateStr);
    return slot?.timeSlots || DEFAULT_TIME_SLOTS;
  };

  const timeSlots = getTimeSlotsForSelectedDate();

  // Helper to check if a slot is within the selected range
  const isSlotSelected = (slotStart: string, slotEnd: string) => {
    if (!startTime || !endTime) return false;
    return slotStart >= startTime && slotEnd <= endTime;
  };

  // Generate options for dropdowns
  const timeOptions = Array.from(
    new Set([
      ...DEFAULT_TIME_SLOTS.map((s) => s.startTime),
      ...DEFAULT_TIME_SLOTS.map((s) => s.endTime),
    ]),
  ).sort();

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-6 text-orange-500">
        <Clock size={20} className="text-orange-500" />
        <h3 className="text-gray-900 font-medium">Delivery Time Slots</h3>
      </div>

      {!selectedDate ? (
        <p className="text-gray-500 text-center py-8">
          Please select a date from the calendar to view time slots
        </p>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Selected Date: {format(selectedDate, "EEEE, MMMM d, yyyy")}
          </p>

          {/* Range Selection Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Time
              </label>
              <select
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option value="">Select Start Time</option>
                {timeOptions.map((time) => (
                  <option key={`start-${time}`} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Time
              </label>
              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option value="">Select End Time</option>
                {timeOptions.map((time) => (
                  <option key={`end-${time}`} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {timeSlots.map((slot, idx) => {
              const slotStr = `${slot.startTime} - ${slot.endTime}`;
              const isBlocked = Boolean("isBlocked" in slot && slot.isBlocked);
              const isSelected = isSlotSelected(slot.startTime, slot.endTime);

              let buttonClass =
                "py-3 px-2 rounded border text-sm font-medium transition-all duration-200 cursor-default";

              if (isBlocked) {
                buttonClass +=
                  " border-red-300 bg-red-50 text-red-500 line-through";
              } else if (isSelected) {
                buttonClass +=
                  " border-orange-500 bg-orange-50 text-orange-700 ring-1 ring-orange-500";
              } else {
                buttonClass += " border-gray-200 text-gray-600 bg-white";
              }

              return (
                <div key={idx} className={buttonClass}>
                  {slotStr}
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex gap-4 text-xs text-gray-500 justify-end">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-red-50 border border-red-300"></div>
              <span>Blocked</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-orange-50 border border-orange-500"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-white border border-gray-200"></div>
              <span>Available</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

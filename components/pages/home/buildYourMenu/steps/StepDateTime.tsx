import { TIME_SLOTS } from "@/components/pages/home/buildYourMenu/data";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

interface StepDateTimeProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string | null) => void;
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
}

const StepDateTime: React.FC<StepDateTimeProps> = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  currentMonth,
  setCurrentMonth,
}) => {
  const { t } = useTranslation();
  const renderCalendar = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const dateRange = eachDayOfInterval({ start: startDate, end: endDate });

    const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

    return (
      <div className="p-4 bg-white rounded-lg select-none">
        <div className="flex items-center justify-between mb-8 px-2">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-gray-600"
          >
            <ChevronLeft size={16} />
          </button>
          <span className=" text-xl text-charcoal font-medium">
            {format(currentMonth, "MMMM yyyy")}
          </span>
          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-gray-600"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-7 text-center gap-y-6 text-sm text-gray-400 mb-4 font-medium">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-2">
          {dateRange.map((day, idx) => {
            const isSelected = selectedDate && isSameDay(day, selectedDate);
            const isCurrentMonth = isSameMonth(day, currentMonth);
            return (
              <div
                key={idx}
                onClick={() => isCurrentMonth && setSelectedDate(day)}
                className={`
                  text-center text-sm cursor-pointer rounded-full transition-all w-10 h-10 flex items-center justify-center mx-auto
                  ${
                    !isCurrentMonth
                      ? "text-gray-300 pointer-events-none"
                      : "text-charcoal hover:bg-gray-100"
                  }
                  ${
                    isSelected
                      ? "!bg-green-500 font-semibold !text-white shadow-md transform scale-105"
                      : ""
                  }
                `}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      <h1 className=" text-3xl md:text-5xl text-center mb-4 text-charcoal">
        {t("menu.steps.dateTimeTitle")}
      </h1>
      <p className="text-gray-500 text-center mb-10 font-light">
        {t("menu.steps.dateTimeSubtitle")}
      </p>

      <div className="bg-[#FFF4F2] border border-[#FCD7D7] rounded-md p-4 flex items-center gap-3 text-[#B34545] mb-10">
        <Clock size={20} />
        <span className="text-sm font-medium">
          {t("menu.steps.dateTimeNotice")}
        </span>
      </div>

      <div className="bg-white border border-gray-100 shadow-lg shadow-gray-100/50 rounded-xl p-6 md:p-10 mb-10">
        {renderCalendar()}
      </div>

      <div className="mb-10">
        <h3 className="flex items-center gap-2 font-medium text-lg mb-6 text-charcoal">
          <Clock size={20} className="text-green-500" />{" "}
          {t("menu.steps.deliveryTime")}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedTime(slot)}
              className={`py-4 px-4 rounded-lg text-sm border transition-all duration-200 ${
                selectedTime === slot
                  ? "bg-[#E6FAF2] border-green-500 text-green-500 font-semibold shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:border-green-500/50 hover:bg-gray-50"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <div className="bg-[#EAF6F2] border border-[#A4D8C4] rounded-lg p-6 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
          <div className="w-1 bg-green-500 h-12 rounded-full hidden md:block"></div>
          <div>
            <h4 className="font-medium mb-1 text-charcoal">
              {t("menu.steps.selectedSlot")}
            </h4>
            <div className="flex flex-col md:flex-row gap-1 md:gap-6 text-gray-700 text-sm">
              <p>
                <span className="font-semibold text-green-500">
                  {t("menu.steps.date")}
                </span>{" "}
                {format(selectedDate, "EEEE, MMMM d, yyyy")}
              </p>
              <p>
                <span className="font-semibold text-green-500">
                  {t("menu.steps.time")}
                </span>{" "}
                {selectedTime}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepDateTime;

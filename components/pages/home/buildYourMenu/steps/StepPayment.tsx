import { ADDONS } from "@/components/pages/home/buildYourMenu/data";
import { format } from "date-fns";
import { CheckCircle2, CreditCard } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaApple, FaCcVisa, FaRegCreditCard } from "react-icons/fa6";

interface StepPaymentProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  selectedDate: Date | null;
  selectedTime: string | null;
  selectedAddons: string[];
  onComplete: () => void;
}

const StepPayment: React.FC<StepPaymentProps> = ({
  paymentMethod,
  setPaymentMethod,
  selectedDate,
  selectedTime,
  selectedAddons,
  onComplete,
}) => {
  const { t } = useTranslation();
  const selectedAddonObjects = ADDONS.filter((addon) =>
    selectedAddons.includes(addon.id),
  );
  const subtotal = selectedAddonObjects.reduce(
    (acc, curr) => acc + (curr.price || 0),
    0,
  );

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className=" text-3xl md:text-5xl text-center mb-4 text-charcoal">
        {t("menu.steps.paymentTitle")}
      </h1>
      <p className="text-gray-500 text-center mb-10 font-light">
        {t("menu.steps.paymentSubtitle")}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Payment Methods */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white/90 border-2 border-gray-200 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-4 text-charcoal">
              {t("menu.steps.paymentMethod")}
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setPaymentMethod("credit")}
                className={`flex-1 py-6 border rounded-xl flex flex-col items-center gap-3 transition-all duration-200 cursor-pointer ${
                  paymentMethod === "credit"
                    ? "border-green-500 bg-[#E6FAF2] text-green-500 ring-1 ring-green-500"
                    : "border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600"
                }`}
              >
                <FaRegCreditCard size={28} />
                <span className="text-sm font-semibold">
                  {t("menu.steps.credit")}
                </span>
              </button>
              <button
                onClick={() => setPaymentMethod("mada")}
                className={`flex-1 py-6 border rounded-xl flex flex-col items-center gap-3 transition-all duration-200 cursor-pointer ${
                  paymentMethod === "mada"
                    ? "border-green-500 bg-[#E6FAF2] text-green-500 ring-1 ring-green-500"
                    : "border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600"
                }`}
              >
                <FaCcVisa size={28} />
                <span className="text-sm font-semibold">
                  {t("menu.steps.mada")}
                </span>
              </button>
              <button
                onClick={() => setPaymentMethod("apple")}
                className={`flex-1 py-6 border rounded-xl flex flex-col items-center gap-3 transition-all duration-200 cursor-pointer ${
                  paymentMethod === "apple"
                    ? "border-green-500 bg-[#E6FAF2] text-green-500 ring-1 ring-green-500"
                    : "border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600"
                }`}
              >
                <FaApple size={28} />
                <span className="text-sm font-semibold">
                  {t("menu.steps.apple")}
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h4 className="font-medium mb-6 text-charcoal text-lg">
              {t("menu.steps.cardDetails")}
            </h4>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t("menu.steps.cardNumber")}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  />
                  <CreditCard
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t("menu.steps.cardHolder")}
                </label>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {t("menu.steps.expiry")}
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    {t("menu.steps.cvv")}
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 text-xs text-gray-500 bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 animate-pulse"></div>
              {t("menu.steps.secure")}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-5 flex items-start gap-3 shadow-sm">
            <CheckCircle2 size={24} className="text-blue-500 mt-0.5" />
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("menu.steps.refundPolicy")}
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 h-fit sticky top-6 shadow-lg shadow-gray-100/50">
          <h3 className=" text-2xl mb-6 text-charcoal">
            {t("menu.steps.orderSummary")}
          </h3>
          <div className="space-y-4">
            <div className="pb-6 border-b border-gray-100">
              <h4 className="font-semibold text-sm text-charcoal mb-3 uppercase tracking-wide">
                {t("menu.steps.buffetMenu")}
              </h4>
              <div className="text-sm text-gray-500 space-y-2">
                <p className="flex justify-between">
                  <span>{t("menu.steps.date")}</span>
                  <span className="font-medium text-gray-700">
                    {selectedDate
                      ? format(selectedDate, "dd/MM/yyyy")
                      : "Not selected"}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>{t("menu.steps.time")}</span>
                  <span className="font-medium text-gray-700">
                    {selectedTime || "Not selected"}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>{t("menu.steps.guests")}</span>
                  <span className="font-medium text-gray-700">20</span>
                </p>
              </div>
              <div className="flex justify-between mt-4 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                <span>{t("menu.steps.pricePerPerson")}</span>
                <span className="font-medium">45 SAR</span>
              </div>
              <div className="flex justify-between px-2 pt-2 text-sm text-gray-800 font-medium">
                <span>20 guests × 45 SAR</span>
                <span>900 SAR</span>
              </div>
            </div>

            <div className="pb-6 border-b border-gray-100 space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>{t("menu.steps.subtotal")}</span>
                <span>{900 + subtotal} SAR</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{t("menu.steps.vat")}</span>
                <span>{((900 + subtotal) * 0.15).toFixed(2)} SAR</span>
              </div>
              <div className="flex justify-between text-sm text-green-500 font-bold">
                <span>{t("menu.steps.deliveryLabel")}</span>
                <span>{t("menu.steps.free")}</span>
              </div>
            </div>

            <div className="flex justify-between items-end pt-2">
              <span className=" text-xl text-charcoal">
                {t("menu.steps.total")}
              </span>
              <div className="text-right">
                <span className="font-bold text-2xl text-[#B34545] block">
                  {(900 + subtotal * 1.15).toFixed(2)} SAR
                </span>
                <span className="text-xs text-gray-400 font-light">
                  {t("menu.steps.inclusiveVat")}
                </span>
              </div>
            </div>

            <button
              onClick={onComplete}
              className="w-full py-4 bg-green-500 text-white rounded-lg font-medium hover:bg-[#14452F] hover:shadow-lg hover:shadow-green-500/20 transition-all mt-6 text-lg"
            >
              {t("menu.steps.completePayment")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepPayment;

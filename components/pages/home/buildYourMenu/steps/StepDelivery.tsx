import React from "react";
import { Info, MapPin } from "lucide-react";

interface DeliveryDetails {
  street: string;
  city: string;
  area: string;
  whatsapp: string;
  email: string;
  note: string;
}

interface StepDeliveryProps {
  deliveryDetails: DeliveryDetails;
  setDeliveryDetails: (details: DeliveryDetails) => void;
}

const StepDelivery: React.FC<StepDeliveryProps> = ({
  deliveryDetails,
  setDeliveryDetails,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      <h1 className=" text-3xl md:text-5xl text-center mb-4 text-charcoal">
        Delivery Address
      </h1>
      <p className="text-gray-500 text-center mb-10 font-light">
        Where should we deliver your order and how many guests will be
        attending?
      </p>

      <div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/80 rounded-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8 text-green-500 bg-[#FEF2F2] p-4 rounded-xl w-fit">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <MapPin size={20} className="text-[#B34545]" />
          </div>
          <span className="text-[#B34545] font-semibold text-sm tracking-wide">
            Delivery Information
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Street Address *
            </label>
            <div className="relative group">
              <input
                type="text"
                value={deliveryDetails.street}
                onChange={(e) =>
                  setDeliveryDetails({
                    ...deliveryDetails,
                    street: e.target.value,
                  })
                }
                className="w-full pl-4 pr-10 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-300 group-hover:border-gray-300"
                placeholder="Building number, street name"
              />
              <MapPin
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors"
                size={20}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                City *
              </label>
              <input
                type="text"
                value={deliveryDetails.city}
                onChange={(e) =>
                  setDeliveryDetails({
                    ...deliveryDetails,
                    city: e.target.value,
                  })
                }
                className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
                placeholder="e.g., Riyadh"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-2">
                Area *
              </label>
              <input
                type="text"
                value={deliveryDetails.area}
                onChange={(e) =>
                  setDeliveryDetails({
                    ...deliveryDetails,
                    area: e.target.value,
                  })
                }
                className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
                placeholder="e.g., Al Malqa"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Whats-app Number *
            </label>
            <input
              type="text"
              value={deliveryDetails.whatsapp}
              onChange={(e) =>
                setDeliveryDetails({
                  ...deliveryDetails,
                  whatsapp: e.target.value,
                })
              }
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
              placeholder="Enter whats-app number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Email *
            </label>
            <input
              type="email"
              value={deliveryDetails.email}
              onChange={(e) =>
                setDeliveryDetails({
                  ...deliveryDetails,
                  email: e.target.value,
                })
              }
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Note
            </label>
            <textarea
              value={deliveryDetails.note}
              onChange={(e) =>
                setDeliveryDetails({
                  ...deliveryDetails,
                  note: e.target.value,
                })
              }
              rows={3}
              className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all placeholder:text-gray-300 resize-none"
              placeholder="e.g., Gate code, Special instructions"
            />
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
            <Info size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-blue-700 leading-relaxed">
              Free delivery within city limits. Additional charges may apply for
              remote areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepDelivery;

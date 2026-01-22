import React from "react";
import { useTranslation } from "react-i18next";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const { t } = useTranslation();
  const totalSteps = steps.length;
  // Calculate width percentage based on current step index relative to total intervals
  // Adjusted for side extensions: 10% padding on each side -> 80% effective width
  const effectiveWidth = 80;
  const sidePadding = 10;
  const progressPercentage =
    sidePadding + (currentStep / (totalSteps - 1)) * effectiveWidth;

  return (
    <div className="w-full px-2 md:px-0 mb-12 mt-4 relative">
      <div className="relative w-full">
        {/* Background Track */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-3 bg-gray-300 rounded-full -z-10" />

        {/* Foreground Progress Track */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-3 bg-green-500 rounded-full -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />

        {/* Steps Container with Padding */}
        <div className="flex items-center justify-between w-full px-[10%]">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative flex flex-col items-center">
                {/* Dot */}
                <div
                  className={`
                  w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white shadow-sm z-10 box-content
                 bg-green-500
                `}
                ></div>

                {/* Label */}
                <div className="absolute top-6 md:top-8 w-32 text-center left-1/2 -translate-x-1/2">
                  <span
                    className={`
                    text-[10px] md:text-sm font-medium tracking-wide leading-tight block
                    ${index <= currentStep ? "text-charcoal" : "text-gray-400"}
                  `}
                  >
                    {t(step)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stepper;

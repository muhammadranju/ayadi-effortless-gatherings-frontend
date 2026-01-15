import React from "react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  const totalSteps = steps.length;
  // Calculate width percentage based on current step index relative to total intervals
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100;

  return (
    <div className="w-full px-2 md:px-0 mb-12 mt-4">
      <div className="relative flex items-center justify-between w-full">
        {/* Background Track */}
        {/* Spans from the left edge of the first dot to the right edge of the last dot (roughly) 
            since dots are justified between edges. */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-2 md:h-3 bg-gray-200 rounded-full -z-10" />

        {/* Foreground Progress Track */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-2 md:h-3 bg-green-500 rounded-full -z-10 transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          return (
            <div key={index} className="relative flex flex-col items-center">
              {/* Dot */}
              <div
                className={`
                  w-6 h-6 md:w-8 md:h-8 rounded-full border-2 md:border-4 border-white shadow-sm z-10
                  bg-green-500
                `}
              ></div>

              {/* Label */}
              <div className="absolute top-8 md:top-10 w-20 md:w-32 text-center left-1/2 -translate-x-1/2">
                <span
                  className={`
                    text-[10px] md:text-sm font-semibold tracking-wide leading-tight block
                    ${index <= currentStep ? "text-charcoal" : "text-gray-500"}
                  `}
                >
                  {step}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;

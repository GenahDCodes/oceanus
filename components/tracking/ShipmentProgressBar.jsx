'use client';

import { getProgressStep } from '@/lib/utils';

const steps = ['Received', 'In Transit', 'Customs', 'Arrived', 'Delivered'];

export default function ShipmentProgressBar({ status }) {
  const activeStep = getProgressStep(status);

  return (
    <div className="bg-white border border-steel-200 rounded p-4 sm:p-5">
      <div className="grid grid-cols-5 gap-1 sm:gap-2 items-center">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const active = stepNumber <= activeStep;

          return (
            <div key={step} className="flex items-center gap-1 sm:gap-2">
              <div className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full ${active ? 'bg-ocean-500' : 'bg-steel-200'}`} />
              <p className={`text-[9px] sm:text-[11px] uppercase tracking-wide ${active ? 'text-navy-900 font-semibold' : 'text-steel-400'}`}>
                {step}
              </p>
              {index < steps.length - 1 && (
                <div className={`hidden md:block h-[2px] flex-1 ${active ? 'bg-ocean-500' : 'bg-steel-200'}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

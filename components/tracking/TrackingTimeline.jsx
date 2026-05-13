'use client';

import { formatDateTime } from '@/lib/utils';

export default function TrackingTimeline({ timeline }) {
  const sortedTimeline = [...timeline].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
    <div>
      {sortedTimeline.map((event, index) => {
        const isCompleted = event.status === 'completed';

        return (
          <div key={`${event.timestamp}-${index}`} className="relative pl-6 sm:pl-8 pb-6 sm:pb-8">
            {index !== sortedTimeline.length - 1 && (
              <div className="absolute left-2 sm:left-3 top-4 h-full border-l-2 border-steel-200" />
            )}

            <div
              className={`absolute left-0 sm:left-0 top-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full ${
                isCompleted ? 'bg-ocean-500' : 'bg-steel-300 border-2 border-steel-400'
              }`}
            />

            <div className="bg-white border border-steel-200 rounded p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                <p className="text-xs sm:text-sm font-semibold text-navy-900">{event.event}</p>
                <span className="font-mono text-[10px] sm:text-xs text-steel-400 whitespace-nowrap">{formatDateTime(event.timestamp)}</span>
              </div>
              <p className="text-[10px] sm:text-xs text-steel-400 mt-1">{event.location}</p>
              <p className="text-xs sm:text-sm text-navy-800 mt-1 sm:mt-2">{event.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

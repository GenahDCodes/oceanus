'use client';

import TrackingTimeline from './TrackingTimeline';

export default function ActivityFeed({ timeline }) {
  return (
    <div className="bg-white border border-steel-200 rounded p-6">
      <h3 className="text-base font-semibold text-navy-900 mb-5">Activity Feed</h3>
      <TrackingTimeline timeline={timeline} />
    </div>
  );
}

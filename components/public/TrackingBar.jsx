'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateTrackingCode } from '@/lib/utils';

export default function TrackingBar({ compact = false }) {
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const code = trackingCode.trim().toUpperCase();
    if (!code) {
      setError('Please enter a tracking code');
      return;
    }

    if (!validateTrackingCode(code)) {
      setError('Invalid format. Use: OCN-YYYY-XXXXX');
      return;
    }

    router.push(`/tracking/${code}`);
  };

  return (
    <div className={compact ? '' : 'bg-white border border-steel-200 rounded p-4 sm:p-5 shadow-sm'}>
      {!compact && <p className="text-xs sm:text-sm font-semibold text-navy-900 mb-3">Track Shipment</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-1">
          <input
            type="text"
            placeholder="Enter tracking code "
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="border border-steel-300 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-mono w-full rounded-t sm:rounded-l sm:rounded-tr-none focus:outline-none focus:ring-2 focus:ring-ocean-500"
          />
          <button
            type="submit"
            className="bg-navy-900 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold rounded-b sm:rounded-r sm:rounded-bl-none hover:bg-navy-800 transition-colors"
          >
            Track
          </button>
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </form>
    </div>
  );
}

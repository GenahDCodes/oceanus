'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/public/Navbar';
import Footer from '@/components/public/Footer';
import StatusBadge from '@/components/tracking/StatusBadge';
import ShipmentSummary from '@/components/tracking/ShipmentSummary';
import ShipmentProgressBar from '@/components/tracking/ShipmentProgressBar';
import ActivityFeed from '@/components/tracking/ActivityFeed';
import shipmentsData from '@/data/shipments.json';
import { getShipmentByCode, initShipments } from '@/lib/storage';

export default function TrackingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const code = useMemo(() => (params?.trackingCode || '').toUpperCase(), [params]);
  const [shipment, setShipment] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seeded = initShipments(shipmentsData);
    setShipment(getShipmentByCode(code, seeded));
    setReady(true);
  }, [code]);

  if (!ready) {
    return (
      <main className="min-h-screen bg-steel-100">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-white border border-steel-200 rounded p-6">
            <p className="text-sm text-steel-400">Loading shipment details...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!shipment) {
    return (
      <main className="min-h-screen bg-steel-100">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-white border border-steel-200 rounded p-8 text-center">
            <h2 className="font-display text-4xl font-bold text-navy-900">Shipment Not Found</h2>
            <p className="text-sm text-steel-400 mt-3">No shipment found for <span className="font-mono text-ocean-600">{code}</span>.</p>
            <button
              onClick={() => router.push('/')}
              className="mt-5 bg-navy-900 text-white px-4 py-2 text-sm font-semibold rounded hover:bg-navy-800 transition-colors"
            >
              Return Home
            </button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-steel-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white border border-steel-200 rounded p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <p className="font-mono text-sm text-ocean-600">{shipment.id}</p>
              <h1 className="font-display text-4xl font-bold text-navy-900 mt-1">{shipment.vessel}</h1>
            </div>
            <StatusBadge status={shipment.status} />
          </div>
        </div>

        <div className="mt-5">
          <ShipmentProgressBar status={shipment.status} />
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <ShipmentSummary shipment={shipment} />
          <ActivityFeed timeline={shipment.timeline} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

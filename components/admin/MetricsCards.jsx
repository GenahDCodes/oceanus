'use client';

import { Boxes, CheckCircle2, Route, TriangleAlert } from 'lucide-react';
import { getRegionFromRoute } from '@/lib/utils';

export default function MetricsCards({ shipments }) {
  const totalShipments = shipments.length;
  const delayedShipments = shipments.filter((shipment) => shipment.status === 'Delayed').length;
  const deliveredShipments = shipments.filter((shipment) => shipment.status === 'Delivered').length;
  const activeRoutes = new Set(shipments.map((shipment) => getRegionFromRoute(shipment))).size;

  const cards = [
    { label: 'Total Shipments', value: totalShipments, icon: Boxes },
    { label: 'Active Routes', value: activeRoutes, icon: Route },
    { label: 'Delayed', value: delayedShipments, icon: TriangleAlert },
    { label: 'Delivered', value: deliveredShipments, icon: CheckCircle2 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="bg-white border border-steel-200 rounded p-6 shadow-sm">
            <p className="text-sm text-steel-400">{card.label}</p>
            <div className="mt-3 flex items-end justify-between">
              <p className="text-3xl font-bold text-navy-900">{card.value}</p>
              <Icon className="w-5 h-5 text-ocean-500" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

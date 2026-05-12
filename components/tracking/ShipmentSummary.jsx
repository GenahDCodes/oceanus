'use client';

import shipmentsData from '@/data/shipments.json';
import { formatDate } from '@/lib/utils';

function normalizeLocation(location) {
  if (!location) return { label: 'N/A', port: 'N/A' };

  if (typeof location === 'string') {
    return { label: location, port: 'N/A' };
  }

  const { city, country, port } = location;
  const label = [city, country].filter(Boolean).join(', ') || 'N/A';

  return {
    label,
    port: port || 'N/A',
  };
}

function getEventDate(event) {
  return event?.timestamp || event?.date || null;
}

function normalizeShipment(rawShipment) {
  if (!rawShipment) return null;

  return {
    id: rawShipment.id || 'N/A',
    origin: normalizeLocation(rawShipment.origin),
    destination: normalizeLocation(rawShipment.destination),
    cargo: rawShipment.cargo || rawShipment.cargoDescription || 'N/A',
    weight: rawShipment.weight || 'N/A',
    container: rawShipment.container || rawShipment.containerNumber || 'N/A',
    vessel: rawShipment.vessel || rawShipment.vesselName || 'N/A',
    eta: rawShipment.eta || null,
    value: rawShipment.value || 'N/A',
    timeline: rawShipment.timeline || [],
  };
}

export default function ShipmentSummary({ trackingCode = '' }) {
  const shipment = normalizeShipment(
    shipmentsData.find((record) => record.id.toUpperCase() === trackingCode.toUpperCase())
  );

  if (!shipment) {
    return null;
  }

  const departureEvent = shipment.timeline?.find((event) => event.event === 'Shipment departed terminal');
  const departureDate = departureEvent ? new Date(getEventDate(departureEvent)) : new Date();
  const today = new Date();
  const daysInTransit = Math.floor((today - departureDate) / (1000 * 60 * 60 * 24));

  // Calculate days remaining
  const etaDate = shipment.eta ? new Date(shipment.eta) : new Date();
  const daysRemaining = Math.floor((etaDate - today) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-white border border-steel-200 rounded p-6">
      <h2 className="text-lg font-semibold text-navy-900 mb-6">Shipment Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-steel-400">Origin</p>
            <p className="text-sm font-semibold text-navy-900 mt-1">{shipment.origin.label}</p>
            <p className="text-xs text-steel-400">Port: {shipment.origin.port}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-steel-400">Destination</p>
            <p className="text-sm font-semibold text-navy-900 mt-1">{shipment.destination.label}</p>
            <p className="text-xs text-steel-400">Port: {shipment.destination.port}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-steel-400">ETA</p>
            <p className="text-sm font-semibold text-navy-900 mt-1">{shipment.eta ? formatDate(shipment.eta) : 'N/A'}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-steel-100 border border-steel-200 rounded p-3">
            <p className="text-xs text-steel-400">Tracking ID</p>
            <p className="font-mono text-sm text-ocean-600 mt-1">{shipment.id}</p>
          </div>
          <div className="bg-steel-100 border border-steel-200 rounded p-3">
            <p className="text-xs text-steel-400">Vessel</p>
            <p className="text-sm text-navy-900 mt-1">{shipment.vessel}</p>
          </div>
          <div className="bg-steel-100 border border-steel-200 rounded p-3">
            <p className="text-xs text-steel-400">Container</p>
            <p className="font-mono text-sm text-navy-900 mt-1">{shipment.container}</p>
          </div>
          <div className="bg-steel-100 border border-steel-200 rounded p-3">
            <p className="text-xs text-steel-400">Cargo</p>
            <p className="text-sm text-navy-900 mt-1">{shipment.cargo}</p>
          </div>
          <div className="bg-steel-100 border border-steel-200 rounded p-3 col-span-2">
            <p className="text-xs text-steel-400">Weight & Declared Value</p>
            <p className="text-sm text-navy-900 mt-1">{shipment.weight} / {shipment.value}</p>
          </div>
        </div>
      </div>

      {/* Transit Status */}
      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Days in Transit</p>
            <p className="text-4xl font-bold text-ocean-600">{daysInTransit}</p>
            <p className="text-gray-600 text-sm mt-2">Since shipment departure</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Estimated Days Remaining</p>
            <p className="text-4xl font-bold text-green-600">{daysRemaining}</p>
            <p className="text-gray-600 text-sm mt-2">To estimated delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}

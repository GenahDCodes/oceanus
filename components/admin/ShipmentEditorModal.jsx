'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function ShipmentEditorModal({ shipment, onClose, onSave }) {
  const [formData, setFormData] = useState({
    status: shipment?.status || 'in-transit',
    eta: shipment?.eta || '',
    cargoDescription: shipment?.cargoDescription || '',
    vesselName: shipment?.vesselName || '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(shipment.id, formData);
  };

  const statuses = ['processing', 'in-transit', 'delayed', 'out-for-delivery', 'delivered', 'customs-hold'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between p-6">
          <h2 className="text-xl font-bold text-navy-900">Edit Shipment</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Status */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status.replace('-', ' ').toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          {/* ETA */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">ETA</label>
            <input
              type="date"
              value={formData.eta.split('T')[0]}
              onChange={(e) => handleChange('eta', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
          </div>

          {/* Cargo Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo Description</label>
            <input
              type="text"
              value={formData.cargoDescription}
              onChange={(e) => handleChange('cargoDescription', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
          </div>

          {/* Vessel Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Vessel Name</label>
            <input
              type="text"
              value={formData.vesselName}
              onChange={(e) => handleChange('vesselName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

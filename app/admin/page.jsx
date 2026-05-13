'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import MetricsCards from '@/components/admin/MetricsCards';
import ShipmentTable from '@/components/admin/ShipmentTable';
import ShipmentEditorModal from '@/components/admin/ShipmentEditorModal';
import AnalyticsCharts from '@/components/admin/AnalyticsCharts';
import { getShipments, updateShipment, deleteShipment } from '@/lib/storage';
import shipmentData from '@/data/shipments.json';

export default function AdminDashboard() {
  const [shipments, setShipments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingShipment, setEditingShipment] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const loaded = getShipments();
    if (loaded.length === 0) {
      setShipments(shipmentData);
    } else {
      setShipments(loaded);
    }
  }, []);

  const handleEdit = (id) => {
    const shipment = shipments.find(s => s.id === id);
    setEditingShipment(shipment);
    setEditingId(id);
  };

  const handleSave = (id, updates) => {
    const updated = updateShipment(id, updates, shipmentData);
    if (updated) {
      const loaded = getShipments();
      setShipments(loaded);
      setEditingId(null);
      setEditingShipment(null);
    }
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this shipment?')) {
      deleteShipment(id, shipmentData);
      const loaded = getShipments();
      setShipments(loaded);
    }
  };

  return (
    <div className="flex h-screen bg-steel-100">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 overflow-auto">
        {/* Mobile menu button */}
        <div className="lg:hidden border-b border-steel-200 bg-white sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded hover:bg-steel-100 text-navy-900"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-base sm:text-xl font-bold text-navy-900">Operations Dashboard</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="hidden lg:block text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8">Operations Dashboard</h1>
          
          <MetricsCards shipments={shipments} />
          
          <div className="mt-6 sm:mt-8 bg-white border border-steel-200 rounded overflow-hidden">
            <ShipmentTable shipments={shipments} onEdit={handleEdit} onDelete={handleDelete} />
          </div>

          <div className="mt-6 sm:mt-8 bg-white border border-steel-200 rounded overflow-hidden p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold text-navy-900 mb-4 sm:mb-6">Analytics Overview</h2>
            <AnalyticsCharts shipments={shipments} />
          </div>
        </div>
      </main>

      {editingShipment && (
        <ShipmentEditorModal
          shipment={editingShipment}
          onSave={handleSave}
          onClose={() => {
            setEditingId(null);
            setEditingShipment(null);
          }}
        />
      )}
    </div>
  );
}

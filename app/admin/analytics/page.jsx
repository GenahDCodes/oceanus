'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import AnalyticsCharts from '@/components/admin/AnalyticsCharts';
import { getShipments } from '@/lib/storage';
import shipmentData from '@/data/shipments.json';

export default function AnalyticsPage() {
  const [shipments, setShipments] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const loaded = getShipments();
    if (loaded.length === 0) {
      setShipments(shipmentData);
    } else {
      setShipments(loaded);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="flex-1 overflow-auto">
        {/* Mobile menu button */}
        <div className="lg:hidden border-b border-steel-200 bg-white sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded hover:bg-steel-100 text-navy-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-navy-900 ml-4">Analytics</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="hidden lg:block text-3xl font-bold text-navy-900 mb-8">Analytics Overview</h1>
          
          <div className="bg-white border border-steel-200 rounded-lg overflow-hidden p-6">
            <AnalyticsCharts shipments={shipments} />
          </div>
        </div>
      </main>
    </div>
  );
}

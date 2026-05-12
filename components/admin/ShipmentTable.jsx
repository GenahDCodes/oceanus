'use client';

import { useState } from 'react';
import { Search, Edit2, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import StatusBadge from '@/components/tracking/StatusBadge';
import { formatDate } from '@/lib/utils';

export default function ShipmentTable({ shipments, onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('eta');
  const [sortOrder, setSortOrder] = useState('desc');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter shipments
  let filtered = shipments.filter(ship => {
    const originDisplay = `${ship.origin.city} ${ship.origin.country}`;
    const destDisplay = `${ship.destination.city} ${ship.destination.country}`;
    
    const matchesSearch =
      ship.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      originDisplay.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destDisplay.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || ship.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Sort shipments
  filtered.sort((a, b) => {
    let aVal = a[sortBy];
    let bVal = b[sortBy];

    if (sortBy === 'eta') {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }

    if (sortOrder === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedShipments = filtered.slice(startIdx, startIdx + itemsPerPage);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ field }) => {
    if (sortBy !== field) return <ChevronDown size={16} className="text-steel-300" />;
    return sortOrder === 'asc' ? (
      <ChevronUp size={16} className="text-ocean-600" />
    ) : (
      <ChevronDown size={16} className="text-ocean-600" />
    );
  };

  const statuses = ['all', 'Processing', 'In Transit', 'Customs Hold', 'Delayed', 'Out for Delivery', 'Delivered'];

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold text-navy-900 mb-6">Shipment Management</h2>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 bg-steel-50 px-4 py-3 rounded border border-steel-200">
          <Search size={18} className="text-steel-400" />
          <input
            type="text"
            placeholder="Search by ID, origin, destination..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-transparent flex-1 outline-none text-steel-600 placeholder-steel-400"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {statuses.map(status => (
            <button
              key={status}
              onClick={() => {
                setFilterStatus(status);
                setCurrentPage(1);
              }}
              className={`px-3 py-2 rounded text-xs font-semibold transition-colors ${
                filterStatus === status
                  ? 'bg-ocean-600 text-white'
                  : 'bg-steel-100 text-steel-600 hover:bg-steel-200'
              }`}
            >
              {status === 'all' ? 'All' : status}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-steel-200 rounded">
        <table className="w-full text-left text-sm">
          <thead className="bg-steel-50 border-b border-steel-200">
            <tr>
              <th
                className="px-4 py-3 font-semibold text-steel-600 uppercase tracking-widest text-xs cursor-pointer hover:bg-steel-100"
                onClick={() => handleSort('id')}
              >
                <div className="flex items-center gap-2">
                  Tracking ID
                  <SortIcon field="id" />
                </div>
              </th>
              <th className="px-4 py-3 font-semibold text-steel-600 uppercase tracking-widest text-xs">Route</th>
              <th
                className="px-4 py-3 font-semibold text-steel-600 uppercase tracking-widest text-xs cursor-pointer hover:bg-steel-100"
                onClick={() => handleSort('eta')}
              >
                <div className="flex items-center gap-2">
                  ETA
                  <SortIcon field="eta" />
                </div>
              </th>
              <th className="px-4 py-3 font-semibold text-steel-600 uppercase tracking-widest text-xs">Status</th>
              <th className="px-4 py-3 font-semibold text-steel-600 uppercase tracking-widest text-xs">Value</th>
              <th className="px-4 py-3 font-semibold text-steel-600 uppercase tracking-widest text-xs">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-steel-200">
            {paginatedShipments.map(ship => (
              <tr key={ship.id} className="hover:bg-steel-50 transition-colors">
                <td className="px-4 py-3">
                  <p className="font-mono font-bold text-navy-900 text-xs">{ship.id}</p>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-navy-900">{ship.origin.city}, {ship.origin.country}</p>
                  <p className="text-xs text-steel-400">→ {ship.destination.city}, {ship.destination.country}</p>
                </td>
                <td className="px-4 py-3 text-sm text-steel-600">{formatDate(ship.eta)}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={ship.status} />
                </td>
                <td className="px-4 py-3 font-semibold text-navy-900 text-sm">{ship.value}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(ship.id)}
                      className="p-2 hover:bg-ocean-100 text-ocean-600 rounded transition-colors"
                      title="Edit"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(ship.id)}
                      className="p-2 hover:bg-red-100 text-red-600 rounded transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-steel-400">
            Showing {startIdx + 1} to {Math.min(startIdx + itemsPerPage, filtered.length)} of {filtered.length}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded border border-steel-200 text-steel-600 hover:bg-steel-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Previous
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded font-semibold text-xs transition-colors ${
                    currentPage === page
                      ? 'bg-ocean-600 text-white'
                      : 'border border-steel-200 text-steel-600 hover:bg-steel-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded border border-steel-200 text-steel-600 hover:bg-steel-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {paginatedShipments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-steel-400 font-semibold">No shipments found</p>
        </div>
      )}
    </div>
  );
}

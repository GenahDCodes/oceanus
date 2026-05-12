'use client';

import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const generateChartData = (shipments) => {
  // Shipment status distribution
  const statusData = {
    'in-transit': 0,
    'delivered': 0,
    'delayed': 0,
    'processing': 0,
    'out-for-delivery': 0
  };

  shipments.forEach(ship => {
    if (statusData[ship.status] !== undefined) {
      statusData[ship.status]++;
    }
  });

  const pieData = Object.entries(statusData).map(([name, value]) => ({
    name: name.replace('-', ' '),
    value
  }));

  // Monthly shipments trend
  const monthlyData = [
    { month: 'Jan', shipments: 45, delivered: 42 },
    { month: 'Feb', shipments: 52, delivered: 48 },
    { month: 'Mar', shipments: 48, delivered: 45 },
    { month: 'Apr', shipments: 61, delivered: 58 },
    { month: 'May', shipments: shipments.length, delivered: shipments.filter(s => s.status === 'delivered').length }
  ];

  // Regional activity
  const regionData = [
    { region: 'Asia-Pacific', volume: 850 },
    { region: 'Europe', volume: 620 },
    { region: 'Americas', volume: 580 },
    { region: 'Middle East', volume: 340 },
    { region: 'Africa', volume: 210 }
  ];

  return { pieData, monthlyData, regionData };
};

const COLORS = ['#0284c7', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function AnalyticsCharts({ shipments }) {
  const { pieData, monthlyData, regionData } = generateChartData(shipments);

  return (
    <div className="space-y-8">
      {/* Shipment Status Distribution */}
      <div className="card p-8">
        <h3 className="text-xl font-bold text-navy-900 mb-6">Shipment Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Trend */}
      <div className="card p-8">
        <h3 className="text-xl font-bold text-navy-900 mb-6">Monthly Shipment Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
              labelStyle={{ color: '#1e293b' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="shipments"
              stroke="#0284c7"
              strokeWidth={2}
              dot={{ fill: '#0284c7', r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="delivered"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Regional Volume */}
      <div className="card p-8">
        <h3 className="text-xl font-bold text-navy-900 mb-6">Regional Shipment Volume</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="region" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
              labelStyle={{ color: '#1e293b' }}
            />
            <Bar dataKey="volume" fill="#0284c7" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <h3 className="text-xl font-bold text-navy-900 mb-4">Delivery Performance</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">On-Time Delivery Rate</p>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-bold text-green-600">98.7%</p>
                <p className="text-sm text-green-600 font-semibold mb-1">↑ 2.3%</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '98.7%' }}></div>
            </div>
          </div>
        </div>

        <div className="card p-8 bg-gradient-to-br from-blue-50 to-cyan-50">
          <h3 className="text-xl font-bold text-navy-900 mb-4">Operational Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Transit Time</span>
              <span className="font-bold text-navy-900">18.5 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Cargo Value</span>
              <span className="font-bold text-navy-900">$34.2M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer Satisfaction</span>
              <span className="font-bold text-navy-900">4.8/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

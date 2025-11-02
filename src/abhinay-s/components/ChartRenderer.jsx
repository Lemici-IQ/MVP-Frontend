import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#8B5CF6', '#EC4899', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export const ChartRenderer = ({ type, data }) => {
  if (!data || data.length === 0) return null;

  const renderChart = () => {
    switch (type) {
      case 'investment':
        // Bar chart for investment breakdown
        return (
          <div className="my-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              💰 Investment Breakdown
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => `₹${value}L`}
                />
                <Bar dataKey="value" fill="#8B5CF6" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'projections':
        // Line chart for financial projections
        return (
          <div className="my-6 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              📈 Financial Projections (Revenue vs Costs)
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => `₹${value}L`}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', r: 5 }} name="Revenue" />
                <Line type="monotone" dataKey="costs" stroke="#EF4444" strokeWidth={3} dot={{ fill: '#EF4444', r: 5 }} name="Costs" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      case 'roi':
        // Bar chart for ROI comparison
        return (
          <div className="my-6 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              🎯 ROI Comparison
            </h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" style={{ fontSize: '12px' }} label={{ value: 'ROI %', position: 'insideBottom', offset: -5 }} />
                <YAxis type="category" dataKey="name" stroke="#6b7280" style={{ fontSize: '12px' }} width={120} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => `${value}%`}
                />
                <Bar dataKey="value" fill="#10B981" radius={[0, 8, 8, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      default:
        return null;
    }
  };

  return renderChart();
};

// Parse chartdata from markdown code blocks
export const parseChartData = (content) => {
  const charts = [];
  
  // Parse investment breakdown
  const investmentMatch = content.match(/```chartdata-investment\n([\s\S]*?)\n```/);
  if (investmentMatch) {
    const lines = investmentMatch[1].trim().split('\n');
    const data = lines.map(line => {
      const [name, value] = line.split(',');
      return { name: name.trim(), value: parseFloat(value) };
    });
    charts.push({ type: 'investment', data });
  }

  // Parse financial projections
  const projectionsMatch = content.match(/```chartdata-projections\n([\s\S]*?)\n```/);
  if (projectionsMatch) {
    const lines = projectionsMatch[1].trim().split('\n');
    const data = lines.map(line => {
      const parts = line.split(',');
      return {
        month: parts[0].trim(),
        revenue: parseFloat(parts[2]),
        costs: parseFloat(parts[4])
      };
    });
    charts.push({ type: 'projections', data });
  }

  // Parse ROI comparison
  const roiMatch = content.match(/```chartdata-roi\n([\s\S]*?)\n```/);
  if (roiMatch) {
    const lines = roiMatch[1].trim().split('\n');
    const data = lines.map(line => {
      const [name, value] = line.split(',');
      return { name: name.trim(), value: parseFloat(value) };
    });
    charts.push({ type: 'roi', data });
  }

  return charts;
};

// Remove chartdata blocks from markdown content
export const removeChartDataBlocks = (content) => {
  return content
    .replace(/```chartdata-investment\n[\s\S]*?\n```/g, '')
    .replace(/```chartdata-projections\n[\s\S]*?\n```/g, '')
    .replace(/```chartdata-roi\n[\s\S]*?\n```/g, '');
};

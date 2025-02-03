import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sun", red: 60, yellow: 80 },
  { name: "Mon", red: 40, yellow: 20 },
  { name: "Tue", red: 50, yellow: 30 },
  { name: "Wed", red: 70, yellow: 50 },
  { name: "Thu", red: 30, yellow: 60 },
  { name: "Fri", red: 20, yellow: 40 },
  { name: "Sat", red: 60, yellow: 30 },
];

const CustomerMapChart = () => {
  return (
    <div className="p-4 rounded-2xl shadow-lg bg-white h-[430px] w-[456px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[24px] font-bold text-[#464255] ">Customer Map</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="red" fill="#ff4d4f" barSize={20} />
          <Bar dataKey="yellow" fill="#ffc107" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerMapChart;
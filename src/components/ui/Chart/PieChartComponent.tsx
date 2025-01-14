/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Tooltip, Legend, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = ({ data }: { data: any }) => {
  const paymentStatusColors = ["#4CAF50", "#FF9800", "#F44336"];

  // Check if all data values are zero
  const isDataEmpty = data?.every((item: { value: number }) => item?.value === 0);

  // Default data when there's no data or the values are 0
  const defaultData = [
    { name: "Pending", value: 1 },
    { name: "Advance", value: 0 },
    { name: "Complete", value: 0 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={isDataEmpty ? defaultData : data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {/* Color configuration for each slice */}
            <Cell key="confirmed" fill={paymentStatusColors[0]} />
            <Cell key="pending" fill={paymentStatusColors[1]} />
            <Cell key="cancelled" fill={paymentStatusColors[2]} />
          </Pie>
          {/* Tooltip component to show data on hover */}
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
            labelStyle={{ fontWeight: "bold", color: "#333" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* Message when data is empty */}
      {isDataEmpty && (
        <div
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#888",
            marginTop: "16px",
          }}
        >
          You have no payment status please booking first.
        </div>
      )}
    </div>
  );
};

export default PieChartComponent;

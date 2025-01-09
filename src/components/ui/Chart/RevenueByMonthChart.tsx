/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  const RevenueByMonthChart = ({ revenueByMonth }: { revenueByMonth: any }) => {
    console.log(revenueByMonth); // Debugging the data
    return (
      <div className="chart-container" style={{ width: "100%", height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueByMonth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default RevenueByMonthChart;
  


  
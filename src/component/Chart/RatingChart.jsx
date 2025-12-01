import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis ,ResponsiveContainer} from 'recharts';
const RatingChart = ({ratings}) => {
  
  return (
    <ResponsiveContainer width='100%' height={400} style={{border:'none'}}>
      <BarChart  data={ratings} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="count" fill="#FF8811" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingChart;
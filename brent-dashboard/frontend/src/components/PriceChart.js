// src/components/PriceChart.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ReferenceDot, ResponsiveContainer } from 'recharts';
import { fetchOilPrices, fetchChangePoints } from '../api';

const PriceChart = () => {
  const [data, setData] = useState([]);
  const [changePoints, setChangePoints] = useState([]);

  useEffect(() => {
    Promise.all([fetchOilPrices(), fetchChangePoints()]).then(([pricesRes, cpRes]) => {
      const prices = pricesRes.data.map(d => ({
        ...d,
        Date: new Date(d.Date).toISOString().split('T')[0],
        Price: +d.Price
      }));

      setData(prices);
      setChangePoints(cpRes.data);
    });
  }, []);

  return (
    <div>
      <h2>📈 Brent Oil Prices with Change Points</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="Date" hide />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="Price" stroke="#8884d8" dot={false} />
          {changePoints.map((cp, idx) => (
            <ReferenceDot key={idx} x={cp} y={data.find(d => d.Date === cp)?.Price} r={5} fill="red" />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;

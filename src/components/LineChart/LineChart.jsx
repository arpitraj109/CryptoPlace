import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      let dataCopy = [["Date", "Prices"]];
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          new Date(item[0]).toLocaleDateString().slice(0, -5), 
          item[1]
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  if (!historicalData || !historicalData.prices) {
    return <div>Loading data...</div>;
  }

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;

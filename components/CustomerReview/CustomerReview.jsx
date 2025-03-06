import React from 'react';
import './CustomerReview.css';
import Chart from 'react-apexcharts';

const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Review",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ['#fff'],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"], // Corrected color format
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime", // Fixed typo
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-20T00:00:00.000Z",
          "2018-09-21T00:00:00.000Z",
          "2018-09-22T00:00:00.000Z",
          "2018-09-23T00:00:00.000Z",
          "2018-09-24T00:00:00.000Z",
          "2018-09-25T00:00:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart series={data.series} options={data.options} type="area" />
    </div>
  );
};

export default CustomerReview;

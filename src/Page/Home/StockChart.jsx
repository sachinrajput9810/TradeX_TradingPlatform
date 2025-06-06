import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button"; // ensure this path is correct
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketChart } from "@/State/Coin/Action";
import { store } from "@/State/Store";

const StockChart = ({coinId}) => {

  const dispatch = useDispatch()
  const {coin} = useSelector(store => store)

  const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series (Daily)",
      label: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      label: "1 Week",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly Time Series",
      label: "1 Month",
      value: 30,
    },
    {
      keyword: "DIGITAL_CURRENCY_YEARLY",
      key: "Yearly Time Series",
      label: "1 Year",
      value: 365,
    }
  ];

  const [activeLabel, setActiveLabel] = useState(timeSeries[0]);

  

  const series = [
    {
      data: coin.marketChart.data
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#fff"],
    markers: {
      colors: ["#fff"],
      strokeColors: "#fff",
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };

  const handleActiveLabel = (label) => {
    setActiveLabel(label);
   }

   useEffect( () => {
    dispatch(fetchMarketChart({coinId , days:activeLabel.value  , jwt:localStorage.getItem('jwt')  }))
   }  , [dispatch, coinId, activeLabel  ])


 return (
  <div>
    <div className="flex gap-2 mb-4">
      {timeSeries.map((item) => (
        <Button
            onClick={() => handleActiveLabel(item)}
            key={item.label}
            variant = {activeLabel.label == item.label ? "" : "outline"}
            className={`border border-gray-300 hover:bg-white hover:text-black ${
              activeLabel === item.label ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {item.label}
          </Button>


      ))}
    </div>

    <div id="chart-timelines">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={450}
      />
    </div>
  </div>
);
}

export default StockChart;

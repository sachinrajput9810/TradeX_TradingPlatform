import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button"; // ensure this path is correct

const StockChart = () => {

  const [activeLabel, setActiveLabel] = useState("1 Day");

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
  ];

  const series = [
    {
      data: [
        [1746097209466, 96109.699924197],
        [1746101391732, 96193.46052079443],
        [1746105224895, 96401.97464348341],
        [1746108290727, 95925.84792324655],
        [1746112002291, 96749.27550848683],
        [1746115599128, 97029.26431397643],
        [1746119549704, 97176.44540379278],
        [1746122580814, 96792.53145567431],
        [1746126193844, 96867.06052048807],
        [1746130195033, 96463.63976230014],
        [1746133505352, 96468.24929711736],
        [1746137385915, 96533.24903530022],
        [1746140987843, 96346.4385297464],
        [1746144298777, 96465.09077322687],
        [1746148106540, 97068.51079800248],
        [1746151728436, 96864.53630852731],
        [1746155398700, 97058.54156171245],
        [1746158985690, 97183.42883942672],
        [1746162292257, 96951.50818834538],
        [1746165954675, 96715.25683617221],
        [1746169718328, 96702.21533716211],
        [1746173362935, 96471.938225181],
        [1746176694234, 96638.93322232095],
        [1746180281014, 96682.78962027833],
        [1746183898715, 96876.45142344802],
      ],
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


 return (
  <div>
    <div className="flex gap-2 mb-4">
      {timeSeries.map((item) => (
        <Button
            onClick={() => handleActiveLabel(item.label)}
            key={item.label}
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

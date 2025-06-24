import React, { useState, useEffect, useMemo } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  TimeScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  TimeScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartComponent({
  chartType,
  stationFilter,
  startTime,
  endTime,
  aggregated
}) {
  const [drinkData, setDrinkData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/drinks")
      .then((res) => res.json())
      .then((data) => {
        setDrinkData(data);
        console.log("Fetched drinkData:", data);
      })
      .catch((err) => {
        console.error("Error fetching drink data:", err);
      });
  }, []);

  const chartData = useMemo(() => {
    return formatChartData(drinkData, stationFilter, startTime, endTime, chartType, aggregated);
  }, [drinkData, stationFilter, startTime, endTime, chartType, aggregated]);

  function formatChartData(rawData, stationFilter, startTime, endTime, chartType, aggregated) {
    const stationDataMap = {};

    rawData.forEach((entry) => {
      const { station, drink_start, liters } = entry;

      if (stationFilter !== "all" && station !== stationFilter) return;

      const [datePart, timePart] = drink_start.split(" ");
      const [day, month, year] = datePart.split("/");
      const [hour, minute] = timePart.split(".");
      const dateObj = new Date(
        `${year}-${month}-${day}T${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:00`
      );

      if (
        (startTime && dateObj < new Date(startTime)) ||
        (endTime && dateObj > new Date(endTime))
      ) {
        return;
      }

      const dateKey = aggregated
        ? dateObj.toISOString().split("T")[0]
        : dateObj.toISOString();

      if (!stationDataMap[station]) {
        stationDataMap[station] = {};
      }

      if (!stationDataMap[station][dateKey]) {
        stationDataMap[station][dateKey] = 0;
      }

      stationDataMap[station][dateKey] += liters;
    });

    return {
      datasets: Object.keys(stationDataMap).map((station, index) => ({
        label: `Station ${station}`,
        data: Object.entries(stationDataMap[station]).map(([x, y]) => ({ x, y })),
        borderColor: index === 0 ? "blue" : "red",
        backgroundColor:
          index === 0 ? "rgba(0, 0, 255, 0.5)" : "rgba(255, 0, 0, 0.5)",
        fill: chartType === "line" ? false : true,
      })),
    };
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: false },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "dd/MM/yyyy HH:mm",
          displayFormats: {
            day: "dd/MM/yyyy",
            hour: "HH:mm dd/MM",
            minute: "HH:mm",
            month: "MMM yyyy",
          },
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Liters",
        },
      },
    },
  };

  return (
    <div
      className="w-full max-w-5xl mx-auto px-4"
      style={{ height: "450px" }}
    >
      {chartType === "bar" ? (
        <Bar key={chartType} data={chartData} options={options} />
      ) : (
        <Line key={chartType} data={chartData} options={options} />
      )}
    </div>
  );
}
import Root from "./root";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import FetchData from "../components/fetchDataFromAPI";
import "../index.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Population() {
  const { data } = FetchData();

  const countriesList = data.map(
    (country) => country.name || "Country name not available",
  );

  const populationList = data.map((country) => country.population || 0);

  const chartData = {
    labels: countriesList,
    datasets: [
      {
        label: "Population",
        data: populationList,
      },
    ],
  };

  const chartTitle = "Population of the countries in South America";

  return (
    <div className="flex flex-col items-center bg-slate-100 min-h-screen">
      <Root />
      <h1 className="p-6 m-6 w-full text-4xl text-slate-900 text-start font-bold">
        {chartTitle}
      </h1>
      <div className="p-6 m-6 w-full h-full min-w-xl min-h-xl max-w-6xl max-h-6xl">
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

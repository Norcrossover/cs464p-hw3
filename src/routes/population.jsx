import Root from "./root";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Countries from "../components/countries";
import "../index.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Population() {
  const { data } = Countries();

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
    <div className="flex flex-col items-center bg-slate-50 min-h-screen">
      <Root />
      <h1 className="p-6 m-6 w-1/4 text-2xl text-slate-900 text-center bg-slate-900 rounded-full text-cyan-200">
        {chartTitle}
      </h1>
      <div className="p-6 m-6 w-full max-w-6xl">
        <Bar data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

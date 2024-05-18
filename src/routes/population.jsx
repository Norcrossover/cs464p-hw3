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

  console.log("Countries List: " + countriesList);

  const populationList = data.map((country) => country.population || 0);

  console.log("Population List: " + populationList);

  const chartData = {
    labels: countriesList,
    datasets: [
      {
        label: "Population",
        data: populationList,
      },
    ],
  };

  return (
    <>
      <Root />
      <h1>Population of the different countries in South America.</h1>
      <Bar data={chartData} />;
    </>
  );
}

import Root from "./root";
import Card from "../components/Card";
import FetchData from "../components/fetchDataFromAPI";
import numeral from "numeral";
import Chart from "chart.js/auto";

export default function List() {
  const { data } = FetchData();
  return (
    <div className="min-h-screen bg-slate-700">
      <Root />
      <div className="grid grid-cols-4 gap-4 p-4 justify-evenly">
        {data.map((country) => (
          <Card
            key={country.id}
            imgSrc={country.flag_png}
            imgAlt={country.flag_alt}
          >
            <h2 className="mb-2 text-xl font-bold">
              {country.name || "Country name not available"}
            </h2>
            <div>
              <span className="font-semibold">Population:</span>{" "}
              <span>{numeral(country.population).format("0,0")}</span>
            </div>
            <div>
              <div className="font-semibold">
                Gross Domestic Product (billions):
              </div>
              <div className="inline-block">
                {country.gdp_billions
                  ? `$${numeral(country.gdp_billions).format("0,0")}`
                  : "GDP not available"}
              </div>
            </div>
            <h2 className="mt-2">Languages Spoken:</h2>
            <ul className="ml-5 list-disc">
              {Array.isArray(country.official_languages) ? (
                country.official_languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))
              ) : (
                <li>Languages not available</li>
              )}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}

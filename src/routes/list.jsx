import Root from "./root";
import Card from "../components/Card";
import FetchData from "../components/fetchDataFromAPI";
import numeral from "numeral";

export default function List() {
  const { data } = FetchData();
  return (
    <div className="min-h-screen bg-slate-700">
      <Root />
      <div className="grid gap-5 m-3 md:grid-cols-2 lg:grid-cols-3 p-11">
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
              <span className="font-semibold">
                Gross Domestic Product (billions):
              </span>
              <span className="inline">
                {country.gdp_billions
                  ? `$${numeral(country.gdp_billions).format("0,0")}`
                  : "GDP not available"}
              </span>
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

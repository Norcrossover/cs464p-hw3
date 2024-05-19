import Root from "./root";
import Card from "../components/Card";
import FetchData from "../components/fetchDataFromAPI";
import numeral from "numeral";

export default function List() {
  const { data } = FetchData();
  return (
    <div className="bg-slate-500">
      <Root />
      {/* <h1 className="p-10 text-2xl font-bold text-center">List of Countries</h1> */}
      <div className="p-4 flex flex-wrap justify-evenly gap-4">
        {data.map((country) => (
          <Card
            key={country.id}
            imgSrc={country.flag_png}
            imgAlt={country.flag_alt}
          >
            <h2 className="font-bold text-xl mb-2">
              {country.name || "Country name not available"}
            </h2>
            <p>
              <span className="font-semibold">Population:</span>{" "}
              <span>{numeral(country.population).format("0,0")}</span>
            </p>
            <p className="break-words">
              <span className="font-semibold">
                Gross Domestic Product (billions):
              </span>{" "}
              <span>
                {country.gdp_billions
                  ? `$${numeral(country.gdp_billions).format("0,0")}`
                  : "GDP not available"}
              </span>
            </p>
            <h2 className="mt-2">Languages Spoken:</h2>
            <ul className="list-disc ml-5">
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

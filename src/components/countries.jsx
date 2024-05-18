import axios from "axios";
import { useState, useEffect } from "react";

export default function Countries() {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";
  const [countrieslist, setCountriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(true);
        setCountriesList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.messge);
      });
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Data from the API</h2>
        </div>
      )}
      <p>Countries: {countrieslist}</p>
    </div>
  );
}

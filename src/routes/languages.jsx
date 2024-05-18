import Root from "./root";
import Countries from "../components/countries.jsx";

export default function Languages() {
  // const { data } = Countries();
  // const mapLanguages = (data) => {
  //   return data;
  // };

  return (
    <>
      <Root />
      <h1>
        This should returrn a pie chart of the languages spoken across the
        countries.
      </h1>
    </>
  );
}

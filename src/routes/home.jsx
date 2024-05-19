import Root from "./root";

export default function Home() {
  return (
    <div className="flex-col bg-slate-900 text-slate-100 min-h-screen">
      <Root />
      <h1 className="text-4xl font-bold p-5 m-5 text-center">
        Welcome to Homework 3 for Frontend Web Development!
      </h1>
      <section className="flex flex-col lg:flex-row m-5 p-5 bg-gradient-to-r from-pink-500 to-pink-900 rounded-md text-slate-100">
        <h2 className="text-2xl font-semibold text-white p-6 text-center break-words">
          Interested in information on a specific country, find it in the List
          tab.
        </h2>
        <img
          src="../public/ListPage.png"
          alt="The list page."
          className="h-[200px] justify-self-end"
        />
      </section>
      <section className="flex flex-col lg:flex-row m-5 p-5 bg-gradient-to-r from-cyan-500 to-cyan-900 rounded-md">
        <img
          src="../public/PopulationPage.png"
          alt="An image showing the Population tab"
          className="h-[200px]"
        />
        <h2 className="text-2xl font-semibold p-6 text-center">
          How about on information about the populations of the countries?
          Navigate to the population tab.
        </h2>
      </section>
      <section className="flex flex-col lg:flex-row m-5 p-5 bg-gradient-to-r from-slate-500 to-slate-900 rounded-md">
        <h2 className="text-2xl font-semibold p-6">
          Lastly, find a chart displaying information on the Languages spoken in
          these countries in the Languages tab.
        </h2>
        <img src="" alt="The Languages Chart Page" className="h-[200px]" />
      </section>
    </div>
  );
}

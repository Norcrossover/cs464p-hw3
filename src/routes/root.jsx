import { Link, Outlet } from "react-router-dom";

// export async function loader() {}

export default function Root() {
  return (
    <>
      <nav className="flex">
        <ul className="list-none justify-content-evenly">
          <li>
            <Link
              to={`/home`}
              className="no-underline text-slate-900 hover:text-slate-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/list`}
              className="no-underline text-slate-900 hover:text-slate-700"
            >
              List
            </Link>
          </li>
          <li>
            <Link
              to={`/population`}
              className="no-underline text-slate-900 hover:text-slate-700"
            >
              Population
            </Link>
          </li>
          <li>
            <Link
              to={`/languages`}
              className="no-underline text-slate-900 hover:text-slate-700"
            >
              Languages
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

import { Link } from "react-router-dom";

// export async function loader() {}

export default function Root() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/home`}>Home</Link>
        </li>
        <li>
          <Link to={`/list`}>List</Link>
        </li>
        <li>
          <Link to={`/population`}>Population</Link>
        </li>
        {/* <li>
          <Link to={`/info`}>Info</Link>
        </li> */}
        <li>
          <Link to={`/languages`}>Languages</Link>
        </li>
      </ul>
    </nav>
  );
}

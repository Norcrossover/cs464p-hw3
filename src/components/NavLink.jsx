import { Link } from "react-router-dom";

const NavLink = ({ link, title }) => (
  <li>
    <Link
      to={`/${link}`}
      className="no-underline text-cyan-200 hover:text-cyan-400"
    >
      {title}
    </Link>
  </li>
);

export default NavLink;

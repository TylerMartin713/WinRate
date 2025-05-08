import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/welcome">WinRate</Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">Profile</Link>
      </li>
      <li className="navbar-item">
        <Link to="/allposts">News Feed</Link>
      </li>
      {localStorage.getItem("winrate_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to="/login"
            onClick={() => {
              localStorage.removeItem("honey_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

import { NavLink } from "react-router-dom";

export const ProfileNav = () => {
  return (
    <ul className="flex justify-evenly ">
      <li>
        <NavLink to="userstats">
          <button className="text-white rounded-lg p-1 mr-5 bg-emerald-500 cursor-pointer">
            User Stats
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="media">
          <button className="text-white rounded-lg p-1 mr-5 bg-emerald-500 cursor-pointer">
            Media
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="liked">
          <button className="text-white rounded-lg p-1 mr-5 bg-emerald-500 cursor-pointer">
            Liked Posts
          </button>
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">
          <button className="text-white rounded-lg p-1 mr-5 bg-emerald-500 cursor-pointer">
            My Posts
          </button>
        </NavLink>
      </li>
    </ul>
  );
};

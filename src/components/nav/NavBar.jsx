// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <ul className="fixed top-0 left-0 w-full z-50 flex gap-2 p-2.5 m-0 bg-emerald-600 border-2 rounded ">
      <li className="flex-1 items-center justify-center gap-2 font-bold text-white">
        <Link className="flex items-center gap-2 rounded" to="/welcome">
          WinRate
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </li>
      <li className="flex-1 items-center justify-center gap-2 font-bold text-white">
        <Link className="flex items-center gap-2" to="/profile">
          Profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>
      </li>
      <li className="flex-1 items-center justify-center gap-2 font-bold text-white">
        <Link className="flex items-center gap-2" to="/allposts">
          News Feed
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
        </Link>
      </li>
      {/* <li className="flex-1">
        <NewPostButton />
      </li> */}
      {localStorage.getItem("winrate_user") ? (
        <li className="flex items-center justify-center gap-2 font-bold text-white">
          <Link
            className=""
            to="/login"
            onClick={() => {
              localStorage.removeItem("winrate_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};

// return (
//     <nav className="relative">
//       {/* Hamburger button */}
//       <button
//         className="md:hidden text-white absolute right-4 top-4"
//         onClick={() => setMenuOpen((open) => !open)}
//         aria-label="Toggle navigation"
//       >
//         <svg
//           className="w-8 h-8"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//           />
//         </svg>
//       </button>
//       {/* Nav links */}
//       <ul
//         className={`
//           fixed top-0 left-0 w-full z-50 bg-emerald-600 border-2 rounded
//           flex flex-col md:flex-row gap-2 p-2.5 m-0
//           ${menuOpen ? "block" : "hidden"} md:flex
//         `}
//       >
//         <li className="flex-1 items-center justify-center gap-2 font-bold text-white">
//           <Link className="flex items-center gap-2 rounded" to="/welcome">
//             WinRate
//             {/* ...svg... */}
//           </Link>
//         </li>
//         {/* ...other nav items... */}
//         {localStorage.getItem("winrate_user") ? (
//           <li className="flex items-center justify-center gap-2 font-bold text-white">
//             <Link
//               to="/login"
//               onClick={() => {
//                 localStorage.removeItem("winrate_user");
//                 navigate("/", { replace: true });
//               }}
//             >
//               Logout
//             </Link>
//             {/* ...svg... */}
//           </li>
//         ) : (
//           ""
//         )}
//       </ul>
//     </nav>
//   );

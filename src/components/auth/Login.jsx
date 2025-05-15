import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../Services/userService.jsx";

export const Login = () => {
  const [email, set] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0];
        localStorage.setItem(
          "winrate_user",
          JSON.stringify({
            id: user.id,
            isStaff: user.isStaff,
          })
        );

        navigate("/");
      } else {
        window.alert("Invalid login");
      }
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
        <form className="space-y-6" onSubmit={handleLogin}>
          <header className="mb-4 text-center">
            <h1 className="text-3xl font-bold text-emerald-600 mb-2">
              WinRate
            </h1>
            <h2 className="text-lg text-gray-700 font-semibold">
              Please sign in
            </h2>
          </header>
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(evt) => set(evt.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Email address"
              required
              autoFocus
            />
          </div>
          <button
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded shadow transition"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/register" className="text-emerald-600 hover:underline">
            Not a member yet?
          </Link>
        </div>
      </div>
    </div>
  );
  // return (
  //   <main className="container-login">
  //     <section>
  //       <form className="form-login" onSubmit={handleLogin}>
  //         <h1>WinRate</h1>
  //         <h2>Please sign in</h2>
  //         <fieldset>
  //           <div className="form-group">
  //             <input
  //               type="email"
  //               value={email}
  //               onChange={(evt) => set(evt.target.value)}
  //               className="form-control"
  //               placeholder="Email address"
  //               required
  //               autoFocus
  //             />
  //           </div>
  //         </fieldset>
  //         <fieldset>
  //           <div className="form-group">
  //             <button className="login-btn btn-info" type="submit">
  //               Sign in
  //             </button>
  //           </div>
  //         </fieldset>
  //       </form>
  //     </section>
  //     <section>
  //       <Link to="/register">Not a member yet?</Link>
  //     </section>
  //   </main>
  // );
};

import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome.jsx";
import { NavBar } from "../components/nav/NavBar.jsx";
import { AllPosts } from "../components/AllPost/AllPosts.jsx";
import { NewPostForm } from "../components/newPostForm/newPostForm.jsx";
import { useState, useEffect } from "react";
import { Profile } from "../components/profile/Profile.jsx";
export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const winrateUser = localStorage.getItem("winrate_user");
    const winrateUserObject = JSON.parse(winrateUser);

    setCurrentUser(winrateUserObject);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="allposts"
          element={<AllPosts currentUser={currentUser} />}
        />
        <Route path="newpost" element={<NewPostForm />} />
      </Route>
    </Routes>
  );
};

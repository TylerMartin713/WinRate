import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome.jsx";
import { NavBar } from "../components/nav/NavBar.jsx";
import { AllPosts } from "../components/AllPost/AllPosts.jsx";
import { NewPostForm } from "../components/newPostForm/newPostForm.jsx";
import { useState, useEffect } from "react";
import { Profile } from "../components/profile/Profile.jsx";
import { PostDetails } from "../components/PostDetails/PostDetails.jsx";
import { EditPostForm } from "../components/EditPostForm/EditPostForm.jsx";
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
        <Route path="profile" element={<Profile currentUser={currentUser} />} />
        <Route path="allposts">
          <Route index element={<AllPosts currentUser={currentUser} />} />
          <Route
            path=":postid"
            element={<PostDetails currentUser={currentUser} />}
          />
          <Route
            path="/allposts/editpost/:id"
            element={<EditPostForm currentUser={currentUser} />}
          />
        </Route>
        <Route
          path="newpost"
          element={<NewPostForm currentUser={currentUser} />}
        />
        {/* <Route
          path="editpost"
          element={<EditPostForm currentUser={currentUser} />}
        /> */}
      </Route>
    </Routes>
  );
};

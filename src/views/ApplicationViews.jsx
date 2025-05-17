import { Outlet, Route, Routes } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome.jsx";
import { NavBar } from "../components/nav/NavBar.jsx";
import { AllPosts } from "../components/AllPost/AllPosts.jsx";
import { NewPostForm } from "../components/newPostForm/newPostForm.jsx";
import { useState, useEffect } from "react";
import { Profile } from "../components/profile/Profile.jsx";
import { PostDetails } from "../components/PostDetails/PostDetails.jsx";
import { EditPostForm } from "../components/EditPostForm/EditPostForm.jsx";
import { UserPosts } from "../components/profile/UserPosts.jsx";
import { LikedPosts } from "../components/profile/LikedPosts.jsx";
import { UserMedia } from "../components/profile/UserMedia.jsx";
import { UserStats } from "../components/profile/UserStats.jsx";
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
        {/*-======================    WELCOME ROUTE    ========================-*/}
        <Route index element={<Welcome />} />
        <Route path="welcome" element={<Welcome />} />

        {/*-=====================    PROFILE ROUTE    ========================-*/}
        <Route path="profile" element={<Profile currentUser={currentUser} />}>
          <Route index element={<UserPosts />} />
          <Route path="userstats" element={<UserStats />} />
          <Route
            path="media"
            element={<UserMedia currentUser={currentUser} />}
          />
          <Route
            path="liked"
            element={<LikedPosts currentUser={currentUser} />}
          />
        </Route>
        {/* <Route path="profile">
          <Route index element={<Profile currentUser={currentUser} />} />
          <Route path="userstats" element={<p>USER STATS</p>} />
          <Route path="media" element={<p>MEDIA</p>} />
          <Route path="liked" element={<p>LIKED POSTS</p>} />
        </Route> */}

        {/*-===============    ALL POSTS ROUTE    ==========================-*/}
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

        {/*-===============    NEW POST ROUTE    ================================-*/}
        <Route
          path="newpost"
          element={<NewPostForm currentUser={currentUser} />}
        />
      </Route>
    </Routes>
  );
};

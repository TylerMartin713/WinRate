import { useEffect, useState } from "react";
import { GetAllPost } from "../../Services/allPostService.jsx";
import { GetLikes } from "../../Services/GetLikesService.jsx";
import { GetUserById } from "../../Services/GetUserProfileStats.jsx";
import { Outlet } from "react-router-dom";
import { ProfileNav } from "./ProfileNav.jsx";
import { EditProfile } from "./EditProfile.jsx";

export const Profile = ({ currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState([]);
  const [user, setUser] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    GetAllPost().then(setPosts);
    GetLikes().then(setLikes);

    if (currentUser.id) {
      GetUserById(currentUser.id).then(setUser);
    }
  }, [currentUser.id]);

  // const handleBio = () => {
  //   //If user has a bio then navigate to the editBio
  //   if (user.profileBio !== "") {
  //     navigate("/editbio");
  //   }
  //   //If user doesnt have a bio then navigate to the addBio
  //   else {
  //     navigate("/addbio");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gray-900">
      <article className="w-full max-w-3xl p-8  rounded-xl shadow-2xl">
        <header className="flex justify-between font-bold text-white border-b-2 border-emerald-500">
          <div className="flex">
            {user.fullName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-2 text-emerald-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <div className="flex">
            {user.email}
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </button>
          </div>
        </header>
        {/* This is the USER BIO */}
        <section className="flex justify-between border-b-2 border-emerald-500">
          <div className=" flex text-white w-full mt-5 ">{user.profileBio}</div>
          <div className="flex">
            <button
              onClick={() => setModalOpen(true)}
              className="cursor-pointer "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mt-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <EditProfile
              user={user}
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </div>
        </section>
        {/*-==========================    PROFILE NAV BUTTONS MODUILE    =======================-*/}
        <section className="flex justify-evenly mt-5">
          <ProfileNav />
        </section>

        {/* =============== Users Posts NEEDS TO BE NESTED CONTENT ======================== */}
        <section className="mt-5">
          {/* {userPosts.map((post) => {
            return (
              <Post
                key={post.id}
                post={post}
                currentUser={currentUser}
                likes={likes}
              />
            );
          })} */}
          <Outlet context={{ posts, likes, currentUser }} />
        </section>
      </article>
    </div>
  );
};

// -===================== ALL MY BUTTONS JUST IN CASE! ==========================-
{
  /* <button className="text-white rounded-lg p-1 bg-emerald-500 mt-5 cursor-pointer">
            User Stats
          </button>
          <button className="text-white rounded-lg p-1 bg-emerald-500 mt-5 cursor-pointer">
            Media
          </button>
          <button className="text-white rounded-lg p-1 bg-emerald-500 mt-5 cursor-pointer">
            Likes
          </button> */
}

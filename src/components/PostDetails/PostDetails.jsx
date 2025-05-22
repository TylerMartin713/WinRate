import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPostById } from "../../Services/GetPostById.jsx";
import { DeletePost } from "../../Services/deletePost.jsx";

import { LikeButtonPost } from "../Buttons/LikePostButton.jsx";
import { GetLikes } from "../../Services/GetLikesService.jsx";
export const PostDetails = ({ currentUser }) => {
  const [postDetails, setPostDetails] = useState([]);
  const [likes, setLikes] = useState([]);
  const navigate = useNavigate();
  const { postid } = useParams();

  useEffect(() => {
    GetLikes().then(setLikes);
  }, []);

  useEffect(() => {
    GetPostById(postid).then(setPostDetails);
  }, [postid]);

  const handleDeletePost = (id) => {
    DeletePost(id).then(() => {
      navigate(`/allposts`);
    });
  };

  const handleEditPost = (postid) => {
    navigate(`/allposts/editpost/${postid}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative bg-white rounded-xl shadow-lg shadow-emerald-300 p-3 w-full max-w-2xl">
        {/* Profile picture in top right */}
        {postDetails.user?.profilePicture && (
          <img
            src={postDetails.user.profilePicture}
            alt={postDetails.user.fullName}
            className="absolute top-1 right-1 w-16 h-16 rounded-lg object-cover shadow-md border-2 border-emerald-500"
          />
        )}
        <header className="mb-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {postDetails.title}
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="text-lg text-gray-700 font-semibold">
              {postDetails.user?.fullName}
              <span className="ml-2 text-sm text-gray-500 font-normal">
                {postDetails.ticker?.symbol && `- ${postDetails.ticker.symbol}`}
              </span>
            </div>
          </div>
        </header>
        <section className="mb-4">
          <div className="text-gray-700 mb-2">
            <span className="font-semibold">Description:</span>{" "}
            {postDetails.description}
          </div>
        </section>
        <footer className="flex flex-wrap justify-between gap-3 mt-10">
          <div className="text-gray-500 text-sm content-end">
            <span className="font-semibold">Posted:</span>{" "}
            {postDetails.datePosted}
          </div>
          <div className="flex ">
            {/* -===============    DELETE BUTTON ========================-*/}
            {(currentUser.id === postDetails.userId || currentUser.isStaff) && (
              <button
                className="bg-amber-500 hover:bg-amber-600 shadow-gray-700 text-white font-bold mr-2 px-4 py-2 rounded shadow"
                onClick={() => handleDeletePost(postDetails.id)}
              >
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
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            )}

            {/* ===============    EDIT BUTTON ========================*/}
            {currentUser.id === postDetails.userId && !currentUser.isStaff && (
              <button
                className="bg-emerald-500 hover:bg-emerald-600 shadow-gray-700 text-white font-bold mr-2 px-4 py-2 rounded shadow"
                onClick={() => handleEditPost(postDetails.id)}
              >
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
            )}

            <div>
              {currentUser.id !== postDetails.userId && (
                <LikeButtonPost
                  currentUser={currentUser}
                  postid={postid}
                  likes={likes}
                />
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

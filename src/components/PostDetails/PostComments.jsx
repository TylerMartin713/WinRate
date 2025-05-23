import { useEffect, useState } from "react";
import { GetComments } from "../../Services/GetComments.jsx";
import { AddNewComment } from "../../Services/AddNewComment.jsx";

export const PostComments = ({ postid, currentUser }) => {
  const [postComments, setPostComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    if (postid) {
      GetComments(postid).then(setPostComments);
    }
  }, [postid]);

  const handleNewComment = (event) => {
    event.preventDefault();
    const newUserComment = {
      userId: currentUser.id,
      postId: postid,
      description: newComment,
      datePosted: new Date().toISOString().slice(0, 10),
    };
    AddNewComment(newUserComment).then(() => {
      setNewComment("");
      GetComments(postid).then(setPostComments);
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <section className="flex justify-center text-white text-2xl mb-5">
        <label>New Comment</label>
        <form onSubmit={handleNewComment}>
          <input
            type="text"
            className="ml-5 border border-emerald-500 rounded bg-emerald-900"
            placeholder="add a comment"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <button className="ml-5 rounded p-1 bg-emerald-500">Submit</button>
        </form>
      </section>
      {postComments.length > 0 ? (
        postComments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-xl shadow-lg p-6 mb-4 flex items-start border border-emerald-500"
          >
            {comment.user.profilePicture && (
              <img
                src={comment.user.profilePicture}
                alt={comment.user.fullName}
                className="w-16 h-16 rounded-lg object-cover shadow-md border-2 border-emerald-500 mr-4"
              />
            )}
            <div className="flex-1">
              <header className="font-bold text-gray-900 mb-1">
                {comment.user.fullName}
              </header>
              <div className="text-gray-800">{comment.description}</div>
            </div>
            <footer className="text-gray-500">
              {comment.datePosted}
              {currentUser.id === comment.userId ? (
                <button className="bg-amber-500 hover:bg-amber-600 shadow-gray-700 text-white font-bold p-1 rounded shadow">
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
              ) : (
                ""
              )}
            </footer>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No Comments</div>
      )}
    </div>
  );
};

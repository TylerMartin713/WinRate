import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPostById } from "../../Services/GetPostById.jsx";
import { DeletePost } from "../../Services/deletePost.jsx";
import { EditPost } from "../../Services/editPosts.jsx";

export const PostDetails = ({ currentUser }) => {
  const [postDetails, setPostDetails] = useState([]);
  const navigate = useNavigate();
  const { postid } = useParams();

  useEffect(() => {
    GetPostById(postid).then(setPostDetails);
  }, [postid]);

  const handleDeletePost = (id) => {
    DeletePost(id).then(() => {
      navigate(`/allposts`);
    });
  };

  const handleEditPost = () => {
    navigate(`/editpost`);
  };
  return (
    <article>
      <header>
        <h1>{postDetails.title}</h1>
      </header>
      <section>
        <div>
          Post by {postDetails.user?.fullName}
          <span>- {postDetails.ticker?.symbol}</span>
        </div>
      </section>
      <section>
        <div>Post Description: </div>
        {postDetails.description}
      </section>

      <section>
        <div>Post Date</div>
        {postDetails.datePosted}
      </section>
      <footer>
        <div>
          {currentUser.id === postDetails.userId || currentUser.isStaff ? (
            <button
              onClick={() => {
                handleDeletePost(postDetails.id);
              }}
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
        <div>
          {currentUser.id === postDetails.userId && !currentUser.isStaff ? (
            <button
              onClick={() => {
                handleEditPost(postDetails.id);
              }}
            >
              Edit
            </button>
          ) : (
            ""
          )}
        </div>
        <div>
          <button>Like Button</button>
        </div>
      </footer>
    </article>
  );
};

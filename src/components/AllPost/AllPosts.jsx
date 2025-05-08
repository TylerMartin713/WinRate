import { useEffect, useState } from "react";
import { GetAllPost } from "../../Services/allPostService.jsx";
import { DeletePost } from "../../Services/deletePost.jsx";
// import { useNavigate } from "react-router-dom";
// import { EditPost } from "../../Services/editPosts.jsx";
import { Post } from "./Post.jsx";
import "./AllPosts.css";

export const AllPosts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);
  // const navigate = useNavigate();
  const getAndSetPosts = () => {
    GetAllPost().then(setAllPosts);
  };

  useEffect(() => {
    GetAllPost().then(setAllPosts);
  }, []);

  const handleDeletePost = (id) => {
    DeletePost(id).then(() => {
      getAndSetPosts();
    });
  };

  const handleEditPost = () => {};

  return (
    <article className="">
      <section>
        <div>
          <button>New Post</button>
        </div>
      </section>
      <section>
        {allPosts.map((post) => {
          return (
            <Post
              handleEditPost={handleEditPost}
              handleDeletePost={handleDeletePost}
              currentUser={currentUser}
              post={post}
              key={post.id}
            />
          );
        })}
      </section>
    </article>
  );
};

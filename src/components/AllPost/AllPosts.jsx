import { useEffect, useState } from "react";
import { GetAllPost } from "../../Services/allPostService.jsx";
import { Link, useNavigate } from "react-router-dom";
import { Post } from "./Post.jsx";
import "./AllPosts.css";

export const AllPosts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);

  const navigate = useNavigate();

  // const getAndSetPosts = () => {
  //   GetAllPost().then(setAllPosts);
  // };

  useEffect(() => {
    GetAllPost().then(setAllPosts);
  }, []);

  const handleNewPost = () => {
    navigate("/newpost");
  };
  return (
    <article className="">
      <section>
        <div>
          <button onClick={handleNewPost}>New Post</button>
        </div>
      </section>
      <section>
        {allPosts.map((post) => {
          return (
            <Link to={`/allposts/${post.id}`} key={post.id}>
              <Post
                handleNewPost={handleNewPost}
                currentUser={currentUser}
                post={post}
                key={post.id}
              />
            </Link>
          );
        })}
      </section>
    </article>
  );
};

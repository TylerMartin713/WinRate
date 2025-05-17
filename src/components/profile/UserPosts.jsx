import { useOutletContext } from "react-router-dom";
import { Post } from "../AllPost/Post.jsx";

export const UserPosts = () => {
  const { posts, likes, currentUser } = useOutletContext();
  const userPosts = posts.filter((post) => post.userId === currentUser.id);

  return userPosts.length === 0 ? (
    <div className="text-white">No posts yet.</div>
  ) : (
    userPosts.map((post) => (
      <Post key={post.id} post={post} currentUser={currentUser} likes={likes} />
    ))
  );
};

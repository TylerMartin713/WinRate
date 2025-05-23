import { useOutletContext } from "react-router-dom";
import { Post } from "../AllPost/Post.jsx";
import { useEffect, useState } from "react";
import { GetLikesByUserId } from "../../Services/GetLikesService.jsx";

export const LikedPosts = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const { posts, likes, currentUser } = useOutletContext();
  const likedPostIds = likedPosts.map((like) => like.postId);
  const userLikedPosts = posts.filter((post) => likedPostIds.includes(post.id));

  useEffect(() => {
    if (currentUser.id) {
      GetLikesByUserId(currentUser.id).then((data) => {
        setLikedPosts(Array.isArray(data) ? data : []);
      });
    }
  }, [currentUser.id]);

  return userLikedPosts.length === 0 ? (
    <div className="text-white">No posts liked yet.</div>
  ) : (
    userLikedPosts.map((post) => (
      <Post key={post.id} post={post} currentUser={currentUser} likes={likes} />
    ))
  );
};

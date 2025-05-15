import { useNavigate } from "react-router-dom";

export const NewPostButton = () => {
  const navigate = useNavigate();
  const handleNewPost = () => {
    navigate("/newpost");
  };
  return (
    <div>
      <button
        className=" bg-emerald-400 border-emerald-600 p-2 mr-5 rounded-2xl cursor-pointer"
        onClick={handleNewPost}
      >
        New Post
      </button>
    </div>
  );
};

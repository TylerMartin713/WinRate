import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllTickers } from "../../Services/getAllTickers.jsx";
import { EditPost } from "../../Services/editPosts.jsx";
import { GetPostByIdEditForm } from "../../Services/GetPostById.jsx";

import "./EditPostForm.css";

export const EditPostForm = ({ currentUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTicker, setSelectedTicker] = useState("");
  const [tickers, setTickers] = useState([]);
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    GetPostByIdEditForm(id).then(setPost);
  }, [id]);

  useEffect(() => {
    GetAllTickers().then(setTickers);
  }, []);

  const handleSubmitPost = () => {
    const updatePost = {
      ...post,
      userId: currentUser.id,
      title: title,
      description: description,
      tickerId: Number(selectedTicker),
      datePosted: new Date(),
    };
    EditPost(id, updatePost)
      .then(() => {
        console.log("You updated your post!");
      })
      .then(navigate("/allposts"));
  };

  return (
    <article className="new-post-form-container">
      <header>
        <h1>Edit your post: {post.id}</h1>
      </header>
      <form className="new-post-form">
        <section>
          <label>Post: Title</label>
          <input
            className=""
            type="text"
            placeholder="Add title"
            required
            defaultValue={post.title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </section>
        <section>
          <label>Post: Body</label>
          <textarea
            className=""
            type="text"
            placeholder="post description"
            required
            defaultValue={post.description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </section>
        <section>
          <select
            required
            onChange={(event) => {
              setSelectedTicker(event.target.value);
            }}
          >
            <option defaultValue={post.ticker?.symbol}>
              {post.ticker?.symbol}
            </option>
            {tickers.map((ticker) => {
              return (
                <option key={ticker.id} value={ticker.id}>
                  {ticker.symbol}
                </option>
              );
            })}
          </select>
        </section>
        <button onClick={handleSubmitPost}>Edit Post</button>
      </form>
    </article>
  );
};

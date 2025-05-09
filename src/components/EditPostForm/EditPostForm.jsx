import { useEffect, useState } from "react";
import { GetAllTickers } from "../../Services/getAllTickers.jsx";
import { useNavigate } from "react-router-dom";
import { EditPost } from "../../Services/editPosts.jsx";

import "./EditPostForm.css";

export const EditPostForm = ({ currentUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("Will this work");
  const [selectedTicker, setSelectedTicker] = useState("");
  const [tickers, setTickers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    GetAllTickers().then(setTickers);
  }, []);

  const handleSubmitPost = (event) => {
    event.preventDefault();
    const editPost = {
      userId: currentUser.id,
      title: title,
      description: description,
      tickerId: Number(selectedTicker),
      datePosted: new Date(),
    };
    EditPost(editPost)
      .then(() => {
        console.log("You updated your post!");
      })
      .then(navigate("/allposts"));
  };

  return (
    <article className="new-post-form-container">
      <header>
        <h1>Edit your post</h1>
      </header>
      <form className="new-post-form">
        <section>
          <label>Post: Title</label>
          <input
            className=""
            type="text"
            placeholder="Add title"
            required
            value={title}
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
            value={description}
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
            <option>Pick a ticker</option>
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

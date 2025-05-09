import { useEffect, useState } from "react";
import { createNewPost } from "../../Services/newPostService.jsx";
import { useNavigate } from "react-router-dom";
import { GetAllTickers } from "../../Services/getAllTickers.jsx";
import "./newPostForm.css";

export const NewPostForm = ({ currentUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTicker, setSelectedTicker] = useState("");
  const [tickers, setTickers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetAllTickers().then(setTickers);
  }, []);
  const handleSubmitPost = (event) => {
    event.preventDefault();
    const newPost = {
      userId: currentUser.id,
      title: title,
      description: description,
      tickerId: Number(selectedTicker),
      datePosted: new Date(),
    };
    createNewPost(newPost)
      .then(() => {
        console.log("New post added!");
      })
      .then(navigate("/allposts"));
  };

  return (
    <article className="new-post-form-container">
      <header>
        <h1>Add a new post</h1>
      </header>
      <form className="new-post-form">
        <section>
          <label>Post: Title</label>
          <input
            className=""
            type="text"
            placeholder="add a title"
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
            {tickers.map((ticker) => {
              return (
                <option key={ticker.id} value={ticker.id}>
                  {ticker.symbol}
                </option>
              );
            })}
          </select>
        </section>
        <button onClick={handleSubmitPost}>Add Post</button>
      </form>
    </article>
  );
};

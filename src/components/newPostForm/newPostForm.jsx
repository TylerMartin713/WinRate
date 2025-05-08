import { useState } from "react";
import { createNewPost } from "../../Services/newPostService.jsx";
import "./newPostForm.css";

export const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const resetTitleAndBody = () => {
    setTitle("");
    setBody("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: title,
      body: body,
      postDate: new Date(),
    };
    createNewPost(newPost)
      .then(() => {
        console.log("New post added!");
      })
      .then(() => {
        resetTitleAndBody();
      });
  };
  return (
    <div className="new-post-form-container">
      <article>
        <header>
          <h2>Add a new post</h2>
        </header>
        <form className="new-post-form">
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
          <label>Post: Body</label>
          <textarea
            className=""
            type="text"
            placeholder="post description"
            required
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
          <button onClick={handleSubmit}>Add Post</button>
        </form>
      </article>
    </div>
  );
};

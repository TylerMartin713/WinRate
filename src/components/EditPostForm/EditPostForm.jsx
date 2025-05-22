import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllTickers } from "../../Services/getAllTickers.jsx";
import { EditPost } from "../../Services/editPosts.jsx";
import { GetPostByIdEditForm } from "../../Services/GetPostById.jsx";

export const EditPostForm = ({ currentUser }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTicker, setSelectedTicker] = useState("");
  const [tickers, setTickers] = useState([]);
  const [post, setPost] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    GetPostByIdEditForm(id).then((postData) => {
      setPost(postData);
      setTitle(postData.title);
      setDescription(postData.description);
      setSelectedTicker(postData.tickerId);
    });
  }, [id]);

  useEffect(() => {
    GetAllTickers().then(setTickers);
  }, []);

  const handleSubmitPost = (event) => {
    event.preventDefault();
    const updatePost = {
      ...post,
      userId: currentUser.id,
      title: title,
      description: description,
      tickerId: Number(selectedTicker),
      datePosted: new Date().toISOString().slice(0, 10),
    };
    EditPost(id, updatePost)
      .then(() => {
        console.log("You updated your post!");
      })
      .then(navigate("/allposts"));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <article className="bg-gray-700 rounded-xl shadow-2xl p-8 max-w-xl w-full">
        <form className="space-y-6" onSubmit={handleSubmitPost}>
          <header className="mb-4">
            <h1 className="text-2xl font-bold text-white text-center">
              Edit your post
            </h1>
          </header>
          <section>
            <label className="block text-white font-semibold mb-1">
              Post Title
            </label>
            <input
              className="w-full px-3 py-2 border text-white border-emerald-500 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="Add title"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </section>
          <section>
            <label className="block text-white font-semibold mb-1">
              Post Body
            </label>
            <textarea
              className="w-full px-3 py-2 border text-white border-emerald-500 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
              placeholder="Post description"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
            />
          </section>
          <section>
            <label className="block text-white font-semibold mb-1">
              Ticker
            </label>
            <select
              className="w-full px-3 py-2 border text-white bg-gray-700 border-emerald-500 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
              value={selectedTicker}
              onChange={(event) => setSelectedTicker(event.target.value)}
            >
              <option value="" disabled>
                Select a ticker
              </option>
              {tickers.map((ticker) => (
                <option key={ticker.id} value={ticker.id}>
                  {ticker.symbol}
                </option>
              ))}
            </select>
          </section>
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded shadow transition"
          >
            Save Changes
          </button>
        </form>
      </article>
    </div>
  );
  // return (
  //   <article className="">
  //     <form className="new-post-form" onSubmit={handleSubmitPost}>
  //       <header>
  //         <h1>Edit your post: {post.id}</h1>
  //       </header>
  //       <section>
  //         <label>Post: Title</label>
  //         <input
  //           className=""
  //           type="text"
  //           placeholder="Add title"
  //           required
  //           value={title}
  //           onChange={(event) => {
  //             setTitle(event.target.value);
  //           }}
  //         />
  //       </section>
  //       <section>
  //         <label>Post: Body</label>
  //         <textarea
  //           className=""
  //           type="text"
  //           placeholder="post description"
  //           required
  //           value={description}
  //           onChange={(event) => {
  //             setDescription(event.target.value);
  //           }}
  //         />
  //       </section>
  //       <section>
  //         <label>Post: Ticker</label>
  //         <select
  //           required
  //           value={selectedTicker}
  //           onChange={(event) => {
  //             setSelectedTicker(event.target.value);
  //           }}
  //         >
  //           <option value="" disabled>
  //             Select a ticker
  //           </option>
  //           {tickers.map((ticker) => {
  //             return (
  //               <option key={ticker.id} value={ticker.id}>
  //                 {ticker.symbol}
  //               </option>
  //             );
  //           })}
  //         </select>
  //       </section>
  //       <button>Edit Post</button>
  //     </form>
  //   </article>
  // );
};

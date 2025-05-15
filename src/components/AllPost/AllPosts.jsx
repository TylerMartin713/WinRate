import { useEffect, useState } from "react";
import { GetAllPost } from "../../Services/allPostService.jsx";
import { Link } from "react-router-dom";
import { Post } from "./Post.jsx";
import { SearchBar } from "../SearchBar/SearchBar.jsx";
import { GetLikes } from "../../Services/GetLikesService.jsx";
import { NewPostButton } from "../Buttons/NewPostButton.jsx";

export const AllPosts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [likes, setLikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    GetAllPost().then(setAllPosts);
    GetLikes().then(setLikes);
  }, []);

  useEffect(() => {
    const foundPosts = allPosts.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(foundPosts);
    setCurrentPage(1);
  }, [searchTerm, allPosts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <article className="flex flex-col items-center w-full pt-14 pb-14 min-h-screen bg-gray-900">
      <section className="flex m-4 justify-between items-center p-0">
        <div className="flex">
          <NewPostButton />
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </section>
      <section className="w-full max-w-2xl">
        {currentPosts.map((post) => {
          return (
            <Link
              to={`/allposts/${post.id}`}
              key={post.id}
              className="block mb-2 rounded bg-white transition duration-200 transform hover:-translate-y-1 shadow-gray-600"
            >
              <Post
                currentUser={currentUser}
                post={post}
                likes={likes}
                key={post.id}
              />
            </Link>
          );
        })}
      </section>
      <div className="flex gap-2 mt-4">
        <button
          className="px-3 py-1 bg-emerald-500 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-2 py-1">
          {currentPage} / {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-emerald-500 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </article>
  );
};

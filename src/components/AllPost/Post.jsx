import "./Post.css";
export const Post = ({ post, currentUser, handleDeletePost }) => {
  return (
    <section className="post-container">
      <section>
        <div className="post-title">
          Post by {post.user.fullName} - <span>{post.title}</span>
        </div>
      </section>
      {/* <section>
        <div className="post-body">Post</div>
        <div>{post.description}</div>
      </section> */}
      <section>
        <div className="">
          Ticker: <span>{post.ticker.symbol}</span>
        </div>
      </section>
      <section>
        <div className="post-info">{post.datePosted}</div>
      </section>
      <footer>
        <div>{!currentUser.isStaff ? <button>Edit</button> : ""}</div>
        <div>
          {currentUser.id === post.userId || currentUser.isStaff ? (
            <button
              onClick={() => {
                handleDeletePost(post.id);
              }}
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};

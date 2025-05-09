import "./Post.css";
export const Post = ({ post, currentUser }) => {
  return (
    <section className="post-container">
      <section>
        <div className="post-title">
          Post by {post.user.fullName} - <span>{post.title}</span>
        </div>
      </section>
      <section>
        <div className="">
          Ticker: <span>{post.ticker?.symbol}</span>
        </div>
      </section>
      <section>
        <div className="post-info">{post.datePosted}</div>
      </section>
      <footer>{currentUser.id === post.userId ? "MY POST" : ""}</footer>
    </section>
  );
};

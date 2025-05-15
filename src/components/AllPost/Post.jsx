export const Post = ({ post, currentUser, likes }) => {
  const likeCount = likes.filter((like) => like.postId === post.id).length;

  return (
    <div className="relative bg-white rounded-xl shadow-xl p-6 mb-4 w-full">
      {/* Profile picture in top right */}
      {post.user?.profilePicture && (
        <img
          src={post.user.profilePicture}
          alt={post.user.fullName}
          className="absolute top-4 right-4 w-24 h-24 rounded-lg object-cover border-2 border-emerald-500"
        />
      )}
      <div className="mb-2 flex flex-col items-start">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{post.title}</h2>
        <div className="text-gray-700 font-semibold flex items-center gap-2">
          {post.user?.fullName}
          <span className="text-sm text-gray-500 font-normal">
            {post.ticker?.symbol && `- ${post.ticker.symbol}`}
          </span>
        </div>
      </div>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Posted:</span> {post.datePosted}
      </div>
      <footer className="flex justify-between items-center mt-4">
        <div className="bg-gray-200 rounded px-3 py-1 text-sm font-medium">
          {currentUser.id === post.userId ? "MY POST" : "Take a look"}
        </div>
        <div className="bg-red-200 rounded px-3 py-1 text-sm font-medium">
          Likes: {likeCount}
        </div>
      </footer>
    </div>
  );
  // return (
  //   <section className="grid">
  //     <section className="flex justify-center">
  //       <div className="font-mono font-bold text-xl uppercase underline">
  //         {/* Post by {post.user.fullName} - <span>{post.title}</span> */}
  //         {post.title}
  //       </div>
  //       <div>
  //         {post.user.profilePicture && (
  //           <img
  //             src={post.user.profilePicture}
  //             alt={post.user.fullName}
  //             className="inline-block w-8 h-8 rounded-full ml-2 object-cover"
  //           />
  //         )}
  //       </div>
  //     </section>
  //     <section>
  //       <div className=" flex justify-center text-lg">
  //         Ticker: <span>{post.ticker?.symbol}</span>
  //       </div>
  //     </section>
  //     <section>
  //       <div className="flex justify-center">{post.datePosted}</div>
  //     </section>
  //     <footer className="flex justify-evenly">
  //       <div className="bg-gray-300 rounded p-1">
  //         {currentUser.id === post.userId ? "MY POST" : "Take a look"}
  //       </div>
  //       <div className="bg-red-200 rounded p-1">Likes: {likeCount}</div>
  //     </footer>
  //   </section>
  // );
};

export const createNewPost = (post) => {
  return fetch(`http://localhost:8088/myPosts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};

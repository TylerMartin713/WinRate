export const PostLikeService = (like) => {
  return fetch(`http://localhost:8088/likes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(like),
  }).then((res) => res.json());
};

export const EditPost = (id, editPost) => {
  return fetch(`http://localhost:8088/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editPost),
  }).then((res) => res.json());
};

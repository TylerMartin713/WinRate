export const DeletePost = (id) => {
  return fetch(`http://localhost:8088/posts/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

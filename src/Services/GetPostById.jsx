export const GetPostById = (id) => {
  return fetch(
    `http://localhost:8088/posts/${id}?_expand=user&_expand=ticker`
  ).then((res) => res.json());
};

export const GetPostByIdEditForm = (id) => {
  return fetch(`http://localhost:8088/posts/${id}`).then((res) => res.json());
};

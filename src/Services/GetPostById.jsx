export const GetPostById = (id) => {
  return fetch(
    `http://localhost:8088/posts/${id}?_expand=user&_expand=ticker`
  ).then((res) => res.json());
};

export const GetAllPost = () => {
  return fetch(`http://localhost:8088/posts?_expand=ticker&_expand=user`).then(
    (res) => res.json()
  );
};

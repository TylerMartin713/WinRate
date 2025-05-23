export const GetComments = (id) => {
  return fetch(`http://localhost:8088/comments?postId=${id}&_expand=user`).then(
    (res) => res.json()
  );
};

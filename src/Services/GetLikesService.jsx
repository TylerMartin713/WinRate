export const GetLikes = () => {
  return fetch(`http://localhost:8088/likes`).then((res) => res.json());
};

export const GetLikesByUserId = (id) => {
  return fetch(`http://localhost:8088/likes?userId=${id}`).then((res) =>
    res.json()
  );
};

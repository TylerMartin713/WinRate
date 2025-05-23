export const GetUserById = (id) => {
  return fetch(`http://localhost:8088/users/${id}?_expand=userStat`).then(
    (res) => res.json()
  );
};

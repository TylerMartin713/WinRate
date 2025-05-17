export const GetMediaByUserId = (id) => {
  return fetch(
    `http://localhost:8088/media?userId=${id}&_expand=ticker&_expand=user`
  ).then((res) => res.json());
};

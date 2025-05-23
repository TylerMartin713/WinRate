export const UpdateBio = (userId, newBio) => {
  return fetch(`http://localhost:8088/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ profileBio: newBio }),
  }).then((res) => res.json());
};

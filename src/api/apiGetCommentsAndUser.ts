export async function apiGetCommentsAndUser() {
  const comments = await fetch("http://localhost:3001/comments").then((resp) =>
    resp.json()
  );
  const currentUser = await fetch("http://localhost:3001/currentUser").then(
    (resp) => resp.json()
  );

  return { currentUser: currentUser, comments: comments };
}

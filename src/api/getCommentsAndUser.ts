import data from "../data/data";

let commentsAndUser = data;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCommentsAndUser() {
  await timeout(5000);

  return commentsAndUser;
}

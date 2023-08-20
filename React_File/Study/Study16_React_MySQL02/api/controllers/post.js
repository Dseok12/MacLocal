export const getPosts = (res, req) => {
  const q = `SELECT * FROM posts AS p JOIN users AS u ON (u.id = p.userId)`
}
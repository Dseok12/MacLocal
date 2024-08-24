export const trending = (req, res) => {
  return res.send("Home Page Videos.");
}

export const see = (req, res) => {
  console.log(req.params)
  return res.send(`Watch ${req.params.id}`);
}

export const edit = (req, res) => {
  return res.send("edit.");
}

export const search = (req, res) => {
  return res.send("search")
}

export const upload = (req, res) => {
  return res.send("upload")
}

export const deleteVideo = (req, res) => {
  return res.send("deleteVideo")
}

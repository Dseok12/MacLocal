export const trending = (req, res) => {
  res.render("home");
};

export const see = (req, res) => {
  console.log(req.params)
  return res.send(`Watch #${req.params.id}`);
};

export const edit = (req, res) => {
  res.send("Edit");
};

export const upload = (req, res) => {
  res.send("Upload");
};

export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
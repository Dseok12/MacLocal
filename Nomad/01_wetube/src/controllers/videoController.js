const fakeUser = {
  username: "Jeong",
  loggedIn: false,
};

export const trending = (req, res) =>{
  res.render("home", { pageTitle: "Home", fakeUser });
};

export const see = (req, res) => {
  res.render("watch", { pageTitle: "Watch" });
};

export const edit = (req, res) => {
  res.send("edit", { pageTitle: "Edit" });
};

export const upload = (req, res) => {
  res.send("Upload");
};

export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};
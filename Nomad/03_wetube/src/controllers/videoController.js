const fakeUser = {
  username : "정원석",
  loggedIn : false,
}

export const trending = (req, res) => {
  res.render("home", {
    pageTitle: "Home",
    fakeUser,
  });
}

export const see = (req, res) => {
  res.render("watch", {
    pageTitle: "Watch",
  });
}

export const edit = (req, res) => {
  res.render("edit", {
    pageTitle: "Edit",
  });
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

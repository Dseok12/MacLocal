
export const trending = (req, res) => {
  const videos = [
    {
      title: "Frist Video",
      rating: 5,
      comment: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comment: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comment: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ]
  return res.render("home", { pageTitle: "Home", videos });
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
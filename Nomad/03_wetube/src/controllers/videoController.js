export const trending = (req, res) => {

  const videos = [
    {
      title : "Video #1",
      rating : 2,
      comment : 3,
      createAt : "10 minutes ago",
      views : 59,
      id : 1
    },
    {
      title : "Video #2",
      rating : 12,
      comment : 23,
      createAt : "6 minutes ago",
      views : 30,
      id : 2
    },
    {
      title : "Video #3",
      rating : 1,
      comment : 2,
      createAt : "5 minutes ago",
      views : 5,
      id : 3
    },
  ];

  return res.render("home", {
    pageTitle: "Home",
    videos,
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

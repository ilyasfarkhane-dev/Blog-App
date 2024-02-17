const postModl = require("../models/postsModele");
const postsFile = require("../posts.json");
const getAllPostsController = (req, res) => {
  res.send(postModl.getAllPosts());
};
const searchPostController = (req, res) => {
  const title = req.query.title;
  const author = req.query.author;
  let result = postsFile;
  if (title) {
    result = postsFile.filter((product) => {
      return product.title.includes(title);
    });
  }
  if (author) {
    result = postsFile.filter((product) => {
      return product.author.includes(author);
    });
  }
  if(author&&title){
    result = postsFile.filter((product) =>
    {return product.author.includes(author)&&product.title.includes(title)}
    )
  }
  res.send(result);
};
const getPostsByIdController = (req, res) => {
  const postId = req.params.id;
  const post = postsFile.find((post) => post.id == postId);
  if (post) {
    res.send(post);
  } else {
    res.status(404).send("post by id Not found");
  }
};
const createPostController = (req, res) => {
  const newPost = req.body;
  const postId =
    postsFile.length > 0 ? postsFile[postsFile.length - 1].id + 1 : 1;
  newPost.id = postId;
  postsFile.push(newPost);
  res.send("Post created successfully");
  postModl.save_data();
};

const updatPostController = (req, res) => {
  const urlId = req.params.id;
  const findId = postsFile.findIndex((p) => p.id == urlId);
  if (findId !== -1) {
    const { title, author, content } = req.body;
    postsFile[findId].title = title;
    postsFile[findId].author = author;
    postsFile[findId].content = content;

    res.send("Updated");
    postModl.save_data();
  } else {
    res.status(404).send("Post to update not found");
  }
};
const deletePostController = (req, res) => {
  const urlId = req.params.id;
  const postIdToDelet = postsFile.findIndex((item) => item.id == urlId);
  if (postIdToDelet !== -1) {
    postsFile.splice(postIdToDelet, 1);
    res.send("Poste Deleted");
    postModl.save_data();
  } else {
    res.status(404).send("Post to delete not found");
  }
};

module.exports = {
  getAllPostsController,
  createPostController,
  getPostsByIdController,
  updatPostController,
  deletePostController,
  searchPostController,
};

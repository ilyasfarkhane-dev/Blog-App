const fs = require("fs").promises;

const postsFile = require("../posts.json");

const getAllPosts = () => {
  return postsFile;
};
const save_data = () => {
  const js_str = JSON.stringify(postsFile);
  fs.writeFile("./posts.json", js_str);
};

module.exports = {
  getAllPosts,
  save_data,
};

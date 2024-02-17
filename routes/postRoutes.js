const express = require("express");

const router = express.Router();
const   Posts= require("../controllers/postController");

router.get("/", Posts.getAllPostsController);
router.get('/search',Posts.searchPostController);
router.get('/:id',Posts.getPostsByIdController);
router.post('/',Posts.createPostController);
router.put('/:id',Posts.updatPostController);
router.delete('/:id',Posts.deletePostController);



module.exports = router;

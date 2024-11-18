const { Router } = require("express");
const { getBlogs, createBlog, updateBlog, deleteBlog } = require("../controller/blogController");

const blogRouter = Router()

blogRouter.get("/", getBlogs)
blogRouter.post("/", createBlog)
blogRouter.put("/:id", updateBlog)
blogRouter.delete("/:id", deleteBlog)

module.exports = blogRouter;
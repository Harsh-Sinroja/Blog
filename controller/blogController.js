const Blog = require("../model/blogModel")

const getBlogs = async (req, res) => {
    let data = Blog.find();
    res.send(data);
}

const createBlog = async (req, res) => {
    try {
        let data = Blog.create(req.body);
        res.send(data);
    } catch (error) {
        console.log("Error in createBlog : ", error);
        res.send(error);
    }
}

const updateBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let data = Blog.findByIdAndUpdate(id, req.body, { new: true })
    } catch (error) {
        console.log("Error in updateBlog : ", error);
        res.send(error);
    }
}

const deleteBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let data = Blog.findByIdAndDelete(id)
    } catch (error) {
        console.log("Error in deleteBlog : ", error);
        res.send(error);
    }
}

module.exports = { getBlogs, createBlog, updateBlog, deleteBlog };
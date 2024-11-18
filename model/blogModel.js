const mongoose = require("mongoose");
const { stringify } = require("querystring");

const blogSchema = mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    author: {
        type: String
    }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
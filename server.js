const express = require("express");
const connectDB = require("./config/connectDB");
const userRoutes = require("./routes/userRoutes");
// require("dotenv").config()
const cors = require("cors");
const blogRouter = require("./routes/blogRoutes");

const app = express();
app.use(cors())


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use("/user", userRoutes);
app.use("/blog", blogRouter);

app.listen(8000, () => {
    connectDB();
    console.log("Server is running on http://localhost:8000 ");
})
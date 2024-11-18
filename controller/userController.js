const mongoose = require("mongoose");
const User = require("../model/userModel.js");

const getUser = async (req, res) => {
    let data = await User.find();
    res.send(data);
}

const createUser = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.send("User already exists");
        }
        let data = await User.create(req.body);
        res.send(data);
    } catch (error) {
        console.log("Error in createUser : ", error);
        res.send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        console.log("Error in updateUser : ", error);
        res.send(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        let { id } = req.params;
        const data = await User.findByIdAndDelete(id);
        res.send("User deleted");
    } catch (error) {
        console.log("Error in deleteUser : ", error);
        res.send(error);
    }
}

module.exports = { getUser, createUser, updateUser, deleteUser };
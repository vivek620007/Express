const User = require("../model/userModel");

    module.exports = {

        // Create a new user
        createUser: async (req, res) => {
            try {
                const newUser = new User(req.body);
                const savedUser = await newUser.save();
                return res.status(201).json({ message: "User created successfully", savedUser });
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        },
        // Get all users
        getAllUsers: async (req, res) => {
            try {
                const users = await User.find({});
                return res.status(200).json({ message: "All users", users });
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        },

        // Get a single user by ID
        getUserById: async (req, res) => {
            try {
                const user = await User.findById(req.params.id);
                if (!user) {
                    return res.status(404).json({ error: "User not found" });
                }
                return res.status(200).json(user);
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        },

        // Update a user by ID
        updateUserById: async (req, res) => {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true }
                );
                if (!updatedUser) {
                    return res.status(404).json({ error: "User not found" });
                }
                return res.status(200).json({ message: "User updated successfully", updatedUser });
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        },

        // Delete a user by ID
        deleteUserById: async (req, res) => {
            try {
                const deletedUser = await User.findByIdAndDelete(req.params.id);
                if (!deletedUser) {
                    return res.status(404).json({ error: "User not found" });
                }
                return res.status(200).json({ message: "User deleted successfully" });
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        }
    }


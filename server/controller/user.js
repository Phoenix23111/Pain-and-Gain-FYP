const User = require("../models/Users");

const newUser = async (req, res, next) => {
    try {
        const { _id, name, email, password, profilePic, gender, dob } = req.body;
        
        let user = await User.findById(_id);

        if (user) {
            return res.status(400).json({
                success: false,
                message: `User exists`
            });
        }

        user = await User.create({
            _id, name, email, password, profilePic, gender, dob
        });

        // If the user is created successfully, you may want to send a success response here
        return res.status(201).json({
            success: true,
            message: `User created successfully`
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message // Displaying error message instead of the error object
        });
    }
};

const fetchAllUser = async (req, res, next) => {
    try {
       
        
        const user = await User.find({})

        

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const fetchUser = async (req, res, next) => {
    try {
        const _id = req.params.id;
        
        const user = await User.findById(_id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User not found`
            });
        }

        return res.status(200).json({
            success: true,
            message: `Welcome, ${user.name}`,
            user,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const _id = req.params.id;
        
        const user = await User.findById(_id).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: `User not found`
            });
        }
        await user.deleteOne()

        return res.status(200).json({
            success: true,
            message: `USER has been deleted`,
            
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    newUser,
    fetchAllUser,
    fetchUser,
    deleteUser
};

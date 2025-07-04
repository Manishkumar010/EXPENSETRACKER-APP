const User = require("../models/User")
const jwt = require("jsonwebtoken");


// Generate JWT token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" })
}

// register User

exports.registerUser = async (req, res) => {
    const { fullName, email, password, profileImageUrl } = req.body;

    // Validation: check for missing fields
    if (!fullName || !email || !password) {
        return res.statud(400).json({ message: "All field are required" });
    };

    try {
        // checkl if email already exits
        const exitingUser = await User.findOne({ email });
        if (exitingUser) {
            return res.status(400).json({ message: "Emaail already in use" })
        }

        // create the user
        const user = await User.create({
            fullName,
            email,
            password,
            profileImageUrl
        });

        res.status(201).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        });


    } catch (error) {
        res.status(500).json({ message: "Error registering user", err: error.message });
    };
};

// login User

exports.logginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All field are required" });
    }

    try {
        // find and login user
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: "Invalid creadentials" })
        }

        res.status(200).json({
            id: user._id,
            user,
            token: generateToken(user._id)
        })

    } catch (error) {
        res.status(500).json({ message: "Error login user", err: error.message });

    }
};

// register User

exports.getUserInfo = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");

        if(!user){
            return res.status(400).json({message:"User not found"});
        };
        
    } catch (error) {
        res.status(500).json({ message: "Error login user", err: error.message });
    };
};
const User = require("../models/User");

// @desc    Register an account
// @route   POST /api/register
// @access  Public
exports.createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.create(req.body);

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

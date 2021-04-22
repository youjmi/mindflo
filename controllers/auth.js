const User = require("../models/User")

const ErrorResponse = require("../client/src/utils/errorResponse")

exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username, 
            email, 
            password
        })

       sendToken(user,201,res)
    } catch (error) {
        next(error)
    }


}


exports.login = async (req, res, next) => {
    const { username, password } = req.body;
  
    // Check if email and password is provided //if u want to use email. just change to EMAIL from username
    if (!username || !password) {
return next(new ErrorResponse("Please provide a username and password",400))
    }
  
    try {
      // Check that user exists by email
      const user = await User.findOne({ username }).select("+password");
  
      if (!user) {
        return next(new ErrorResponse("Invalid credentials", 401))
    }
   
      // Check that password match
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorResponse("Invalid credentials",401))
    }

    sendToken(user, 201,res)


    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }
  };



//   exports.forgotPassword = async (req, res, next) => {
//     // Send Email to email provided but first check if user exists
//     const { email } = req.body;
  
//     try {
//       const user = await User.findOne({ email });
  
//       if (!user) {
//         return next(new ErrorResponse("No email could not be sent", 404));
//       }
  
//       // Reset Token Gen and add to database hashed (private) version of token
//       const resetToken = user.getResetPasswordToken();
  
//       await user.save();
  
//       // Create reset url to email to provided email
//       const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
  
//       // HTML Message
//       const message = `
//         <h1>You have requested a password reset</h1>
//         <p>Please make a put request to the following link:</p>
//         <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//       `;
  
//       try {
//         await sendEmail({
//           to: user.email,
//           subject: "Password Reset Request",
//           text: message,
//         });
  
//         res.status(200).json({ success: true, data: "Email Sent" });
//       } catch (err) {
//         console.log(err);
  
//         user.resetPasswordToken = undefined;
//         user.resetPasswordExpire = undefined;
  
//         await user.save();
  
//         return next(new ErrorResponse("Email could not be sent", 500));
//       }
//     } catch (err) {
//       next(err);
//     }
//   };
  
// exports.resetpassword = (req, res, next) => {
//     res.send("Reset password Route")
// }

const sendToken = (user,statusCode, res) => {

    const token = user.getSignedJwtToken();
    res.status(statusCode).json({success:true, token})
}  
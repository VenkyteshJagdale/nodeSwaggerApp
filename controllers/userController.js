const User = require("../model/user"),
userSchema = require("../validator/joiUserValidator"),

nodemailer = require('nodemailer');
const {validateRegisterSchema} = require("../validator/joiUserValidator")
const jwt = require('jsonwebtoken');
let dotenv = require("dotenv");

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});


const getLogin = (req,res)=>{
  let userName = req.body.userName
  const user = {name:userName}
  
  const accessTokken = jwt.sign(user,process.env.ACCESS_TOKEN)
  res.json({accessTokken : accessTokken})
  }
  
  function authonticateTokken(req,res,next){
    const authHeader = req.headers['authorization'];
    const tokken = authHeader && authHeader.split(' ')[1]
 if(tokken ==null) return res.sendStatus(401)
 jwt.verify(tokken,process.env.ACCESS_TOKEN,(error,user)=>{
if(error) return res.sendStatus(403)
req.user = user
next();
})
  }


// 1).Get All Users Data
const getAllUser = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  User.find({}).skip(skip).limit(limit)
    .then((users) => {
      console.log(users);
      if (users.length > 0) {
        res.json({
          statusCode: 200,
          message: 'Users fetched successfully',
          users: users,
          pageInfo: {
            currentPage: page,
            totalPages: Math.ceil(users.length / limit),
            totalUsers: users.length,
          },
        });
      } else {
        res.json({ statusCode: 404, message: 'No users found' });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({statusCode: 500,message: 'Internal Server Error'
      });
    });
};

// 2). Register New User
const registerUser = async (req, res) => {
  const { error, value } = validateRegisterSchema(req.body);
  if (error) {
    console.error("Error in validator:", error);
    return res.status(400).send("Validation error in request body");
  }

  const registerUserData = req.body;
    if (!registerUserData) {
      return res.status(400).send("UserData not found in request body");
    }

  let userData = new User(registerUserData);
  let registerUser = await userData
    .save()
    .then((updateUser) => {

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: updateUser.email,
        subject: 'Registration Successful',
        text: `Hello ${updateUser.firstName},\nThank you for registering!\n`,
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      res.json({
        statusCode: 200,message: 'Users register successfully',registerUser: updateUser});
    })

    .catch((error) => {
      console.error("Error:", error);
      return res.status(500).send("Internal Server Error");
    });
};

// 3).Get User By Id
const getRegisterUserById = async (req, res) => {
  let getRegisterUserById = await User.findById(req.params.id)
    .then((getRegister) => {
      if (!getRegister) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({
        statusCode: 200,message: 'getRegister User fetched successfully',getRegisterById: getRegister});
    })
    .catch((error) => {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

// 4).Update User
const updateRegisterUser = async (req, res) => {
  const updateRegisterUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .then((updatedRegisterUser) => {
      if (!updatedRegisterUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({
        statusCode: 200,message: 'register User update data fetched successfully',updatedRegisterUser: updatedRegisterUser});
    })
    .catch((error) => {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error"});
    });
};

// 5).Delete User
const deleteRegisterUser = async (req, res) => {
  const deleteRegisterUser = await User.findByIdAndDelete(req.params.id)
    .then((deleteRegisterUser) => {
      if (!deleteRegisterUser) {
        return res.status(404).json({ error: "User not found"});
      }
      res.json({
        statusCode: 200,message: 'register User update data fetched successfully',deleteRegisterUser: deleteRegisterUser});
    })
    .catch((error) => {
      console.log("error", error);
      res.status(500).json({ error: "Internal Server Error"});
    });
};

module.exports = {
  getAllUser,
  getRegisterUserById,
  registerUser,
  deleteRegisterUser,
  updateRegisterUser,
  getLogin
};

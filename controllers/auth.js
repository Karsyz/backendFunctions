const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const generator = require('generate-password')
const fs = require('fs/promises');


// Login to Server
exports.login = async (req, res, next) => {

  if(!req.body.email || !req.body.password ) {
    return res
      .status(400)
      .send({
      msg: 'Ya got some trouble with that user or password there champ.'
    })}

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.log(err)
      return next(err);
    }

    if (!user) {
      req.flash("errors", info);
      console.log(err, user, info)
      return res
        .status(401)
        .send({
          msg: 'Ya got a problem there bro...'
        });
    }

    req.logIn(user, (err) => {
      if (err) {
        console.log(err)
        return next(err);
    }});

    res.status(200)
    res.send({
      msg: "All logged in.  Stay safe out there eh!",
      data: { 
        user: user, 
        role: user.role 
      },
    })

  })(req, res, next);
  
};

  




// Logout of Server
exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;

    res.status(200)
    res.send({
      msg: "All logged out.  Have a good one eh!",
      data: {},
    })
  });
};

//  Register a user
exports.register = async (req, res, next) => {

  // const validationErrors = [];
  // const randomAvatar = generator.generate({length: 16})

  // if (!validator.isEmail(req.body.email))
  //   validationErrors.push({ msg: "Please enter a valid email address." });

  // if (!validator.isLength(req.body.password, { min: 8 }))
  //   validationErrors.push({
  //     msg: "Password must be at least 8 characters long",
  //   });
    
  // if (req.body.password !== req.body.confirmPassword)
  //   validationErrors.push({ msg: "Passwords do not match" });

  // if (validationErrors.length) {
  //   req.flash("errors", validationErrors);
  //   return res.send("../buildAChurch");
  // }
  // req.body.email = validator.normalizeEmail(req.body.email, {
  //   gmail_remove_dots: false,
  // });

  try {

    const user = new User({
      email: req.body.email,
      password: req.body.password,
      role: 5150,
    });

    const existingUser = await User.findOne( {email: req.body.email } )

    if(!existingUser) {
      const newUser = await user.save()
      res.status(200)
      res.send(res.send({
        msg: "Here's your shiny new data bud.  Have a good one eh!",
        data: newUser,
      }))
    }else {
      res.status(403)
      res.send(res.send({
        msg: "User already exists eh bud...",
      }))
    }
  
  } catch (error) {
    console.log(error)
  }
};

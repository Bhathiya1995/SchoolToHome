const Parent = require("../models/Parent");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validations
const validateRegisterInput = require("../validation/registerValidator");

exports.test = (req, res) => {
  res.json({ success: "Msg Succcess" });
  console.log("Success");
};

// register user
exports.register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Parent.findOne({ email: req.body.email }).then(parent => {
    if (parent) {
      errors.email = "Email already exits";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size
        r: "pg", //Rating
        d: "mm" //Default
      });

      const newParent = new Parent({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        avatar,
        address: req.body.address,
        phoneno: req.body.phoneno
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newParent.password, salt, (err, hash) => {
          if (err) throw err;
          newParent.password = hash;
          newParent
            .save()
            .then(parent => res.json(parent))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

// Login the user
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  Parent.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "User not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.firstname
          // avatar: user.avatar
        };
        // Sign token
        jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer" + token
          });
        });
      } else {
        return res.status(400).json({ password: "Password incorrect" });
      }
    });
  });
};

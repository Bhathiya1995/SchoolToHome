const express = require("express");
const router = express.Router();
const passport = require("passport");

// Import Controller
const parentController = require("../../controllers/parentController.js");

router.get("/test", parentController.test);

// Register user
router.post("/register", parentController.register);

// Login user
router.post("/login", parentController.login);

// Get Current user
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  parentController.getCurrentUser
);

module.exports = router;

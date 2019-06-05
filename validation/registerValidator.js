const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.repassword = !isEmpty(data.repassword) ? data.repassword : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.phoneno = !isEmpty(data.phoneno) ? data.phoneno : "";

  // First name validate
  if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
    errors.firstname = "First Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "First Name is required";
  }

  // Last name validate
  if (!Validator.isLength(data.lastname, { min: 2, max: 30 })) {
    errors.lastname = "Last Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Last Name is required";
  }

  // Email validate
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  // Password Validate
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (Validator.isLength(data.password, { min: 6 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // Repassword validate
  if (Validator.isEmpty(data.repassword)) {
    errors.repassword = "Confirm Password is required";
  }

  // Match the passwords
  if (Validator.equals(data.password, data.repassword)) {
    errors.repassword = "Password must match";
  }

  // address validate
  if (Validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }

  // address validate
  if (Validator.isEmpty(data.phoneno)) {
    errors.phoneno = "Phone No is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

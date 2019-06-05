import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repassword: "",
      address: "",
      phoneno: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newParent = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      repassword: this.state.repassword,
      address: this.state.address,
      phoneno: this.state.phoneno
    };

    axios
      .post("/api/parents/register", newParent)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div className="main">
        <div className="register-bg-image">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card register-card">
                <div className="card-body">
                  <h3 className="card-title text-center">Create a Account</h3>
                  <hr />
                  <p className="text-center text-success">
                    * Enter Parents informations
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                      {/* First name */}
                      <div className="col">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-user" />
                            </div>
                          </div>
                          <input
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            className="form-control"
                            placeholder="First Name"
                            id="firstnameInput"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="col">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-user" />
                            </div>
                          </div>
                          <input
                            type="text"
                            name="lastname"
                            value={this.state.lastname}
                            className="form-control"
                            placeholder="Last Name"
                            id="lastnameInput"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email Input */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        className="form-control"
                        placeholder="Email"
                        id="emailInput"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-row">
                      {/* Password Input */}
                      <div className="col">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-unlock-alt" />
                            </div>
                          </div>
                          <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            className="form-control"
                            placeholder="Password"
                            id="passwordInput"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>

                      {/* Re-Password */}
                      <div className="col">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-unlock-alt" />
                            </div>
                          </div>
                          <input
                            type="password"
                            name="repassword"
                            value={this.state.repassword}
                            className="form-control"
                            placeholder="Re-Enter Password"
                            id="re-passwordInput"
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Address Input */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                      </div>
                      <input
                        type="text"
                        name="address"
                        value={this.state.address}
                        className="form-control"
                        placeholder="Address"
                        id="addressInput"
                        onChange={this.onChange}
                      />
                    </div>

                    {/* Phone No */}
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-phone" />
                        </div>
                      </div>
                      <input
                        type="text"
                        name="phoneno"
                        value={this.state.phoneno}
                        className="form-control"
                        placeholder="Phone No"
                        id="phonenoInput"
                        onChange={this.onChange}
                      />
                    </div>

                    {/* Register Button */}
                    <div className="input-group mb-3 justify-content-center">
                      <button
                        className="btn btn-secondary btn-lg btn-block"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

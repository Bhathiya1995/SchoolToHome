import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="main">
        <div className="login-bg-image">
          <div className="row ">
            <div className="col-md-12 ">
              <div className="card login-card">
                <div className="card-body">
                  <h3 className="card-title text-center">Login</h3>
                  <hr />
                  <form className="form-group container">
                    <div className="input-group my-4">
                      <div className="input-group-prepend">
                        <div className="input-group-text">@</div>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        id="emailInput"
                      />
                    </div>
                    <div className="input-group my-4">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fas fa-unlock-alt" />
                        </div>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        id="passwordInput"
                      />
                    </div>
                    <div className="input-group my-4">
                      <input
                        type="button"
                        name="Login"
                        className="btn btn-secondary mx-auto w-50 "
                        value="LogIn"
                      />
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

export default Login;

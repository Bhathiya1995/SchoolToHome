import React, { Component } from "react";
import schoolbus from "../../images/schoolbus.png";

class Landing extends Component {
  render() {
    return (
      <div>
        {/* intro with background image */}
        <div className="background" id="background">
          <div className="row text-center">
            <h1 className="mx-auto intro-title">
              Need A Safe Transport
              <br /> To Your Children To School
            </h1>
          </div>
          <div className="row text-center">
            <div className="mx-auto mt-2">
              <h3>Join with us !!</h3>
              <button className="btn btn-lg btn-outline-light mt-5 btn-block">
                Register
              </button>
            </div>
          </div>
        </div>

        {/* Our serviceses */}
        <div className="card ">
          <div className="card-body">
            <h2 className="card-title text-center font-weight-bolder mb-5">
              Our Services
            </h2>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="card ">
                  <div className="card-body mx-auto text-center">
                    <h5 className="card-title text-center">Timely</h5>
                    <i className="far fa-clock fa-5x my-2" />
                    <p className="card-text text-secondary ">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Suscipit reprehenderit ducimus error tempore magnam ab in
                      tenetur, officiis vitae inventore qui possimus dolores
                      quae, cum quod perferendis, placeat nam deleniti!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card ">
                  <div className="card-body mx-auto text-center">
                    <h5 className="card-title text-center">Location</h5>
                    <i className="fas fa-map-marked-alt fa-5x my-2" />
                    <p className="card-text text-secondary ">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Suscipit reprehenderit ducimus error tempore magnam ab in
                      tenetur, officiis vitae inventore qui possimus dolores
                      quae, cum quod perferendis, placeat nam deleniti!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card ">
                  <div className="card-body mx-auto text-center">
                    <h5 className="card-title text-center">Cost Saving</h5>
                    <i className="fas fa-dollar-sign fa-5x my-2 " />
                    <p className="card-text text-secondary ">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Suscipit reprehenderit ducimus error tempore magnam ab in
                      tenetur, officiis vitae inventore qui possimus dolores
                      quae, cum quod perferendis, placeat nam deleniti!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card ">
                  <div className="card-body mx-auto text-center">
                    <h5 className="card-title text-center">Security</h5>
                    <i className="fas fa-shield-alt fa-5x mt-2 " />
                    <p className="card-text text-secondary ">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Suscipit reprehenderit ducimus error tempore magnam ab in
                      tenetur, officiis vitae inventore qui possimus dolores
                      quae, cum quod perferendis, placeat nam deleniti!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About US */}
        <div className="row">
          <div className="col-md-6 col-sm-12 container ">
            <img
              src={schoolbus}
              className="mt-5 mb-4 mx-5 w-75"
              alt="School Bus"
            />
          </div>
          <div className="col-md-6 col-sm-12 container text-center mt-5 ">
            <h2 className="pb-3">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, sunt iste. Vitae ipsa odit corporis minus fugiat
              voluptates culpa debitis, placeat unde nostrum nemo nesciunt,
              explicabo eaque quasi vero voluptate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, sunt iste. Vitae ipsa odit corporis minus fugiat
              voluptates culpa debitis, placeat unde nostrum nemo nesciunt,
              explicabo eaque quasi vero voluptate.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer-bg">
        <div className="container">
          <div className="row">
            {/* Find us  */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-center ">
              <h3 className="mt-3">Find Us</h3>
              <hr className="bg-white" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                similique cumque aperiam! Nulla fugiat saepe eum dignissimos
                corrupti sunt dolore non quo, explicabo et velit iusto
                exercitationem laudantium iste recusandae!
              </p>
            </div>

            {/* Links */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
              <h3 className="text-center mt-3">Contacts</h3>
              <hr className="bg-white w-75" />
              <div className="ml-5 ">
                <p>
                  <i className="fas fa-phone mr-3" /> 555-555-5555
                </p>
                <p>
                  <i className="fas fa-home mr-3" /> 8/1c, Galle Road, Matara
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> schooltohome@gmail.com
                </p>
                <p>
                  <i className="fas fa-at mr-3" /> schooltohome.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row social-media-icon-bar row-footer">
          <div className="inner-row">
            <a href="#*" className=" ">
              <i className="fab fa-facebook social-media-icon" />
            </a>

            <a href="#*" className="">
              <i className="fab fa-linkedin social-media-icon" />
            </a>

            <a href="#*" className="">
              <i className="fab fa-github social-media-icon" />
            </a>

            <a href="#*" className="">
              <i className="fab fa-dropbox social-media-icon" />
            </a>

            <a href="#*" className="">
              <i className="fab fa-twitter social-media-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

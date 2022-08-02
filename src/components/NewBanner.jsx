import React from "react";

const NewBanner = () => {
  return (
    <div className="newBanner">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-12">
            <img
              src={require("../images/bgOriginal.jpeg").default}
              className="img-fluid"
              alt="Banner"
            />

            <div className="overlay">
              <img
                className="logo"
                src={require("../images/LogoNew.png").default}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBanner;

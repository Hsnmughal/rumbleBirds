import React from "react";

const MainFooter = () => {
  return (
    <>
      <div className="MainFooter py-4 text-dinnextheavy fw-bold d-flex justify-content-center align-items-center">
        <div className="d-flex gap-3 justify-content-center align-items-center">
          <a href="https://discord.gg/rumblebirds" className="socialIcons">
            <i className="fa-brands fa-discord"/>
          </a>
          <a href="https://twitter.com/RumbleBirds" className="socialIcons">
            <i className="fa-brands fa-twitter-square"/>
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .MainFooter {
            background-color: #fff;
            width:100%;
          }
          .socialIcons {
              font-size: 18px;
              margin: 0px 5px;
              height: 35px;
              width: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              border-radius: 50%;
              background-color: #000;
          }
      `}
      </style>
    </>
  );
};

export default MainFooter;

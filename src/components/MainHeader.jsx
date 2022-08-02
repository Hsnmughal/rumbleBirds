import React, { useContext } from "react";
import { mainContext } from "../Contexts/mainContext";

const MainHeader = () => {
  const { loadWeb3, account } = useContext(mainContext);
  return (
    <>
      <div className=" container-fluid MainHeader pt-3 pb-2 text-dinnextheavy fw-bold d-flex justify-content-center align-items-center">
        <div className="w-100 d-flex justify-content-between align-items-center MainHeader__container">
          <div className="d-flex gap-3 text-uppercase justify-content-start align-items-center">
            <a className="headerNavLink" href="#">Home</a>
            <a className="headerNavLink" href="#about">Mint</a>
            <a className="headerNavLink" href="#rubmle">Road Map</a>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <a href="https://discord.gg/rumblebirds" className="socialIcons">
              <i className="fa-brands fa-discord"/>
            </a>
            <a href="https://twitter.com/RumbleBirds" className="socialIcons">
              <i className="fa-brands fa-twitter-square"/>
            </a>
          </div>
          <button className="connetBtn" onClick={() => {
            loadWeb3();
          }} disabled={account} >{account ? `${account.substring(0, 4)}...${account.substring(account.length-3, account.length)}` : 'CONNECT'}
            
          </button>
        </div>
      </div>

      <style jsx>
        {`
          .MainHeader {
            z-index: 100;
            top:0;
            position: fixed;
            background-color: #000;
            width:100%;
         }
         .MainHeader__container {
          max-width: 990px;
        }
        @media(max-width: 768px) {
        .MainHeader__container {
          max-width: 375px;
        }

      }
          .headerNavLink {
            color: #fff;
            margin-right:4px;
            padding-left:4px;
          }
          .headerNavLink::hover {
            color: #3DC0AF;
          }
          .socialIcons {
              font-size: 18px;
              margin: 0px 2px;
              height: 35px;
              width: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #000;
              border-radius: 50%;
              background-color: #fff;
          }
      `}
      </style>
    </>
  );
};

export default MainHeader;

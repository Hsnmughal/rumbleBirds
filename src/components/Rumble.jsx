import React from "react";

const Rubmle = () => {
  return (
    <>
      <div className="container-fluid p-0 " id="rubmle">
        <div className="gap">
          <img
            src={require("../images/roadmap.jpeg").default}
            className="gapImg"
            alt=""
          />
          <div className="gapOverlay"></div>
        </div>
        <div className="bannerTwo">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-10 col-md-9 mx-auto">
                <h1
                  className="currency small mt-0 mb-4 text-chooseteamfont"
                  style={{ fontSize: "83px" }}
                >
                  RUMBLE BIRDS
                  <br />
                  ROADMAP
                </h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-10 col-md-9 mx-auto">
                <div className="bottomCard">
                  <div className="row">
                    <div className="col-md-6">
                      <h1 className="cardHeading text-anton">
                        PHASE ONE. Rarity Ranking
                      </h1>
                      <p className="roadMapPara">
                        We will acquire Rarity Sniper for both the Sol and Eth
                        Collection on the first day of 100% reveal.
                      </p>

                      <h1 className="cardHeading">PHASE TWO. Land</h1>
                      <p className="roadMapPara">
                        The team will consult with the community and all birds
                        will vote on which land to buy. The majority will decide
                        where we go from there.
                      </p>

                      <h1 className="cardHeading">PHASE THREE. Merch</h1>
                      <p className="roadMapPara">
                        We will have a merch store available for all holders as
                        well as several giveaways.{" "}
                      </p>

                      <h1 className="cardHeading">PHASE FOUR. Staking</h1>
                      <p className="roadMapPara">
                        Every Rumble Bird will generate 1 $Bird token a day for
                        holding. You will be able to claim your tokens whenever
                        you like. These tokens will have significant use in our
                        store.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h1 className="cardHeading">PHASE FIVE. Store</h1>
                      <p className="roadMapPara">
                        We will integrate a custom store where you will be able
                        to buy Nft’s, whitelist, merch and other cool
                        accessories with your generated $Bird token. You will
                        also be able to buy the $Bird token directly from the
                        site.
                      </p>

                      <h1 className="cardHeading"> PHASE SIX. Game</h1>
                      <p className="roadMapPara">
                        A unique custom game is currently in development. You
                        will be able to battle other Rumble Birds for our native
                        $Bird token. We will be holding contests to see who the
                        champions are, and a Championship belt will go to the
                        winner. Which blockchain will bring home the Gold??
                      </p>
                    </div>

                    <div className="col-md-11 mx-auto">
                      <p className="roadMapPara mt-5 text-center bold" >
                        <i>   Rumble birds was created with the sole purpose of having fun, and our goal is to take things to a whole different level. Come represent your chain and enjoy friendly banter with your competition, and enjoy the good vibes.</i>
                     
                      </p>
                    </div>

                    <div className="d-flex gap-3 mt-3 justify-content-center align-items-center">
                      <a
                        href="https://discord.gg/rumblebirds"
                        className="socialIcons"
                      >
                        <i className="fa-brands fa-discord"/>
                      </a>
                      <a
                        href="https://twitter.com/RumbleBirds"
                        className="socialIcons"
                      >
                        <i className="fa-brands fa-twitter-square"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gap">
          <img
            src={require("../images/roadmap.jpeg").default}
            className="gapImg"
            alt=""
          />
          <div className="gapOverlay"/>
        </div>
      </div>
    </>
  );
};

export default Rubmle;

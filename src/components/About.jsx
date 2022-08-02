import React, { useContext, useState } from "react";
import { mainContext } from "../Contexts/mainContext";
import Web3 from "web3";

const About = () => {
    const { account, contract, provider } = useContext(mainContext);
    const [ethCounter, setEthCounter] = useState(1);
    const [loading, setLoading] = useState(null);
    const [message, setMessage] = useState(null);
    const [totalSupplyState, setTotalSupply] = useState(0);

    const solMint = () => {
        console.log("sol function is calling");
    };

    const ethMint = async () => {
        if (account) {
            console.log("eth function is calling");
            try {
                setLoading('mintingEth');
                await contract.methods.totalSupply().call(function (err, res) {
                    if (err) {
                        console.log("An error occured", err);
                        return;
                    } else {
                        setTotalSupply(res);
                        console.log(res)
                    }
                })
                // const web3 = new Web3(window.ethereum);
                contract.methods.mint(ethCounter).send({
                    from: account,
                    value: totalSupplyState > 2000 ? provider.utils.toWei((0.025 * ethCounter).toString(), "ether"): provider.utils.toWei((0).toString(), "ether")
                }).then(() => {
                    setLoading(null);
                    setMessage("Congratulations, your Rumble Birds minted successfully!");
                    // alert("Minting Successful");
                }).catch(e => {
                    setLoading(null);
                    console.log(e);
                    setMessage(e.message);
                });
            } catch (e) {
                setLoading(null);
                console.log(e);
            }
        }
    };

    return (
        <>
            <div className="bannerOne">
                <div className="container-fluid p-0 mt-md-5" id="about">

                    <div className="row">
                        <div className="col-10 col-md-7 mx-auto p-md-4">
                            <div className="customCard1 width100 py-4 px-5 mt-4 mb-5">
                                <p className="para para1">
                                    Rumble Birds is an idea that sparked from the Twitter
                                    community, where a rivalry is taking place to see which is
                                    the better block chain. So we decided to give Sol and Eth a
                                    project in which they are given equal playing ground to
                                    prove to the nft/crypto community who the Champion really
                                    is. RB is a 10,000 NFT collection with 5,000 Birds on
                                    Ethereum and 5,000 on Solana. We are a Dual Chain collection
                                    to carry on the friendly competition that’s been created by
                                    the banter on Twitter. This game will be competitive but
                                    fun! We are one community now and it’s time to show we can
                                    come together, compete and have good vibes!
                                </p>
                                <b className="text-center">Join the Discord for <br /> more info.</b>
                            </div>
                        </div>
                        <div className="col-10 col-md-9 mx-auto">
                            <h1
                                className="currency mt-0 text-chooseteamfont choose-your-team-text marginTop"
                                style={{
                                    lineHeight: "0.9em",
                                }}
                            >
                                CHOOSE YOUR TEAM
                            </h1>
                        </div>

                        <div
                            className="col-10 col-md-6 mx-auto d-flex flex-column align-items-center align-items-md-end leftSection pb-4 pe-auto pe-md-5">
                            <div className="customCard shadow h-100">
                                <h1
                                    className="cardHeading text-center currencyOne mt-0 text-chooseteamfont text-uppercase"
                                    style={{ letterSpacing: "0.01em", fontSize: "24px" }}
                                >
                                    Team SOL <br /> Mint Your Rumble Bird
                                </h1>

                                <p
                                    className="para mt-4 text-dinnextlight"
                                    style={{ fontSize: "17px" }}
                                >
                                    SOL Rumble Birds are a collection of pixelated NFTs that
                                    setup their rumble camp on the Solana blockchain
                                </p>
                                <p
                                    className="para text-dinnextlight"
                                    style={{ fontSize: "17px" }}
                                >
                                    And are at war against the ETH Rumble Birds battling it out
                                    for the title of best blockchain champion.
                                </p>
                                <p className="text-center bold para mb-0">
                                    Minting will open to the public <br /> June 15th @ 7pm EST
                                </p>


                                <div className="text-center mb-3 mt-5">
                                    <a href="https://solana.rumblebirds.com/" className="text-decoration-none mintBtn px-5">MINT</a>
                                </div>

                            </div>
                        </div>

                        <div
                            className="col-10 col-md-6 mx-auto d-flex flex-column align-items-center align-items-md-start   rightSection pb-4 ps-auto ps-md-5">
                            <div className="customCard shadow">
                                <h1
                                    className="cardHeading text-chooseteamfont currencyOne text-uppercase text-center"
                                    style={{ letterSpacing: "0.01em", fontSize: "24px", marginTop: "0" }}
                                >
                                    team ETH <br /> Mint Your Rumble Bird
                                </h1>

                                <p
                                    className="para mt-4 text-dinnextlight"
                                    style={{ fontSize: "17px" }}
                                >
                                    ETH Rumble Birds are a collection of pixelated NFTs that
                                    setup their rumble camp on the Solana blockchain
                                </p>

                                <p
                                    className="para text-dinnextlight"
                                    style={{ fontSize: "17px" }}
                                >
                                    And are at war against the SOL Rumble Birds battling it out
                                    for the title of best blockchain champion.
                                </p>

                                <p className="text-center bold para mb-4">
                                    Minting will open to the public <br /> June 15th @ 7pm EST
                                </p>


                                <div>
                                    <div className="input-group mb-3 justify-content-center">
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => {
                                            const value = ethCounter - 1;
                                            if (value > 0) { setEthCounter(value); }
                                        }}>
                                            -
                                        </button>
                                        <input type="number" max="20" value={ethCounter} readOnly className="form-control text-center"
                                            style={{ maxWidth: '25%' }} />
                                        <button className="btn btn-outline-secondary" type="button" onClick={() => {
                                            if (ethCounter < 20) {
                                                setEthCounter(ethCounter + 1)
                                            }
                                        }}>
                                            +
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <button onClick={() => ethMint()} className="mintBtn" disabled={loading === 'mintingEth'}>
                                            {
                                                loading === 'mintingEth' ?
                                                    <div className="spinner-border text-light" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div> :
                                                    'MINT'
                                            }
                                        </button>
                                    </div>
                                </div>


                                {
                                    message &&
                                    <div className="alert alert-secondary mt-3 msgPara" role="alert">
                                        <p>  {message}</p>

                                    </div>
                                }

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default About;

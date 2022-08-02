import React, { useState, useEffect } from "react";
import About from "./components/About";
import Roadmap from "./components/Roadmap";
import Rubmle from "./components/Rumble";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import { mainContext } from './Contexts/mainContext';
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import NewBanner from "./components/NewBanner";
import contractAbi from "./Abis/lmac.json";


function App() {
    let [ChainId, setChainId] = useState();
    let [account, setAccount] = useState();
    const [provider, setProvider] = useState();
    const [contract, setContract] = useState();
    const [render, setRender] = useState();
    const contractAddress = '0x83e495BE3549A302D1E72b4F520127ec042b7d58'

    const data = async (provider) => {
        const newWeb3 = new Web3(provider);
        setProvider(newWeb3);
        const cId = await newWeb3.eth.getChainId();
        setChainId(ChainId = cId);
        console.log(ChainId);
        if (ChainId == 1) {
            loadContract()
            const accounts = await newWeb3.eth.getAccounts();
            setAccount(accounts[0]);
            console.log(accounts[0]);
        } else {
            alert('Please change chain to Ethereum Network')
        }
    }

    const loadContract = () => {
        window.web3 = new Web3(window.ethereum);
        const web3 = window.web3;
        const contract = new web3.eth.Contract(
            contractAbi.abi,
            contractAddress
        )
        setContract(contract)
        console.log(contract)
    };

    useEffect(() => {
        try {
            loadContract()
        } catch (e) {
            console.log(e)
        }
    }, [])

    const loadWeb3 = async () => {
        try {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        rpc: {
                            4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
                            1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
                        },
                        chainId: [4, 1]
                    }
                }
            };

            const web3Modal = new Web3Modal({
                cacheProvider: false,
                providerOptions,
                disableInjectedProvider: false,
            });
            const preProvider = await web3Modal.connect();
            window.ethereum.on("chainChanged", async (chainId) => {
                if (chainId === "0x4" || chainId === "0x1") {
                    loadContract()
                } else {
                    alert('Please change chain to Rinkeby || Ethereum Network')
                }
            });
            window.ethereum.on("accountsChanged", async (accounts) => {
                setAccount(account = accounts[0]);
            });
            await web3Modal.toggleModal();
            data(preProvider).then(r => { });
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <mainContext.Provider
            value={{
                provider, contract, render, setRender, account, loadWeb3
            }}
        >
            <div className="container-fluid p-1">
                <MainHeader />
                <NewBanner />
                <About />
                <Rubmle />
                <Roadmap />
                <MainFooter />
            </div>
        </mainContext.Provider>
    );
}

export default App;

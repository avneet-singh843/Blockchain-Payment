import { ethers } from 'hardhat';
import { useState, useEffect } from 'react'
import React from 'react';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })

  const [account, setAccount] = useState("not connected")

  useEffect(() => {
    const template = async () => {
      const contractAddress = "";
      const contractABI = "";

      //META MASK PART
      //1. To do transactions with polygon mumbai testnet
      // 2. Metamask consists of polygon alchemy API(rpc url) which helps connecting with blockchain as our laptop is not capable enough to do so
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: 'eth_requestAccounts'
        });
        setAccount(account);

        const provider = new ethers.providers.Web3Provider(ethereum); //Read Blockchain
        const signer = provider.getSigner(); //Write Blockchain
        const contract = new ethers.Contract(contractAddress, contractABI, signer); //Interact with contract
        // 1. contractAddress - address where contract is deployed
        // 2. contractABI - talk to smartcontract
        // 3. signer - to do transactions

        setState(provider, signer, contract);
      } catch (error) {
        alert(error)
      };

    }
    template();
  }, [])
  return (
    <>
    </>
  );
}


export default App;

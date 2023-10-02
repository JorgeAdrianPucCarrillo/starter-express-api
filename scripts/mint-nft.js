////require("dotenv").config()
//import dotenv from "dotenv";
//dotenv.config();
//const API_URL_ALCHEMY = process.env.API_URL_ALCHEMY
////import from
//console.log(API_URL_ALCHEMY)
//import createAlchemyWeb3 from "@alch/alchemy-web3"
////const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
//console.log()
//const web3 = createAlchemyWeb3.createAlchemyWeb3(API_URL_ALCHEMY)
////import contract from "../artifacts/contracts/MyNFT.sol/MyNFT.json"
////const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json")
////const myNFT = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
//
////import  myNFT from "../artifacts/contracts/MyNFT.sol/MyNFT.json";
////const contract = myNFT
//import * as contract from "../artifacts/contracts/MyNFT.sol/MyNFT.json" assert { type: "json" };
//
//console.log(contract)
//const { API_URL_ALCHEMY, METHAMASKTESTKEY } = process.env;
import dotenv from "dotenv";
dotenv.config();
const API_URL_ALCHEMY = process.env.API_URL_ALCHEMY
const METHAMASK_TEST_PRIVATE_KEY = process.env.METHAMASK_TEST_PRIVATE_KEY
const PUBLIC_KEY = process.env.PUBLIC_KEY
const contractAddress = process.env.CONTRACT_ADDRES //literalmente es el address del contrato cuando usas  npx hardhat --network sepolia run scripts/deploy.js
import createAlchemyWeb3 from "@alch/alchemy-web3"
const web3 = createAlchemyWeb3.createAlchemyWeb3(API_URL_ALCHEMY)
import * as contract from "../artifacts/contracts/MyNFT.sol/MyNFT.json" assert { type: "json" };
console.log(contract.default.abi[0])
const nftContract = new web3.eth.Contract(contract.default.abi, contractAddress);
console.log("NFT SMART CONTRACT COMPLETED")
async function mintNFT(tokenURI) { //el url debe ser el url a un JSON que tiene la informacion del NFT, ver nft-metadata.json
    const nonceAux = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest") //get latest nonce
    //the transaction
    const tx = {
      from: PUBLIC_KEY,
      to: contractAddress,
      nonce: nonceAux,
      gas: 500000,
      data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
    }
    const signPromise = web3.eth.accounts.signTransaction(tx, METHAMASK_TEST_PRIVATE_KEY)
    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          function (err, hash) {
            if (!err) {
              console.log(
                "The hash of your transaction is: ",
                hash,
                "\nCheck Alchemy's Mempool to view the status of your transaction!"
              )
            } else {
              console.log(
                "Something went wrong when submitting your transaction:",
                err
              )
            }
          }
        )
      })
      .catch((err) => {
        console.log(" Promise failed:", err)
      })
}
const testJSON = {
  "attributes": [
    {
      "trait_type": "Test1",
      "value": "Maltipoo"
    },
    {
      "trait_type": "test1-2",
      "value": "Mocha"
    }
  ],
  "description": "test",
  "image": "ipfs://QmcvNdqn3DL4qZMBon4Mz36mznDTZh5uymzBCgAftjwBxn",
  "name": "test"
}

export default mintNFT
//mintNFT('https://yebobacktest.web.app/nft-metadata.json');
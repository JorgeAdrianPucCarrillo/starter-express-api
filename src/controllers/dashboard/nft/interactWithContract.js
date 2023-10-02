const Web3 = require('web3');
const contractAbi = require('./path/to/NFTContract.json'); // Reemplaza con la ruta correcta
const contractAddress = env.CONADRRESEHTER; // Reemplaza con la dirección del contrato desplegado en Ethereum
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'); // Configura tu nodo Ethereum

const privateKey = env.KEYEHTER; // Reemplaza con la clave privada del propietario

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);

const contract = new web3.eth.Contract(contractAbi.abi, contractAddress);

const recipientAddress = env.CONADRRESEHTER; // Dirección del destinatario del NFT
const tokenId = 0; // ID del token a ser creado
const tokenURI = 'https://url-to-your-token-metadata.com'; // URI de metadatos del token

async function mintNFT() {
    const result = await contract.methods.mintNFT(recipientAddress, tokenId, tokenURI).send({ from: account.address });
    console.log('Transaction hash:', result.transactionHash);
}

mintNFT();

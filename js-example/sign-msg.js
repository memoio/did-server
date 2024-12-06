import { ethers } from 'ethers';


const privateKey = "0x3cf6a116a9171fbd2d29b0f93e6a7ae4e890bd5c33249e1d9aae132e74bb1925"

const wallet = new ethers.Wallet(privateKey);


const message = "";

const signature = wallet.signMessage(message);

console.log("signature:", signature);

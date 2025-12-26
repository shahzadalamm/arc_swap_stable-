require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
};import "@nomicfoundation/hardhat-toolbox";

/** @type import('hardhat/config').HardhatUserConfig */
const config = {
  solidity: "0.8.24",
  networks: {
    arcTestnet: {
      url: "https://rpc.testnet.arc.network",
      chainId: 5042002,
      accounts: ["0x054574b3db2de5b6bdd41fdd37a0cd9ee58c3c434e58538975b40a6987dc0288"], // <--- Yahan 0x ke sath apni key likhein
    },
  },
};

export default config;

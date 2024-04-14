const { version } = require("../package.json");
const bscMainnet = require("./tokens/bsc-mainnet.json");
const bscTestnet = require("./tokens/bsc-testnet.json");
const harmonyMainnet = require("./tokens/harmony-mainnet.json");
const harmonyTestnet = require("./tokens/harmony-testnet.json");
const polygonMainnet = require("./tokens/polygon-mainnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "FATEx Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://fatex.io/fatex-token-logo-large.png",
    keywords: ["fatex", "default"],
    tokens: [...bscMainnet, ...bscTestnet, ...harmonyMainnet, ...harmonyTestnet, ...polygonMainnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};

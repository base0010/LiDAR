module.exports = {

  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", 
      gas: 5300000// Match any network id
    }
  }
};

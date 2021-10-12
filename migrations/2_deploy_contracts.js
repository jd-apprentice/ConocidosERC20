const Conocidos = artifacts.require("Conocidos");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Conocidos, 1000000); // Deploy the contract with the initial supply of 1000000
};

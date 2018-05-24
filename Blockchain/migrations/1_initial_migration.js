var Migrations = artifacts.require("./Migrations.sol");
var OpenSesame = artifacts.require("./OpenSesame.sol")
module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(OpenSesame); 
};

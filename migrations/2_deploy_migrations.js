// migrating the appropriate contracts
var ManufacturerRole = artifacts.require("ManufacturerRole.sol");
var DistributorRole = artifacts.require("DistributorRole.sol");
var UserRole = artifacts.require("UserRole.sol");
var main = artifacts.require("main.sol");

module.exports = function(deployer) {
    deployer.deploy(ManufacturerRole);
    deployer.deploy(DistributorRole);
    deployer.deploy(UserRole);
    deployer.deploy(main);
};
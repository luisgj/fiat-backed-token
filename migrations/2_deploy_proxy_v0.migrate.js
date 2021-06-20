/**
 * 2. Deploy upgradeable proxy contract to FiatBacked token logic
 */
const FiatBacked = artifacts.require('FiatBackedV0');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async (deployer, network, accounts) => {
    await deployProxy(
        FiatBacked,
        [
            'NanchesV0',
            'NAN',
            'MXN',
            18,
            accounts[0],
            accounts[0],
            accounts[0],
        ],
        { deployer, initializer: 'initialize' }
    );
};

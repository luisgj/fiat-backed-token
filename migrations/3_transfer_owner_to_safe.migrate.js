/**
 * trasnfer ownership to gnosis multisig safe
 */
const { admin } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer, network) {
  // Gnosis Safe
  const gnosisSafe = '0xD476Dcf0453b49130Fe5D4820cDeaa1679D225Bf';
 
  // Don't change ProxyAdmin ownership for our test network
  if (network === 'rinkeby') {
    // The owner of the ProxyAdmin can upgrade our contracts
    await admin.transferProxyAdminOwnership(gnosisSafe);
  }
};
const FiatBackedV0 = artifacts.require("FiatBackedV0");

const { expect, assert } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const tokens = (n) => {
  return web3.utils.toWei(n, 'ether');
}

contract("FiatBacked Proxy", function (accounts) {
  let fiatToken;

  before(async () => {
    fiatToken = await deployProxy(
        FiatBackedV0,
        [
            'NanchesV0',
            'NAN',
            'MXN',
            18,
            accounts[0],
            accounts[0],
            accounts[0],
        ],
        { initializer: 'initialize' }
    );
  });

  describe("FiatBackedTokenProxy Tests", async () => {

    it("should be initialized with data", async () => {
      assert.equal(await fiatToken.totalSupply(), 0)
      assert.equal(await fiatToken.name(), 'NanchesV0')
      assert.equal(await fiatToken.masterMinter(), accounts[0])
      assert.equal(await fiatToken.owner(), accounts[0])
      assert.equal(await fiatToken.currency(), 'MXN')
    });
  });
});

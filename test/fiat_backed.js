const FiatBacked = artifacts.require("FiatBackedV0");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("FiatBacked", function (/* accounts */) {
  it("should assert true", async function () {
    await FiatBacked.deployed();
    return assert.isTrue(true);
  });
});

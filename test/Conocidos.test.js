const Conocidos = artifacts.require("Conocidos");

contract("Conocidos", (accounts) => {
  before(async () => {
    conocidos = await Conocidos.deployed(); // Deployed instance of the contract
  });

  it("gives the owner of the token 1M tokens", async () => {
    let balance = await conocidos.balanceOf(accounts[0]); // accounts[0] is the owner
    balance = web3.utils.fromWei(balance, "ether"); // balance is in wei, convert to ether
    assert.equal(balance, 1000000); // 1M tokens
  });

  it("transfer tokens between accounts", async () => {
    let amount = web3.utils.toWei("1", "ether"); // 1 ether
    await conocidos.transfer(accounts[1], amount, { from: accounts[0] }); // accounts[1] receives 1 ether

    let balance = await conocidos.balanceOf(accounts[1]); // accounts[1] balance
    balance = web3.utils.fromWei(balance, "ether"); // balance is in wei, convert to ether
    assert.equal(balance, 1); // 1 token
  });
});

/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var openAcc = new Account(this.nextAccountNumber, holder);
    this.nextAccountNumber++;
    openAcc.deposit(balance);
    this.accounts.push(openAcc);
    return openAcc.number;
  }
  return null;
};

Bank.prototype.getAccount = function (number) {
  if (number !== 0 && Number.isInteger(number)) {
    for (var i = 0; i < this.accounts.length; i++) {
      var getAcc = this.accounts[i];
      if (getAcc.number === number) {
        return getAcc;
      }
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }

  var getAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var getAcc = this.accounts[i];
    var getBalance = getAcc.getBalance();
    getAssets += getBalance;
  }
  return getAssets;
};

//business logic

function Account(accountName, amount) {
  this.accountName = accountName;
  this.amount = amount;
}

Account.prototype.deposit = function(depositAmount) {
  this.amount = this.amount + depositAmount;
  return this.amount;
}

Account.prototype.withdraw = function(withdrawAmount) {
  this.amount = this.amount - withdrawAmount;
  return this.amount;
}

//user interface logic

$(document).ready(function() {
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var accountName = $("input#name").val();
    var amount = parseInt($("input#initial-deposit").val());

    var newAccount = new Account(accountName, amount);

    console.log(newAccount)

    $("ul#accounts").append("<li class='account'>" + newAccount.accountName + "</li>");


  });

  $("form#dep-with").submit(function(event) {
    event.preventDefault();

    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());


  })
});

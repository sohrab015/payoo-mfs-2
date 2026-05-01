// initial state

// cash out
document.getElementById("cash-out-section").style.display = "none";

// add money
document.getElementById("add-money-section").style.display = "none";

// transfer
handleToggle("transfer-section", "none");

// transection
document.getElementById("transaction-history").style.display = "none";

// transection
handleToggle("bonus-section", "none");

// pay bill
handleToggle("pay-section", "none");







// after clicked task

// add money
document.getElementById("add-money-box").addEventListener("click", function () {
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";
    handleToggle("transfer-section", "none");
    handleToggle("bonus-section", "none");
    handleToggle("pay-section", "none");

})

// cash out
document.getElementById("cash-out-box").addEventListener("click", function () {
    document.getElementById("cash-out-section").style.display = "block";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("transaction-history").style.display = "none";
    handleToggle("transfer-section", "none");
    handleToggle("bonus-section", "none");
    handleToggle("pay-section", "none");

})

// transfer
document.getElementById("transfer-box").addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("cash-out-section", "none");
    handleToggle("transaction-history", "none");
    handleToggle("transfer-section", "block");
    handleToggle("bonus-section", "none");
    handleToggle("pay-section", "none");

})

// transection
document.getElementById("transaction-box").addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("cash-out-section", "none");
    handleToggle("transaction-history", "block");
    handleToggle("transfer-section", "none");
    handleToggle("bonus-section", "none");
    handleToggle("pay-section", "none");

})

// bonus
document.getElementById("bonus-box").addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("cash-out-section", "none");
    handleToggle("transaction-history", "none");
    handleToggle("transfer-section", "none");
    handleToggle("bonus-section", "block");
    handleToggle("pay-section", "none");

})

// bonus
document.getElementById("bill-box").addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("cash-out-section", "none");
    handleToggle("transaction-history", "none");
    handleToggle("transfer-section", "none");
    handleToggle("bonus-section", "none");
    handleToggle("pay-section", "block");

})
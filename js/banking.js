// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Update account balance 

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalance = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalance;

    // clear the deposit input field
    depositInput.value = '';
});

// Withdraw handler

document.getElementById('withdraw-button').addEventListener
('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');

    const withDrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withDrawAmountText);   

    // Set withdraw total

    const withDrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withDrawTotal.innerText;
    const previouseWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previouseWithdrawTotal + newWithdrawAmount;
    withDrawTotal.innerText = newWithdrawTotal;
     
    // update balance
    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;
    
    // Clear withdraw input

    withDrawTotal.value = '';
})

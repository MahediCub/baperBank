document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositeFild = document.getElementById('deposit-amount');
    const newDepositeAmountString = depositeFild.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
   const depositTotalElement = document.getElementById('deposit-total');
   const prevDepositAmountString = depositTotalElement.innerText;
   const prevDepositAmount = parseFloat(prevDepositAmountString);
   depositTotalElement.innerText = newDepositeAmount;
//    step 4: add numbers to set the deposit
    const currrentAmount = prevDepositAmount + newDepositeAmount;
    depositTotalElement.innerText = currrentAmount;

    // step 5: get balance current total
    const balanceTotal = document.getElementById('balance-fild');
    const prevBalanceTotalString = balanceTotal.innerText;
    const prevBalance = parseFloat(prevBalanceTotalString);
    // step 6: calculate current total balance
    const currentBalanceTotal = prevBalance + newDepositeAmount;
    // set the balance total
    balanceTotal.innerText = currentBalanceTotal;





//    step 7 clear the deposit value
depositeFild.value = '';

})
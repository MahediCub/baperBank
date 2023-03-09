// tep 1 : add event handler 

document.getElementById('btn-withdrawal').addEventListener('click',function(){


// console.log('click withdraw btn')
const withDrawFild = document.getElementById('withdraw-fild');
const newWithdrawAmountString = withDrawFild.value;
const newWithDrawAmount = parseFloat(newWithdrawAmountString);
// step7
withDrawFild.value = '';
if(isNaN(newWithDrawAmount)){
    alert('Please provide a valid number');
    return
}
// step3
const withdrawTotalElement = document.getElementById('withdraw-total');
const prevsWithdrawString = withdrawTotalElement.innerText;
const prevWithdrawTotal = parseFloat(prevsWithdrawString);

// step 6
const balanceTotalElement = document.getElementById('balance-fild');
const prevBalanceTotalString = balanceTotalElement.innerText;
const prevbalanceTotal = parseFloat(prevBalanceTotalString);


if(newWithDrawAmount > prevbalanceTotal){
    alert('Baap er bank a ato taka nai');
    return;
}
// step4
const currentWithdrawTotal = prevWithdrawTotal + newWithDrawAmount;
// step5
withdrawTotalElement.innerText = currentWithdrawTotal;
// step 7
const newBalanceTotal = prevbalanceTotal - newWithDrawAmount;
balanceTotalElement.innerText = newBalanceTotal;



})
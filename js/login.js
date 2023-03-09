document.getElementById('btn-submit').addEventListener('click',function(){
    

    const userEmail = document.getElementById('user-mail');
    const email = userEmail.value;
    const userPass = document.getElementById('pass');
    const password = userPass.value;
   
    if(email === 'mahedi@gmail.com' && password ==='hasan5588'){
        window.location.href='bank.html';
    }
    else{
        alert('Tui password vule gesos');
    }

})
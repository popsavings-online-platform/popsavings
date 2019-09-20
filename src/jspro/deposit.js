$(document).ready(function(){
   

    $('#payment').click(function(e){
        e.preventDefault();

    var fullname = document.querySelector('#fullname').value;
    var email = document.querySelector('#email').value;
    var amount = document.querySelector('#amount').value;
    var namecard = document.querySelector('#namecard').value;
    var creditcard = document.querySelector('#creditcard').value;
    var expmonth = document.querySelector('#expmonth').value;
    var expyear = document.querySelector('#expyear').value;
    var cvv = document.querySelector('#cvv').value;
    var userId = localStorage.getItem("userId")
      
    $.ajax({
        url: "http://localhost:3000/deposit?user_id="+userId,
        method: "post",
        data:{fullname, email, amount, namecard, creditcard, expmonth, expyear, cvv}
       }).done((p) =>{
        //console.log(p);
        alert("Payment Made");
    });
    }); 
});
$(document).ready(function(){

    $('#withdrawal').click(function(e){
        e.preventDefault();
        
    var bankname = document.querySelector('#bankname').value;
    var accountname = document.querySelector('#accountname').value;
    var accountnumber = document.querySelector('#accountnumber').value;
    var amount = document.querySelector('#amount').value;
    var userId = localStorage.getItem("userId")
   
     $.ajax({
        url: "http://localhost:3000/withdraw",
        method:"post",
        data:{bankname, accountname, accountnumber, amount},
    }).done((p) =>{
        //console.log(p);
        alert("Request Received");
    });
       
    });
});
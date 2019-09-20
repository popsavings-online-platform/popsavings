$(document).ready(function(){

    $('#updateaccount').click(function(e){
        e.preventDefault();
           
    var firstname = document.querySelector('#firstname').value;
    var middlename = document.querySelector('#middlename').value;
    var lastname = document.querySelector('#lastname').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var newpassword =document.querySelector('#newpassword').value;

    if (password === newpassword){
        alert("Passwords Match")}
        else{
            alert("Passwords do no match")}
        $.ajax({
            method:"PUT",
            url: "http://localhost:3000/users",
            data:{firstname, middlename, lastname, email, password, newpassword}
        }).done((p) =>{
            //console.log(p);
            alert("User Information Udated");
        });
    
    

       
    });
});
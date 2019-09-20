$(document).ready(function(){

    $('#create').click(function(e){
        e.preventDefault();

    var firstname = document.querySelector('#firstname').value;
    var middlename = document.querySelector('#middlename').value;
    var lastname = document.querySelector('#lastname').value;
    var email = document.querySelector('#email').value;
    var gender = document.querySelector('#gender').value;
    var dateofbirth = document.querySelector('#dateofbirth').value;
    var password = document.querySelector('#password').value;
    var newpassword = document.querySelector('#newpassword').value;      
    var userId = localStorage.getItem("userId")
 
        
        $.ajax({
        url: "http://localhost:3000/users",
        method: "post",
        data:{firstname, middlename, lastname, email, gender, dateofbirth, password, newpassword},
       }).done((p) =>{
           if(password === newpassword){
            localStorage.setItem('userId', response[i].id);
        //console.log(p);
        alert("Account Created");
        window.location.href="dashboard.html";
        return;} else {alert("Passwords do not match")}
        });
    });   
});
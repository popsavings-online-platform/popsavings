$(document).ready(function(){

    $('#login').click(function(){

           
    var email = document.querySelector('#emailvalue').value;
    var password = document.querySelector('#password').value;

    $.ajax({
        url: "http://localhost:3000/users",
        method: "get"
      }).done(function(response) {
        for(var i=0; i < response.length; i++){
            if((email === response[i].email) && (password === response[i].password)){
              localStorage.setItem('userId', response[i].id);
              alert("successful");
                window.location.href="dashboard.html";
                return;
            } 

          }
      })   
    });
});
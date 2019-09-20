const axios = require('axios').default;

  axios.post('http://localhost:6000/users', {
    Name: 'Fred',
    password: 'Flintstone',
    email:'fred@gmail.com'
  })
  .then(function (response) {
    console.log(response);
   })
  // .catch(function (error) {
  //   console.log(error);
  // });
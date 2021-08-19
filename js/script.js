document.getElementById('login-submit').addEventListener
('click', function(){
    // Get user Email
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
//   Password
const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;
//   Verify user details
    if(userEmail == 'bapperbeta@elon.com' && userPassword == 'hello'){
        window.location.href = 'banking.html';
    }
})


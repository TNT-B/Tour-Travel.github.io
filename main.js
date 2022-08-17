function signup(e) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let con_password = document.getElementById("con_password").value;
    let user = {
      username: username,
      email: email,
      password: password,
    };
    if(username == '' || email == '' || password == '' || con_password == '')
    {
      alert("User information cannot be left blank, please try again !")
    }
    else{
      let json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Sign up successfully !");
    }
    
  }


  function login(e) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    if (!user) {
      alert("Please enter username password");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      alert("Login successfully !");
      window.location.href = "index.html";
    } else {
      alert("Login failed, please try again !");
    }
  }
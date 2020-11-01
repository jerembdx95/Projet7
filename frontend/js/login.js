let url = "http://localhost:3000/";

//login function

function loginUser() {

    let submitlogin = document.getElementById("login-form");

    submitlogin.addEventListener('submit', function(e){
        e.preventDefault();

  fetch(url + "api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email-login").value,
      password: document.getElementById("password-login").value,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (userData) {
      if (!userData.id) {
        alert("email ou password invalide");
      } else {
        localStorage.setItem("id", userData.id);
        localStorage.setItem("token", userData.token);
        localStorage.setItem("name", userData.firstname);
        localStorage.setItem("surname", userData.lastname);
        localStorage.setItem("email", document.getElementById("email-login").value);

        console.log(userData.token);
        let appUrl = "../html/accueil.html";
        window.location = appUrl;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

    )}
let url = "http://localhost:3000/";

function signup(){ 
 
    let submit = document.getElementById("Form");

    submit.addEventListener('submit', function(e){
     e.preventDefault();

     fetch(url + "api/auth/signup", {
        method: "POST",
  
        headers: {
            "Content-Type": "application/json",
          Authorization: "Bearer <token>",
        },
        body: JSON.stringify({
          lastname: document.getElementById("nom").value,
          firstname: document.getElementById("prenom").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
        }),
      })
        .then(function (response) {
          status = response.status;
          if (status == 201) {
            alert("Login créé. Veuillez vous reconnecter");
            window.location = "/frontend/html/login.html";
            return response.json();
          } else {
            alert("Le compte n'a pas pu être créé. L'email est déjà existant dans notre base de données ou le mot de passe renseigné ne correspond pas au format attendu.");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } 
    )}
  
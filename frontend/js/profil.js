
let url = "http://localhost:3000/";

/////// Affichage Nom //////

let nom = document.getElementById('prenom');
var name_profil = localStorage.getItem('name');
let affichage_profil = document.createElement("p");
nom.appendChild(affichage_profil);

nom.innerHTML = "Name :  " + name_profil ;


/////// Affichage Prenom //////

let surname = document.getElementById('Nom');
var surname_profil = localStorage.getItem('surname');
let affichage_prenom = document.createElement("p");
surname.appendChild(affichage_prenom);

surname.innerHTML = "Surname :  " + surname_profil ;


/////// Affichage Email //////

let email = document.getElementById('email');
var email_profil = localStorage.getItem('email');
let affichage_email = document.createElement("p");
email.appendChild(affichage_email);

email.innerHTML = "Email :  " + email_profil ;


/////// Affichage ID //////

let id = document.getElementById('id');
var id_profil = localStorage.getItem('id');
let affichage_id = document.createElement("p");
id.appendChild(affichage_id);

id.innerHTML = "Id User :  " + id_profil ;





/////// Delete User ///////


function deleteUser() {

    let btnDeleteAccount = document.getElementById("delete_user");



    btnDeleteAccount.addEventListener("click", ($event) => {
    let id = localStorage.getItem("id")  

    fetch(url + "api/profil/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function () {
        alert("Le compte a été supprimé");
        window.location = "../html/login.html";
      });
  }
    )};
  
  
  
  
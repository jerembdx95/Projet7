

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


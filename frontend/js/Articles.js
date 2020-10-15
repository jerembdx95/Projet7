let url = "http://localhost:3000/";
let produit;
let post = [];
let articles = [];
let liste_article ;



/////// Affichage Bienvenue  //////

let welcome = document.getElementById('bienvenue');
var name = localStorage.getItem('name');
let affichage_welcome = document.createElement("p");
welcome.appendChild(affichage_welcome);
welcome.innerHTML = "Bonjour " + name  + " ici vous pouvez créer vos articles <br> et les partager avec vos collègues ! 👇";

//////// CREATION ARTICLE /////////

  function createArticle() {

  let submitArticle = document.getElementById("Create_article");

   submitArticle.addEventListener('submit', function(e){
    e.preventDefault();
    fetch(url + "api/article", {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json" },
      body: JSON.stringify({
      titre: document.getElementById("article-nom").value,
      description : document.getElementById("description").value,
      firstname : localStorage.getItem("name"),
      surname : localStorage.getItem("surname"),
      }),
    })
      .then(function (response) {
        status = response.status;
        if (status == 201) {
          location.reload();
          return response.json();
        } else {
            alert("Le post n'a pas pu être créé.");
          }
        })
      
      .catch((error) => {
        console.log(error);
      });
    })}

    
  //////// AFFICHAGE ARTICLES /////////


  function getAllArticles (){
    fetch(url + "api/article", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (article) {
        console.log(article);
        console.log(article.length)

        if (article.length > 0){ 

        let listeArticle = document.getElementById("NewsFeed");

        article.forEach((article) => {
    
            let articleContenant = document.createElement("div");
            let info = document.createElement('p')
            let id_article = document.createElement('p')
            let deleteElement = document.createElement('p')
            let articleTitre = document.createElement("h1");
            let articleTrait = document.createElement("hr")
            let articleDescription = document.createElement("p");

            articleContenant.setAttribute("class", "post")
            articleContenant.setAttribute("id", article.id)
            articleTitre.setAttribute("class", "titre-article");
            articleDescription.setAttribute("class", "description-article");
            deleteElement.setAttribute("class", "delete");
            info.setAttribute("class", "info")

            listeArticle.appendChild(articleContenant);
            articleContenant.appendChild(info);
            articleContenant.appendChild(id_article);
            articleContenant.appendChild(deleteElement);
            articleContenant.appendChild(articleTitre);
            articleContenant.appendChild(articleTrait);
            articleContenant.appendChild(articleDescription);

            info.innerHTML = "Posté par " + article.firstname + " " + article.surname;
            deleteElement.innerHTML = "☠️";
            id_article.innerHTML = "post n° " + article.id;

            articleTitre.innerHTML = article.name;
            articleDescription.innerHTML = article.description;


//* commentaire *//


let commentaireContenant = document.createElement("div");
let commentaire  = document.createElement('textarea');
let submitCommentaire = document.createElement('button');

articleContenant.appendChild(commentaireContenant);
commentaireContenant.appendChild(commentaire);
commentaireContenant.appendChild(submitCommentaire);

submitCommentaire.innerHTML = "post"
commentaire.placeholder= "Donner votre avis"

commentaire.setAttribute("id", "commentaire");
submitCommentaire.setAttribute("id", "post_commentaire")

          });
        }
        
      })
  
      .catch((error) => {
        console.log(error);
      });
  }


//////// Supression article /////////

function deleteArticle (){  
removeArticle = document.getElementsByClassName("delete")
removeArticle.addEventListener("click", ($event) => {
  $event.preventDefault();
  
  fetch(url + "api/article/" + article.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(
      alert("Article supprimé")
    )
    .catch((error) => {
      console.log(error);
    });
})}
let url = "http://localhost:3000/";
let produit;

let articles = [];
let liste_article ;

/////// Affichage Bienvenue  //////

let welcome = document.getElementById('bienvenue');
var name = localStorage.getItem('name');
let affichage_welcome = document.createElement("p");
welcome.appendChild(affichage_welcome);
welcome.innerHTML = "Bonjour " + name + "🏠" ;

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
       
        if (article.length > 0){ 

        let listeArticle = document.getElementById("NewsFeed");

        let Erreur = document.getElementById("zero_news");
        Erreur.innerHTML = "";

        let titre_session = document.createElement("h1");
        listeArticle.appendChild(titre_session);
        titre_session.innerHTML = "Actualités 🌎";
       
        article.forEach((article) => {
    
            let articleContenant = document.createElement("div");
            let info = document.createElement('p')
            let deleteContenant = document.createElement('div')
            let deleteElement = document.createElement('p')
            let articleTitre = document.createElement("h1");
            let articleTrait = document.createElement("hr");
            let articleDescription = document.createElement("p");
            let commentaireTrait = document.createElement("hr");

            articleContenant.setAttribute("class", "post")
            articleContenant.setAttribute("id", article.id)
            articleTitre.setAttribute("class", "titre-article");
            articleDescription.setAttribute("class", "description-article");
            deleteElement.setAttribute("id", "delete");
            info.setAttribute("class", "info");
            deleteContenant.setAttribute("class", "delete_contenant");
            commentaireTrait.setAttribute("id", "trait_separation");
            titre_session.setAttribute("id", "titre_session")

            listeArticle.appendChild(articleContenant);
            articleContenant.appendChild(info);
            articleContenant.appendChild(deleteContenant);
            deleteContenant.appendChild(deleteElement)
            articleContenant.appendChild(articleTitre);
            articleContenant.appendChild(articleTrait);
            articleContenant.appendChild(articleDescription);
            articleContenant.appendChild(commentaireTrait);

            info.innerHTML = "Posté par " + article.firstname + " " + article.surname + " ✉️";
            deleteElement.innerHTML = "❌";
            articleTitre.innerHTML = article.name;
            articleDescription.innerHTML = article.description;

            ///* ajout id ////

            articleContenant.addEventListener("mouseenter", () =>{
              localStorage.setItem("idArticle", article.id)
              
            })
            articleContenant.addEventListener("mouseleave", () =>{
              localStorage.removeItem("idArticle")
              
            })

            //////// Supression article /////////

    
    deleteElement.addEventListener("click", ($event) => {
    $event.preventDefault();
    
    fetch(url + "api/article/" + localStorage.getItem("idArticle"), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        location.reload();
        return response.json();

      })
      .then(
        alert("Commentaire supprimée")
      )
      .catch((error) => {
        console.log(error);
      });
  
    })

//* commentaire text aréa *//


let commentaireContenant = document.createElement("div");
let commentaire  = document.createElement('textarea');
let submitCommentaire = document.createElement('button');

articleContenant.appendChild(commentaireContenant);
commentaireContenant.appendChild(commentaire);
articleContenant.appendChild(submitCommentaire);

submitCommentaire.innerHTML = "Post"
commentaire.placeholder= "Donner votre avis"

commentaire.setAttribute("id", "commentaire");
submitCommentaire.setAttribute("class", "post_commentaire")
commentaireContenant.setAttribute("id", "advice")


//////////////* Création commentaire */////////////


submitCommentaire.addEventListener("click", ($event) => {
  $event.preventDefault();
   
  fetch(url + "api/commentaire", {
    method: "POST",
    headers: { Authorization: "Bearer " + localStorage.getItem("token"), 
    "Content-Type": "application/json"},
    body: JSON.stringify({
      user_id :     localStorage.getItem("id"),
      commentaire : document.getElementById("commentaire").value,
      firstname:    localStorage.getItem("name"),
      lastname :    localStorage.getItem("surname"),
      article_id :  localStorage.getItem("idArticle"),
      }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(
      location.reload(),
      alert("Commentaire ajouté")
    )
    .catch((error) => {
      console.log(error);
    });

});
          });
        }
      })

      .catch((error) => {
        console.log(error);
      });

    }
    















 




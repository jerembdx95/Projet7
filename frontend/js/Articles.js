let url = "http://localhost:3000/";
let produit;
let pst = [];
let articles = [];
let liste_article ;


/////// Affichage Bienvenue  //////

let welcome = document.getElementById('bienvenue');
var name = localStorage.getItem('name');
let affichage_welcome = document.createElement("p");
welcome.appendChild(affichage_welcome);
welcome.innerHTML = "Welcome back " + name ;

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
      }),
    })
      .then(function (response) {
        status = response.status;
        if (status == 201) {
          alert("post créé");
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

        let listeArticle = document.getElementById("NewsFeed");

        article.forEach((article) => {
    
            let articleContenant = document.createElement("div");
            let articleTitre = document.createElement("h1");
            let articleDescription = document.createElement("p");
      
            articleTitre.setAttribute("class", "titre-article");
            articleDescription.setAttribute("class", "description-article");
            
            listeArticle.appendChild(articleContenant);
            articleContenant.appendChild(articleTitre);
            articleContenant.appendChild(articleDescription);
        
            articleTitre.innerHTML = article.name;
            articleDescription.innerHTML = article.description;
          });




        return article;
       
      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  
    
      

/*

function getArticles(article) {

    console.log(article);
   
    let listeArticle = document.getElementById("NewsFeed");

    article.forEach((article) => {

        let articleContenant = document.createElement("div");
        let articleTitre = document.createElement("h1");
        let articleDescription = document.createElement("p");
    
        articleContenant.setAttribute("href", "article.html?id=" + article.id);
        articleTitre.setAttribute("class", "titre-article");
        articleDescription.setAttribute("class", "description-article");
        
        listeArticle.appendChild(articleContenant);
        articleTitre.appendChild(articleDescription);
    
        articleTitre.innerHTML = article.name;
        articleDescription.innerHTML = article.description;
      });
    }
    */



 

  
//////// Supression article /////////





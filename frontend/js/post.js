let url = "http://localhost:3000/";
let idPost = "";

///// Page article /////

let idArticle = "";

function getOneArticle() {
  idArticle = location.search.substring(4);
  fetch(url + "api/article/" + idArticle, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (oneArticle) {
      getArticle(oneArticle);
      console.log(oneArticle);
      return oneArticle;
    })
    .catch((error) => {
      console.log(error);
    });
}


function getArticle(oneArticle) {
  console.log(oneArticle);

  article_page = document.getElementById("article_page");

  let articleContenant = document.createElement("div");
         
            let info = document.createElement('p')
            let id_article = document.createElement('p')
            let deleteElement = document.createElement('button')
            let articleTitre = document.createElement("h1");
            let articleTrait = document.createElement("hr")
            let articleDescription = document.createElement("p");

            articleContenant.setAttribute("class", "post_page")
  
            articleContenant.setAttribute("id", oneArticle.id)
            articleTitre.setAttribute("class", "titre-article");
            articleDescription.setAttribute("class", "description-article");
            deleteElement.setAttribute("id", "delete_post");
            info.setAttribute("class", "info")

            article_page.appendChild(articleContenant);
            articleContenant.appendChild(info);
          
            articleContenant.appendChild(id_article);
            articleContenant.appendChild(deleteElement);
            articleContenant.appendChild(articleTitre);
            articleContenant.appendChild(articleTrait);
            articleContenant.appendChild(articleDescription);

            info.innerHTML = "Posté par " + oneArticle.firstname + " " + oneArticle.surname;
            deleteElement.innerHTML = "delete";
            id_article.innerHTML = "post n° " + oneArticle.id;

            articleTitre.innerHTML = oneArticle.name;
            articleDescription.innerHTML = oneArticle.description;


            //* menu commentaire *//


let commentaireContenant = document.createElement("div");
let commentaire  = document.createElement('textarea');
let submitCommentaire = document.createElement('button');

article_page.appendChild(commentaireContenant);
commentaireContenant.appendChild(commentaire);
commentaireContenant.appendChild(submitCommentaire);

submitCommentaire.innerHTML = "post";
commentaire.placeholder= "Donner votre avis";
commentaireContenant.setAttribute("class", "com");

commentaire.setAttribute("id", "commentaire");
submitCommentaire.setAttribute("id", "post_commentaire");

  
}

//////// Supression article /////////

function deleteArticle (){  

  let btnDeletePost = document.getElementById('delete')
  btnDeletePost.addEventListener("click", () => {
   
    console.log("clixk");
    idPost=  location.search.substring(4);;
    fetch(url + "api/article/" + idPost, {
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
        alert("Le poste à été suprimé"),
    
        window.location = "/frontend/html/accueil.html"

      )
      .catch((error) => {
        console.log(error);
      });

    
  })}

  
  


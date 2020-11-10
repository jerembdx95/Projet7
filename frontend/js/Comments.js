let submitCommentaire = document.getElementsByClassName("post_commentaire");
let idCommentaire;

////////////////* Affichage Commentaire *////////////////

function getAllCommentaires() {
  fetch(url + "api/commentaire", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (commentaire) {
      console.log(commentaire);

        let idArticle = document.querySelector(".post").id;
        let listeCommentaire= document.querySelector(".post");
      
  commentaire.filter(function(commentaire) {return commentaire.article_id==idArticle}).forEach((commentaire) =>{
  
  let commentaireContenant = document.createElement("div");
  let commentaireDelete = document.createElement("p")
  let commentaireAuteur = document.createElement("p");
  let commentaireText = document.createElement("p");
  
  listeCommentaire.appendChild(commentaireContenant);
  commentaireContenant.appendChild(commentaireDelete);
  commentaireContenant.appendChild(commentaireAuteur);
  commentaireContenant.appendChild(commentaireText);

  commentaireContenant.setAttribute("class", "detail_commentaire");
  commentaireDelete.setAttribute("class", "delete_commentaire");
  commentaireAuteur.setAttribute("class", "name_commentaire");
  commentaireContenant.setAttribute("class", "commentaire_contenant")

  commentaireDelete.innerHTML = "🚫";
  commentaireText.innerHTML= commentaire.commentaire;

           /* Mise en Forme de la date  */
           let date= new Date(commentaire.time);
           let dateArticle = date.getDate() +
           "/" +
           (date.getMonth() + 1) +
           "/" +
           date.getFullYear() +
           " à " +
           date.getHours() +
           ":" +
           ("0" + date.getMinutes()).slice(-2);

  commentaireAuteur.innerHTML =  commentaire.firstname + " " + commentaire.lastname + " 🗯️ " + " le " + dateArticle;

  ///* ajout id Commentaire ////

commentaireContenant.addEventListener("mouseenter", () => {
  localStorage.setItem("idCommentaire", commentaire.id)
})
commentaireContenant.addEventListener("mouseleave", () => {
  localStorage.removeItem("idCommentaire")
})

////* Delete Commentaire *////

let removeCommentaire= document.querySelectorAll(".delete_commentaire");
if (localStorage.getItem("id") == commentaire.user_id){ 

for (i=0; i< removeCommentaire.length; i++ ){ 

removeCommentaire[i].addEventListener("click", () => {
 
  fetch(url + "api/commentaire/" + localStorage.getItem("idCommentaire"), {
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
      location.reload(),
    )
    .catch((error) => {
      console.log(error);
    });

  }); 
  }}
else{ commentaireDelete.innerHTML = "";}
}
  ) })}







      



  


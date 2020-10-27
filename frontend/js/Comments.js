let submitCommentaire = document.getElementsByClassName("post_commentaire");

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

      let listeCommentaire= document.querySelector(".post")
     
      commentaire.filter(function(commentaire) {return commentaire.article_id == listeCommentaire.id}).forEach ( (commentaire) => {
  
        let listeCommentaire= document.querySelector(".post")
    
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
        commentaireAuteur.innerHTML = commentaire.firstname + " " + commentaire.lastname;

///* ajout id Commentaire ////

commentaireContenant.addEventListener("mouseenter", () =>{
  localStorage.setItem("idCommentaire", commentaire.id)
  
})
commentaireContenant.addEventListener("mouseleave", () =>{
  localStorage.removeItem("idCommentaire")
})

////////// Delete Commentaire //////////

let removeCommentaire= document.querySelector(".delete_commentaire");

removeCommentaire.addEventListener("click", () => {
 
  
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
})})}

  


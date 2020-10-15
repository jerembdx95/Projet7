/////// Create commentaires ////////////

function createCommentaire() {

    let submitCommentaire = document.getElementById("postcommenataire");

    submitCommentaire.addEventListener("click", () => {
        
  
    fetch( "http://localhost:3000/api/commentaire", {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("token"), },
      body: JSON.stringify({
        user : localStorage.getItem("id"),
        firstname: localStorage.getItem("name"),
        lastname : localStorage.getItem("surname"),
        article_id : location.search.substring(4),
        commentaire : document.getElementById("commentaire").value,
        
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
  }
  )}


  
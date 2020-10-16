/////// Create commentaires ////////////

function createCommentaire() {

    let submitCommentaire = document.getElementById("add");

    submitCommentaire.addEventListener("click", () => {
        
   
      fetch(url + "api/commentaire", {
        method: "POST",
        headers: { Authorization: "Bearer " + localStorage.getItem("token"), },
        body: JSON.stringify({
          user_id : localStorage.getItem("id"),
          commentaire : document.getElementById("commentaire").value,
          firstname: localStorage.getItem("name"),
          lastname : localStorage.getItem("surname"),
          article_id : localStorage.getItem("idArticle"),
          
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


  
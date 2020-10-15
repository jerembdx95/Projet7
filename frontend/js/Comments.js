/////// Create commentaires ////////////

function createCommentaire() {

    let submitCommentaire = document.getElementById("form-commentaire");

    submitCommentaire.addEventListener("submit", ($event) => {
        $event.preventDefault();

    console.log(id);
    fetch(url + "api/commentaire", {
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem("token"), },
      body: JSON.stringify({
        firstname: localStorage.getItem("name"),
        lastname : localStorage.getItem("surname"),
        commentaire : document.getElementById("commentaire").value,
        article_id : "",
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


  //////// Affichage Commentaires ////////
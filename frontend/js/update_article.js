function updateArticle (){

    fetch(url + "api/article/" + idArticle, {
        method: "PATCH",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        body: JSON.stringify({
            name: document.querySelector(".updateTitre").value,
            description: document.querySelector(".updateTexte").value,
      })
        .then(function (response) {
          return response.json();
        })
        .then(
        location.reload()
        )
        .catch((error) => {
          console.log(error);
        })
    }

    )
}
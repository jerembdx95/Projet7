let url = "http://localhost:3000/";


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
}
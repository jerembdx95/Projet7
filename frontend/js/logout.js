function logout() {
    let logOutBtn = document.getElementById("logout")

    logOutBtn.onclick = function (){ 
        localStorage.clear();
        window.location = "/frontend/html/login.html";
    }}

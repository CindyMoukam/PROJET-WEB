

const logout = document.getElementById("logout");

logout.addEventListener("click", (e) => {
    //e.preventDefault();
    console.log("Is Ok !");
    localStorage.removeItem("token");
})
function addUser(){

    name_of_user = document.getElementById("name_of_user").value;

    localStorage.setItem("User name", name_of_user);

    window.location = "lc_room.html";

}
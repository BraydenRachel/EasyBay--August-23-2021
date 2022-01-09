console.log("page loading...");

var cookieDiv = document.querySelector("#alert");
var sucImg = document.querySelector("#succulent-img");

function accept() {
    cookieDiv.remove();
}

function cart() {
    alert("Your cart is empty!");
}

function change(element) {
    sucImg.src = "succulents-2.jpg";
}
function change2(element) {
    sucImg.src = "succulents-1.jpg";
}
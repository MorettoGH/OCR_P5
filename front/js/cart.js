let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

function createKanapInCart(){
    let element = document.querySelector("#cart__items");
    let newArticle = document.createElement("article");
    let newDiv_1 = document.createElement("div");
    let newDiv_2 = document.createElement("div");
    let newDivInDiv_1 = document.createElement("div");
    let newDivInDiv_2 = document.createElement("div");
    let newImage = document.createElement("img");
    let newTitle = document.createElement("h2");
    let newColor = document.createElement("p");
    let newPrice = document.createElement("p");
    let newDiv_again = document.createElement("div")
    let newDiv_again_2 = document.createElement("div")
    let newQuantity = document.createElement("p");
    let newInput = document.createElement("input");
    let newDelete = document.createElement("p");

    let kanapInCart = cart.filter(item => item.quantity);
    console.log(kanapInCart);

    element.appendChild(newArticle);
    newArticle.appendChild(newDiv_1);
    newArticle.appendChild(newDiv_2);
    newDiv_1.appendChild(newImage);
    newDiv_2.appendChild(newDivInDiv_1);
    newDiv_2.appendChild(newDivInDiv_2);
    newDivInDiv_1.appendChild(newTitle);
    newDivInDiv_1.appendChild(newColor);
    newDivInDiv_1.appendChild(newPrice);
    newDivInDiv_2.appendChild(newDiv_again);
    newDivInDiv_2.appendChild(newDiv_again_2);
    newDiv_again.appendChild(newQuantity)
    newDiv_again.appendChild(newInput);
    newDiv_again_2.appendChild(newDelete);
}

for (let kanap of cart) {
    createKanapInCart(kanap);
}
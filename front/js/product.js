// l'ID de l'url est stocké dans une variable
let urlParams = new URLSearchParams(document.location.search);
let productId = urlParams.get("id");

// fonction qui affiche les bonnes datas liée à l'ID
function kanapItem(item){
    let element = document.querySelector(".item__img");
    let itemImage = document.createElement("img");
    let itemTitle = document.getElementById("title");
    let itemPrice = document.getElementById("price");
    let itemDescription = document.getElementById("description");
    
    itemImage.src = item.imageUrl;
    itemImage.alt = item.altTxt;
    itemTitle.textContent = item.name;
    itemPrice.textContent = item.price;
    itemDescription.textContent = item.description;
    element.appendChild(itemImage);
}

// fonction qui injecte les datas du array "colors" dans le menu déroulant
function kanapColors(color){
    let select = document.getElementById("colors"); 
    let option = document.createElement("option");
    
    option.value = color;
    option.textContent = color;
    select.appendChild(option);
}

// requête GET pour avoir les data "_id" de l'API + l'execution des fonctions
fetch("http://localhost:3000/API/products/" + productId)
    .then(function(res) {
        if (res.ok) {
            return res.json();
    }
    })
    .then(function(item) {
        kanapItem(item);
        for (let color of item.colors){
            kanapColors(color);
        }    
    });

      
    
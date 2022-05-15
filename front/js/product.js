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

// le bouton "ajouter au panier" est stocké dans une constante
const addToCart = document.getElementById("addToCart");

// fonction qui insère l'objet "selection" dans un array + le array dans le localStorage en :
// 1) verifiant si les champs "quantité" et "couleur" sont bien remplis
// 2) verifiant si l'item n'est pas déjà présent dans le array en comparant son ID et sa couleur
// 3) incrémente la quantité de l'item s'il est déja présent 

// ---------------    incremente mais remplace le mauvais index (0)------------------
/* function setStorage() {
    let quantity = document.getElementById("quantity").value;
    let color = document.getElementById("colors").value;
    let selection = {
        "id": productId,
        "quantity": quantity,
        "color": color                 
    }
    let cart = JSON.parse(localStorage.getItem("cart"));

    if(quantity == 0 || color == '') {
        alert("Veuillez choisir une quantité et une couleur");
    }else if(cart){
        let sameColor = cart.find(selection => selection.color === color);
        let sameId = cart.find(selection => selection.id === productId);
        
        if(sameColor && sameId){
            let findQuantity = cart.find(selection => selection.quantity);
            let updateQuantity = parseInt(findQuantity.quantity) + parseInt(quantity);
            let selection = {
                "id": productId,
                "quantity": updateQuantity.toString(),
                "color": color                 
            }
            cart.splice(0, 1, selection);
            localStorage.setItem("cart", JSON.stringify(cart));
        }else{    
            cart.push(selection);
            localStorage.setItem("cart", JSON.stringify(cart));
        }   
    }else{
        let cart = [];
        cart.push(selection);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}
*/

// -----------------------incremente mais seulement l'item qui est ajouté dans le cart en 1er-------------
function setStorage() {
    let quantity = document.getElementById("quantity").value;
    let color = document.getElementById("colors").value;
    let selection = {
        "id": productId,
        "quantity": quantity,
        "color": color                 
    }
    let cart = JSON.parse(localStorage.getItem("cart"));

    if(quantity == 0 || color == '') {
        alert("Veuillez choisir une quantité et une couleur");
    }else if(cart){
        let filter = cart.filter(item => item.id == productId && item.color == color);
        console.log(filter);

        if (filter){
            let findQuantity = cart.find(selection => selection.quantity);
            let updatedQuantity = parseInt(findQuantity.quantity) + parseInt(selection.quantity);
            let newSelection = {
                "id": productId,
                "quantity": updatedQuantity.toString(),
                "color": color                 
        }
            cart.push(newSelection);
            localStorage.setItem("cart", JSON.stringify(cart));
        }else{
            cart.push(selection);
            localStorage.setItem("cart", JSON.stringify(cart));  
        } 
    }else{
        let cart = [];
        cart.push(selection);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

// event qui lance la fonction
addToCart.addEventListener("click", (setStorage));

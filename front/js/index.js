// fonction qui créé une nouvelle card en :
// 1) injectant les bonnes datas 
// 2) créant les balises
function kanapCard(kanap){
    let element = document.querySelector(".items");
    let newLink = document.createElement("a");
    let newArticle = document.createElement("article");
    let newImage = document.createElement("img");
    let newTitle = document.createElement("h3");
    let newText = document.createElement("p");

    newLink.href ="./product.html?id=" + kanap._id;
    newImage.src = kanap.imageUrl;
    newImage.alt = kanap.altTxt;
    newTitle.textContent = kanap.name;
    newText.textContent = kanap.description;
    element.appendChild(newLink);
    newLink.appendChild(newArticle);
    newArticle.appendChild(newImage);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newText);
}

// requête GET pour avoir les data de l'API + l'execution de la fonction
fetch("http://localhost:3000/API/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
    }
    })
    .then(function(value) {
        let kanapList = value;
        for (let kanap of kanapList) {
            kanapCard(kanap);
        }
    });
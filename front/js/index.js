function kanapCard(kanap){
    let element = document.querySelector(".items");
    let newLink = document.createElement("a");
    let newArticle = document.createElement("article");
    let newImage = document.createElement("img");
    let newTitle = document.createElement("h3");
    let newText = document.createElement("p");

    newLink.href ="./product.html?id=42";
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

fetch("http://localhost:3000/API/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
    }
    })
    .then(function(value) {
        let kanapList = value;
        maConst = value;
        for (let kanap of kanapList) {
            console.log(kanap);
            kanapCard(kanap);
        }
    });
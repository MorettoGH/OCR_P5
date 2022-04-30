// je stock la requete HTTP dans une constante 
const fetchPromise = fetch("http://localhost:3000/API/products");

// je log une promise
console.log(fetchPromise);

// je log une response
fetchPromise.then(res => { 
    console.log(res);
});

// ------------TEST AVEC LA CONSTANTE --------------

// je verifie si la requete est ok et je recupere le resultat au format json
fetchPromise.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})

// je log la valeur de la promise precedente -> value = response
fetchPromise.then(function(value) {
    console.log(value);
})

// -------------TEST SANS CONSTANTE -----------

// je combine tout 
fetch("http://localhost:3000/API/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
    }
    })
    .then(function(value) {
        console.log(value); // cette fois ci la value = tableau donc value = ["x", "x", "x"]
        let firstKanap = value[0];
        console.log(firstKanap); // renvoi item 0 

        let productImg = document.querySelector(".items img");
        let productImgAlt = document.querySelector(".items img");
        let productName = document.querySelector(".productName");
        let productDesc = document.querySelector(".productDescription");

        productImg.src = firstKanap.imageUrl;
        productImgAlt.alt = firstKanap.altTxt;
        productName.textContent = firstKanap.name;
        productDesc.textContent = firstKanap.description;
    });


//-----------------TEST EN DEHORS DE LA PROMISE-------------
/*
let kanapList = [];

const fetchKanap = fetch("http://localhost:3000/API/products")
    .then(function(res) {
        if (res.ok) {
            return res.json();
    }
    })
    .then(function(value) {
        console.log(value);
        kanapList = value;
        console.log(kanapList);
    });

console.log(kanapList);

let productImg = document.querySelector(".items img");
let productImgAlt = document.querySelector(".items img[alt]");
let productName = document.querySelector(".productName");
let productDesc = document.querySelector(".productDescription");

productImg.src = kanapList.imageUrl;
productImgAlt.textContent = kanapList.altTxt;
productName.textContent = kanapList.name;
productDesc.textContent = kanapList.description;
*/
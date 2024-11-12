console.log("Script is running");

document.getElementById("order-form").addEventListener("submit", function(event)
{
    event.preventDefault();

document.getElementById("order-form").style.display="none";

document.getElementById("success-message").classList.remove("hidden");

});

document.addEventListener("DOMContentLoaded", function() {

//Add products
const products=[
    {
        name:"Timber",
        price: 20,
        description: "High-quality timber for construction.",
        image: "images/TIMBER.jpg"
    },
    {
        name:"Beams",
        price: 18,
        description: "Sturdy beams for support structures.",
        image: "images/BEAMS.jpg"
    },
    {
        name:"Furniture",
        price: 12,
        description: "Beautifully crafted wooden furniture.",
        image: "images/FURNITURE.jpg"
    },
];

function displayProducts(){
    const productList = document.getElementById("product-list")

    products.forEach(product => {
        //Product card container 
        const productCard =document.createElement("div");
        productCard.classList.className = "product-card";

        //Add image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.className = "product-img";
        productCard.appendChild(img);

        //Add product name
        const name = document.createElement("h3");
        name.innerText = product.name;
        productCard.appendChild(name);

        //Add price
        const price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;
        productCard.appendChild(price);

        //Add description
        const description = document.createElement("p");
        description.innerText = product.description;
        productCard.appendChild(description);

        //Append product card to the product list
        productList.appendChild(productCard);
    });
}

displayProducts();

});

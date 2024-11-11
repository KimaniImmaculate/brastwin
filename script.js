console.log("Script is running");

document.getElementById("order-form").addEventListener("submit", function(event)
{
    event.preventDefault();

document.getElementById("order-form").style.display="none";

document.getElementById("success-message").classList.remove("hidden");

});

document.addEventListener("DOMContentLoaded", function() {

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
        const productCard =document.createElement("div");
        productCard.classList.className = "product-card";

        productCard.innerHtml = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <p>${product.description}</p>
        <button class= "order-now">Order Now</button>
        `;

        productList.appendChild(productCard);
    });
}

displayProducts();

});

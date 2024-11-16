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
    productList.innerHTML="";

    products.forEach((product, index)=> {
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

        //Add click event to open modal with product details
        productCard.addEventListener("click", () => openModal(index));

        //Append product card to the product list
        productList.appendChild(productCard);
    });
}

displayProducts();

});

const productModal= document.getElementById("product-modal");
const modalClose=document.getElementById("modal-close");

function openModal(index){
    //Get product details 
    const product= products[index];

    //Populate modal with product details 
    document.getElementById("modal-image").src=product.image;
    document.getElementById("modal-image").alt=product.image;
    document.getElementById("modal-name").innerText=product.name;
    document.getElementById("modal-price").innerText=`Price: $${product.price}`;
    document.getElementById("modal-description").innerText=product.description;

    //Show the modal 
    document.getElementById("product-modal").style.display="flex";
}

function closeModal() {
    document.getElementById("product-modal").style.display="none"
}

//Close modal when clicking the close button
document.getElementById("modal-close").addEventListener("click", closeModal);

//Close modal when clicking outside the modal content 
window.addEventListener("click" , (event)=> {
    if (event.target===productModal) {
        closeModal();
    }
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault() //Prevent form submission for testing

    const quantity= document.getElementById("quantity").ariaValueMax;
    const email= document.getElementById("email").ariaValueMax;

    if(quantity <1){
        alert("Please enter a quantity of at least 1.");
        return;
    }
    
    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }

    alert("Order submitted successfully!");
});
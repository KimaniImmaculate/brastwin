console.log("JS");
document.getElementById("order-form").addEventListener("submit", function(event)
{
    event.preventDefault();

document.getElementById("order-form").style.display="none";

document.getElementById("success-message").classList.remove("hidden");

});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");

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
    const productList = document.getElementById("product-list");

    if(!productList){
        console.error("Element with ID 'product-list' not found in the DOM");
        return;
    }
    productList.innerHTML="";

    products.forEach((product)=> {
        //Product card container 
        const productCard =document.createElement("div");
        productCard.classList.add ("product-card");

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

    console.log("Products displayed successfully");
}

displayProducts();

});


document.addEventListener("DOMContentLoaded", function() {
    console.log("Script is running");

    const productSelect = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const totalCostSpan = document.getElementById("totalCost"); 

    console.log(productSelect);  
    console.log(quantityInput);  
    console.log(totalCostSpan);  

    // Now you can add event listeners and logic
    if (productSelect && quantityInput && totalCostSpan) {
        productSelect.addEventListener("change", updateTotalCost);
        quantityInput.addEventListener("input", updateTotalCost);
    } else {
        console.log("One or more elements are not found.");
    }

    function updateTotalCost() {
        const productPrices = {
            timber: 20,
            beams: 18,
            furniture: 12
        };

        const selectedProduct = productSelect.value;
        const quantity = parseInt(quantityInput.value) || 0;

        const totalCost = productPrices[selectedProduct] * quantity;

        totalCostSpan.textContent = totalCost;  // Update the total cost
    }
});


document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault() //Prevent form submission for testing

    const quantity= document.getElementById("quantity").value;
    const email= document.getElementById("email").value;
    const product=document.getElementById("product").value;

    if(quantity <1){
        alert("Please enter a quantity of at least 1.");
        return;
    }
    
    if(!email.includes("@")){
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Order placed successfully!\nEmail: ${email}\nProduct: ${product}\nQuantity: ${quantity}`);
    orderForm.reset();
});

//Select the order form and its input elements 
const orderForm=document.getElementById("order-form");
const nameInput=document.getElementById("name");
const phoneInput=document.getElementById("phone");
const emailInput=document.getElementById("email");
const productSelect=document.getElementById("product");
const quantityInput=document.getElementById("quantity");
const notesInput=document.getElementById("notes");
const totalCostDisplay=document.getElementById("totalCost");

//Load saved form data when the page loads 
document.addEventListener("DOMContentLoaded", () => {
    const savedFormData = JSON.parse(localStorage.getItem("orderFormData"));

    if(savedFormData){
        nameInput.value=savedFormData.name || "";
        phoneInput.value=savedFormData.phone || "";
        emailInput.value=savedFormData.email || "";
        productSelect.value=savedFormData.product || "";
        quantityInput.value=savedFormData.quantity || "";
        notesInput.value=savedFormData.notes|| "";

    }
});

//Save form data to local storage on every input change 
orderForm.addEventListener("input", () => {
    const formData={
        name: nameInput.value,
        phone: phoneInput.value,
        email: emailInput.value,
        product: productSelect.value,
        quantity: quantityInput.value,
        notes: notesInput.value,
    };

    localStorage.setItem("orderFormData", JSON.stringify(formData)); 
});

//Clear local storage when the form is submitted 
orderForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Prevent actual form submission for now 
    localStorage.removeItem("orderFormData"); //Clear saved data
    totalCostDisplay.textContent="0";
    alert("Order submitted successfully! Local storage cleared.");
    orderForm.reset(); //Reset the form 
});

//Clear form and local data when the clear button is clicked
document.getElementById("clear-form").addEventListener("click", () => {
    localStorage.removeItem("orderFormData");
    orderForm.reset();
    totalCostDisplay.textContent="0"
    alert("Form cleared!");
});

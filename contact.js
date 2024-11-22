document.addEventListener("DOMContentLoaded", function(){

    const form=document.getElementById("contact-form");

    if(form){
        form.addEventListener("submit", function(event) {
            event.preventDefault();

    //Get form fields values
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const message=document.getElementById("message").value;

    //Testing 
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Phone:",phone);
    console.log("Message:",message);

    //Save data to local storage
    localStorage.setItem("contactData", JSON.stringify({name, email, phone, message}));

    //Success-message 
    alert("Thank you for your message! We will get back to you soon.");

    //Clear form 
    form.reset();
});
    }else{
        console.error("Form not found");
    }
});
//Display form
document.querySelector(".add-contact").addEventListener("click", function(){
    document.querySelector("#form").classList = "show";
    //document.querySelector(".add-contact").classList = "hide";
})

//Contact Class
class Contact{
    constructor(firstname, lastname, phone, address, occupation, DOB){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.address= address;
        this.occupation = occupation;
        this.DOB = new Date(DOB);
    }
}

//UI Classes
class UI{
    //Add contact to list method
    addContact(contact){
        const list = document.getElementById("contact-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${contact.firstname}</td>
        <td>${contact.lastname}</td>
        <td>${contact.phone}</td>
        <td>${contact.address}</td>
        <td>${contact.occupation}</td>
        <td><a class = "delete"> x </a></td>
        `
        list.appendChild(row);

        //Hide form
        document.querySelector("#form").classList = "hide";
    
    }

    //clearing fields
    clearFields(){
        document.querySelector(".firstname").value = "";
        document.querySelector(".lastname").value = "";
        document.querySelector(".phone").value = "";
        document.querySelector(".address").value ="";
        document.querySelector(".occupation").value ="";
        document.querySelector(".DOB").value = "";
    }

    //Show Alert
    showErrorMessage(msg, classname){
         
        //create div
        const div = document.createElement("div");
        //Add classname
        div.classList = `alert alert-${classname}`;
        //Add text node
        div.appendChild(document.createTextNode(msg));
        //Get parent Element
        const container = document.querySelector(".container");
        const contactHeading = document.querySelector(".contact");
        //Inserting into dom
        container.insertBefore(div,contactHeading);

        //Error Message Disapear after 3 sec
        setTimeout(function(){
            document.querySelector(".alert").remove();
        },3000)
    }

    
}

//Event Listener to submit
document.getElementById("form").addEventListener("submit", function(e){
    firstname = document.querySelector(".firstname").value;
    lastname = document.querySelector(".lastname").value;
    phone = document.querySelector(".phone").value;
    address = document.querySelector(".address").value;
    occupation = document.querySelector(".occupation").value;
    DOB = document.querySelector(".DOB").value;

    //Instantiatinf the contact class
    contact = new Contact(firstname, lastname, phone, address, occupation, DOB);

    //Instantiating the UI class
    ui = new UI();


    //Validate fields
    if(firstname === "" || lastname ==="" || phone === "" || address ==="" || occupation == "" || DOB ===""){
        ui.showErrorMessage("Fill out all fields!", "danger")
    } else{
        //Add contact to list
        ui.addContact(contact); 
        //Show success message
        ui.showErrorMessage("Contact Saved", "success")
        
        //clear fields
        ui.clearFields();
    }

    e.preventDefault();
})

//Event Listener for delete
document.getElementById("contact-list").addEventListener("click", function(e){
    if (e.target.className === "delete"){
        e.target.parentElement.parentElement.remove();

        //show message
        ui.showErrorMessage("Contact deleted", "success")
    }

    e.preventDefault();
})




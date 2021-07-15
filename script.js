// get the modal
let modal = document.getElementById("myModal");

// let image = document.getElementsByClassName("modal-click");

// button that closes modal
let span = document.getElementsByClassName("close")[0];


function myFunction() {
    let x = document.getElementsByClassName("modal");
    if (x.style.display === "none") {
        // x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// when the user clicks the (x) on the modal, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// when the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// email validation
function validate(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.subscribe.value)) {
    alert("You have successfully subscribed. Discount will be added at checkout as per terms and conditions!  \n You can enter another email address or exit and continue shopping!");
    modal.style.display ="none";
    return (true);

}
    alert("You have entered an invalid email address!");
    return (false);
}

// login pop-up
function openForm(){
    document.getElementById("myForm2").style.display="block";
}

function closeForm(){
    document.getElementById("myForm2").style.display="none";
}

// get the modal
let modal = document.getElementById("myModal");

// let image = document.getElementsByClassName("modal-click");

// button that closes modal
let span = document.getElementsByClassName("close")[0];


function myFunction() {
    let x = document.getElementsByClassName("modal");
    if (x.style.display === "none") {
        x.style.display = "block";
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




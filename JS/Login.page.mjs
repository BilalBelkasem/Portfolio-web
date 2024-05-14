const controlU = "Bilal Belkasem";
const controlP = "EHB";

document.querySelector('form').addEventListener('submit', function(event) {
event.preventDefault();

let Username = document.getElementById('username').value;
let Password = document.getElementById('password').value;

if (controlU != Username) {
    alert("Invalid username. Try again.");
} else if (controlP != Password) {  
    alert("Invalid password. Try again.");
} else {
    window.location.href = "../HTML/Main.page.html";
}

});
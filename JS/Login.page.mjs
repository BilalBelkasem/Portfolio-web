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

(() => {
    let gifVideo = document.getElementsByClassName('FF14gif')[0];
    let gifPath = '../IMG/FF14gif.gif'; 

    let img = new Image();
    img.src = gifPath;

    gifVideo.appendChild(img);
})();
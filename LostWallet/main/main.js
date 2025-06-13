let background = document.querySelector("html")

let beginning = document.querySelector(".Beginning");

let OpenedPage = document.querySelector(".Opened");

let OpenButton = document.querySelector("#Open")

let WalkButton = document.querySelector("#Walk");

OpenButton.addEventListener("click", function() {
    background.style.backgroundImage = "url('openwallet.png')";
    beginning.style.display = "none";
    OpenedPage.style.display = "inline";
});




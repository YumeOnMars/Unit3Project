let background = document.querySelector("html")

let beginning = document.querySelector(".Beginning");

let OpenedPage = document.querySelector(".Opened");

let OpenButton = document.querySelector("#Open")

let WalkButton = document.querySelector("#Walk");

let takeButton = document.querySelector("#TakeMoney")

let ReturnWallet = document.querySelector("#ReturnWallet");

let ReturnItPage = document.querySelector(".ReturnItPage")

let StoleItPage = document.querySelector(".StoleIt");

let AtHisHouse = document.querySelector(".AtHisHouse");

let yesButton = document.querySelector('GoYes');

let BeatUpPage = document.querySelector(".BeatUp");

let BeatUpButton = document.querySelector("#BeatUpRestart");

let fight = document.querySelector('#FightHim')
OpenButton.addEventListener("click", function() {
    background.style.backgroundImage = "url('openwallet.png')";
    beginning.style.display = "none";
    OpenedPage.style.display = "inline";
});

takeButton.addEventListener("click", function() {
    background.style.backgroundImage = "url('StoleWallet.png')";
    OpenedPage.style.display = "none";
    StoleItPage.style.display = "inline";
});

ReturnWallet.addEventListener("click", function() {
    background.style.backgroundImage = "url('map.jpg')";
    OpenedPage.style.display = "none";
    ReturnItPage.style.display = "inline";
})

GoYes.addEventListener("click", function() {
    background.style.backgroundImage = "url('happyman.png')";
    ReturnItPage.style.display = "none";
    AtHisHouse.style.display = "inline";
})

fight.addEventListener("click", function() {
        background.style.backgroundImage = "url('BeatUp.png')";
    AtHisHouse.style.display = "none";
    BeatUpPage.style.display = "inline";
})





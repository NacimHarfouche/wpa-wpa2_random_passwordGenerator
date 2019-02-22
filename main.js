const tab = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", ",", "!", "-", "#", "+", "&", "/"];
let spanElts = document.querySelectorAll("span");
let buttonElt = document.querySelector("button");
let symbole = new Number();
let zeroOrOne = new Number();

// genere des nombres aleatoire
function randomNumber(tab) {
    symbole = Math.floor(Math.random() * tab.length);
    zeroOrOne = Math.floor(Math.random() * 2);
}

// genere un code au moment du clique sur le bouton
// insert les symboles dans le DOM selon le numéro obtenu
/*buttonElt.addEventListener("click", function() {
        for (let i = 0; i < spanElts.length; i++) {
        randomNumber(tab);
        if (zeroOrOne === 1 && symbole < 26) {
            let upper = tab[symbole].toUpperCase();
            spanElts[i].textContent = upper;
        } else {
            spanElts[i].textContent = tab[symbole];
        }
    }
});*/

// test


let chooseLength;
let interval;
let paraElt = document.getElementById("para");
let saveIt;
/*function showIt() {
    
    console.log(document.getElementById("textinput").value.toLocaleLowerCase());
}

function affichage() {
    interval = setInterval(showIt, 1000);
}
affichage();*/

////////////////////////////////////////////////////////
/*buttonElt.addEventListener("click", function() {
    chooseLength = document.getElementById("textinput").value;
    saveIt = "";
    for (let i = 0; i < chooseLength; i++) {
        randomNumber(tab);
        if (zeroOrOne === 1 && symbole < 26) {
            let upper = tab[symbole].toUpperCase();
            paraElt.textContent += upper;
            saveIt += upper;
        } else {
            paraElt.textContent += tab[symbole];
            saveIt += tab[symbole];
        }
    }
    console.log(tab[chooseLength]);
    console.log(saveIt);
});*/
/////////////////////////////////////////////////////

buttonElt.addEventListener("click", function() {
    chooseLength = document.getElementById("textinput").value;
    saveIt = "";
    for (let i = 0; i < chooseLength; i++) {
        randomNumber(tab);
        if (zeroOrOne === 1 && symbole < 26) {
            let upper = tab[symbole].toUpperCase();
            saveIt += upper;
        } else {
            saveIt += tab[symbole];
        }
    }
    paraElt.textContent = saveIt;
    console.log(saveIt);
});
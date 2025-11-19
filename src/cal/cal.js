var buttons = document.getElementById("buttons");
var display = document.getElementById("display");
var calculate = document.getElementById("calculate");

buttons.addEventListener("click", function(event){
    if (event.target.id !== "calculate") {

           const value = event.target.innerText;

           display.innerText += value;
    }   
});

calculate.addEventListener("click", function(event){
   event.stopPropagation();
   display.innerText = eval(display.innerText);

});




// event.targe Elementet der faktisk blev klikket
// event.currentTarget Elementet der har event-listeneren

// eval() tager en tekst-string og kører den som JavaScript-kode.

// eval() er farligt, fordi det omdanner tekst til JavaScript og kører det direkte.
// Hvis brugeren kan påvirke teksten, kan de køre skadelig kode (XSS-angreb).
// Derfor må man ikke bruge det i rigtige systemer.
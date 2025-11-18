// 2.1.1 
var divs = document.getElementsByTagName("div");

var colors = ["lightblue", "lightgreen", "lightpink"];

for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = colors[i];
}


// 2.1.2
var button = document.getElementById("btn");

button.addEventListener("click",function(){
    var newColors = ["orange", "purple", "yellow"]; 
     for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = newColors[i];
    }
});


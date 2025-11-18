
// 2.2 Event Bubbling and Event Arguments

// 2.2.1
document.addEventListener("DOMContentLoaded", function() {
    // var div1 = document.getElementById("md1");
    // var div2 = document.getElementById("md2");

    // div1.addEventListener("click", function(){
   //     console.log("Hi from " + div1.id);
    // });

    // div2.addEventListener("click", function() {
    //    console.log("Hi from " + div2.id);
    // });

// 2.2.4  og  2.2.5
  var outer = document.getElementById("outer");
  var output = document.getElementById("output");

// 2.2.6   
  outer.addEventListener("click", function(event){
    output.innerText += "Hi from " + event.target.id + "\n";
  })



});


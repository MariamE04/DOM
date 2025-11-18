// 2.3
document.addEventListener("DOMContentLoaded", function() {
    // 1. opretter form
    const form = document.createElement("form");

    //2. opretter input felter
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type a name";
    input.required = true;

    // 3. Opretter submit-knap
    const submit = document.createElement("button");
    submit.type  = "submit";
    submit.textContent = "Add name";

    // ---- NY KODE (2.3.3 ) ----
    const removeFirst = document.createElement("button");
    removeFirst.type = "button";
    removeFirst.textContent = "Remove first";


    const removeLast = document.createElement("button");
    removeLast.type = "button";
    removeLast.textContent = "Remove last";


    // 4. Tilføjer input og knap til form
    form.appendChild(input);
    form.appendChild(submit);
    form.appendChild(removeFirst);
    form.appendChild(removeLast);

    // 5. Tilføjer form til body
    document.body.appendChild(form);

    // 6. Opretter container til UL
    const container = document.createElement("div");
    document.body.appendChild(container);

    // 7. Array til navne
    let names = [];

    // 8. Tilføjer event listener til form
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop form refresh
        const name = input.value.trim();
        if (name) {
            names.push(name);
            input.value = ""; // Clear input
            updateList();
        }
    });

    removeFirst.addEventListener("click", function() {
    names.shift();     // fjerner første element i array
    updateList();      // opdater UL
});

removeLast.addEventListener("click", function() {
    names.pop();       // fjerner sidste element i array
    updateList();
});


    // 9. Funktion til at opdatere UL
     function updateList() {
        const ulHTML = "<ul>" + names.map(n => `<li>${n}</li>`).join("") + "</ul>";
        container.innerHTML = ulHTML;
    }
});




//document.addEventListener("DOMContentLoaded", function() {...}); = "Vent til siden er klar, før du gør noget med elementerne."
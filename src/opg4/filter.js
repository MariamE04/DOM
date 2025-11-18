document.addEventListener("DOMContentLoaded", function() {

    let students = [
        { id: 1, name: "Mariam", course: "Math", grade: 12 },
        { id: 2, name: "Lumiere", course: "Physics", grade: 10 },
        { id: 3, name: "Elmir", course: "Chemistry", grade: 7 },
        { id: 4, name: "Xiaver", course: "Biology", grade: 4 }
    ];

    const input = document.getElementById("filterInput");
    const button = document.getElementById("filterBtn");
    const result = document.getElementById("result");

    button.addEventListener("click", function() {
        const text = input.value.toLowerCase();

        // Filtrer elever baseret på navn
        const filtered = students.filter(student => 
            student.name.toLowerCase().includes(text)
        );

        // Generer HTML tabel
        const table = `
            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
                ${filtered.map(s => 
                    `<tr>
                        <td>${s.id}</td>
                        <td>${s.name}</td>
                        <td>${s.course}</td>
                        <td>${s.grade}</td>
                    </tr>`).join("")}
            </table>
        `;

        result.innerHTML = table;
    });
});



function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
const people = [
        { name: "Anna", age: 28 },
        { name: "Omar", age: 35 },
        { name: "Lina", age: 40 },
        { name: "Erik", age: 22 },
        { name: "Sara", age: 31 }
    ];

    // skapa en funktion som tar in en array som argument
    function printOver30(array) {
        for (let person of array) {
            // skriv ut namnet på personer som är över 30 år
            if (person.age > 30) {
                console.log(person.name);
            }
        }
    }

    // anropa funktionen och skicka med arrayen som argument
    printOver30(people);

}

module.exports = { uppg8 };
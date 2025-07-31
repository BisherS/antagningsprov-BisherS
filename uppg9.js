

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

    // skapa en funktion som heter sort och tar in en array av siffror som argument
    function sort(numbers) {
        // loopa igenom arrayen
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];

            // kolla om talet är jämt eller udda
            if (num % 2 === 0) {
                console.log(num + " jämt");
            } else {
                console.log(num + " udda");
            }
        }
    }

    // anropa funktionen och skicka med en array som argument
    const siffror = [1, 2, 3, 4, 5, 6];
    sort(siffror);
  
}

module.exports = { uppg9 };
// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
// Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Bonus:
// Gestire l'inserimento dei numeri tramite 5 input diversi.

/*
- genero una funzione che mi crei numeri casuali
- genero una funzione che mi crei un array di totale 5 numeri casuali dalla funzione precedente

- memorizzo un elemento HTML che mostri in pagina i numeri

- memorizzo un elemento HTML che contenga l'array di numeri casuali che sparisca dopo 5 secondi.

- memorizzo una variabile countdown di 5000 millisecondi, con funzione hide

- genero una funzione hide che nasconda l'elemento container 

- memorizzo una varaibile con timeout di 6000 millisecondi.

- genero una funzione che chieda all'utente i numeri individuati e li pushi in un array:
    PER OGNI numero inserito dall'utente, per un max di 5 numeri:
        ? SE il numero scritto è incluso nell'array dei casuali AND non è incluso nell'array dei numeri dell'utente
            ° i numeri dell'utente saranno puschati nell'array dell'utente.

    ? SE la lunghezza dell'array dell'utente è maggiore di 0
        ° stampo in pagina che l'utente ha indovinato * la lunghezza dell'array dell'utente (indica la quantità dei numeri indovinati).

        ° stampo che i numeri sono "array utente"

    : ALTRIMENTI 
        ° stampo all'utente che non ne ha indovnato mezzo.

    
*/

// console.log("prova sa sa");

// memorizzo l'elemento HTML dove stamperò i numeri random
const toGuess = document.getElementById("random_numbers");

const maxNum = 5; 

// memorizzo l'array
const randomCpu = createArray(maxNum, 1, 100);

console.log(randomCpu);

// memorizzo l'elemento HTML che contiene i numeri random
const toGuessContainer = document.getElementById("random_numbers_container")

// stampo in pagina i numeri
toGuess.innerText = randomCpu;

// creo una variabile countdown

const countdown = setInterval(hide, 5000);


// genero una funzione che mi nasconda il container dei numeri random

function hide(){
    toGuessContainer.style.display ="none";
}
























// ottimizzo in un'unica funzione


/**
 * 
 * @param {var} total 
 * @param {number} min 
 * @param {number} max 
 * @returns {Array[Numbers]}
 */


function createArray(total, min, max) {
    
    const array = [];

    while(array.length < total){

        let newNum =  Math.floor(Math.random() * (max - min + 1)) + min;

        if(!array.includes(newNum)){
            array.push(newNum);
        }

    }

    return array
    

}












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


// memorizzo l'elemento HTML dove stampare i numeri random
const randomCpu = document.getElementById("cpu_numbers");

// memorizzo l'elemento HTML bottone per controllare che i numeri dell'utente corrispondano all'array
const playButton = document.getElementById("play");
const checkButton = document.getElementById("check_button");
const replayButton = document.getElementById("reload");

// memorizzo tutti i bottoni

// memorizzo l'array degli input
const userNumbersArray = [
    document.getElementById("no1"),
    document.getElementById("no2"),
    document.getElementById("no3"),
    document.getElementById("no4"),
    document.getElementById("no5")
];


// memorizzo l'elemento HTML che mostrerà i risultati
const resultEl = document.getElementById("results");


// memorizzo l'elemento HTML che contiene gli input
const userNumbersArrayContainer = document.getElementById("inputs");

// memorizzo una variabile che indichi il totale di numeri dell'array random
let maxNumbers = 5;

// memorizzo l'array di numeri casuali del pc
const randomCpuArray = createArray(5, 1, 50);

// test
console.log(randomCpuArray);

replayButton.style.display ="none";
userNumbersArrayContainer.style.display ="none";

playButton.addEventListener("click", function(){

    // stampo i numeri casuali in pagina
    randomCpu.innerText = randomCpuArray;
    // genero un timer
    setTimeout(hide, 2000);
    
    
    checkButton.addEventListener("click", function(){

        checkButton.style.display = "none";
    
        let guessed = checkArrays(randomCpuArray, userNumbersArray);
    
        endResult(guessed, resultEl, randomCpuArray);
    
        replayButton.style.display ="block";
    
    });
    
});

replayButton.addEventListener("click", function(){
    document.location.reload()
});


// FUNZIONI__________________________________-

// funzione che nasconde i numeri random

function hide(){
    randomCpu.style.display = "none";

    
    userNumbersArrayContainer.style.display ="block";
}

// funzione che controlla che le due array siano uguali
function checkArrays(arrayOne, arrayTwo) {
  
    const guessed = [];
  
    // primo approccio: cascata di if
  
    for(let i = 0; i < arrayTwo.length; i++) {
  
      if(arrayOne[i] == arrayTwo[i].value) {
        
        guessed.push(arrayOne[i]);
  
        
  
        console.log("numero giusto");
  
      }

      
    }
  
    return guessed;
  
  }

//   genero la funzione che mi indichi il risultato

  function endResult(arrayOne, htmlEl, arrayTwo) {

  

    if (arrayOne.length == 0){
        htmlEl.innerHTML = "Hai una pessima memoria."
    } else {

          // stampare quanti numeri ha indovinato l'utente
        htmlEl.innerHTML = `
        Hai indovinato ${arrayOne.length} numeri.<br>
        I numeri che hai indovinato sono: ${arrayOne}.
        <br> I numeri di partenza: ${arrayTwo}`;

    }
  
  
  }



// genero la funzione che mi crea un array di numeri casuali
function createArray(total, min, max) {

    const array = [];
    
    while(array.length < total){
    
        let newNum =  Math.floor(Math.random() * (max - min + 1)) + min;
        if(!array.includes(newNum)){
                array.push(newNum);
        }
    
    }
    
    return array

    
}
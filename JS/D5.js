/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i] + " è un elemento dell'array");
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("Ordinati in ordine alfabetico " + pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
console.log("Ordinati in ordine invertito " + pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const pets1 = ['dog', 'cat', 'hamster', 'redfish']

const firstElement = pets1.shift();

pets1.push(firstElement); 

console.log("Se scambiassi il primo elemento dell'array e lo mettessi in ultima posizione il risultato sarebbe questo: " + pets1);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i =0; i < cars.length; i++) {
  cars[i].licensePlate= 'XYSZE1';
  }
  console.log (cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const cars1 = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
    licensePlate:'XYSZE1',
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
    licensePlate: 'XYSZE1',
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
    licensePlate: 'XYSZE1',
  },
]

const newCar = {
  brand: 'Fiat',
  model: 'Panda',
  color: 'black',
  trims: ['old', 'cool','style'],
  licensePlate: 'XYSZE1',}

cars1.push(newCar)
console.log(cars1)


const cars2 = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
    licensePlate:'XYSZE1',
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
    licensePlate: 'XYSZE1',
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
    licensePlate: 'XYSZE1',
  },
  {brand: 'Fiat',
    model: 'Panda',
    color: 'black',
    trims: ['old', 'cool','style'],
    licensePlate: 'XYSZE1',}
]

for (let i =0; i < cars2.length; i++) {
  cars2[i].trims.pop();
  }
console.log(cars2)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];


for (let i = 0; i < cars1.length; i++) {
  
  justTrims.push(cars1[i].trims);
}

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  
  if (cars[i].color[0].toLowerCase() === 'b') {
    console.log('Fizz'); 
  } else {
    console.log('Buzz'); 
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;


while (i < numericArray.length) {
  
  console.log(numericArray[i]);

  
  if (numericArray[i] === 32) {
    break;
  }

  
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const positionsArray = [];


for (let i = 0; i < charactersArray.length; i++) {
  let position;

  
  switch (charactersArray[i]) {
    case 'a': position = 1; break;
    case 'b': position = 2; break;
    case 'c': position = 3; break;
    case 'd': position = 4; break;
    case 'e': position = 5; break;
    case 'f': position = 6; break;
    case 'g': position = 7; break;
    case 'h': position = 8; break;
    case 'i': position = 9; break;
    case 'j': position = 10; break;
    case 'k': position = 11; break;
    case 'l': position = 12; break;
    case 'n': position = 13; break;
    case 'o': position = 14; break;
    case 'p': position = 15; break;
    case 'q': position = 16; break;
    case 'r': position = 17; break;
    case 's': position = 18; break;
    case 't': position = 19; break;
    case 'u': position = 20; break;
    case 'v': position = 21; break;
    case 'w': position = 22; break;
    case 'x': position = 23; break;
    case 'z': position = 24; break;
    
  }

  
  if (position !== undefined) { 
    positionsArray.push(position);
  }
}

console.log(positionsArray);
  


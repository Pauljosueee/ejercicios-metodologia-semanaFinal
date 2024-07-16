'use strict';
//Ejercicio 1
function buscarNombreEnLista(nombres, nombreABuscar) {
    if (nombres.includes(nombreABuscar)) {
      alert("Si se encuentra");
    } else {
      alert("No se encuentra");
    }
  }
  
  let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
  let nombreABuscar = "Paul"; 
  buscarNombreEnLista(students, nombreABuscar);
  
//ejercicio 2 
function countWords(phrase) {
    let wordsArray = phrase.split(' ');
    return wordsArray.length;
  }
  

let phrase = 'La programación web es fundamental para el progreso';
  
let wordCount = countWords(phrase);
alert('La frase tiene ' + wordCount + ' palabras.');

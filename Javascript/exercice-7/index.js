'use strict';

/**
 * Represents a function that compute notes.
 * @constructor
 * @param notes[]
 */


let notes = [10, 13, 13, 12, 15, 12, 11, 16, 14]
  computeNotes(notes);

function computeNotes(notes){
  let count = 0;
   for(let i = 0; i < notes.length; i++){
    count += parseFloat(notes[i], 20);
    }

var result = count/notes.length
  document.write("La moyenne générale est de : " + result);
  }

'use strict';

/**
 * loading drawbar.
 * @constructor
 * @param {number} sum 
 * @param {number} nbr
 */

 var drawBar = function drawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}

drawBar.prototype.run = function () {
  var progress = document.createElement("progress");
  progress.value = this.nbr;
  progress.max = this.sum;
  progress.style.fontSize = "70px";
  progress.style.border = "solid black"
  progress.style.background = "white"
  document.body.appendChild(progress);
}

var loading = new drawBar(100, 50);
loading.run();
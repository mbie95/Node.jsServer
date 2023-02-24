//dolaczanie plikow
var plik1 = require('./plik1');
require('./folder/plik2');

//odczytanie zmiennej z plik1.js
console.log(plik1.x);
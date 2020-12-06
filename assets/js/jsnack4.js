// 1. Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro; es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
//caso 1 : stesso numero di elementi
var letters  = ["a","b","c"];
var numbers = [1,2,3];

// caso 2: diverso numero di elementi
// var letters  = ["a","b","c"];
// var numbers = [1,2,3,4];
console.log(letters, numbers);

var array = [];

/**
 * Funzione: fonde due array
 * @param array a - array letters
 * @param array b - array numbers
 * @return array - nuovo array con elementi alternati presi prima dall'array "a" e poi dall'array "b"
*/
function newArray(a, b){
  if(a.length === b.length){
    for(var i = 0; i < a.length; i++){
      array.push(a[i],b[i]);
    }
    console.log("Le mie array hanno lo stesso numero di elementi");
  }else {
    console.log("Le mie array hanno un numero diverso di elementi");
  }
  return array
}

console.log(newArray(letters, numbers));

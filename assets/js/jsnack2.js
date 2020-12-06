// 1. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

/**
 * Funzione: gira una stringa
 * @param str str - stringa
 * @return str - ritorna una stringa girata
*/
function strRevers(str){
  var strInversa = "";
  for (var i = str.length - 1; i >= 0; i--){
    strInversa += str[i];
  }
  return strInversa;
}

var str = "Ciao";
console.log(strRevers(str));

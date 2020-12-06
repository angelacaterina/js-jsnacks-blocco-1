// 1. Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var biciclette = [
  {
    name: "Benotto",
    weight: 58
  },
  {
    name: "De Rosa",
    weight: 21
  },
  {
    name: "Bianchi",
    weight: 13
  },
  {
    name: "Cinelli",
    weight: 48
  }
];
console.log(biciclette);

// 2. Stampare a schermo la bici con peso minore. 
biciclette.forEach(function(){
  biciclette.sort(function(a, b){
    return  a.weight - b.weight;
  });
})

console.log(biciclette[0].weight);

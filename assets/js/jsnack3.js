// 1. Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [
  {
    variety: "nero di Milano" ,
    peso: 120,
    lunghezza: 20
  },
  {
    variety: "Zucchino ortolano di Faenza",
    peso: 150,
    lunghezza: 25
  },
  {
    variety: "Zucchina genovese" ,
    peso: 170,
    lunghezza: 30
  },
  {
    variety: "striata di Napoli" ,
    peso: 60,
    lunghezza: 14
  },
  {
    variety: "Zucchina bianca triestina" ,
    peso: 50,
    lunghezza: 12
  },
  {
    variety: "rigata pugliese" ,
    peso: 100,
    lunghezza: 16
  },
  {
    variety: "tondo di Piacenza" ,
    peso: 145,
    lunghezza: 21
  },
  {
    variety: "Zucchino romanesco" ,
    peso: 50,
    lunghezza: 10
  },
  {
    variety: "Zucchine patissone" ,
    peso: 55,
    lunghezza: 13
  },
  {
    variety: "Tondo di Nizza" ,
    peso: 60,
    lunghezza: 14
  }
];
// console.log(zucchine);

// 2. Dividi in due array separati le zucchine che misurano meno o più di 15cm.
var zucchinePiccole = [ ];
var zucchineMedie = [ ];

zucchine.forEach(function(item){

  if(item.lunghezza < 15){
    // console.log("small");
    zucchinePiccole.push({
      variety: item.variety ,
      peso: item.peso,
      lunghezza: item.lunghezza
      }
    );
  }else{
    // console.log("medium");
    zucchineMedie.push({
      variety: item.variety ,
      peso: item.peso,
      lunghezza: item.lunghezza
      }
    );
  }
});

console.log("Zucchine con una lunghezza inferiore a 15 cm", zucchinePiccole);
console.log("Zucchine con una lunghezza superiore a 15 cm",zucchineMedie);

// 3. Infine stampa separatamente quanto pesano i due gruppi di zucchine
//forEach
var sommaSmall = 0;
zucchinePiccole.forEach(function(item){
  sommaSmall += item.peso;
});
console.log("Il peso complessivo delle zucchine con una lunghezza inferiore a 15 cm è: ", sommaSmall, "g.");

var sommaMedium = 0;
zucchineMedie.forEach(function(item){
  sommaMedium += item.peso;
});
console.log("Il peso complessivo delle zucchine con una lunghezza superiore a 15 cm è: ", sommaMedium, "g.");

// METODO 1 oggetti
// METODO 1A senza array
/***1. Crea 10 oggetti che rappresentano una zucchina,indicando per ognuna varietà, peso e lunghezza.***/
// var zucchinaUno = {
//   variety: "nero di Milano" ,
//   peso: 120,
//   lunghezza: 20
// }
// var zucchinaDue = {
//   variety: "Zucchino ortolano di Faenza",
//   peso: 150,
//   lunghezza: 25
// }
// var zucchinaTre = {
//   variety: "Zucchina genovese" ,
//   peso: 170,
//   lunghezza: 30
// }
// var zucchinaQuattro = {
//   variety: "striata di Napoli" ,
//   peso: 60,
//   lunghezza: 14
// }
// var zucchinaCinque = {
//   variety: "Zucchina bianca triestina" ,
//   peso: 50,
//   lunghezza: 12
// }
// var zucchinaSei = {
//   variety: "rigata pugliese" ,
//   peso: 100,
//   lunghezza: 16
// }
// var zucchinaSette = {
//   variety: "tondo di Piacenza" ,
//   peso: 145,
//   lunghezza: 21
// }
// var zucchinaOtto = {
//   variety: "Zucchino romanesco" ,
//   peso: 50,
//   lunghezza: 10
// }
// var zucchinaNove = {
//   variety: "Zucchine patissone" ,
//   peso: 55,
//   lunghezza:13
// }
// var zucchinaDieci = {
//   variety: "Tondo di Nizza" ,
//   peso: 60,
//   lunghezza: 14
// }
//
// /***2. Calcola quanto pesano tutte le zucchine.***/
// //modo 1 : concatenazione di oggetti
// console.log("Il peso complessivo delle 10 zucchine è: ", zucchinaUno.peso + zucchinaDue.peso + zucchinaTre.peso + zucchinaQuattro.peso + zucchinaCinque.peso + zucchinaSei.peso + zucchinaSette.peso + zucchinaOtto.peso + zucchinaNove.peso + zucchinaDieci.peso, "g.");

//modo 2 : variabile = concatenazione di oggetti
// var somma = zucchinaUno.peso + zucchinaDue.peso + zucchinaTre.peso + zucchinaQuattro.peso + zucchinaCinque.peso + zucchinaSei.peso + zucchinaSette.peso + zucchinaOtto.peso + zucchinaNove.peso + zucchinaDieci.peso;
// console.log("Il peso complessivo delle 10 zucchine è: ", somma , "g.");


// METODO 1B con array
// var zucchine =[
//   {
//     variety: "nero di Milano" ,
//     peso: 120,
//     lunghezza: 20
//   },
//   {
//     variety: "Zucchino ortolano di Faenza",
//     peso: 150,
//     lunghezza:25
//   },
//   {
//     variety: "Zucchina genovese" ,
//     peso: 170,
//     lunghezza: 30
//   },
//   {
//     variety: "striata di Napoli" ,
//     peso: 60,
//     lunghezza: 14
//   },
//   {
//     variety: "Zucchina bianca triestina" ,
//     peso: 50,
//     lunghezza: 12
//   },
//   {
//     variety: "rigata pugliese" ,
//     peso: 100,
//     lunghezza: 16
//   },
//   {
//     variety: "tondo di Piacenza" ,
//     peso: 145,
//     lunghezza: 21
//   },
//   {
//     variety: "Zucchino romanesco" ,
//     peso: 50,
//     lunghezza:10
//   },
//   {
//     variety: "Zucchine patissone" ,
//     peso: 55,
//     lunghezza:13
//   },
//   {
//     variety: "Tondo di Nizza" ,
//     peso: 60,
//     lunghezza: 14
//   }
// ]
//
// //modo 1 : concatenazione di oggetti con gli indici
// console.log("Il peso complessivo delle 10 zucchine è: ", zucchine[0].peso + zucchine[1].peso + zucchine[2].peso + zucchine[3].peso + zucchine[4].peso + zucchine[5].peso + zucchine[6].peso + zucchine[7].peso + zucchine[8].peso + zucchine[9].peso, "g.");
//
// //modo 2 : forEach
// var somma = 0;
// zucchine.forEach(function(item){
//   somma += item.peso;
// });
// console.log("Il peso complessivo delle 10 zucchine è: ", somma, "g.");



// METODO 2 utilizzando una classe di oggetti
// METODO 2A senza array
// class Zucchina {
//   constructor(variety, peso, lunghezza) {
//     this.variety = variety,
//     this.peso = peso,
//     this.lunghezza = lunghezza
//   }
// }
//
// var zucchinaUno = new Zucchina("nero di Milano" , 120 , 20);
// var zucchinaDue = new Zucchina("Zucchino ortolano di Faenza" , 150 , 25);
// var zucchinaTre = new Zucchina("Zucchina genovese" , 170 , 30);
// var zucchinaQuattro = new Zucchina("striata di Napoli" , 60 , 14);
// var zucchinaCinque = new Zucchina("Zucchina bianca triestina" , 50 , 12);
// var zucchinaSei = new Zucchina("rigata pugliese" , 100 , 16);
// var zucchinaSette = new Zucchina("tondo di Piacenza" , 145 , 21);
// var zucchinaOtto = new Zucchina("Zucchino romanesco" , 50 , 11);
// var zucchinaNove = new Zucchina("Zucchine patissone" , 55 , 13);
// var zucchinaDieci = new Zucchina("Tondo di Nizza" , 60 , 14);
//
// //concatenazione di oggetti
// console.log("Il peso complessivo delle 10 zucchine è: ", zucchinaUno.peso + zucchinaDue.peso + zucchinaTre.peso + zucchinaQuattro.peso + zucchinaCinque.peso + zucchinaSei.peso + zucchinaSette.peso + zucchinaOtto.peso + zucchinaNove.peso + zucchinaDieci.peso, "g.");


//METOD 2B con array di oggetti
class Zucchina {
  constructor(variety, peso, lunghezza) {
    this.variety = variety,
    this.peso = peso,
    this.lunghezza = lunghezza
  }
}

var zucchine = [
  new Zucchina("nero di Milano" , 120 , 20),
  new Zucchina("Zucchino ortolano di Faenza" , 150 , 25),
  new Zucchina("Zucchina genovese" , 170 , 30),
  new Zucchina("striata di Napoli" , 60 , 14),
  new Zucchina("Zucchina bianca triestina" , 50 , 12),
  new Zucchina("rigata pugliese" , 100 , 16),
  new Zucchina("tondo di Piacenza" ,145 , 21),
  new Zucchina("Zucchino romanesco" , 50 , 11),
  new Zucchina("Zucchine patissone" , 55 , 13),
  new Zucchina("Tondo di Nizza" , 60 , 14)
];

//forEach
var somma = 0;
zucchine.forEach(function(item){
  somma += item.peso;
});
console.log("Il peso complessivo delle 10 zucchine è: ", somma, "g.");

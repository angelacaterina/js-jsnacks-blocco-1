// JSnack 1A
// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla e Peso = 10 
var ball = {
  name: "palla",
  weight: 10
}
console.log("L'oggetto palla è ", ball);

// JSnack 1B
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
ball.weight = Number(prompt("inserisci il nuovo peso della palla"));
console.log("Il nuovo oggetto palla è ",ball);

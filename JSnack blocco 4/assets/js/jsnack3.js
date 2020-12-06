// 1. Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
var triangoloRettangolo = {
  base : 9,
  altezza : 12
}
console.log(triangoloRettangolo);

// 2. Calcolare perimetro e area. (ripassiamo il Teorema di Pitagora ;D )
for(key in triangoloRettangolo){
  var base = triangoloRettangolo.base;
  var altezza = triangoloRettangolo.altezza;
  var i = Math.sqrt((base**2)+(altezza**2));

  var perimetro = base + altezza + i;
  var area = (base * altezza) / 2;
}
console.log("Ipotenusa:", i);

console.log("Perimetro:", perimetro);
console.log("Area:", area);

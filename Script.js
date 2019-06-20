/*          
Alunos: Felipe Silva e Maryane Souza           
*/     


             //Metro para Quilômetro -> KM: unidade de medida de Quilômetro
function MetroKM(){
  return mkm/1000;

}
var mkm = parseFloat(prompt());
console.log(MetroKM(mkm) + " km");

             //Metro para Centimetro -> CM: unidade de medida de Centímetro
function MetroCM(){
  return mcm*100;

}
var mcm = parseFloat(prompt());
console.log(MetroCM(mcm) + " cm");

              //Metro para Decímetro -> DM: unidade de medida de Decímetro
function MetroDM(){
  return Mdm*10;
}
var Mdm = parseFloat(prompt());
console.log(MetroDM(Mdm) + " dm");

             //Metro para Decâmetro -> DAM: unidade de medida de Decâmetro
function MetroDAM(){
  return Mdam/10;
}
var Mdam = parseFloat(prompt());
console.log(MetroDAM(Mdam) + " dam");

             //Metro para Hectômetro -> HM: unidade de medida de Hectômetro
function MetroHM(){
  return (Mhm/10) /10;
}
var Mhm = parseFloat(prompt());
console.log(MetroHM(Mhm) + " hm");

             //Metro para Milímetro -> MM: unidade de medida de Milímetro
function MetroMM(){
  return Mmm*1000;

}
var Mmm = parseFloat(prompt());
console.log(MetroMM(Mmm) + " mm");

             //Metro para Micrometro -> µM: unidade de medida de Micrometro
function MetroµM(){
  return Mµm*1e+6;

}
var Mµm = parseFloat(prompt());
console.log(MetroµM(Mµm) + " µm");

             //Metro para Nanometro -> NM: unidade de medida de Nanometro
function MetroNM(){
  return Mnm*1e+9;
}
var Mnm = parseFloat(prompt());
console.log(MetroNM(Mnm) + " nm");

             //Metro para Milha -> MI: unidade de medida de Milha
function MetroMI(){
  return Mmi/1609.344;
}
var Mmi = parseFloat(prompt());
console.log(MetroMI(Mmi) + " mi");

             //Metro para Jardas -> YD: unidade de medida de Jardas
function MetroYD(){
  return Myd*1.094;
}
var Myd = parseFloat(prompt());
console.log(MetroYD(Myd) + " yd");

             //Metro para Pé -> FT: unidade de medida de Jé
function MetroFT(){
return Mft*3.281;
}
var Mft = parseFloat(prompt());
console.log(MetroFT(Mft) + " ft");

             //Metro para Polegada -> IN: unidade de medida de Polegadas
function MetroIN(){
return Min*39.37;
}
var Min = parseFloat(prompt());
console.log(MetroIN(Min) + " in");

            //Metro para Milha náutica -> NM: unidade de medida de Milha náutica
function MetroMIN(){
  return Mmin/1852;
}
var Mmin = parseFloat(prompt());
console.log(MetroMIN(Mmin) + " NM");
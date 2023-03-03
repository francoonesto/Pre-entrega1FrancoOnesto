alert("Bienvenido a Maldivas,A continuación te pediremos unos datos para continuar")
let x=Number;
let user = prompt("INGRESA UN USUARIO")
for (let i=0; i<3 ; i++){
console.log(user)
if(user != "" ){
    console.log("correcto")
break}
    else if(user === x ){
    console.log("incorrecto");
prompt("INGRESE DE NUEVO,RECUERDA NO USAR NUMEROS")}
    else(user === "");{
    console.log("incorrecto")
    prompt("INGRESE DE NUEVO,RECUERDA NO DEJAR ESPACIOS EN BLANCO")}}
let password = parseFloat(prompt("INGRESA 1234"))
const pass = 1234;
for (let i=0; i<3 ; i++){
console.log(password)
if (password == pass){
console.log("correcto");
alert("GRACIAS POR COMPLETAR")
break}
else if(password == ""){
console.log("incorrecto");
 prompt("INGRESE DE NUEVO,RECUERDA NO DEJAR ESPACIOS EN BLANCO")}
else (password != Number);{
console.log("incorrecto");
prompt("INGRESE DE NUEVO,RECUERDA USAR NUMEROS")}}
let producto = prompt("SELECCIONA TU PRODUCTO(JEAN,SHORT,REMERA)en caso de no querer comprar,presiona cancelar")
console.log(producto)
switch(producto){
    case "jean": console.log("jean elastizado $12.000");
    alert("serian $12.000 podes abonar con tarjeta de credito,debito o transferencia.Selecciona un metodo,no colocar la palabra tarjeta")
    break;
    case "short": console.log("short de jean $8.000")
    alert("serian $8.000 podes abonar con tarjeta de credito,debito o transferencia.Selecciona un metodo,no colocar la palabra tarjeta")
    break;
    case "remera": console.log("remera de lanilla $4.000")
    alert("serian $4.000 podes abonar con tarjeta de credito,debito o transferencia.Selecciona un metodo,no colocar la palabra tarjeta")
    break;
    default:
        console.log("no selecciono producto")
        break;
}
let medioDePago =prompt("ESCRIBA MEDIO DE PAGO")
console.log(medioDePago)
let credito= ("1 pago sin/interes , para calcular 3 cuotas escribe(calcular + nombre del producto)")
let debito= ("para saber recargo escribe(debin + nombre del producto)")
let transferencia=("pago por transferencia es sin recargo, deposita CBU:01234567891011123")
switch(medioDePago){
     case "credito": console.log(credito);alert(credito)
    break;
     case "debito": console.log(debito);alert(debito)
     break;
     case "transferencia": console.log(transferencia);alert(transferencia)
     break;
     default:
        console.log("pago abandonado")
    break;
}
let calculoTotal=prompt("que haremos?")
switch(calcular){
    case "calcular jean": console.log(calcular);alert(operacion)
   break;
   case "calcular short": console.log(operacion);alert(operacion)
   break;
   case "calcular remera": console.log(operacion);alert(operacion)
   break;
    case "debin jean": console.log(operacion1);alert(operacion1)
    break;
    case "debin short": console.log(operacion1);alert(operacion1)
    break;
    case "debin remera": console.log(operacion1);alert(operacion1)
    break;
    case "transferencia": console.log(transferencia);alert(transferencia)
    break;
    default:
       console.log("proceso terminado")
       alert("A continuación sera redirigido a un sitio seguro,para completar el pago,gracias")
   break;}
function calcular(jean,short,remera,cuotas,operacion){
switch (operacion){
case"calcular jean":
return 12000 / 3;
case"calcular short":
return short / cuotas;
case "calcular remera":
return  remera/cuotas;
default:
return 0;
}}
function debin(jean,short,remera,recargodebin,operacion1){
    switch (operacion1){
        case"calcular jean":
        return jean * recargodebin;
        case"calcular short":
        return short * recargodebin;
        case "calcular remera":
        return remera * recargodebin;
        default:
        return 0;
}}
let recargodebin=0.10;
let cuotas=3;
let jean= 12000;
let short= 8000;
let remera= 4000;
calcular(jean,cuotas,"calcular jean")
calcular(short,cuotas,"calcular short")
calcular(jean,short,remera,cuotas,"calcular remera")
debin(jean,short,remera,recargodebin,"debin jean")
debin(jean,short,remera,recargodebin,"debin short")
debin(jean,short,remera,recargodebin,"debin remera")
document.write("Programa para el manejo de tipo de datos");

//Tipos cadena
var cadena = "Hola desde JavaScript";
document.write("<br>Valor de cadena: "+cadena);

//Numeros
var num1 = 15;
var num2 = parseInt("20");
var num3 = num1+num2;
document.write("<br>Valor num1: "+num1+" Valor num2: "+num2+" Valor num3: "+num3);

//Boolean
var bandera = true;
var resultado = (num1 == num2);
document.write("<br>Valor bandera: "+bandera);
document.write("<br>Valor resultado: "+resultado);

//Especiales js tipo null
var tipoNull = null;
document.write("<br>Valor tipoNull: "+tipoNull);

//tipo no definido
var tipoIndefinido;
document.write("<br>Valor tipoIndefinido: "+tipoIndefinido);

//saber el tipo de dato utilizado
resultado = (typeof num1 == "number");
document.write("<br>num 1 es un numero?? : "+resultado);

resultado = (typeof cadena == "string");
document.write("<br>cadena es string??: "+resultado);

resultado = (typeof bandera == "boolean");
document.write("<br>Bandera es boolean??: "+resultado);


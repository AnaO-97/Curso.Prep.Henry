// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'I just felt like running';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 26;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  str = 'Henry';
  return str;
}

function suma(x, y) {
  resultado = x + y;
  return resultado;
}

function resta(x, y) {
  resultado = x - y;
  return resultado;
}

function multiplica(x, y) {
  producto = x * y;
  return producto;
}

function divide(x, y) {
  resultado = x / y;
  return resultado;
}

function sonIguales(x, y) {
  if (x === y){
    return true;
  }
  return false;
  
}

function tienenMismaLongitud(str1, str2) {
  var a = str1.length;
  var b = str2.length;
  if (a === b){
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  if (num < 90){
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  if (num > 50){
    return true;
  }
  return false;  
}

function obtenerResto(x, y) {
var residuo = x % y;
return residuo;
}

function esPar(num) {
  var resultado = num % 2;
  if (resultado === 0){
    return true;
  }
  return false; 
}

function esImpar(num) {
  var resultado = num % 2;
  if (resultado === 1){
    return true;
  }
  return false;  
}

function elevarAlCuadrado(num) {
 resultado = Math.pow(num, 2);
  return resultado;
}

function elevarAlCubo(num) {
  resultado = Math.pow(num, 3);
  return resultado;
}

function elevar(num, exponent) {
  resultado = Math.pow(num, exponent);
  return resultado;
}

function redondearNumero(num) {
  resultado = Math.round(num);
  return resultado;
}

function redondearHaciaArriba(num) {
  resultado = Math.ceil(num);
  return resultado;
}

function numeroRandom() {
  resultado = Math.random();
  return resultado;
}

function esPositivo(numero) {
  if (numero < 0){
    return 'Es negativo';
  }
  else if (numero > 0){
    return 'Es positivo';
  }
  else if (numero == 0){
    return false;
  }  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  str = str + '!';
  return str;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
  NombreCompleto = nombre + ' ' + apellido;
  return NombreCompleto;

}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
  Primera = 'Hola';
  Mensaje = Primera + ' ' + nombre + '!';
  return Mensaje; 
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
  AreaTotal = alto * ancho;
  return AreaTotal;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
  Perimetro = lado + lado + lado + lado;
  return Perimetro;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  
  AreaTotal = ((base * altura) / 2);
  return AreaTotal;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
  Dolares = (euro * 1.20) / (1);
  return Dolares;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle  
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  var ExpRegVocal = /a|e|i|o|u/;
  var Evalua      = letra.match(ExpRegVocal);

  if (((letra.length != 0) && (letra.length > 1)) || (Evalua == null))
    return ('Dato incorrecto');
  
  if(Evalua != null)
    return ('Es vocal') ;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  /*var objeto={prim:"cole",
                segu:"univ",
                terc:"trab"};*/

  var valor  = Object.values(objeto);
  var clave  = Object.keys(objeto);
  var filas  = valor.length;
  var maresp = [];

  //PRIMERO CREA UNA MATRIZ DE DOS COLUMNAS POR i CANTIDAD DE FILAS
  //LAS FILAS LAS DETERMINA LA CANTIDAD DE  PROPIEDADES QUE HAY
  //LA CANTIDAD DE LAS PROPIEDADES QUE HAY LAS INDICA EL TAMAÑO
  //DEL ARRAY valor O DEL ARRAY clave, LOS CUALES REPRESENTAR 
  //LA CLAVE Y VALOR DE CADAD PROPIEDAD DEL OBJETO QUE SE ESTA ANALIZANDO
  for(var i=0; i<filas; i++) {
    maresp[i] = new Array(2);
  }

  //EN ESTE PUNTO SE ASIGNA EL VALOR DE clave Y valor EN LA POSICIÓN
  //DETERMINADA POR LA FILA Y COLUMNA CORRESPONDIENTE 
  for (let f=0; f<filas; f++){
    maresp[f][0]= clave[f];     	
    maresp[f][1]= valor[f];
  }   		  	  	
      
  return maresp;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objResp  = {};
  //var string  = "anitalavalat" //a:5 t:2 l:2
  var tamano	 = string.length;
  var contador = 0;
  //PRIMERO CREA UN OBJETO CON LAS CLAVES QUE SON LAS LETRAS QUE HACEN PARTE DE string
  //SE LE ASIGNA UN VALOR DE CERO A LA CLAVE CORRESPONDIENTE
  
  for (let i = 0; i<tamano; i++){
      var propiedad	    = string[i];
      //console.log(propiedad);
    objResp[propiedad] = contador;
  }
  //console.log(objResp); 

  //COMO YA ESTA EL OBJETO CON LAS CLAVES CORRESPONDIENTES A CADA LETRA DEL STRING
  //SE COMPARA CADA CLAVE CON CADA LETRA DEL STRING PARA VERIFICAR CUANTAS LETRAS HAY DE CADA
  //CLAVE EN EL STRING
  for (let clave in objResp){
    //console.log("clave-----------------" + clave); 
    for (let i = 0; i<tamano; i++){
    //console.log("valor " + objResp[clave]); 
    //console.log("letra " + string[i]);
    if (clave==string[i]){
        contador = contador + 1;
          //console.log("contador " + contador);
          objResp[clave]=contador;
      }
    }
    contador = 0;
  }
  //console.log(objResp); 
  return objResp;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  //var s      = "soyHENRY";
  var resp   = "";
  var minusc = [];
  //var mayusc = [];
  
  //PRIMERO SE VERIFICA SI EL CODIGO ASCII DE LA LETRA INGRESADA ESTA DENTRO DEL 
  //RANGO DE LAS MAYUSCULAS QUE ESTA ENTRE 65 Y 90, PARA ELLO SE USA charCodeAt
  for(let i = 0; i < (s.length); i++){	  
      if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){             
        resp = resp + s[i];           
        //mayusc.push(s[i]);  
        //console.log(s[i] + " esta en la posicion " + i + " ascii " + s.charCodeAt(i));
      }
  // EN ESTE PUNTO, SI EL ASCII ESTA DENTRO DE LAS MAYUSCULAS SE INGRESA LA LETRA
  // EN LA VARIABLE resp SINO SE PONE LA LETRA EN EL ARREGLO minusc
      else {
        minusc.push(s[i]);      	
        //console.log(s[i] + " minuscula ");        
      }
  }
  // COMO YA ESTAN SEPARADAS LAS MAYUSCULAS DE LAS MINUSCULAS, SIMPLEMENTE A LA VARIABLE resp
  // SE LE SUMAN LAS LETRAS QUE ESTAN DENTRO DEL ARREGLO DE minusc
  for(let i = 0; i< (minusc.length); i++){
    resp = resp + minusc[i];
  }
    
  /*console.log(mayusc);
  console.log(minusc);
  console.log(resp);*/

  return resp;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  //var str 	 = "hola mundo increible";
  var espejo 	 = "";
  var contWord = 0;
  var iniWord;
  var finWord;
  //CON EL LOOP SE RECORRE TODA LA FRASE, MIENTRAS SE RECORRE SE BUSCA (ASCII 32= ESPACIO VACÍO)
  //EL INICIO Y FIN DE CADA PALABRA, ELLO TOMANDO COMO REFERENCIA LOS ESPACIOS ENTRE CADA PALABRA
  //DE MANERA QUE EL INICIO LO INDICA LA PRIMERA LETRA DE LA PALABRA Y EL FIN LA ULTIMA LETRA DE LA MISMA
  for(let i=0; i<str.length; i++)
  {
   if(str.charCodeAt(i)==32 || i==(str.length-1))
   {
     if(str.charCodeAt(i)==32 && i!=(str.length-1) && i!=0)
       finWord = i-1;
     if((str.charCodeAt(i)==32 && i==(str.length-1) ) || 
        (str.charCodeAt(i)!=32 && i==(str.length-1))) 
       finWord = i;
     
     //console.log("Fin palabra   -> " + finWord);
     //-------------------------------------------------
     var bandera = true;
     var auxi	   = finWord;
     while(bandera)
     {
       //console.log("auxi -> " + auxi);
       //console.log("letra-> " + str[auxi])
       if(str.charCodeAt(auxi)==32 && auxi!=0 && auxi!=finWord)
       {
         iniWord = auxi+1;
         bandera = false;
       }
       if ((str.charCodeAt(auxi)==32 && auxi==0 ) || 
           (str.charCodeAt(auxi)!=32 && auxi==0 ) )
       {
         iniWord = auxi;
         bandera = false;       
       }
       auxi = auxi-1;     
     }
     //console.log("Inicio palabra-> " + iniWord);
     //-------------------------------------------------
//COMO SE HA ENCONTRADO iniWord Y finWord, SE VERIFICA SI ES LA PRIMER PALABRA O NO PALABRA     
//PARA AGREGAR UN ESPACIO VACÍO Y DESPUES SE COMIENZA A PONER EN LA VARIABLE espejo
//CADA LETRA DE str DESDE finWord HASTA iniWord PARA QUE QUEDE INVERTIDA
     contWord = contWord + 1;
     
     if (contWord>1)
       espejo = espejo + " ";   
     //-------------------------------------------------
     for(let j=finWord; j>=iniWord; j--)
     {
       espejo = espejo + str[j];
     }
   }
  }
  /*console.log(str);
  console.log(espejo);*/

  return espejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  //var numero = 421;
  var str	   = numero.toString();
  var espejo = "";

//SE PONE EL numero COMO UNA CADENA DE STRING PARA PODER ACCEDER A CADA DIGITO POR SEPARADO;
//PONERLOS EN UNA VARIABLE espejo Y FINALMENTE COMPARAR EL ESPEJO CON EL REAL PARA DETERMINAR SI SE TRATA
//DE UNA NUMERO CAPICUA

  for(let i=(str.length-1); i>=0; i--)
    espejo = espejo + str[i];

  if(str===espejo)
    return ("Es capicua");
  else
    return ("No es capicua");	
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  //var cadena = "a PRUEBA abc FINAL c";
  var sinABC = "";

  for (let i=0; i<(cadena.length); i++){
    if(	((cadena[i]!="a")) && 
        ((cadena[i]!="b")) && 
        ((cadena[i]!="c"))	)
      sinABC = sinABC + cadena[i];
  }

  /*console.log(cadena);
  console.log(sinABC);*/
  return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //var arr = ["3aaa","a","5bbbbb","2cc","4fefe", "1"];
  var tam      = arr.length;
  var orden    = [];
  var elemento = 0;
  let i		     = 1;
  
//PRIMERO HAY QUE TENER EN CUENTA EL TAMAÑO tam DEL ARREGLO ORIGINAL arr PARA IDENTIFICAR CUANTAS VECES
//SE DEBE ITERAR SOBRE arr PARA ENCONTRAR EL STRING CON EL MENOR TAMAÑO, Y UNA VEZ IDENTIFICADA LA LONGITUD MENOR
//SE TOMA ESE ELEMENTO CON length MENOR Y SE PONE EN orden, DESPUES SE ELIMINA ESTE ELEMENTO DE arr, LUEGO
//SE DISMINUYE EL VALOR DE tam Y SE HACE EL MISMO PROCESO HASTA QUE EN arr SOLO QUEDE UN ELEMENTO QUE OBVIAMENTE 
//CONTENDRA EL ELEMENTO DE MAYOR LONGITUD
  while(tam!=0)
  {
    if(tam>1)
    {
      i 		   = 1;
      elemento = arr[0];      
      for(; i<tam; i++)
      {  
        /*console.log("tam.elem  " + elemento + " - " + elemento.length);
          console.log("tam.arr[] " + arr[i]   + " - " + arr[i].length);        */
        if(elemento.length>arr[i].length)      
          elemento = arr[i]; 
        else if (elemento.length==arr[i].length)
          elemento;
      }
      orden.push(elemento);    
      arr.splice((arr.indexOf(elemento)),1); 
      tam = tam-1;      
      /*console.log("elemento  " + elemento);
        console.log("arr       " + arr);  console.log("orden     " + orden);
        console.log("i         " + i);    console.log("tam       " + tam);
        console.log("-------------------------------------");                   */
    }
    //------------------------------------------------
    else if (tam==1)  
    {
      orden.push(arr[0]);
      tam = tam-1;
    }
  }
  /*console.log(arr);
  console.log(orden);*/

  return orden;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  /*var arreglo1 = [4,1,0,2,3,-2,9,12,16];
    var arreglo2 = [1,3,7,8,17,0,9];*/
  var union	 = [];
  
  for(let i=0; i<(arreglo1.length);i++)
  {
    for(let j=0; j<(arreglo2.length);j++)
    {
      if(arreglo1[i] == arreglo2[j])
        union.push(arreglo1[i]);
    }
  }
  /*console.log(arreglo1);
  console.log(arreglo2);
  console.log(union);*/

  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


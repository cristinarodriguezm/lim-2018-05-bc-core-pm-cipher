

//Declarando variables de los botones
var cifrar = document.getElementById("cifrado"); 
var descifrar = document.getElementById("descifrado");


//Agregando eventos a los botones
cifrar.addEventListener("click", encode);
descifrar.addEventListener("click", decode);

//funcion para cifrado
function encode () {
  var m = document.getElementById("textoATraducir").value; //Agarrando el valor del texto introducido
  var desplazar = document.getElementById("shift").value; //agarrando el valor del numero a lugares a desplazar
  var s = parseInt(desplazar);
  var result = cipher.encode (s,m); //variable a mostrar despues de aplicada la formula
  
    document.getElementById("mostrarResultado").innerHTML = result; // impresion del resultado en el html
}

// funcion de descifrado
function decode () { 
  var m = document.getElementById("textoATraducir").value;//Agarrando el valor del texto introducido
  var desplazar = document.getElementById("shift").value; //agarrando el valor del numero a lugares a desplazar
  var s = parseInt(desplazar);
  var result = cipher.decode(s,m); 
  
  document.getElementById("mostrarResultado").innerHTML = result;// impresion del resultado en el html
  }


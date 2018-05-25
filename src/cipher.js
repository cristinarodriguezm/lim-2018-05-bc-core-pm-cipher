window.cipher = {
  
  // ... 
};

cifrar.addEventListener("click", encode);
descifrar.addEventListener("click", decode);

function encode () {
  var m = document.getElementById("textoATraducir").value;
  var desp = document.getElementById("shift").value;
  var s = parseInt(desp)
  var result = " ";
  for (var i = 0; i < m.length; i++){
      var letter = m.charCodeAt(i);
    if (65 <= letter && letter <= 90) result += String.fromCharCode((letter - 65 + s) % 26 + 65);
    else if (97 <= letter && letter <= 122) result += String.fromCharCode((letter - 97 + s) % 26 + 97);
    else                          result += m.charAt(i)
  
    document.getElementById("mostrarResultado").innerHTML = result;
  }
}


function decode () {
  var m = document.getElementById("textoATraducir").value;
  var desp = document.getElementById("shift").value;
  var s= parseInt(desp)
  var result = " ";
  for (var i = 0; i < m.length; i++){
      var letter = m.charCodeAt(i);
      if (65 <= letter && letter <=(90-s) ) result += String.fromCharCode((letter - 65 - s) % 26 + 65);
      else if (((90-s)+1) <= letter && letter <= (90-s)) result += String.fromCharCode((letter - 97 - s) % 26 + 97);
    else                          result += m.charAt(i)
  
    document.getElementById("mostrarResultado").innerHTML = result;
  
  }

}

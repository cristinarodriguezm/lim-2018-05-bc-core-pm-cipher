window.cipher = {
  encode : (offset, string) => {
    let m=string;
    let s=offset % 26;
    let result ="";
    for (var i = 0; i < m.length; i++){ 
      var letter = m.charCodeAt(i); //convirtiendo el texto a codigo ASCII
      if (65 <= letter && letter <= 90) {
        result += String.fromCharCode((letter - 65 + s) % 26 + 65);// Aplicando formula de conversion en caso de letras mayusculas
      } else if (97 <= letter && letter <= 122){
        result += String.fromCharCode((letter - 97 + s) % 26 + 97); // Aplicando forumula de conversion en caso de letras minusculas
      } else { 
        result += m.charAt(i) // traspaso de caracteres no incluidos en los rangos anteriores
      }
   
  }
  return result;
  // ... 
},
  decode : (offset, string) => {
    let m= string;
    let s= offset % 26;
    let result = "";
    for (var i = 0; i < m.length; i++){
      var letter = m.charCodeAt(i);//convirtiendo el texto a codigo ASCII
      if (65 <= letter && letter <= 90) {
      result += String.fromCharCode((letter - 65 - s + 26) % 26 + 65);// Aplicando formula de conversion en caso de letras mayusculas
      } else if (97 <= letter && letter <= 122){ 
      result += String.fromCharCode((letter - 97 - s + 26) % 26 + 97);// Aplicando forumula de conversion en caso de letras minusculas
      }else {  result += m.charAt(i) // traspaso de caracteres no incluidos en los rangos anteriores
      }
    }
    return result;
  }
}


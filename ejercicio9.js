console.clear();45
console.log("Escriba una función para poner en mayúscula la primera letra de cada palabra en la cadena proporcionada");

const capitalizeFirstLetterOfEachWord = (someString) => {
    
   let splitStr = someString.split(' ');
   //recorrer el array
   for (let i = 0; i < splitStr.length; i++) {
       //extraer el caracter en la posición indicada
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

console.log(capitalizeFirstLetterOfEachWord("i am a string")) // I Am A String
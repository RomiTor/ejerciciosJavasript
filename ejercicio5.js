console.clear();
console.log("Ejercicio 5: Devuelve una matriz que contiene todos los caracteres repetidos que aparecen en la cadena proporcionada");

const findDuplicates = (someString, repeatTimes) => {
    
    const stringArray = someString.split("");
    const resultArray = [];

    for (let i=0; i < stringArray.length -1; i++){
        let contador = 1;
        for (let j = i + 1; j < stringArray.length; j++){
            if (stringArray[i] === stringArray[j]){
                contador++;
            }
        }
        if (repeatTimes === contador){
            resultArray.push(stringArray[i]);
        }
    }
    return resultArray;
}

console.log(findDuplicates("abcddef", 2)) // [d]
console.log(findDuplicates("tfghhhplffzaaa", 3)) // [f, h, a]
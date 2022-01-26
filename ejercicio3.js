console.clear();
console.log("Ejercicio 3: Elimina caracteres específicos de una cadena sin usar replace()");

const removeCharacters = (someString, charactersToRemove) => {
    
    const arrayString = ([]);
    for (let i = 0; i < someString.length; i++){
        if (charactersToRemove.includes(someString[i]) === false){
            arrayString.push(someString[i])
        }
    }
    return arrayString.join("");
}

console.log(removeCharacters("I am an example string", ["a", "x"]))
// I m n emple string
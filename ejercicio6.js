console.clear();
console.log("Ejercicio 6: Determine si la letra en el índice proporcionado en la cadena proporcionada es una vocal o una consonante.");

const vowelOrConsonant = (someString, position) => {
    const arrayString = someString.split("")

    for (let i = 0; i < someString; i++){
        if (someString[i] === "a" ){
            console.log("Caracter es una vocal")
        }
        else{
            console.log("Caracter es una consonante")
        }
    }

}

console.log(vowelOrConsonant("hello", 4)) // consonant
console.log(vowelOrConsonant("cat", 2)) // vowel
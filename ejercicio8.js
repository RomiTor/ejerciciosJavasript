console.clear();
console.log("Ejercicio 8: Determinar si una cadena está en orden alfabético ");

const isOrderedAlphabetically = (someString, reverseOrder) => {
    const strArray = someString.split("");
    const stringOrder = strArray.sort();
    
    if (reverseOrder == false) {
        return strArray.join("") === stringOrder.join("");
    }
    else {
        const stringReversed = strArray.reverse();
        const strReversedAZ = stringReversed.sort();
        console.log(stringReversed.join("", someString))
    }
}

console.log(isOrderedAlphabetically("abbcddeikl", false)) // true
console.log(isOrderedAlphabetically("jheca", true)) // true
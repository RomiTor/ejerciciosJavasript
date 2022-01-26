console.clear();
console.log("Ejercicio 1: Invierte esta cadena sin usar reverse().");

const reverseString = (someString) => {
    if (someString === "") {
        return "";
    } else {
        return reverseString(someString.substring(1)) + someString.charAt(0);
    }
}

console.log(reverseString("I am a string")) // gnirts a ma I
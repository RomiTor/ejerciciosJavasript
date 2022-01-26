console.clear();
console.log("Ejercicio 2: ¿Es un palíndromo? Escribe una función que devuelva el string al revés");

const isPalindrome = (someString) => {
    const stringArray = someString.split("")
    const stringReverse = stringArray.reverse().join("");

    if (someString === stringReverse) {
        console.log( someString + " es palíndromo");
    }
    else {
        console.log(someString + " no es palíndromo");
    }
};

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("apple")) // false
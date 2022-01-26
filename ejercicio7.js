console.clear();
console.log("Ejercicio 7: Devuelve la cadena proporcionada en orden alfabético ascendente o descendente");

const sortString = (someString, reverseOrder) => {
    const orderString = someString.split("").sort();
    console.log(orderString);

    const reverseString = someString.split("").sort().reverse();
    console.log(reverseString);
}

console.log(sortString("bacd", false)) // "abcd"
console.log(sortString("axedzpq", true)) // "zxqpeda"
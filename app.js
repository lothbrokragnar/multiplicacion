// función anonima con la cual se verifica si el rango es correcto
let ciclo = function () {
    // Rango con el cual se trabajarán las tablas
    let numero = +prompt("ingresa tu numero entre el 1 y 20: ");
    // ciclo que define si el rango es correcto o no. Si no es correcto, se repite el mensaje
    while (numero > 20 || numero < 1) {
        numero = +prompt("Numero fuera de rango (1 al 20). Vuelve a ingresarlo: ");
    }
    // retorna el valor final de numero a la funcion definida dentro de la variable ciclo
    return numero;
}

// asigna el resultado de la funcion a la variable rango
let rango = ciclo();

// imprime el resultado en un ciclo definido desde 1 que incrementa de uno en uno hasta que se cumpla el rango
for (let i = 1; i <= rango; i++) {
    console.log(`${i} x ${rango} = ${i * rango}`);
}
// ciclo exterior que sirve para definir el limite del ciclo interior, así como para imprimir los factoriales de 1 en 1
for (let j = 1; j <= rango; j++) {
    let factorial = 1
    // crea el ciclo anidado para los factoriales (ejemplo: 4!=1*2*3*4). Este finaliza y empieza uno nuevo hasta que se cumpla el ciclo exterior
    for (let k = 1; k <= j; k++) {
        factorial = factorial * k
    }
    // imprime el resultado del ciclo anidado hasta que se cumpla el ciclo exterior
    console.log(`Factorial de ${j} es: ${factorial}`);
}

// Fin
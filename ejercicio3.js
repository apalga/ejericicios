//* ====== EJERCICIO 3 ======

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* CONSIGNA: Contamos con un listado de números del 1 al 10 y se solicita crear una función que reciba como parámetro ese listado
//* y devuelva un arreglo de objetos indicando si ese número es divisible por 3. Cada objeto debe tener la siguiente forma:
//*  {
//*     value:
//*     divisible:
//*  }

//* donde "value" es el valor que queremos saber si es divisible por 3 o no, y "divisible" es un booleano que indica si es divisible o no por 3
//* La función se debe llamar divisiblePorTres



function ejercicio1(arr) {

    let NuevoArreglo = [];
    arr.forEach((value, index, array) => {

        if (value % 3 == 0) {

            NuevoArreglo.push(value);
            console.log(NuevoArreglo);
        }


    });
}



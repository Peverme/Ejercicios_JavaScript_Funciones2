const x = [100, 2, 8, 9];
const multiplicarArreglo = arreglo => {

    const minimo = Math.min(...arreglo);
    const maximo = Math.max(...arreglo);
    return minimo * maximo;
}


console.log(multiplicarArreglo(x));
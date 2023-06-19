const a=[1 , 2, 3, 4 ,5 ,6];
const b=[7, 8, 9 ];

const funcionArray = (arreglo1, arreglo2) =>{
    let nuevoArreglo = arreglo1.concat(arreglo2);
    nuevoArreglo = nuevoArreglo.map(i => {
        return i*2;
    });
    return nuevoArreglo;
}


console.log(funcionArray(a , b));

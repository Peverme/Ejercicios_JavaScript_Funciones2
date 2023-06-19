const a=[1 , 2, 3, 4 ,5 ,6];
const b=[7, 8, 9];
const x=[1 , 2, 3, 4 ,5 ,6];
const y=[7 , 8, 9, 10 ,11 ,12];

const booleanoArray = (arreglo1,arreglo2) => {
    const nuevoArreglo = arreglo1.concat(arreglo2);
    if(nuevoArreglo.length >= 10){
        return true;
    }else{
        return false;
    }
}

console.log(booleanoArray(a, b));
console.log(booleanoArray(x, y));

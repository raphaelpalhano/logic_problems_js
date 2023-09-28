
function moveZeros(arr) {
    let arrWithoutZero = arr.filter((n) => n !== 0);
    console.log(arrWithoutZero)
    let arrOnlyZeros = arr.filter((n) => typeof n == 'number' && n == 0);
    console.log(arrOnlyZeros)
    
    return arrWithoutZero.concat(arrOnlyZeros);
}

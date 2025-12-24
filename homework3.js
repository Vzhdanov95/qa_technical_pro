
function pow (x,y){
    if (y === 0) {
        return 1;
    }

    let result = 1;

    for (let i = 1; i <= y; i++){
        result *= x;
    }

    return result;
}
console.log(pow(2, 3)); 
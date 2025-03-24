function pow(x, y) {
    if (y === 0) {
        return 1;
    }
    let result = 1
    for (let i = 0; i < y; i++) {
        result = result * x;
    }
    return result;
}

console.log(pow(2, 0))
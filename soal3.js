function segitiga1(panjang) {
    let s = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            s += '* ';
        }
        s += '\n';
    }
    return s;
}
console.log(segitiga1(6));
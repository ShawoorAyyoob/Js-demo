function ptr(n) {
    let str = '';
    let patternChar = n;
    for (let i = 1; i <= 4; i++) {
        str = str + ' ' + patternChar;
        console.log(str);
    }
}
ptr('*');
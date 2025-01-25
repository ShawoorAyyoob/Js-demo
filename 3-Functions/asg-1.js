function ptr(patternChar, numLines){
    let str = '';
    for (let i = 1; i <= numLines ; i++) {
        str = str + ' '+ patternChar;
        console.log(str);
    }
}
ptr('*', 4);
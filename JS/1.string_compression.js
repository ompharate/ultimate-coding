function compressString(str) {
    if(str.length === 0) return str;
    
    let result = []
    let count = 1;

    for(let i =1;i<str.length;i++){
        if(i< str.length && str[i] === str[i-1]) {
            count++;
        } else {
            result.push(str[i-1]+count);
            count=1;
        }
    }

    const compressed = result.join("")
    return compressString.length < str.length ? compressed : str;

}

console.log(compressString("aabcccccaaa")) // a2b1c5a3
console.log(compressString("abc")) // abc
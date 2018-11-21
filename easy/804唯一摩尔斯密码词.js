var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let res = new Set();
    let morse = '';
    for(let i=0;i<words.length;i++){
        for(let k=0;k<words[i].length;k++){
            morse += morseCodes[words[i][k].charCodeAt()-97];
        }
        res.add(morse);
        morse = '';
    }
    return res.size;

}
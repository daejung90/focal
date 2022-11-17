var originalWords = process.argv.slice(2);
var pigLatinWords = [];

// console.log("originalWords is", originalWords); (testing originalWords)
// console.log('pigLatinWrods is', pigLatinWords);  (testing pigLatinWords)


for (var i = 0; i < originalWords.length; i++) {
    //console.log(originalWords[i]);  (testing if they interacting with the correct array/string)
    // console.log(translateToPigLatin(originalWords[i])) (testing if its translating correctly)
    pigLatinWords.push(translateToPigLatin(originalWords[i]));
}


console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
    // console.log('Word', word); (testing each step of the funciton translateToPigLatin)
    // console.log('First letter', word[0]);
    // console.log('Rest of word', word.slice(2, word.length));
    return word.slice(1, word.length) + word[0] + 'ay';
}
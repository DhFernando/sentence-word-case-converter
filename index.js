// Functions

const upperCase = (s) => s.toUpperCase();
const lowerCase = (s) => s.toLowerCase();

const sentenceCase = (s) => {
    return lowerCase(s)[0].toUpperCase() + lowerCase(s).substring(1);
}

const capitalizedCase = (s) => {
    let lowerCaseWordArray = lowerCase(s).split(" ");
    let array = [];
    lowerCaseWordArray.forEach(el => {
        array.push(el[0].toUpperCase() + el.substring(1));
    });
    return array.join(" ")
}

const inverseCase = (s) => {
    let wordArray = s.split(" ");
    let inverseWordArray = [];
    wordArray.forEach(word => {
        let inversWord = [];
        word.split("").forEach(letter => {
            if(letter === letter.toUpperCase()){
                inversWord.push(letter.toLowerCase())
            }else{
                inversWord.push(letter.toUpperCase())
            }
        });
        inverseWordArray.push(inversWord.join(''))
        inversWord = []
    });
    return inverseWordArray.join(" ")
}

// Function calls

var sentence = "heLLow Worl";
console.log(upperCase(sentence));
console.log(lowerCase(sentence));
console.log(capitalizedCase(sentence));
console.log(inverseCase(sentence));
console.log(sentenceCase(sentence));
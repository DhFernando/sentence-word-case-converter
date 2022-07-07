// Functions

let main_input = document.getElementById("main_input").value;
let output = document.getElementById("outPut")

var s = main_input;
const upperCase = () => output.value = s.toUpperCase();
const lowerCase = () => output.value = s.toLowerCase();

const updateSentence = () => s = document.getElementById("main_input").value;

const sentenceCase = () => {
    output.value = lowerCase(s)[0].toUpperCase() + lowerCase(s).substring(1);
}

const capitalizedCase = () => {
    let lowerCaseWordArray = lowerCase(s).split(" ");
    let array = [];
    lowerCaseWordArray.forEach(el => {
        array.push(el[0].toUpperCase() + el.substring(1));
    });
    output.value = array.join(" ")
}

const inverseCase = () => {
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
    output.value = inverseWordArray.join(" ")
}

const titleCase = () => {
    let lowerCaseWordArray = lowerCase(s).split(" ");
    let lowers = ['a', 'an', 'am', 'is', 'are', 'the', 'and', 'but', 'or', 'for', 'nor',
    'as', 'at', 'by', 'for', 'from', 'in', 'into', 'near', 'of', 'on', 'onto', 'to', 'with'];
    let titleCaseArray = [];
    lowerCaseWordArray.forEach(word => {
        if(lowers.indexOf(word) > -1) {
            titleCaseArray.push(word);
        }else {
            titleCaseArray.push(word[0].toUpperCase() + word.substring(1));
        }
    });
    output.value = titleCaseArray.join(" ");
}
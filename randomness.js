//////////////////////
// GLOBAL VARIABLES //
//////////////////////

function rndNumber( ) {
   let decimal = Math.random()
   let conv = Math.random() * 21
   let round = Math.floor(conv)
   console.log(round)
}

rndNumber();

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function randLetter() {

    let newNum =  Math.random() * alphabet.length
    let rounded = Math.floor(newNum)
    let actualLetter = alphabet[rounded]
    console.log(actualLetter)

}
randLetter();

 const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes",
];
    function rndFood() {
        let conv = Math.random() * foods.length
        let round =Math.floor(conv);
        console.log(round);
    }
    rndFood()

const students = [
    "Bob",
    "Martin",
     "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
 ];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

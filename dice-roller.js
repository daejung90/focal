const args = process.argv.slice(2);

const rollDice = function() {
    return 1 + Math.floor(Math.random() * 6);
}
const rolled = function (num){
    let result = [];
    for (let i = 0; i < num; i++){
        let dice = rollDice();
        result.push(dice)
    }
    return result
}
let stringResult = rolled(args).join(", ");

console.log('Rolled ' + args + ' dices: ' + stringResult)
const args = process.argv.slice(2)

let total = 0;

for (let arg of args){
    total += Number(arg)
}
console.log(total)






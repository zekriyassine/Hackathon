const number1 = 5;
const number2 = 4;
let count = 0;
let result = 0

while (count < number1) {
   result = result + number2;
   count ++; 

}
console.log(result);

/* --------- */

let somme = 0;

for(let i = 0; i <= 100; i = i + 5){



somme = somme + i;
}
console.log(somme);

/* ----------- */

const number3 = 4; 
const number4 = 8;
const opperator =  "+";
let result2 = 0;

switch(opperator){
    case '+' : 
    result2 = number3 + number4
    break;

}
console.log(result2)




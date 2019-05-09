


const wilders = {
    name : "Geoffrey", 
    city : "Brussel", 
    age : 26,

}
for(let key in wilders){
    console.log(wilders[key]);
}

console.log(wilders.hasOwnProperty('name'));
console.log(wilders.hasOwnProperty('isLearningJS'));
console.log(wilders.hasOwnProperty('isLearningPhp'));

wilders.knowsHTML = true;
wilders.knowsCSS = true;
wilders.hobbies = ["travail", "manger", "dormir"]


delete wilders['name']
wilders['firstName'] = 'Geoffrey'
wilders.lastName = 'Bascours'
 
console.log(wilders);




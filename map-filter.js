const numbers = [3, 4, 5, 6, 7, 8]
const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

function square (element){
    return element * element;
}


// numbers.map(function(element, index){
//     console.log(element, index);
    
// })
//console.log(output);

// const result = numbers.map(function(element){
//     return element * element;
// })

// console.log(result);


// javascript array map
const result = numbers.map(x => x * x);
console.log(result);


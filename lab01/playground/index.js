const _ = require("lodash");
const numberList = [11,25,32,46,51,12,67,25,74,24];
const charList = ['a','b','c','d','e','f','g','h','i'];


//Filter
const oddList = _.filter(numberList, n => n%2 !== 0);
const evenList = _.filter(numberList, n => n%2 === 0);
console.log(`${numberList}\n${oddList}\n${evenList}`);

//Map
const pow = _.map(numberList, n=> n*n);
console.log(pow);

//Chunk
const chunkedList = _.chunk(charList, 3);
console.log(chunkedList);

//Order By
const people = [
    {name: 'Max', age: 19},
    {name: 'Olha', age: 30},
    {name: 'Viktor', age: 24},
    {name: 'Tanya', age: 18},
]
const sorted = _.orderBy(people, ['age'], ['asc']);
console.log(sorted);

//Unique
const array = [0,0,1,5,2,6,1,2,6,2,6,2,7,5,9];
const uniqueArray = _.uniq(array);
console.log(uniqueArray);

//Console input
const args = process.argv.slice(2);
if (args.length > 0) {
    console.log(`Перший переданий параметр: ${args[0]}`);
} else {
    console.log('Не передано жодного параметра.');
}
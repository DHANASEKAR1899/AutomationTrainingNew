import {add,subtract,PI} from './1.1-named-exports.ts';
import {add as sum,subtract as sub,PI as pi} from './2.1-export-all.ts'; // duplicate funtion name so we declared those functions with alias name

console.log("Addition : ",sum(5,4));
console.log("Subtraction : ",subtract(20,8));
console.log("Value of PI : ", PI);
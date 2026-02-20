let fruits : string[] = ["Apple", "Orange", "Banana", "Mango"];

/* To remove last two value

- Use pop() twice if you want to mutate the array step by step.
- Use splice(-2) if you want to remove the last two in one go.
- Use slice(0, -2) if you want a new array without the last two values.

*/

//================================= Method 1 : use pop() two time


// ================================= Method 2 : splice(-2) ======================================

fruits.splice(-2); // removes last 2 values
console.log(fruits); // ["Apple", "Orange"]

//=================================== Method 3 : slice (0,-2) ================================

let fruits1: string[] = ["Apple", "Orange", "Banana", "Mango"];
let newFruits = fruits1.slice(0, -2); // using slice method ---> Kadaisila irundhu rendu value slice pannu
console.log(newFruits); // ["Apple", "Orange"]
console.log(fruits1);    // ["Apple", "Orange", "Banana", "Mango"] (unchanged)

//============= If you want a new array without changing the origina and merging 2nd array ==================

let fruits2: string[] = ["Apple", "Orange", "Banana"];
let newFruits2 = ["Mango", "Pineapple", ...fruits2];
console.log(newFruits2);   // Output: ["Mango", "Pineapple", "Apple", "Orange", "Banana"]


//============= If you want a new array by merging 2 given array ==================

let fruits3: string[] = ["Apple", "Orange", "Banana"];

let fruits4 = ["Mango", "Pineapple"];

console.log(fruits3.concat(fruits4));  // Output: ["Mango", "Pineapple", "Apple", "Orange", "Banana"]

//========================= For each loop of array=============================

let fruits5: string[] = ["Apple", "Orange", "Banana", "Mango"];

fruits5.forEach((fruit, index) => {
  console.log(`Index: ${index}, Value: ${fruit}`);
});

// shorter form ===> fruits5.forEach((a,index)=> {console.log(a)});

// shortest form ====> fruits5.forEach((a)=> console.log(a));

// too short form =========> fruits5.forEach(a=> console.log(a));

/* output : 

Index: 0, Value: Apple
Index: 1, Value: Orange
Index: 2, Value: Banana
Index: 3, Value: Mango

*/

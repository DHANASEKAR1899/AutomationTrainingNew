// Array : An array is a collection of multiple valies.

//1. creating an Array 
console.log("1. Creating an Array");

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ['Apple', 'Banana', 'cherry'];
let random: any[] = [1, 'Mango', true, 2, 'Orange', false];
console.log(numbers);  // Output : [1,2,3,4,5]
console.log(fruits);   // Output : ['Apple','Banana','Cherry']
console.log(random);

//2. Accessing Array Elements
console.log("2. Accessing Array Elements");
console.log(fruits[1]); // Output : Banana
console.log(numbers[2]); // Output : 3

//3. Adding additional values to the existing array at the end
console.log("Adding additional values to the existing array at the end");
numbers.push(6);
console.log(numbers); // Output ; [1,2,3,4,5,6]

//4. Removing the last element from an array
console.log("4. Removing the last element from an array");
let lastNumber = numbers.pop();
console.log(lastNumber); // Output : [1,2,3,4,5]
console.log(numbers);    // Output ; [1,2,3,4,5] ---> checking again array elements

//5. Adding additional value at the beginning of an array.
console.log("5. Adding additional value at the beginning of an array.");
numbers.unshift(0);
console.log(numbers);   // Output : [0,1,2,3,4,5]

//6. Removing the first element from an array
console.log("6. Removing the first element from an array");
let firstNumber = numbers.shift();
console.log(firstNumber);

//7. Add or remove one or more values within the array from a specific index
console.log(numbers);    // Output ; [1,2,3,4,5]
console.log("7. Add or remove one or more values within the array from a specific index");

let removeNumbers = numbers.splice(2, 0, 10, 11); // splice(index, Number-of-elements-to-remove, 1stelementstoadd,2ndelementstoadd)
console.log(removeNumbers); // Output : [] -----------------> print removed values
console.log(numbers);       // Output : [1,2,10,11,3,4,5]

// let removeNumbers = numbers.splice(2,3,10,11);
// console.log(removeNumbers);  // output : 3,4,5 -----------> Value removed from array
// console.log(numbers);        // Output : [1,2,10,11] -----> modified current array

//  let removeNumbers = numbers.splice(2,5,10,11);
//  console.log(removeNumbers); // output : 3,4,5 -----------> Value removed from array 5 Given only 3 values available so it removed 3 values namely 3,4,5
//  console.log(numbers);       // Output : [1,2,10,11] -----> modified current array

//8. Creating a new array by extracting a portion of an existing array
console.log("8. Creating a new array by extracting a portion of an existing array");
let values: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(values);
let subArray = values.slice(1, 4); // slice(startIndex - Hold , endIndex + 1 value - remove/slice it) ==> similar to substring (1,4) in Java
console.log(subArray); // Output : [2,3,4] ---> slice or remove before and after index value

//9. Merges two or more arrays and creates a new array.
console.log("9. Merges two or more arrays and creates a new array.");

let numbers1: number[] = [1, 2, 3];
let numbers2: number[] = [4, 5, 6];
let numbers3: number[] = [7, 8, 9]
let mergedArray = numbers1.concat(numbers2, numbers3);
console.log(mergedArray);

//10. Finding the index of a specific array in an array
console.log("10. Finding the index of a specific array in an array");
// let index = fruits.indexOf('cherry'); // output : -1 Cherry first letter case sensitive 
let index = fruits.indexOf('cherry');
console.log(index);          // Output : 2
let mangoIndex = fruits.indexOf('Mango');
console.log(mangoIndex);     // Output : -1 ----> Mango value is not available in the array

//11. Iterate over values of array.
console.log("11. Iterate over values of array.");
// To iterate Array for of loop should be used --- Important

for (let f of fruits) {
   console.log(f);

}

for (let n of numbers) {
   console.log(n); // output :[1,2,10,11,3,4,5]
}

// Normal for loop :



for (let i: number = 0; i < fruits.length; i++) {

   console.log(fruits[i]);

}


// For Each loop :

fruits.forEach((fruit, index) => {
   console.log(`Index: ${index}, Value: ${fruit}`);
});


//12 . Reverse the values within the array

console.log("12 . Reverse the values within the array");
numbers.reverse();
console.log(numbers); //output : [1,2,10,11,3,4,5] -----> reverse ----> [5,4,3,11,10,2,1]

//13. Sort the values within the array

console.log("13. Sort the values within the array");
console.log("Before sorting : ", numbers);
numbers.sort((a, b) => a - b); // Ascending order
console.log("Ascending order : ", numbers);
numbers.sort((a, b) => b - a); // Descending order
console.log("Descending order : ", numbers);

let b = random.sort((a, b) => a - b); // Array "random" having number,string,boolean
console.log(b);

//14. map,filter,foreach methods

// map: Create a new array with manipulated values from the original array

console.log("14. map,filter,foreach methods");
let values1: number[] = [1, 2, 3, 4, 5];

//map (Get square of each and every number)

let squareValues1 = values1.map(x => x * x);
console.log(squareValues1); // output [1,4,9,16,25]

//filter (Get even numbers from the array)

let evenNumbers = values1.filter(x => x % 2 === 0);
console.log(evenNumbers);  // output : [2,4]

let oddNumbers = values1.filter(x => x % 2 !== 0);
console.log(oddNumbers);

//foreach method

values1.forEach(x => console.log(x));

let arr: any[] = ["a", 1, "D", "*", "+", 8, "b", true, null, "A", "dhana"];
console.log(arr.sort()); // Output : [*,+,1,8,A,D,a,b,dhana,null,true]

/*
- "*" (42) and "+" (43) come first because their Unicode values are lowest.
- Digits ("1" = 49, "8" = 56) come next.
- Uppercase letters ("A" = 65, "Z" = 90) follow.
- Lowercase letters ("a" = 97, "z" = 122) come last. */

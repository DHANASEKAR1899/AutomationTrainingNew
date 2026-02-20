/*
Data type are two different catagories:

    1) primitive data type (Immutable/Unmodifiable)
    2) Non-primitive data type (mutable/modifiable)

*/

//---------------------Primitive Data Type---------------------------

// 1. number -----> represent number with decimal and without decimal.(without Quotes)

let marks: number = 98;
// marks = "dhana"; ----------------> Error under marks variable
marks = 99;
let percentage: number = 99.9;
console.log("Marks :", marks);
console.log("Percentage ", percentage);


// 2. string ------> represents sequence of characters wrapped inside single or double quotes

let name1: string = "Dhanasekar"; // Double quotes
let name2: string = 'sowmiya';    // single quotes
let name3: string = `priya`;      // Backticks
console.log("Name1", name1);
console.log("Name2", name2);
console.log("Name3", name3);

// 3. Boolean ------> represents result of condition : true or false (it specifies result of condition)

let visaStatus: boolean = true;
let isGranted: boolean = false;
console.log("visaStatus: ", visaStatus);
console.log("isGranted: ", isGranted);

// union of types (|)======> variable can hold more than one type of data

let empAddress: string | number;
empAddress = "Chennai";
empAddress = 6000044;      // empAddress value overridden by value 6000044
console.log("Employee Address: ", empAddress);


// 4.undefined =====> undefined represents a variable that is declared but not assigned with any value

let employeeSalary: undefined;
// employeeSalary = 6000; -----> Error because it is undefined

let employeeSalaryAmount: undefined | number;
employeeSalaryAmount = 6000;
console.log("Employee Salary Amount: ", employeeSalaryAmount);

//===== addition undefined case========

let s: any; console.log(typeof s);               // output undefined
let s1: string;       // console.log(typeof s1); compile error already type declared see muttal
let s2: string = `dhana`; console.log(typeof s2); // string

// 5.Null ------> represents a varibale that is assinged with a null value.

let empRole: null | string;
empRole = null;
empRole = "Developer";
console.log("Employee Role: ", empRole);

// =====additional case=============

let v: any = null; console.log(typeof v); // output --> object
let v1: unknown = null; console.log(typeof v); // output --> object

// let v2 : string = null ; ----> compile error declared string but null value given

//====================================Non-primitive data type=============================================

// 1.Array--------------> array represents an ordered collection of items

let fruits: string[] = ["Apple", "Orange", "Mango"];
// fruits.push(1234); // Error when we try to add number
fruits.push("Grapes"); // to add new value to fruit array
console.log("Fruits: ", fruits);

let scores: number[] = [94, 89, 98];
console.log("Scores: ", scores);

// fruit name along with its prices in array

let fruitsAndPrice: (string | number)[] = ["Apple", 100, "Orange", 200, "Mango", 300];
console.log("Fruits with its prices : ", fruitsAndPrice);

// 2.object ------> represents collection of key-value pairs.
// Java interface is abstraction but in Typescript-"interface" - Template of object - To specify the type of value

interface empDetails {
  empId: number | string,
  empName: string,
  havingvisa: boolean,
  address: {
    city: (string | number)[],
    pincode: number,
    state: string,
    country: string

  }
};


let empInfo: empDetails = {
  empId: 101,
  empName: "Dhanasekar",
  havingvisa: true,
  address: {
    city: ["chennai", "kumbakonam", 101],
    pincode: 600044,
    state: "TamilNadu",
    country: "India"

  }
};

console.log("Employee Name: " + empInfo.empName);
console.log("Employee Name: " + empInfo["empName"]); // Another way to get key value

// print employee pincode
console.log("Employee pincode: " + empInfo.address.pincode);

// print employee secondary city
console.log("Employee city: " + empInfo.address.city[1]);


//3.Tuples ---------> it is also array in a specific order (or) represent a collection of different data types in a specific order
// array with fixed value,fixed order,fixed data type
let address: [string, string, string, number] = ["Flat no 10", "Manickkam street", "Hasthinapuram", 600044];
console.log("Street Name: ", address[2]); //Hasthinapuram

// In this we cannot able to push(add) value to array as like we did for array because it is fixed one


// 4.function -------->function represent a block of code that performs a specific task

// Note : if function returns any value, then same data type should be mentioned in the function definition

//function returing without any data ----> void
// void represent - no data type - don't return anything after executing this above function

function launchTheApplication(broswerName: string, url: string): void {

  console.log("Launch the browser " + broswerName);
  console.log("Navigate to url " + url);
  console.log("Application lauched successfully");

}

launchTheApplication("Chrome", "https://www.example.com");

//function returing number data

function addTwoNumbers(num1: number, num2: number): number {
  let num3 = num1 + num2;
  return num3; // Result print statement not within function block we are sending result to print in some other place
}



//function returing string data

function getFullName(firstName: string, lastName: string): string {
  let fullName: string = firstName + lastName;
  return fullName;
}

console.log("Sum of numbers: ", addTwoNumbers(10, 20));
console.log("Getting FullName: ", getFullName("Dhana", "sekar"));



//  5.Map -------> Map represent a collection of key-value pairs with type specification.

let employeeMap: Map<string, string | number | boolean> = new Map();
employeeMap.set("empId", 101);
employeeMap.set("empName", "Dhana");
employeeMap.set("havingVisa", true);
employeeMap.set("empName", "Sowmiya"); // empName key used again (key duplicate)
console.log(employeeMap.get("empName")); //sowmiya ---> value updated
console.log(employeeMap);

//To print only keys present in map
console.log("Keys employeeMap ", employeeMap.keys());

//To print only values present in map
console.log("values of employeeMap ", employeeMap.values());

// To delete existing value in Map
employeeMap.delete("havingVisa");
console.log(employeeMap);
console.log(employeeMap.size);

// Note - In case of Typescript we have to mention data type for each key and value pair along with value


// 6.set -------> Set represents a collection of unique values of any data type

// whenever we want to store duplicate values --> we will go for array in Javascript
// whenever we want to store unique values ---> we will go for set in Javascript

let uniqueNumbers: Set<number> = new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20); // duplicate value, will not be added
uniqueNumbers.add(40);
uniqueNumbers.add(50);
uniqueNumbers.delete(50);
console.log(uniqueNumbers); // output = 10,20,30,40
console.log(uniqueNumbers.size); // getting size of set




// Note : above mentioned methods also applicable for Map

//7.any -----> any represents a variable that can hold any type of data ( not recommended to use) --> equivalent to javascript

// eliminating the type safety layer ---> Typescript behave like a javascript

let randomValue: any; // any and unknown - I didn't see any difference

randomValue = 100;
console.log("Randon value (number): ", randomValue);
randomValue = "Dhanasekar";
console.log("Randon value (string): ", randomValue);
randomValue = true;
console.log("Randon value (boolean): ", randomValue);

// 8. Date ----> represent date and current time

let currentDate: Date = new Date();
console.log(currentDate.getHours());

// 9.===================================== Difference between Array and Tuples===============

let fruitsAndPrice1: (string | number)[] = ["Apple", 100, "Orange", 200, "Mango", 300];
console.log("Fruits with its prices : ", fruitsAndPrice1);

let address1: [string, string, string, number] = ["Flat no 10", "Manickkam street", "Hasthinapuram", 600044];
console.log("Street Name: ", address1[2]); //Hasthinapuram


let number: [number, number, number, number] = [3, 2, 1, 4];
console.log(number.map(x=> x*2));
console.log(number.sort((a,b)=> a-b));

/*
Practical Implication
- Safe methods for tuples: forEach, direct index access, and read-only operations like slice.
- Unsafe methods for tuples: Any that change length (push, pop, shift, unshift, splice) or reorder elements (sort, reverse).
- Transform methods (map, filter, reduce): Work, but the result is no longer a tuple—it becomes a general array.

*/


// =Remaining Non primitive & special data type covered in OOPS Concept========================
// such as primitive - bigint
// Non-primitive     - enum,class
// Special           - unknown,intersection


//==============================================================================================//

// 1. Check if a value exists and print it

const mySet: Set<number> = new Set([10, 20, 30, 40]);

const valueToFind = 30;

if (mySet.has(valueToFind)) {
  console.log(valueToFind);
}


// 2. Iterate through the Set

const fruit: Set<string> = new Set(["apple", "banana", "cherry"]);

for (const item of fruit) {
  if (item === "banana") {
    console.log(item);
  }
}


// 3. Convert Set to Array for index-based access

const numbers: Set<number> = new Set([100, 200, 300]);

const arr = Array.from(numbers);
console.log(arr[1]);  // prints the second element

// 4. Using .forEach() method 

const mySets: Set<string> = new Set(["red", "green", "blue"]);

mySets.forEach((value) => {
  if (value === "green") {
    console.log(value);
  }
});

/* ForEach syntax : setName.forEach(value=>{block-of-code}); */
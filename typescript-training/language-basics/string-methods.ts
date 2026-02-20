// string : string is nothing but a collection of characters written together within the quotations.

// ===============1. Creating a string=================

let greeting : string = "Hello, World!";                 // Double quotes
let farewell : string = 'GoodBye, World!';               // Single quotes
let templateLiterals : string = `Welcome to Typescript`; // Backticks

console.log(greeting);           // Output : Hello, World!
console.log(farewell);           // Output : GoodBye, World!
console.log(templateLiterals);   // Output : Welcome to Typescript

// 2. Advantages of Backticks

let name : string = "Dhanasekar";
let personalizedGreeting1 : string = "Hello, ${name} ! Welcome";
let personalizedGreeting2 : string = 'Hello, ${name} ! Welcome';
let personalizedGreeting3 : string = `Hello, ${name} ! Welcome`;

console.log(personalizedGreeting1); // output : Hello, ${name} ! Welcome
console.log(personalizedGreeting2); // output : Hello, ${name} ! Welcome
console.log(personalizedGreeting3); // output : Hello, Dhanasekar ! Welcome

// ======================= String methods ===============================

//1. Storing string value
let originalString : string = " Username : Admin | Password : admin123 ";
console.log("Original string :  " + originalString);

//2. Calculate total number of characters available in the string ==> string.length ---> including white spaces

console.log("2. Calculate total number of characters available in the string");
let stringLength : number = originalString.length;
console.log("String Length is : " + stringLength); // output : 40


// Reverse the string

    let reversedString : string ="";
    for (let i = originalString.length-1 ; i>=0 ;i--){

        reversedString += originalString.charAt(i);
  }

    console.log("Reversed string value : "+reversedString); // Output : 321nimda : drowssaP | nimdA : emanresU

//4.Removing unwanted spaces (begining & trailing) from the string. ==> string.trim()
console.log("4.Removing unwanted spaces from the string.");
let trimmedString: string = originalString.trim();
console.log("Original String: '" + originalString + "'");
console.log("Trimmed String: '" + trimmedString + "'");

//5. Removing all the spaces from the string. ==> string.replace(/\s+/g, '')
console.log("5. Removing all the spaces from the string.");
let stringWithoutSpaces: string = originalString.replace(/ /g, ''); // if g not provided it will replace only first instance
console.log("Original String: '" + originalString + "'");
console.log("String without spaces: '" + stringWithoutSpaces + "'");

//5. Removing all the alphabets from the string. ==> string.replace(/\s+/g, '')
console.log("5. Removing all the alphabets from the string.");
let stringWithoutAlphabets: string = originalString.replace(/[a-zA-Z]/g, '');
console.log("Original String: '" + originalString + "'");
console.log("String without alphabets: '" + stringWithoutAlphabets + "'");

//6. Removing all the numbers from the string. ==> string.replace(/\s+/g, '')
console.log("6. Removing all the numbers from the string.");
let stringWithoutNumbers: string = originalString.replace(/[0-9]/g, '');
console.log("Original String: '" + originalString + "'");
console.log("String without numbers: '" + stringWithoutNumbers + "'");

//7. Removing all the special chars from the string. ==> string.replace(/[^a-zA-Z0-9]/g, '') 
console.log("6. Removing all the special chars from the string.");
let stringWithoutSpecialChars: string = originalString.replace(/[^a-zA-Z0-9 ]/g, ''); // ^ - Hat symbol
console.log("Original String: '" + originalString + "'");
console.log("String without special chars: '" + stringWithoutSpecialChars + "'");

//8. Converting the string to Uppercase. ==> string.toUpperCase()
console.log("8. Converting the string to Uppercase.");
let upperCaseString: string = originalString.toUpperCase();
console.log("Original String: '" + originalString + "'");
console.log("Uppercase String: '" + upperCaseString + "'");

//9. Converting the string to Lowercase. ==> string.toLowerCase()
console.log("9. Converting the string to Lowercase.");
let lowerCaseString: string = originalString.toLowerCase();
console.log("Original String: '" + originalString + "'");
console.log("Lowercase String: '" + lowerCaseString + "'");

//10. Extracting a part of the string based on the starting and ending index. ==> string.substring(startIndex, endIndex+1)
console.log("10. Extracting a part of the string based on the starting and ending index.");
let username: string = originalString.substring(12, 17);
let password: string = originalString.substring(31);
console.log("Original String: '" + originalString + "'");
console.log("Extracted Substring: '" + username + "'");
console.log("Extracted Substring: '" + password + "'");

//11. Splitting the string based on a specific separator. ==> string.split(separator)
console.log("11. Splitting the string based on a specific separator.");
let stringParts: string[] = originalString.split(' ');
let user: string = stringParts[3]!;
let pass: string = stringParts[7]!;
console.log("Original String: '" + originalString + "'");
console.log("Extracted Username: '" + user + "'");
console.log("Extracted Password: '" + pass + "'");

//12. Compare two different strings. 
//=== operator for strict equality (case-sensitive)
//== operator for loose equality (case-insensitive)
//includes() method for substring presence check === equal to contains
//startsWith() method for prefix check
//endsWith() method for suffix check
console.log("12. Compare two different strings.");
let stringA: string = "TypeScript";
let stringB: string = "typescript";
console.log("String A: '" + stringA + "'");
console.log("String B: '" + stringB + "'");
console.log("Are both strings strictly equal? " + (stringA === stringB)); // Output: false
console.log("TypeScript contains 'Script'? " + stringA.includes("Script")); // Output: true
console.log("TypeScript contains 'script'? " + stringA.includes("script")); // Output: false
console.log("TypeScript starts with 'Type'? " + stringA.startsWith("Type")); // Output: true
console.log("TypeScript starts with 'Pipe'? " + stringA.startsWith("Pipe")); // Output: false
console.log("TypeScript ends with 'Script'? " + stringA.endsWith("Script")); // Output: true
console.log("TypeScript ends with 'Script'? " + stringA.endsWith("Scripts")); // Output: false

//14. Data Conversions  
// Convert other data types to string. ==> String(value)
// Convert string to other data types. ==> parseInt(string), parseFloat(string), Boolean(string)
console.log("14. Data Conversions");
let stdCode:number = 144;
let phone:number = 323456;
let stdCodeString:string = String(stdCode);
console.log(stdCodeString+phone);

//I want to verify whether my account is having minimum balance of 10000 or not. 
let balance:string = "Account balance is 19,999.99 rupees.";
balance =balance.replace(/[^0-9.]/g, ''); //removing unwanted chars except numbers and dot 9999.99
console.log(balance);
let bal:number = parseFloat(balance); //converting string to number 9999.99
console.log(bal>=10000);


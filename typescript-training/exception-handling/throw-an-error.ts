// 2. Throwing customized exception

let age : number = 17;

if (age<18) {
     throw new Error ("Not Eligible to vote");
}

else{
    console.log("Eligible to Vote");
}

console.log("Execution continues"); // Instead of continuing the program , i am throwing my own exceptiona and iam failing the program

// Real time example - in my application if server error occurs - I will throw exception to fail my testcase
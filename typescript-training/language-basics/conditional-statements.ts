// Conditional statements : Writing conditions along with statements.
// so whenever Node.js is going to run the statement , first it is going to check the condition

// There are two different type of conditional statements.

// 1.  if...else statement  =====> when we don't know the result of condition before execution
// 2.  Switch statement     =====> when we know the result of condition before execution.Now we want to choose one option among multiple

// 1. if...else statement along with Nested if

let percentage: number = 85;

if (percentage >= 85) {

  console.log("Grade A");
  if (percentage >= 90) {
    console.log("Distinction");
    console.log("You won gold medal");

  } else {
    console.log("You Missed gold medal by: " + (90 - percentage) + "Marks");

  }

}

else if (percentage >= 70) { console.log("Grade B"); }
else if (percentage >= 50) { console.log("Grade C"); }
else { console.log("Sorry Bro, you are Failed"); }


// 2. Switch statment:

let choice: number = 3;

switch (choice) {

  case 1  : console.log("choice is one :" + choice);   break;
  case 2  : console.log("choice is Two :" + choice);   break;
  case 3  : console.log("choice is Three :" + choice); break;
  case 4  : console.log("choice is Four :" + choice);  break;
  case 5  : console.log("choice is Five :" + choice);  break;
  default : console.log("No choice Found :" + choice); break;// get out of switch block
}

// In real time - we have different env for application like
   // Dev Env
   // Int / Acceptance / QA Env
   // pre-prod /UAT / Training Env
   // prod / production Env

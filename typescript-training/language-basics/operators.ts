// Operators : Operators are special characters that we are going to use to perform different type of operation

// There are mainly five different types of operators in Typescript and Javascript

// 1. Arithmetic Operator
// 2. Assignment Operator
// 3. Comparison Operator
// 4. Logical Operator
// 5. Conditional (Ternary) Operator

// 1. Arithmetic Operators : These operators are used to perform Mathematical operations.

     // + Addition
     // - subtraction
     // * Multiplication
     // / Divison
     // % Modulus (Reminder value)
     // ++ Increment (x++ ===> post increment, ++x ===> pre increment)
     // -- Decrement (x-- ===> post Decrement, --x ===> pre Decrement)

     let a : number = 10;
     let b : number = 5;
     console.log("Addition: "+ (a+b)); // 15
     console.log("subtraction: "+ (a-b)); // 5
     console.log("Multiplication: "+ (a*b)); // 50
     console.log("Divison: "+ (a/b)); // 2
     console.log("Modulus: "+ (a%b));// 0

     console.log("post increment: "+ (a++)); // 10
     console.log("After next line of post increment value of a is : "+ (a)); // 11
     console.log("pre increment: "+ (++a)); // 11

      console.log("post Decrement: "+ (b--)); // 5
     console.log("After next line of post Decrement value of a is : "+ (b)); // 4
     console.log("pre Decrement: "+ (--b)); // 4


// 2. Assignment Operators : These operators are used to assign values to variables.

     // =  Assignment
     // += Addition Assignment
     // -= Subtraction Assignment
     // *= Multiplication Assignment
     // /= Division Assignment
     // %= Modulus Assignment

     let c : number = 20;
     c += 10; // c = c + 10
     console.log("Addition Assignment: " + c); // 30
     c -= 5; // c = c-5
     console.log("Subtraction Assignment: " + c); //15
     c *= 2; // c = c * 2
     console.log("Multiplication Assignment: " + c); // 40
     c %= 3 ; // c = c % 3
     console.log("Modulus Assignment: " + c); // 2

// 3. Comparison Operators : These operators are used to compare two values.

     // ==  Equal to (Loose equality) (only compares values,perform type coercion)
     // === Strict Equal to 
     // !=  Not Equal to ( Loose inequality) (only comares values,performs type coercion)
     // !== Strict Not Equal to
     // >   Greater than
     // <   less than
     // >=  Greater than or equal to
     // <=  Less than or equal to

     let x : number =  10;
     let y : any    = '10';

     console.log("Equal to (loose): "+ (x == y)) ; // true
     console.log("Strict Equal to: " + (x === y)); // false 
     console.log("Not Equal to (loose): "+ (x != y)) ; //false compare value and provide opp result
     console.log("Strict Not Equal to: " + (x !== y)); // true - compare type and value and provide opp result
     console.log("Greater than: " + (x > y)); // false - loose equality
     console.log("Less than: " + (x < y));    // false - loose equality
     console.log("Greater than: " + (x >= y));  // true - loose equality
     console.log("Less than: " + (x <= y));   // true - loosy equality

// 4. Logical Operators : These operators are used to combine multiple conditions.
     
     // && Logical AND
     // || Logical OR
     // !  Logical NOT

     let i : number = 10;
     let j : number = 20;

     console.log("Logical AND: " + (i > 5 && j > 15)); // true and true = true
     console.log("Logical OR: " + (i > 15 || j > 15));  // false or true = true
     console.log("Logical NOT: " + !(i > 5 ));        //  not true = false // Meaning - i greater than 5 ellaya? result - false ; i greater than 5 ellama ellayae

//  5. Conditional (Ternary) Operator : This operator is used to evaluate a condition and return value
    
    // condition ? valueIfTrue : valueIfFalse ; ----> only one condition - if more than one condition - we will go for condition statement

    let age:number = 17;       //        True condition O/P :   False condition O/p
    let canVote : string = (age >= 18) ? "yes,you can vote" : "No, you cannot vote";
    console.log("Can Vote : "+ canVote); // No, you cannot vote







    


     

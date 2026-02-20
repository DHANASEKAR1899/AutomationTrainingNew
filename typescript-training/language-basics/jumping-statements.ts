/* Jumping statements in Typescript

      1. break
      2.continue
      3.return
      4.throw


1. break statement : It is used to terminate the loop when condition is met */

// for loop with break statement - Refresh the page until savi thumb icon visible

for(let i : number = 1;1<=5;i++){

    if( i===3){ // if element is visible break the loop (ie) end the refresh press icon
        break ;
    }

    console.log(i); // press refresh icon // output = 1,2
}


// 2. Continue statement : It is used to skip the iteration of current loop when condition is met */

for(let i : number = 1; i <=5; i++){

    if( i===3){ // if element is visible break the loop (ie) end the refresh press icon
        continue ;
    }

    console.log(i); // output = 1,2,4,5
}


// 3. return statement : It is used to exit from the fucntion and optionally return the value

function addition(a: number,b:number): number{

    let c: number = a+b;
    return c;
    console.log("Hi Dhanasekar"); // unreachable line - it execute upto return statement. Here return statement act like break statement

}

addition(3,5);

// 4. throw statement :

function withdrawAmount(amount : number){

 if(amount<=0){ 
    throw new Error ("Invalid Amount Entered.Amount should be greater than zero");
}
 console.log("Withdrawn Amount is: "+amount);
 

}
withdrawAmount(-100); // console error will occur and next line will not execute
withdrawAmount(100); // won't execute

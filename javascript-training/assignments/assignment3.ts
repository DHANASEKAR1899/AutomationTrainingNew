

function loanApprovalStatus(

    customerName      : string,
    creditScore       : number,
    income            : number,
    isEmployed        : boolean,
    debtToIncomeRatio : number

) : void // I am not returing any value.simply Iam executing and printing the statement
        {
     // Step 1: check the credit score
 if (creditScore>750)

     // if credit score is above 750, the loan is automatically approved

    {console.log("Loan is Approved for"+ customerName + "Due to high creditScore");}

 
 else if (creditScore<=750 && creditScore>=650)
    {  
        // if credit score is between 650 To 750, check income
     
       if(income>=55000)
        {
              // if income is above 55,000 then check employement status
           if(isEmployed==true)
            {       // if employement is true then check DTI Ratio
                    if(debtToIncomeRatio<=40)
                                { console.log("Loan is approved for"+ customerName + "having job with DTI Ration less than 40%");
                                }
                    else
                        // if the DTI ratio is higher than 40% loan denied
                                {console.log("Loan is denied for " + customerName + " due to High DTI Ratio");
                                } 
            }                    
            else 
                // load will denied due to unemployment
            {console.log("Loan is denied due to unemployed");

            }
        } // Load will denied due to less income
        else 
        {(console.log("Loan is denied due to Less income"));

        }
    }

 else {
    
    console.log("Loan is denied due to less credit score");

 }
      

}

loanApprovalStatus

(
 "John Doe",   // Customer Name - String
  720,         // Credit score - Number
  55000.00,    // income       - Number
  true,        // isEmployed
  45.0         // debtToIncomeRatio

);

export{}; // so many typescript program in assignment folder.we may/may not use same variable name in other file
          // so in order to run this file independently only assignment 3 file alone
          // if we don't use - program may not run if same variable name used in any other .ts file
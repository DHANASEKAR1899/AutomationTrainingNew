// Jan 16 - Friday Assignment Given - Jan-19 monday Answer Revealed

function TransactionDetails():void{

let transactionAmount : any[] = [5000,-2000,3000,-15000,-200,-300,4000,-3000];

let creditCount :number = 0;
let debitCount :number = 0;
let creditAmount : number = 0;
let debitAmount : number = 0;
let totalAmount : number = 0;
let suspeciousCount : number = 0;

// iterating each and every transaction value in for loop based on array length
for (let i:number = 0;i<transactionAmount.length;i++)
{      
  

    // calculating total amount of transaction

    
    totalAmount += transactionAmount[i];

    // calculating total count of suspecious transaction count based on condition

    if(transactionAmount[i]>=10000 || transactionAmount[i]<=-10000 )
    {
         suspeciousCount++;
    }
            // calculating credit amount count and total credit amount
            if (transactionAmount[i]>0)
                {
    
                          creditCount += 1;
                          creditAmount += transactionAmount[i];
                }
               // calculating debit amount count and total debit amount in (-) state
            else if (transactionAmount[i]<0)
                {
      
                          debitCount += 1;
                          debitAmount += transactionAmount[i];
      

                }

}

console.log("Total number of Credit counts: ",creditCount); // 3
console.log("Total number of Debit counts: ",debitCount);   // 5
console.log("Total number of Credit Amount: ",creditAmount);// 12000
console.log("Total number of Debit Amount: ",debitAmount);  // -20500
console.log("Total Amount: ",totalAmount);                  // - 8500
console.log("Total number of suspecious counts: ",suspeciousCount); //1


}

TransactionDetails();

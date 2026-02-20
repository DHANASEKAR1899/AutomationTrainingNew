// Jan 19th Monday Assignment = Answer video = Jan 20 - Tuesday

let a1 = 
{       employeename : "AliceJohn",
        basesalary : 75000,
        experience : 5.1,
        rating     : 4.2
    
}

let a2 = 
{       employeename : "BobSmith",
        basesalary : 68000,
        experience : 3.2,
        rating     : 3.8
    
}

let a3 = 
{       employeename : "CarolDavis",
        basesalary : 82000,
        experience : 7.1,
        rating     : 4.5
    
}

let a4 = 
{      employeename : "DavidBrown",
        basesalary : 90000,
        experience : 10.2,
        rating     : 2.5
    
  
}

let a5 = 
{
      employeename : "EvaGreen",
      basesalary : 60000,
      experience : 2.4,
      rating     : 3.5
    
}



let employeeDetails : any[] = [a1,a2,a3,a4,a5]; // If we need to declare typespecification as number[] then we have to use ! in every array used



for (let i : number = 0; i < employeeDetails.length ;i++)
    
{
    let hike : number;

    if(employeeDetails[i].rating >= 4.0){

           hike = employeeDetails[i].basesalary * 15 + 15000 ;
         


    }else if(employeeDetails[i].rating >= 3.0 && employeeDetails[i].rating < 4.0){

           hike = employeeDetails[i].basesalary * 10 + 12000 ;
          

    }else {
          
          hike = employeeDetails[i].basesalary * 3 + 3000 ;
         

    }
 
    if(employeeDetails[i].experience>=5){hike += 5000;} // common condition check for all employees

    let employeeHike : Map<string,number> = new Map();
    {
        employeeHike.set(employeeDetails[i].employeename, hike)
    }

    console.log(employeeHike);

}

export{};

/* Outupt i got :

 AliceJohn  = 1145000
 Bobsmith   = 692000
 CarolDavis = 1250000
 DavidBrown = 278000
 EvaGreen   = 612000

*/

// Refer Bharath Assignment explanation video --> Map concept used to store and retrieve data


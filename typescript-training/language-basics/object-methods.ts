/*

Object methods in Typescript :

problem statement :- I have an object in that
                                - I want to add additional data to existing object
                                - I want to modify existing data in object
                                - I want to delete particular value from existing object
                                - I want to merge two existing object


*/

// =================================== 1. Creating the new object =======================

interface empDetails {
         empId      : number | string,
         empName    : string,
         havingvisa?: boolean,
         address    :{
                      city    : (string|number)[],
                      pincode : number,
                      state   : string,
                      country : string

                     },
        currentRole? : string // optional parameter - either we can or cannot give value
                 };


let empInfo : empDetails = {
         empId      : 101,
         empName    : "Dhanasekar",
         havingvisa : true,
         address    :{
                      city    : ["chennai","kumbakonam",101],
                      pincode : 600044,
                      state   : "TamilNadu",
                      country : "India"

                     }
                 };

//=============================> 2. Accessing object properties using dot notation: There are 2 different ways =========================

             console.log("Employee Id way 1 ", empInfo.empId);
             console.log("Employee Id way 2 ", empInfo["empId"]); // By providing key - we are getting corrosponding key value

//=============================> 3 . Adding new property to the existig object =================================

             console.log( "Before Inserting current Role value : ", empInfo);

             empInfo.currentRole = "Developer";
             console.log ("Before Inserting current Role value : ", empInfo);

//=============================> 4.  Modifying existing role ======================================

              empInfo.currentRole = "Software Tester"; // override and updating current role original value - Non-primitive data type - changes original data
              console.log ("Updated current Role value : ", empInfo);

//=============================> 5. Deleting existing property from object =============================

              /*  delete empInfo.address; ------> Error - we can able to delete only optional parameters */
              delete empInfo.havingvisa;
              console.log (empInfo);

//=============================> 6. To check particular property available or not============================


               console.log("havingvisa" in empInfo); // output - false - we already deleted above
               console.log("empId" in empInfo);      // output - true --> Note need to give crt key value otherwise it return false

//=============================> 7. Get all the keys ========================================

              console.log(Object.keys(empInfo));    // To print all the keys in the form of array : Output : [ 'empId', 'empName', 'address', 'currentRole' ]
              console.log(Object.keys(empInfo.address)); // output [ 'city', 'pincode', 'state', 'country' ]
              console.log(Object.values(empInfo));  // To print all values in the form of array
              console.log(Object.values(empInfo.address));  // [ [ 'kumbakonam', 'chennai', 100 ], 600044, 'TamilNadu', 'India' ]

//=============================> 8. Iterate through the object properties using for in loop (--> object)======

              for (let key in empInfo){

                console.log ( key + " " + empInfo[key as keyof empDetails]);
              }

//=============================> 9. I want to know the datatype of particular property present in the object========================


             console.log (typeof empInfo.empId); // number // mostyly used in API testing - schema validation and checking data type
             console.log (typeof empInfo.address); // object
             console.log (typeof empInfo.havingvisa); // undefined already deleted so it is giving as undefined
             console.log (typeof empInfo.currentRole); 

// ============================> 10. Merging two object ===============================

// 2nd pbject creation =======>

   interface empProjectDetails {
              projectId       : number,
              projectName     : string,
              projectLocation : string

   };

   let empProject : empProjectDetails = {
              
              projectId       : 100,
              projectName     : "MAPSI",
              projectLocation : "Chennai"

   }

let mergedEmpinfo = {...empInfo, ...empProject};
console.log("Merged empInfo : ", mergedEmpinfo);

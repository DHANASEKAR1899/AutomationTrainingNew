
let employeeDetails = {

    empId: 101,
    empName: `Dhanasekar`,
    havingVisa: true,
    address: {

        city: ["kumbakonam", "chennai"],
        state: "Tamilnadu",
        country: "India"
    },

    empRole: "software Engineer"

};

// console.log(employeeDetails.empId);
// console.log(employeeDetails["empName"]);
// console.log(employeeDetails.address.state);
// console.log(employeeDetails.address.city[1]);

// Looping object value to print keys, value present in object

for (let key in employeeDetails) {

    console.log(key);
    console.log(employeeDetails[key]);
    console.log(`${key} : ${employeeDetails[key]}`); // Address value ===> [object pbject]

}

// looping statements -- for in loop for object

for (let key in employeeDetails) {
    console.log(`${key} : ${employeeDetails[key]}`); // Address value ===> [object pbject]
}


//=========================================looping nested object code====================================

// Backtick for full element :

for (let subkey in employeeDetails.address) {
    console.log(`address.${subkey}: ${employeeDetails.address[subkey]}`); //Address value iteration
}

// Backtick for half  element :

for (let subkey in employeeDetails.address) {
    console.log(`address.${subkey}:`, employeeDetails.address[subkey]); //Address value iteration
}


//============================ Another way of iterating object using for each loop=========================

Object.keys(employeeDetails).forEach(key => {
    console.log(`${key}: ${employeeDetails[key]}`);
})

//===============================Iterating object which is having nested object=============================


for (let key in employeeDetails) {
    if (key === "address") {
        console.log(`address.${key} : ${employeeDetails.address[key]}`);
    }

    else {

        console.log(`${key}: ${employeeDetails[key]}`);
    }
}

//========================== For Each to iterate array value present in address key=================

employeeDetails.address.city.forEach((c) => console.log(`city : c`));
interface empDetails {
    empId: number | string,
    empName: string,
    havingvisa: boolean,
    address: {
        city: (string | number)[],
        pincode: number,
        state: string,
        country: string

    },
    empRole: string
};


let empInfo: empDetails = {
    empId: 101,
    empName: "Dhanasekar",
    havingvisa: true,
    address: {
        city: ["chennai", "kumbakonam", 101],
        pincode: 600044,
        state: "TamilNadu",
        country: "India"

    },
    empRole: "Software Engineer"
};

console.log(empInfo.empId);
console.log(empInfo["empId"]);

//=======================To print all the keys or value without iterating object ========================

 console.log(Object.keys(empInfo));    // To print all the keys in the form of array : Output : [ 'empId', 'empName', 'address', 'currentRole' ]
 console.log(Object.values(empInfo));


//================Iterate object =======================

for (let key in empInfo) {
    console.log(key);           // Output ==> print key one by one [empId,empName,havingvisa,address]
    console.log(empInfo[key as keyof empDetails]); // empDetails la irukura maadhiri empinfo key value print pannu
    console.log(`${key} : ${empInfo[key as keyof empDetails]}`);
}

//====================Iterate object using forEach ==============================

Object.keys(empInfo).forEach(key => {
    console.log(`${key} : ${empInfo[key as keyof empDetails]}`);
})

//==========================Iterating nested object only ============================

for (let subkey in empInfo.address) {

    console.log(`address.${subkey}:`, empInfo.address[subkey as keyof typeof empInfo.address]);

}

//=============================Another way of iterating nested object ===============================

for (let subkey in empInfo.address) {
    if (Object.prototype.hasOwnProperty.call(empInfo.address, subkey)) {
        console.log(`address.${subkey}:`, empInfo.address[subkey as keyof typeof empInfo.address]);
    }
}

//========================================Iterating every key and value including nested object ==========================

for (let key in empInfo) {

    if (key === "address") {
        for (let subkey in empInfo.address) {

            console.log(`address.${subkey}:`, empInfo.address[subkey as keyof typeof empInfo.address]);

        }
    } else {
        console.log(`${key} : ${empInfo[key as keyof empDetails]}`);
    }
}

// ===================================== Another way ================================

// for (let key in empInfo) {
//   if (key === "address") {
//     // Iterate nested object
//     for (let subkey in empInfo.address) {
//       if (Object.prototype.hasOwnProperty.call(empInfo.address, subkey)) {
//         console.log(`address.${subkey}:`, empInfo.address[subkey as keyof typeof empInfo.address]);
//       }
//     }
//   } else {
//     console.log(`${key}:`, empInfo[key as keyof empDetails]);
//   }
// }


empInfo.address.city.forEach((c) => console.log("City:", c));  /* output city : chennai
                                                                         City : kumbakonam
                                                                         City : 101 
                                                                         
                                                                         */

//=============================================== special case ========================================

for (let key in empInfo) {

    if (key === "address") {
        for (let subkey in empInfo.address) {

            if (subkey === "city") {
                for (let subkey in empInfo.address.city) {
                    console.log(`address.city.${subkey} : ${empInfo.address.city[subkey as keyof typeof empInfo.address.city]}`);
                }
            }
            else { console.log(`address.${subkey} : ${empInfo.address[subkey as keyof typeof empInfo.address]}`); }
        }
    }
    else {
        console.log(`${key} : ${empInfo[key as keyof empDetails]}`);

    }
}

/* Output : 

empId : 101
havingVisa : true
empName : Dhanasekar
address.city.0 : kumbakonam
address.city.1 : chennai
address.city.2 : 100
address.pincode : 600044
address.state : TamilNadu
address.country : India
empRole : software Engineer


*/
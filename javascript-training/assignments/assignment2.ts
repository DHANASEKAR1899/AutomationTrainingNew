// Assignment 1 - Data Types //

// 1. Temperature of a city in degree Celcius
     let cityTemperature:number = 25.5;
     console.log ("Temperature of a city in degree Celcius: "+cityTemperature);

// 2. whether a customer has placed an order
     let orderStatus:boolean = true;
     console.log("whether a customer has placed an order: "+orderStatus);

// 3. person's phone number
     let phoneNumber:string  = "123-456-7890";
     console.log("person's phone number: "+phoneNumber);

// 4.Amount of money in customer's bank account
     let customerBalance:number = 1000.50;
     console.log("Amount of money in customer's bank account: "+customerBalance);

// 5.person's email address
     let customerMailId:string = "john.doe@example.com";
     console.log("person's email address: "+customerMailId);

// 6. Coordinates of a location(latitude,longitude)
     let latitude:number = 37.7749;
     let longitue:number = -122.4194;
     console.log("Coordinates of a location(latitude,longitude) :"+ latitude +","+ longitue);

// 6.	Coordinates of a location (latitude, longitude): 37.7749, -122.4194 ====> Declaring as object interface

    interface Coordinates {
    latitude: number;
    longitude: number;
   }

     let coordinates: Coordinates = {
       latitude: 37.7749, 
       longitude: -122.4194 
      };

     console.log("Coordinates:", coordinates.latitude, coordinates.longitude);

// Array format:-

     let latitudeAndLongitue :number[] = [37.7749,-122.4194];
     console.log("Coordinates of a location(latitude,longitude) :",latitudeAndLongitue);

// 7.Person's marital status
     let personMaritalStatus : boolean= false ;
     console.log("Person's marital status: " + personMaritalStatus);

// 8.Person's occupation
      let personOccupation :string = "Software Engineer";
      console.log("Person's occupation: "+personOccupation);

// 9.person favourite colour
      let favColor : string = "Blue";
      console.log("person favourite colour: "+favColor);

// 10.Current Year
      let currentYear : number = 2023;
      console.log("Current Year: "+currentYear);

// 11.Number of followers on social media
      let followerCount : string = "1,000,000";
      console.log("Number of followers on social media: "+ followerCount);

// 12.Rating of a movie
      let movieRating : number = 7.5;
      console.log("Rating of a movie: "+ movieRating);

// 13.Person's Blook Group
      let bloodGroup : string = 'A';
      console.log("Person's Blook Group: "+ bloodGroup);

// 14.Title of a book
       let bookTitle : string = "To kill a Mockingbird";
       console.log("Title of a book: "+bookTitle);

// 15.Number of employees in a company
       let employeesCount : number = 500;
       console.log("Number of employees in a company: "+ employeesCount);
       
// 16.Time of an event
       let eventTime : string = "2:30 PM";
       console.log("Time of an event: "+ eventTime);
      
// 17.Name of a country
       let countryName : string = "United states";
       console.log("Name of a country: "+ countryName);

// 18.person's eye color
       let eyeColor : string = "Brown";
       console.log("person's eye color: "+ eyeColor);

// 19.Person's birthplace
      let birthPlace : string = "New York city";
      console.log("Person's birthplace: "+ birthPlace);

// 20.Distance between two cities
       let cityDistance : number = 200.5;
       console.log("Distance between two cities: "+ cityDistance);







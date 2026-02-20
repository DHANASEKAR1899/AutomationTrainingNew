//this & super in TypeScript

//this keyword refers to the current instance of a class
//super keyword is used to call the constructor of the parent class

class Parent{
    course:string = "Java"; // Important note : Here we used same variable name in all level namely parent,child,method
}

class Child extends Parent{
    course:string = "Selenium";

    printCourse(course:string){
        console.log(course);

        console.log(new Child().course); // Allow to access child class variable by obj creation - but not advicible due to memory wastage
        console.log(this.course);

        console.log(new Parent().course); // Allow to access parent calss variable by obj creation of parent class - not adivible but no option in typescript - we have to use it because super keyword won't work
     // console.log(super.course); Error : In Typescript class is a prototype.we can access parent class method but we cannot access parent class variables eventhough we use super keyword.
                                                // we can access these parent class variable by creating object for parent class ====> conclusion
    }
}

let child = new Child();
child.printCourse("TypeScript"); //Course: TypeScript
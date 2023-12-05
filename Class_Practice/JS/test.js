// var nameStr = "Aadarsh";
// function func(str) {
//     return str == "Aadarsh" ? "Welcome " + str : "Invalid user " + str;
// }

// console.log(func("Aadarsh"));

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car("Hyundai", "i20", "2018");
 
console.log(myCar.make + " " + myCar.model + " " + myCar.year)
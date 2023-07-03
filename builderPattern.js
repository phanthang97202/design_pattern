// Nhà hàng 5 sao
class Car {
  constructor(builder) {
    this.make = builder.make;
    this.model = builder.model;
    this.color = builder.color;
    this.year = builder.year;
  }

  // Other methods specific to the Car class...

  displayInfo() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Color: ${this.color}`);
    console.log(`Year: ${this.year}`);
  }
}

class CarBuilder {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  build() {
    return new Car(this);
  }
}

// Usage example:
const car = new CarBuilder("Toyota", "Camry")
  .setColor("Blue")
  .setYear(2022)
  .build();

car.displayInfo();

// In this example, we have a Car class that represents a car object with
// various properties. The CarBuilder class is responsible for constructing
//  the car objects step by step. It has methods for setting
//   the optional properties of the car, such as color and year.
//    The build method creates a new Car object with the builder's current state.

// To create a car using the builder, you can chain the builder methods and
//  call the build method at the end to get the final Car object.
//  In the example, we create a CarBuilder with the make and model, set the color
//   and year using the builder's methods, and finally call build to get the Car object
//   . We then call the displayInfo method to print the car's information.

// The Builder pattern allows you to create complex objects with optional properties in a
//  flexible and readable way, separating the construction logic from
//   the actual object creation.

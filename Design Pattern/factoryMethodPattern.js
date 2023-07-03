// EXAMPLE 1
// Product: Car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `Car: ${this.make} ${this.model}`;
  }
}

// Creator: CarFactory
class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

// Usage
const factory = new CarFactory();

const car1 = factory.createCar("Toyota", "Camry");
console.log(car1.getInfo()); // Output: Car: Toyota Camry

const car2 = factory.createCar("Honda", "Accord");
console.log(car2.getInfo()); // Output: Car: Honda Accord

// In this example, we have a Car class representing a product,
// and a CarFactory class acting as the creator.
// The CarFactory has a method createCar that serves as the factory method.
// It takes the necessary parameters (make and model) and returns a new instance of the Car class.

// By using the factory method, you can easily create
// new car objects without directly instantiating them with the new keyword.
// This decouples the client code from the concrete implementation of the Car class
// and allows for easier extensibility by introducing new car models in the future.

// Note that this is a simplified example to illustrate the concept of the Factory Method design pattern.
// In a real-world scenario, you might have more complex logic in the factory method, and the product (Car)
// could have additional methods and properties.

// EXAMPLE 2
// Product: Vehicle
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = "";
  }

  getInfo() {
    return `${this.type}: ${this.make} ${this.model} (${this.year})`;
  }
}

// Concrete Products: Car, Motorcycle
class Car2 extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.type = "Car";
  }

  startEngine() {
    return "Car engine started";
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.type = "Motorcycle";
  }

  wheelie() {
    return "Motorcycle is doing a wheelie!";
  }
}

// Creator: VehicleFactory
class VehicleFactory {
  createVehicle(make, model, year, type) {
    switch (type) {
      case "car":
        return new Car2(make, model, year);
      case "motorcycle":
        return new Motorcycle(make, model, year);
      default:
        throw new Error("Invalid vehicle type.");
    }
  }
}

// Usage
console.log("\n===================\n");
const factory2 = new VehicleFactory();

const car = factory2.createVehicle("Toyota", "Camry", 2022, "car");
console.log(car.getInfo()); // Output: Car: Toyota Camry (2022)
console.log(car.startEngine()); // Output: Car engine started

const motorcycle = factory2.createVehicle(
  "Honda",
  "CBR600RR",
  2021,
  "motorcycle"
);
console.log(motorcycle.getInfo()); // Output: Motorcycle: Honda CBR600RR (2021)
console.log(motorcycle.wheelie()); // Output: Motorcycle is doing a wheelie!

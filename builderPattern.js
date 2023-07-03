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

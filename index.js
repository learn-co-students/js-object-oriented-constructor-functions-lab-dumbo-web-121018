const Scooter = class  {
  constructor(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
}


const Driver = class {
  constructor(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
}


const PickupLocation = class {
  constructor(address, city) {
    this.address = address;
    this.city = city; 
  }
}

// function Scooter(year, color, model) {
//   this.year = year;
//   this.color = color;
//   this.model = model;
// }

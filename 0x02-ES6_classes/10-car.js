class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    // console.log(this)
    return new this.constructor[Symbol.species]();
  }
}

export default Car;
 /* get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  /*cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default Car;*/

/**
 * Represents a car object.
 *
 * @class
 */
class Car {
  /**
   * Creates an instance of the Car class.
   *
   * @constructor
   * @param {string} make - The make of the car.
   * @param {string} model - The model of the car.
   * @param {number} year - The year the car was manufactured.
   * @param {number} maxSpeed - The maximum speed the car can accelerate.

   */
  constructor(make, model, year, maxSpeed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
  }

  /**
 * Returns a string that contains the year, make, and model of a car.
 *
 * @return {string} The description of a car.
 */
  getDescription() {
    return `${this.year} ${this.make} ${this.model}`;
  }

  /**
   * Accelerates the car by a specified amount.
   *
   * @param {number} amount - The amount by which to accelerate the car.
   */
  accelerate(amount) {
    if (amount < 0) {
      throw new Error('Amount should be a positive number.');
    }
    if (this.speed + amount > this.maxSpeed) {
      throw new Error('Speed limit has been reached.');
    }
    this.speed += amount;
  }

  /**
   * Decelerates the car by a specified amount.
   *
   * @param {number} amount - The amount by which to decelerate the car.
   */
  decelerate(amount) {
    if (amount < 0) {
      throw new Error('Amount should be a positive number.');
    }
    this.speed = Math.max(0, this.speed - amount);
  }


  /**
   * Returns the current speed of the car.
   *
   * @return {number} The current speed of the car.
   */
  getSpeed() {
    return this.speed;
  }

  /**
   * Resets the speed of the car to zero.
   */
  stop() {
    this.speed = 0;
  }

  /**
   * Calculates the distance traveled by the car given the time traveled.
   *
   * @param {number} time - The time traveled in hours.
   * @return {number} The distance traveled in kilometers.
   */
  calculateDistance(time) {
    const distance = this.speed * time;
    return distance;
  }

  /**
   * Returns a boolean value indicating if the car is moving or not.
   *
   * @return {boolean} A boolean value representing if the car is moving or not
   */
  isMoving() {
    return this.speed > 0;
  }
}

export default Car;


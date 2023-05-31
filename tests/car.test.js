/* eslint-disable max-len */
import Car from '../src/car';

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

let car;

describe('Car', () => {
  beforeEach(() => {
    car = new Car('Toyota', 'Corolla', 2023, 180);
    car.speed = 50;
  });

  describe('accelerate', () => {
    test('should increase speed by the specified amount', () => {
      car.accelerate(20);
      expect(car.speed).toBe(70);
    });

    test('should not increase speed beyond the maximum speed limit', () => {
      car.speed = 90;
      expect(() => car.accelerate(100)).toThrowError(
          'Speed limit has been reached.',
      );
    });

    test('should not accept negative amount', () => {
      const negativeAmount = -20;
      expect(() => car.accelerate(negativeAmount)).toThrowError(
          'Amount should be a positive number.',
      );
    });
  });

  describe('decelerate', () => {
    test('should decrease speed by the specified amount', () => {
      car.decelerate(20);
      expect(car.speed).toBe(30);
    });

    test('should not decrease speed below zero', () => {
      car.decelerate(60);
      expect(car.speed).toBe(0);
    });

    test('should not accept a negative amount', () => {
      const negativeAmount = -20;
      expect(() => car.decelerate(negativeAmount)).toThrowError(
          'Amount should be a positive number.',
      );
    });
  });

  describe('getSpeed', () => {
    test('should return the current speed of the car', () => {
      const currentSpeed = car.getSpeed();
      expect(currentSpeed).toBe(car.speed);
    });
  });

  describe('stop', () => {
    test('should set speed of car to zero', () => {
      car.stop();
      expect(car.speed).toBe(0);
    });
  });

  describe('calculateDistance', () => {
    test('should calculate the distance travelled by the car correctly', () => {
      const time = 2;
      const expectedDistance = car.speed * time;
      const actualDistance = car.calculateDistance(time);
      expect(actualDistance).toBe(expectedDistance);
    });
  });

  describe('isMoving', () => {
    test('isMoving() returns true when car is moving', () => {
      expect(car.isMoving()).toBe(true);
    });

    test('isMoving() returns false when car is not moving', () => {
      car.speed = 0;
      expect(car.isMoving()).toBe(false);
    });
  });

  describe('getDescription', () => {
    test('getDescription() returns a string containing the make, model, and year of the car', () => {
      const description = car.getDescription();
      const expectedResult = '2023 Toyota Corolla';
      expect(description).toMatch(expectedResult);
    });
  });
});

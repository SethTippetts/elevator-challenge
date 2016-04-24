import Elevator from './Elevator';
import Floor from './Floor';

export default class Bank {
  constructor({ elevators = 5, floors = 5}) {
    // 1. Initialize the elevator simulation with the
    // desired number of elevators, and the desired
    // number of floors. Assume ground/min of 1.
    this.elevators = fill(elevators, Elevator, this);
    this.floors = fill(floors, Floor, this);

    this.requests = [];

    // Iterate
    setInterval(() => this.move(), 1000);
  }
  move() {
    this.elevators.map(elevator => elevator.move());
  }
  request(request) {
    let results = [];
    for (var i = 0, len = this.elevators.length; i < len; i++) {
      let elevator = this.elevators[i];
      let rating = elevator.rate(request);
      if (rating === 0) elevator.assign(request);
      results.push({ rating, id: elevator.id });
    }
    return results
      .sort((a, b) => a.rating - b.rating)[0].assign(request);
  }
}

function fill(number = 1, Class, bank) {
  let arr = new Array(Math.max(number, 1));
  return arr.map((el, idx) => new Class({ id: idx, bank }));
}

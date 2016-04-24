import Elevator from './Elevator';
import Floor from './Floor';
import Bluebird from 'bluebird';

export class Bank {
  constructor({ elevators = 5, floors = 5}) {
    this.elevators = fill(elevators, Elevator, this);
    this.floors = fill(floors, Floor, this);

    this.requests = [];
  }
  request(desired, current) {
    let results = [];
    for (var i = 0, len = this.elevators.length; i < len; i++) {
      let elevator = this.elevators[i];
      let rating = elevator.rate(desired, current);
      if (rating === 0) elevator.assign(desired, current);
      results.push({ rating, id: elevator.id });
    }
    return results
      .sort((a, b) => a.rating - b.rating)[0].assign(desired, current);
  }
}

function fill(number, Class, bank) {
  let arr = new Array(number);
  return arr.map((el, idx) => {
    return new Class({ id: idx, bank });
  });
}

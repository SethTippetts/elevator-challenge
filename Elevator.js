

export default class Elevator {
  constructor({ id, floor = 0, bank, totalFloors }) {
    this.id = id;
    this.floor = floor;
    this.totalFloors = totalFloors;
    this.requests = [];
    this.direction = 0;
    this.door = 'closed';
  }

  move() {
    this.floor += this.direction;

    let fufilledRequestIdx = this.requests.indexOf(this.floor);
    if (~fufilledRequestIdx) {
      this.log('opened doors on');
      this.requests.splice(fufilledRequestIdx, 1);
    }
    this.log('moved to');

    if (!this.request.length) this.direction = null;
  }

  get direction() {
    let next = this.floor + this._direction;
    // Continue in the direction we were going
    if (this._direction && next >= 0 && next <= this.totalFloors) {
      return this._direction;
    }
    else if (!this.request.length) {
      return 0;
    }

    return this._direction = this.floor > this.requests[this.requests.length - 1] ? -1 : 1;
  }

  assign(desired, current) {
    this.requests.push(desired, current);
    this.requests.sort();
    return this;
  }

  rate(desired) {
    // On the floor currently. Best score
    if (this.floor === desired) return 0;

    if ([this.floor, desired, this.destination])

    // No current requests. Score is distance.
    if (!this.request.length) return Math.abs(this.floor - desired);
    if (desired < this.current && desired >
  }

  log(msg) {
    console.log(`Elevator ${this.id} ${msg} "${this.floor} floor.`);
  }
}

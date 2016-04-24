

export default class Elevator {
  constructor({ id, floor = 0, bank, totalFloors }) {
    this.id = id;
    this.floor = floor;
    this.totalFloors = totalFloors;
    this.destinations = [];
    this.requests = [];
    this.direction = 0;
    this.door = 'closed';
    this.operational = true;
    this.trips = 0;

    this.factor = 1 / totalFloors;
  }

  move() {
    this.floor += this.direction;

    let fufilledRequestIdx = this.destinations.indexOf(this.floor);
    if (~fufilledRequestIdx) {
      this.log('opened doors on');
      this.destinations.splice(fufilledRequestIdx, 1);
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

    this.trips += 1;
    if (this.trips === 100) {
      this.requests.map(request => {
        request.current = this.floor;
        this.bank.request(request);
      })
    }
    return this._direction = this.floor > this.destinations[this.destinations.length - 1] ? -1 : 1;
  }

  get goingUp() {
    return this._direction > 0;
  }

  get goingDown() {
    return this._direction < 0;
  }

  get destination() {
    return this.destinations[this.destinations.length - 1];
  }

  assign(request) {
    this.requests.push(request);
    this.destinations.push(request.current, request.desired);
    this.destinations.sort();
    return this;
  }

  rate(request) {
    if (!this.operational) {
      this.log('requires service on');
      return Infinity;
    }

    let current = request.current;
    let dest = this.destination;

    // On the floor currently. Best score
    if (this.floor === current) return 0;

    let distance = Math.abs(this.floor - desired);

    if (
      // Going up
      this.goingUp
      && (
        // New destination is farther
        current > dest
        // On the way
        || current < dest && current > this.floor
      )
      || this.goingDown
      && (
        current < dest
        || current > dest && current < this.floor
      )
    ) {
      // Return a better score proportionally to potential distance.
      return distance * this.factor;
    }

    // No current destinations. Score is distance.
    if (!this.destinations.length) return ;
  }

  log(msg) {
    console.log(`Elevator "${this.id}" ${msg} "${this.floor}" floor.`);
  }
}

import Bluebird from 'bluebird';

export default class Request {
  constructor({ desired, current }) {
    this.desired = desired;
    this.current = current;
  }

  assign(elevator) {
    this.elevator = elevator;
    return this;
  }
}

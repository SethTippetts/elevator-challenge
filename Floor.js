import Request from './Request';

export default class Floor {
  constructor({ id, bank }) {
    this.bank = bank;
    this.id = id;
  }
  request(floor) {
    return this.bank.request(new Request(floor, id));
  }
}

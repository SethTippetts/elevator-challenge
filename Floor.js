import Request from './Request';

export default class Floor {
  constructor({ id, bank }) {
    this.bank = bank;
    this.id = id;
    this.total = bank.floors.length;
  }
  request(floor) {
    // 4. An elevator cannot proceed above the top floor.
    // 5. An elevator cannot proceed below the ground floor (assume 1 as the min).
    if (floor > this.total || floor < 0) throw new RangeError('Invalid floor specified.');

    // 6. An elevator request can be made at any floor, to go to any other floor.
    return this.bank.request(new Request(floor, id));
  }
}

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(data) {
    if (this.members.has(data)) {
      throw new Error('дублирование игроков в команде запрещено');
    }
    this.members.add(data);
  }

  addAll(...data) {
    for (const i of data) {
      this.members.add(i);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

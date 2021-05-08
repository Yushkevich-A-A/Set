class Team {
    constructor() {
        this.members = new Set();
    }

    add(data) {
        if (this.members.has(data)) {
            throw new Error('дублирование игроков в команде запрещено')
        }
    }

    addAll(data) {
        this.members.add(...data);
    }

    toArray() {
        return Array.from(this.members);
    }
}
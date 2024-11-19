import Position from './position.class.js';

class User {
  constructor(id, socket) {
    this.id = id;
    this.socket = socket;
    this.position = new Position();
  }
}

export default User;

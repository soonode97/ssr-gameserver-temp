import Position from './position.class.js';

let ghostId = 1; //

class Ghost {
  constructor() {
    this.id = this.getGhostId(); // 많이 있어봤자 한게임에 5마리 정도로 생각
    this.position = new Position();
  }

  getGhostId() {
    return ghostId++;
  }
}

export default Ghost;

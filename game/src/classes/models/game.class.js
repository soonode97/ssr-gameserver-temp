import Ghost from './ghost.class.js';

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.ghosts = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addGhost() {
    // 이렇게 매개변수를 받아 넣어줘도 되고 여기서 랜덤으로 인스턴스를 생성해서 바로 넣어줘도 될 것 같습니다.
    const ghost = new Ghost();
    this.ghosts.push(ghost);
  }

  initGameData() {
    // 현재 게임에 참여한 유저의 필요한 데이터만 추출하여 배열로 반환
    const playersData = this.users.map((user) => {
      const player = {
        playerId: user.id,
        position: user.position,
      };
      return player;
    });

    const initGameData = {
      ghosts: this.ghosts,
      players: playersData,
      mapId: 1, // 임시로 1로 설정 또는 클라이언트에서 원하는 맵id를 넘겨주면 그걸 받아서 해도 될 것 같습니다.
    };

    return initGameData;
  }
}

export default Game;

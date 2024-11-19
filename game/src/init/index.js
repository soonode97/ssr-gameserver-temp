import { addGameSession } from '../sessions/game.session.js';
import { loadProtos } from './load.protos.js';

const initServer = async () => {
  try {
    // 게임 세션에 유저 참가 로직 구현
    const gameSessionId = 1; // TODO 이것 어떻게할지 생각
    const gameSession = addGameSession(gameSessionId);
    gameSession.addGhost(); // 고스트 한마리 생성
    loadProtos();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default initServer;

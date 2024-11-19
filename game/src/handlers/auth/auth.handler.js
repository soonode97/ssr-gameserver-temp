import { config } from '../../../config/config.js';
import { PACKET_TYPE } from '../../../constants/haeader.js';
import { getGameSession } from '../../../sessions/game.session.js';
import { addUser } from '../../../sessions/userSessions.js';
import { serializer } from '../../../utils/packet/create.packet.js';

export const connectGameRequestHandler = ({ socket, payload }) => {
  try {
    const { playerId, token } = data;

    // 테스트 토큰 검증 원래는 jwt토큰 검증
    console.log('-----------token---------', token); // 확인용

    if (config.test.test_token !== token) {
      console.error('해당 토큰이 일치하지 않습니다.');
      invalidTokenResponse(socket);
      return;
    }

    // 새로운 유저 생성 및 세션 저장
    const user = addUser(playerId, socket);

    // 게임 세션 참가 로직
    // 현재 init/index.js에서 게임 세션 하나를 임시로 생성해 두었습니다.
    const gameSession = getGameSession();
    gameSession.addUser(user);

    // 데이터 전송로직 작성
    const data = {
      gameId: gameSession.id,
      InitGameData: gameSession.initGameData(),
      status: 'success',
      message: '게임 세션 입장에 성공하였습니다.',
    };

    const responseData = serializer(
      PACKET_TYPE.ConnectGameNotification,
      data,
      0,
    );
    socket.write(responseData);
  } catch (e) {
    console.error(e);
  }
};

/**
 * 토큰이 유효하지 않을때 실패 응답 보내주는 함수입니다.
 * @param {*} socket
 */
const invalidTokenResponse = (socket) => {
  const data = {
    gameId: 0,
    InitGameData: null,
    status: 'fail',
    message: '해당 토큰이 일치하지 않아 게임을 입장할 수 없습니다.',
  };

  const responseData = serializer(PACKET_TYPE.ConnectGameNotification, data, 0);
  socket.write(responseData);
};

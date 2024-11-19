import { config } from '../config/config.js';
import { PACKET_TYPE } from '../constants/haeader.js';
import { serializer } from '../utils/packet/create.packet.js';
import { onData } from './onData.js';
import { onEnd } from './onEnd.js';
import { onError } from './onError.js';

export const onConnection = (socket) => {
  console.log(
    `Client connected from: ${socket.remoteAddress}:${socket.remotePort}`,
  );
  socket.buffer = Buffer.alloc(0);

  const packet = serializer(PACKET_TYPE.ConnectResponse, { token: '1234' }, 1);
  socket.write(packet);

  // JWT 토큰 검증 TODO
  // 연결된 클라이언트 정보 세션저장 TODO - 문진수 작성

  // 현재는 테스트용도 연결된 클라이언트에게 토큰 넘겨주고 나중엔 로그인 시에 jwt토큰을 생성하여 클라에게 넘겨주고 서버 및 세션에 참가할떄 인증검증으로 사용할 예정

  socket.on('data', onData(socket));
  socket.on('end', onEnd(socket));
  socket.on('error', onError(socket));
};

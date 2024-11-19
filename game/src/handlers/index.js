import { PACKET_TYPE } from '../../constants/haeader.js';
import { connectGameRequestHandler } from './auth/auth.handler.js';
import { moveRequestHandler } from './game/game.handler.js';

const handlers = {
  [PACKET_TYPE.ConnectGameRequest]: {
    handler: connectGameRequestHandler,
    protoType: 'auth.C2S_ConnectGameRequest',
  },
  [PACKET_TYPE.MoveRequest]: {
    handler: moveRequestHandler,
    protoType: 'gameData.C2S_MoveRequest',
  },
};

export const getHandlerByPacketType = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].handler;
};

export const getProtoTypeByPacketType = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].protoType;
};

export const getProtoPayloadTypeByPacketType = (packetType) => {
  if (!handlers[packetType]) {
    return false;
  }

  return handlers[packetType].protoPayloadType;
};

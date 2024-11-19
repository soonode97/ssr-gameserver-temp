import { PACKET_TYPE } from './header.js';

export const packetNames = {
  common: {
    GamePacket: 'common.GamePacket',
  },
  auth: {
    S2C_ConnectResponse: 'auth.S2C_ConnectResponse',
    C2S_ConnectGameRequest: 'auth.C2S_ConnectGameRequest',
    S2C_ConnectGameNotification: 'auth.S2C_ConnectGameNotification',
  },
  gameData: {
    Position: 'gameData.Position',
    Player: 'gameData.Player',
    Ghost: 'gameData.Ghost',
    LocationUpdate: 'gameData.LocationUpdate',
    GhostLocationData: 'gameData.GhostLocationData',
    PlayerLocationData: 'gameData.PlayerLocationData',
    InitGameData: 'gameData.InitGameData',
    C2S_MoveRequest: 'gameData.C2S_MoveRequest',
    S2C_MoveNotification: 'gameData.S2C_MoveNotification',
  },
};

export const PACKET_MAPS = {
  [PACKET_TYPE.ConnectResponse]: 'connectResponse',
  [PACKET_TYPE.ConnectGameRequest]: 'connectGameRequest',
  [PACKET_TYPE.ConnectGameNotification]: 'connectGameNotification',
  [PACKET_TYPE.MoveRequest]: 'moveRequest',
  [PACKET_TYPE.MoveNotification]: 'moveNotification',
};

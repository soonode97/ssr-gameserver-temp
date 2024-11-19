import {
  CLIENT_VERSION,
  REDIS_HOST,
  REDIS_PASSWORD,
  REDIS_PORT,
  TCP_HOST,
  TCP_PORT,
  Test_Token,
  UDP_PORT,
} from '../constants/env.js';
import {
  PACKET_TYPE_LENGTH,
  PAYLOAD_LENGTH,
  SEQUENCE_LENGTH,
  VERSION_LENGTH,
} from '../constants/header.js';

export const config = {
  server: {
    tcpPort: TCP_PORT,
    udpPort: UDP_PORT,
    tcpHost: TCP_HOST,
  },
  client: {
    clientVersion: CLIENT_VERSION,
  },
  packet: {
    typeLength: PACKET_TYPE_LENGTH,
    versionLength: VERSION_LENGTH,
    sequenceLength: SEQUENCE_LENGTH,
    payloadLength: PAYLOAD_LENGTH,
  },
  globalFailCode: {
    NONE: 0,
    UNKNOWN_ERROR: 1,
    INVALID_REQUEST: 2,
    AUTHENTICATION_FAILED: 3,
  },
  redis: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
  },
  test: {
    test_token: Test_Token,
  },
};

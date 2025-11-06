import { Injectable } from '@nestjs/common';

@Injectable()
export class KeyTokenService {
  constructor() {}

  async createKeyToken() {}

  createTokenPair() {}

  verifyJWT() {}

  async requireKeyStore() {}

  async removeKeyById() {}

  async findOneById() {}
  async findByUserId() {}
  async findByRefreshTokenUsed() {}
  async findByRefreshToken() {}
  async deleteKeyByUserId() {}
}

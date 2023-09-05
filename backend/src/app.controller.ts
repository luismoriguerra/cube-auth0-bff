import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import cubejs, { CubejsApi, Query } from '@cubejs-client/core';
import { sign } from 'jsonwebtoken';

@Controller()
export class AppController {
  cubejsApi: CubejsApi;
  constructor(private readonly appService: AppService) {}

  getCubeAPI(userToken?: string) {
    const token = this.getToken(userToken);
    this.cubejsApi = cubejs(token, {
      // apiUrl: process.env.CUBE_API_URL_local,
      apiUrl: process.env.CUBE_API_URL,
    });
  }

  getToken(userToken?: string) {
    if (userToken && userToken !== 'undefined') {
      return userToken;
    }

    const CUBE_API_SECRET = process.env.CUBE_API_SECRET;

    const cubejsToken = sign(
      {
        appName: 'insights',
        role: 'anonymous',
      },
      CUBE_API_SECRET,
      {
        expiresIn: '1d',
      },
    );

    return cubejsToken;
  }

  @Get()
  async getHello(@Req() req) {
    const accessToken = req.headers.authorization || '';

    let token;

    if (accessToken) {
      token = accessToken.split(' ')[1];
    }

    this.getCubeAPI(token);

    const query: Query = {
      limit: 10,
      dimensions: ['activities.organizationid'],
      order: {
        'activities.organizationid': 'asc',
      },
    };
    const resultSet = await this.cubejsApi.load(query);
    return { data: resultSet };
  }
  @Get('meta')
  async meta(@Req() req) {
    const accessToken = req.headers.authorization || '';

    let token;

    if (accessToken) {
      token = accessToken.split(' ')[1];
    }

    this.getCubeAPI(token);

    const resultSet = await this.cubejsApi.meta();
    return { data: resultSet };
  }
}

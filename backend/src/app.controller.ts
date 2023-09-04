import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import cubejs from '@cubejs-client/core';
import { sign } from 'jsonwebtoken';

@Controller()
export class AppController {
  cubejsApi: any;
  constructor(private readonly appService: AppService) {}

  getCubeAPI(userToken?: string) {
    const token = this.getToken(userToken);
    this.cubejsApi = cubejs(token, {
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
        appId: 'insights',
        role: 'anonymous',
      },
      CUBE_API_SECRET,
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

    const query = {
      limit: 10,
      dimensions: ['activities.organizationid'],
      order: {
        'activities.organizationid': 'asc',
      },
    };
    const resultSet = await this.cubejsApi.load(query);
    return { data: resultSet };
  }
}

import { Controller, Get, Inject, Post } from '@midwayjs/decorator';
import { Context } from 'koa';

@Controller('/')
export class HomeController {

  @Inject()
  ctx: Context;

  @Get('/')
  async home(): Promise<string> {
    return 'Hello World';
  }

  @Get('/dingding')
  async dingding(): Promise<string> {
    console.log()
    return 'Hello dingding';
  }

  @Post('/dingding')
  async dingdingPost(): Promise<string> {
    const query = this.ctx.query;
    return JSON.stringify(query, null, 2);
  }
}

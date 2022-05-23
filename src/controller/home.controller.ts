import { Controller, Get } from '@midwayjs/decorator';
import { sendDingDingMessage } from '../utils/dingding';

@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    return 'Hello World';
  }

  @Get('/dingding')
  async dingding(): Promise<string> {
    await sendDingDingMessage('你好哇');
    return 'Hello dingding';
  }
}

import { Controller, Get, Inject, Post } from '@midwayjs/decorator';
import { exec } from 'child_process';
import { Context } from 'koa';
import { DingTalkBody } from '../interface';
import { sendDingDingMessage } from '../utils/dingding';


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
    return 'Hello dingding';
  }

  @Post('/dingding')
  async dingdingPost(): Promise<string> {
    const query = this.ctx.request.body as DingTalkBody;
    if (!query) return;
    const args = query.text.content.trim().split(' ');
    const name = query.senderNick;
    const [ order ] = args;
    if (order === '打包') {
      exec(`node /root/pangu/entry/advertTemplate/index.js --operater=${name}`, {
        cwd: '/root/pangu/'
      });
    } else {
      sendDingDingMessage('无效命令！');
    }
    return;
  }

  @Get('/githubProcess')
  async githubProcess(): Promise<string> {
    await sendDingDingMessage('github automation');
    exec(`node /root/pangu/entry/advertTemplate/index.js --operater=${'github自动流水线'}`, {
      cwd: '/root/pangu/'
    });
    return;
  }
}

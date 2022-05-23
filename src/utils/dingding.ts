import axios from 'axios';

// 龙虾君
const LONG_XIA_JUN = {
    webhookUrl: 'https://oapi.dingtalk.com/robot/send?access_token=b7aa7d76aa7ba3af6e038083b65f1034b3095df4450bc649fc452569018e27d1',
    webhookSecret: '',
};

// 使用的钉钉机器人配置
const DING_DING_BOT_CFG = LONG_XIA_JUN;

/**
 * 钉钉机器人发送消息
 * @author at74
 * @date 2021-11-18 22:58:01
 * @param {*} content 待发送的文案 markdown 格式
 * @returns {void}
 */
const sendDingDingMessage = async (content) => {
    // 获取配置中的webhook url 以及 签名所用的secret （如果需要）
    let { webhookUrl } = DING_DING_BOT_CFG;
    if (!webhookUrl) {
        return;
    }
    const msg = {
        msgtype: 'markdown',
        markdown: {
            title: '构建消息',
            text: content,
        },
        at: { isAtAll: false },
    };
    await axios.post(webhookUrl, JSON.stringify(msg), {
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
    });
};

export {
    sendDingDingMessage
}

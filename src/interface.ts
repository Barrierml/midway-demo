/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
}


const dingtalkBody = {
  "conversationId": "cidk+FkxOGVmgZ9W1/Bfs8ZRQ==",
  "sceneGroupCode": "meeting",
  "atUsers": [
    {
      "dingtalkId": "$:LWCP_v1:$n1dugNgav4Cqjw3CJYzvN7VaJnK6FVeW"
    }
  ],
  "chatbotCorpId": "ding821d328909157aadacaaa37764f94726",
  "chatbotUserId": "$:LWCP_v1:$n1dugNgav4Cqjw3CJYzvN7VaJnK6FVeW",
  "msgId": "msgDrdYSiucPlyHu23C1mi9Eg==",
  "senderNick": "陈海超",
  "isAdmin": true,
  "senderStaffId": "manager8502",
  "sessionWebhookExpiredTime": 1653304251883,
  "createAt": 1653298851734,
  "senderCorpId": "ding821d328909157aadacaaa37764f94726",
  "conversationType": "2",
  "senderId": "$:LWCP_v1:$sf5R7uXUy12q6I/AujgSsxSZyhJeNs4x",
  "conversationTitle": "打包包包",
  "isInAtList": true,
  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=0ead97e06322594b8581216d8b2c4919",
  "text": {
    "content": " 你好哇"
  },
  "robotCode": "dingrm6i0xivnymx4jyr",
  "msgtype": "text"
}

export type DingTalkBody = typeof dingtalkBody;
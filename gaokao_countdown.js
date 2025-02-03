import plugin from '../../../lib/plugins/plugin.js'

export class GaokaoCountdown extends plugin {
  constructor() {
    super({
      name: '高考倒计时',
      dsc: '提供高考倒计时信息',
      event: 'message',
      priority: 50,
      rule: [{
        reg: '^#?(高考倒计时|高考时间)$',
        fnc: 'gaokaoCountdown'
      }]
    })
  }

  async gaokaoCountdown(e) {
    const examDate = new Date(new Date().getFullYear(), 5, 7, 9, 0, 0) // 6月7日 9:00
    const now = new Date()
    if (now > examDate) {
      examDate.setFullYear(examDate.getFullYear() + 1) // 若已过考试时间，计算明年高考
    }
    
    const diffTime = examDate - now
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diffTime / (1000 * 60)) % 60)
    const seconds = Math.floor((diffTime / 1000) % 60)
    
    const quotes = [
      '十年寒窗，百炼成钢；金榜夺魁，舍我其谁！',
      '今天多一份拼搏，明天多几份欢笑！',
      '不苦不累，高三无味；不拼不搏，等于白活！',
      '拼一载春秋，搏一生无悔！',
      '高考是一个人的战争，也是一群人的战斗！'
    ]
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    
    const msg = `高考还剩：${days}天${hours}小时${minutes}分钟${seconds}秒\n高考时间：${examDate.getFullYear()}年06月07日 09:00:00\n高考一言：${randomQuote}`
    
    await e.reply(msg)
  }
}

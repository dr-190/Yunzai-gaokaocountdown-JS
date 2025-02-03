# 高考倒计时插件（GaokaoCountdown）

## 简介
**GaokaoCountdown** 是一个适用于 **TRSS-Yunzai** 的高考倒计时插件，可查询距离高考的剩余时间，并附带励志语句。

## 功能
- 发送 `#高考`、`#gaokao` 或 `#倒计时`，机器人将返回：
  - 距离高考的 **剩余天数、小时、分钟、秒**
  - 高考时间（每年6月7日 9:00:00）
  - 一句随机 **高考励志语句**

## 安装步骤
1. **进入 Yunzai-Bot 目录**
   ```bash
   cd Yunzai-Bot/plugins
   ```

2. **下载插件文件**
   ```bash
   git clone https://github.com/dr-190/Yunzai-gaokaocountdown-JS/gaokao_countdown.git
   ```
   或者手动将 `gaokao_countdown.js` 放入 `Yunzai-Bot/plugins/gaokao_countdown/` 目录。

3. **注册插件**（如果 `apps.js` 不存在，请创建）
   ```bash
   echo "export * from './gaokao_countdown/gaokao_countdown.js'" >> apps.js
   ```

4. **安装依赖（如有必要）**
   ```bash
   npm install
   ```

5. **重启 Yunzai-Bot**
   ```bash
   npm stop
   npm start
   ```

## 使用方法
在聊天框发送以下指令之一：
```text
#高考
#gaokao
#倒计时
```

机器人将返回类似如下消息：
```
高考还剩：XX天XX小时XX分XX秒
高考时间：XXXX年6月7日 9:00:00
高考一言：拼搏的你，未来可期！
```

## 可能的问题及解决方案
### 1. 插件未加载？
- 确保 `gaokao_countdown.js` 放在 `plugins/gaokao_countdown/` 目录。
- 在 `Yunzai-Bot/plugins/apps.js` 里注册插件。
- 运行 `npm run check` 检查是否正确加载。
- 直接尝试 `import('./plugins/gaokao_countdown/gaokao_countdown.js')`。

### 2. 指令无响应？
- 确保机器人运行正常，尝试 `npm start`。
- 检查 `rule` 正则匹配是否正确。
- 查看 `logs/` 目录下的日志文件，排查错误。

## 许可协议
本插件遵循 MIT 许可证，欢迎自由使用和修改。

---
✨ **祝所有考生高考顺利，金榜题名！** ✨

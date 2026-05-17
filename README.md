# English Check-in

这是一个可扩展的英语打卡小项目。网页只写一次，后续 Unit 8、Unit 9、期末复习都通过新增内容 JSON 和音频文件来实现。

## 目录结构

```text
web/
  index.html              手机/电脑打开的学习网页
  app.js                  通用页面逻辑，不按单元重写
  styles.css              页面样式
  data/
    manifest.json         内容目录，决定有哪些单元
    units/
      unit7.json          Unit 7 的 7 天内容
  audio/
    unit7/day-01/*.mp3    AI 生成音频
print/
  unit7-checkin.html      Unit 7 打卡表样稿
tools/
  generate_audio.py       批量生成 AI 音频
```

## 本机预览

最简单方式：直接双击项目里的 `English-Checkin.html`。

如果要模拟手机扫码访问，或者后续要局域网手机访问，再双击 `start-preview.bat`。它会打开浏览器，并启动本地服务。

在项目目录运行：

```powershell
python -m http.server 8765
```

然后打开：

```text
http://localhost:8765/web/index.html
```

指定单元：

```text
http://localhost:8765/web/index.html?unit=unit7
```

打印打卡表：

```text
http://localhost:8765/print/unit7-checkin.html
```

## 生成 AI 音频

生成所有单元音频：

```powershell
python tools/generate_audio.py
```

只生成某个单元：

```powershell
python tools/generate_audio.py --unit unit7
```

当前使用 `edge-tts` 神经语音生成 MP3。音频不是教材原声，但比浏览器临时朗读稳定，适合第一版跟读使用。

## 更新可双击页面和二维码

内容或样式变更后运行：

```powershell
python tools/build_static_bundle.py
python tools/generate_qr.py
```

`English-Checkin.html` 是电脑直接双击使用的入口。

部署到 GitHub Pages 后，二维码目标地址是：

```text
https://qingfengchouyiluo.github.io/english-checkin/English-Checkin.html
```

## 后续新增单元

1. 把新单元照片发给 Codex。
2. Codex 整理出 `web/data/units/unit8.json` 或 `unit9.json`。
3. 在 `web/data/manifest.json` 里新增一条单元记录。
4. 运行 `python tools/generate_audio.py --unit unit8`。
5. 打开 `web/index.html?unit=unit8` 检查内容和音频。

期末复习也按同样方式做，例如新增 `review-final.json`，把它当成一个独立内容包。

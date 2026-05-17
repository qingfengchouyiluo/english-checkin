# 新增单元工作流

后续 Unit 8、Unit 9、期末复习都按同一套流程处理。

## 你需要提供什么

每个新单元先提供这些照片：

1. 单元首页。
2. Section A 主要页面。
3. Grammar Focus 页面。
4. Section B 阅读/写作页面。
5. 单词表页面，如果课本后面有本单元词汇表，优先拍词汇表。
6. 老师圈画或要求背诵的重点页，如果有。

期末复习时，提供：

1. 老师发的复习范围。
2. 1-6 单元目录或重点页。
3. 最近错题或试卷照片，如果有。

## Codex 后续怎么做

1. 提取本单元核心目标：主题、语法、词汇、句型、阅读/写作。
2. 按 7 天或 14 天拆成每天 25 分钟任务。
3. 新增一份内容文件，例如 `web/data/units/unit8.json`。
4. 在 `web/data/manifest.json` 里增加入口。
5. 运行音频脚本生成 AI MP3。
6. 打开网页检查内容、按钮、音频。
7. 生成或更新打印打卡表。

## 内容拆分规则

每天固定轻量结构：

- 3 分钟：旧词复习。
- 7 分钟：5 个今日词/短语。
- 8 分钟：3 个跟读句子。
- 5 分钟：2-3 道基础小题。
- 2 分钟：网页完成 + 纸上打卡。

不要把整篇课文直接塞进一天。长课文要拆成关键词、短句和极小练习。

## 文件命名

- Unit 8: `web/data/units/unit8.json`
- Unit 9: `web/data/units/unit9.json`
- 期末复习: `web/data/units/review-final.json`
- 音频目录由脚本自动生成，例如 `web/audio/unit8/day-01/`

## 新增后运行

```powershell
python tools/generate_audio.py --unit unit8
python -m http.server 8765
```

然后打开：

```text
http://localhost:8765/web/index.html?unit=unit8
```

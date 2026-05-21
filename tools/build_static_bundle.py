import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
WEB_ROOT = ROOT / "web"
MANIFEST_FILE = WEB_ROOT / "data" / "manifest.json"
OUTPUT_FILE = WEB_ROOT / "data" / "all-units.js"
STANDALONE_FILE = ROOT / "English-Checkin.html"


def build_page(css: str, data_script: str, app_script: str) -> str:
    return f"""<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>English Check-in</title>
    <style>
{css}
    </style>
  </head>
  <body>
    <main class="app-shell">
      <header class="hero">
        <div>
          <p class="brand-banner">张梓萱的英语世界</p>
          <p class="eyebrow" id="unitMeta">Grade 7</p>
          <h1 id="unitTitle">English Check-in</h1>
          <p class="hero-copy" id="unitCopy">每天 25 分钟：听词、跟读、做 3 道小题，然后自己打卡。</p>
        </div>
        <div class="progress-panel" aria-label="学习进度">
          <label class="unit-picker-label" for="unitPicker">选择内容</label>
          <select id="unitPicker" class="unit-picker"></select>
          <span class="progress-label">已完成</span>
          <strong id="doneCount">0 / 7</strong>
          <div class="progress-track"><span id="progressBar"></span></div>
        </div>
      </header>

      <section class="day-tabs" id="dayTabs" aria-label="选择学习天数"></section>

      <section class="today-layout">
        <article class="lesson-card">
          <div class="lesson-heading">
            <div>
              <p class="eyebrow" id="lessonMeta">Day 1</p>
              <h2 id="lessonTitle">加载中</h2>
            </div>
            <button class="ghost-button" id="fallbackButton" type="button">保底版</button>
          </div>

          <p class="goal" id="lessonGoal"></p>
          <div class="fallback-panel" id="fallbackPanel" hidden></div>

          <div class="routine" id="routine"></div>

          <section class="block" id="reviewBlock" hidden>
            <h3>旧词复习</h3>
            <div class="chip-row" id="reviewList"></div>
          </section>

          <section class="block">
            <h3>今日词/短语</h3>
            <div class="item-list" id="termList"></div>
          </section>

          <section class="block">
            <h3>跟读句子</h3>
            <div class="item-list" id="sentenceList"></div>
          </section>
        </article>

        <aside class="practice-card">
          <h2>小练习</h2>
          <p class="practice-note">先自己选，再看反馈。做错也没关系。</p>
          <div id="quizList"></div>
          <button class="complete-button" id="completeButton" type="button">我今天完成了</button>
          <p class="complete-note" id="completeNote"></p>
          <figure class="web-photo-card">
            <img src="print/assets/zixuan-cover.jpg" alt="张梓萱的英语学习照片">
          </figure>
        </aside>
      </section>
    </main>

    <div class="celebration" id="celebration" aria-hidden="true" aria-live="polite"></div>

    <script>
      window.ENGLISH_CHECKIN_AUDIO_PREFIX = "web/";
{data_script}
    </script>
    <script>
{app_script}
    </script>
  </body>
</html>
"""


def main() -> None:
    manifest = json.loads(MANIFEST_FILE.read_text(encoding="utf-8"))
    units = {}
    for unit in manifest["units"]:
        data_path = WEB_ROOT / unit["data"]
        units[unit["id"]] = json.loads(data_path.read_text(encoding="utf-8"))

    payload = {
        "manifest": manifest,
        "units": units,
    }
    script = (
        "window.CHECKIN_STATIC = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUTPUT_FILE.write_text(script, encoding="utf-8")
    css = (WEB_ROOT / "styles.css").read_text(encoding="utf-8")
    app_script = (WEB_ROOT / "app.js").read_text(encoding="utf-8")
    STANDALONE_FILE.write_text(
        build_page(css=css, data_script=script, app_script=app_script),
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT_FILE}")
    print(f"Wrote {STANDALONE_FILE}")


if __name__ == "__main__":
    main()

const state = {
  manifest: null,
  unitEntry: null,
  data: null,
  activeDayIndex: 0,
  audio: null,
  celebrationTimer: null,
  done: new Set(),
};

const elements = {
  unitMeta: document.querySelector("#unitMeta"),
  unitTitle: document.querySelector("#unitTitle"),
  unitCopy: document.querySelector("#unitCopy"),
  unitPicker: document.querySelector("#unitPicker"),
  dayTabs: document.querySelector("#dayTabs"),
  doneCount: document.querySelector("#doneCount"),
  progressBar: document.querySelector("#progressBar"),
  lessonMeta: document.querySelector("#lessonMeta"),
  lessonTitle: document.querySelector("#lessonTitle"),
  lessonGoal: document.querySelector("#lessonGoal"),
  fallbackPanel: document.querySelector("#fallbackPanel"),
  fallbackButton: document.querySelector("#fallbackButton"),
  routine: document.querySelector("#routine"),
  reviewBlock: document.querySelector("#reviewBlock"),
  reviewList: document.querySelector("#reviewList"),
  termList: document.querySelector("#termList"),
  sentenceList: document.querySelector("#sentenceList"),
  quizList: document.querySelector("#quizList"),
  completeButton: document.querySelector("#completeButton"),
  completeNote: document.querySelector("#completeNote"),
  celebration: document.querySelector("#celebration"),
};

function doneKey() {
  return `englishCheckin.${state.data.id}.doneDays`;
}

function loadDone() {
  try {
    state.done = new Set(JSON.parse(localStorage.getItem(doneKey()) || "[]"));
  } catch {
    state.done = new Set();
  }
}

function saveDone() {
  try {
    localStorage.setItem(doneKey(), JSON.stringify([...state.done]));
  } catch {
    // Some file:// browser contexts disable localStorage. The page can still be used.
  }
}

function updateProgress() {
  const total = state.data.days.length;
  const done = state.done.size;
  elements.doneCount.textContent = `${done} / ${total}`;
  elements.progressBar.style.width = `${(done / total) * 100}%`;
}

function setTemporaryClass(element, className, duration = 700) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
}

function markAudioTrigger(trigger, audio) {
  if (!trigger) return;
  const targets = [trigger, trigger.closest(".learn-item"), trigger.closest(".review-audio")].filter(Boolean);
  targets.forEach((target) => target.classList.add("is-playing"));
  const clear = () => targets.forEach((target) => target.classList.remove("is-playing"));
  audio.addEventListener("ended", clear, { once: true });
  audio.addEventListener("error", clear, { once: true });
  audio.addEventListener("pause", clear, { once: true });
  window.setTimeout(() => {
    if (state.audio === audio) clear();
  }, 4600);
}

function showCelebration(title, detail) {
  if (!elements.celebration) return;
  window.clearTimeout(state.celebrationTimer);
  elements.celebration.innerHTML = "";
  elements.celebration.classList.remove("show");

  const card = document.createElement("div");
  card.className = "celebration-card";
  const heading = document.createElement("strong");
  heading.textContent = title;
  const copy = document.createElement("span");
  copy.textContent = detail;
  card.append(heading, copy);
  elements.celebration.appendChild(card);

  const sparks = [
    ["-128px", "-78px", "18deg", "10px", "var(--gold)"],
    ["-92px", "68px", "-28deg", "8px", "var(--rose)"],
    ["-38px", "-112px", "42deg", "7px", "var(--teal)"],
    ["34px", "106px", "-18deg", "9px", "var(--gold)"],
    ["88px", "-82px", "31deg", "8px", "var(--rose)"],
    ["132px", "52px", "-44deg", "10px", "var(--teal)"],
    ["0px", "-142px", "10deg", "7px", "var(--gold)"],
    ["0px", "138px", "-12deg", "8px", "var(--rose)"],
  ];

  sparks.forEach(([x, y, r, size, color]) => {
    const spark = document.createElement("span");
    spark.className = "celebration-spark";
    spark.style.setProperty("--x", x);
    spark.style.setProperty("--y", y);
    spark.style.setProperty("--r", r);
    spark.style.setProperty("--size", size);
    spark.style.setProperty("--color", color);
    elements.celebration.appendChild(spark);
  });

  elements.celebration.setAttribute("aria-hidden", "false");
  elements.celebration.classList.add("show");
  state.celebrationTimer = window.setTimeout(() => {
    elements.celebration.classList.remove("show");
    elements.celebration.setAttribute("aria-hidden", "true");
    elements.celebration.innerHTML = "";
  }, 1250);
}

function markComplete(day, message, detail) {
  state.done.add(day.id);
  saveDone();
  updateProgress();
  renderTabs();
  elements.completeNote.textContent = message;
  setTemporaryClass(elements.completeButton, "is-celebrating", 900);
  setTemporaryClass(elements.progressBar.closest(".progress-track"), "progress-bump", 620);
  showCelebration("今天完成啦", detail);
}

function playAudio(path, rate = 1, trigger = null) {
  if (state.audio) {
    state.audio.pause();
  }
  const prefix = window.ENGLISH_CHECKIN_AUDIO_PREFIX || "";
  const audioPath = /^https?:|^file:|^\//.test(path) ? path : `${prefix}${path}`;
  state.audio = new Audio(audioPath);
  state.audio.playbackRate = rate;
  markAudioTrigger(trigger, state.audio);
  state.audio.play().catch(() => {
    trigger?.classList.remove("is-playing");
    trigger?.closest(".learn-item")?.classList.remove("is-playing");
    trigger?.closest(".review-audio")?.classList.remove("is-playing");
    elements.completeNote.textContent = "音频暂时无法播放，请确认已生成 MP3，并通过本地服务器打开页面。";
  });
}

function audioMap() {
  const items = new Map();
  state.data.days.forEach((day) => {
    [...day.terms, ...day.sentences].forEach((item) => {
      if (!items.has(item.english)) {
        items.set(item.english, item);
      }
    });
  });
  return items;
}

function renderUnitPicker() {
  elements.unitPicker.innerHTML = "";
  state.manifest.units.forEach((unit) => {
    const option = document.createElement("option");
    option.value = unit.id;
    option.textContent = `${unit.label} · ${unit.title}`;
    option.selected = unit.id === state.unitEntry.id;
    elements.unitPicker.appendChild(option);
  });
  elements.unitPicker.onchange = () => loadUnit(elements.unitPicker.value);
}

function renderTabs() {
  elements.dayTabs.innerHTML = "";
  state.data.days.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-tab";
    button.textContent = `Day ${day.day}`;
    if (index === state.activeDayIndex) button.classList.add("active");
    if (state.done.has(day.id)) button.classList.add("done");
    button.addEventListener("click", () => {
      state.activeDayIndex = index;
      render();
    });
    elements.dayTabs.appendChild(button);
  });
}

function renderRoutine() {
  elements.routine.innerHTML = "";
  state.data.routine.forEach((step) => {
    const item = document.createElement("div");
    item.className = "routine-step";
    item.innerHTML = `<strong>${step.minutes} 分钟 · ${step.label}</strong><span>${step.detail}</span>`;
    elements.routine.appendChild(item);
  });
}

function renderReview(day) {
  elements.reviewList.innerHTML = "";
  elements.reviewBlock.hidden = day.review.length === 0;
  const knownAudio = audioMap();
  day.review.forEach((word) => {
    const known = typeof word === "string" ? knownAudio.get(word) : word;
    const english = typeof word === "string" ? word : word.english;
    const chinese = known?.chinese || "旧词复习";
    const audio = known?.audio;
    const item = document.createElement("button");
    item.type = "button";
    item.className = "review-audio";
    item.innerHTML = `<strong>${english}</strong><span>${chinese}</span>`;
    item.addEventListener("click", () => {
      if (audio) {
        playAudio(audio, 0.9, item);
      } else {
        elements.completeNote.textContent = "这个旧词还没有音频，后续会补齐。";
      }
    });
    elements.reviewList.appendChild(item);
  });
}

function renderLearnItems(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "learn-item";
    row.innerHTML = `
      <div>
        <strong>${item.english}</strong>
        <span>${item.chinese}</span>
      </div>
      <button class="audio-button" type="button">播放</button>
      <button class="audio-button slow" type="button">慢速</button>
    `;
    const [normal, slow] = row.querySelectorAll("button");
    normal.addEventListener("click", () => playAudio(item.audio, 1, normal));
    slow.addEventListener("click", () => playAudio(item.audio, 0.82, slow));
    container.appendChild(row);
  });
}

function renderQuiz(day) {
  elements.quizList.innerHTML = "";
  day.quiz.forEach((quiz, quizIndex) => {
    const wrap = document.createElement("div");
    wrap.className = "quiz-item";
    const prompt = document.createElement("div");
    prompt.className = "quiz-prompt";
    prompt.textContent = `${quizIndex + 1}. ${quiz.prompt}`;
    wrap.appendChild(prompt);

    quiz.choices.forEach((choice, choiceIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice";
      button.textContent = choice;
      button.addEventListener("click", () => {
        wrap.classList.remove("answered-correct", "answered-wrong");
        [...wrap.querySelectorAll(".choice")].forEach((el) => {
          el.classList.remove("correct", "wrong");
        });
        const isCorrect = choiceIndex === quiz.answer;
        button.classList.add(isCorrect ? "correct" : "wrong");
        wrap.classList.add(isCorrect ? "answered-correct" : "answered-wrong");
      });
      wrap.appendChild(button);
    });
    elements.quizList.appendChild(wrap);
  });
}

function render() {
  const day = state.data.days[state.activeDayIndex];
  elements.unitMeta.textContent = `${state.data.level} · ${state.data.unit}`;
  elements.unitTitle.textContent = state.data.title;
  elements.unitCopy.textContent = `每天 ${state.data.dailyMinutes} 分钟：听词、跟读、做小练习，然后自己打卡。`;

  renderUnitPicker();
  renderTabs();
  renderRoutine();
  renderReview(day);
  renderLearnItems(elements.termList, day.terms);
  renderLearnItems(elements.sentenceList, day.sentences);
  renderQuiz(day);

  elements.lessonMeta.textContent = `Day ${day.day} · ${state.data.dailyMinutes} 分钟`;
  elements.lessonTitle.textContent = day.title;
  elements.lessonGoal.textContent = day.goal;
  elements.fallbackPanel.hidden = true;
  elements.fallbackPanel.innerHTML = "";
  elements.completeNote.textContent = state.done.has(day.id) ? "今天已经完成，可以在纸上打勾。" : "";
  elements.fallbackButton.onclick = () => {
    elements.fallbackPanel.hidden = false;
    elements.fallbackPanel.innerHTML = `
      <strong>今天只做保底版也可以</strong>
      <span>${day.fallback}</span>
      <button type="button" id="fallbackComplete">按保底版完成</button>
    `;
    document.querySelector("#fallbackComplete").onclick = () => {
      markComplete(day, "已按保底版完成，可以在纸上打勾。", "保底版也算认真完成。");
    };
  };
  elements.completeButton.onclick = () => {
    markComplete(day, "今天已经完成，可以在纸上打勾。", "把今天的小任务收好，明天继续。");
  };
  updateProgress();
}

async function loadUnit(unitId) {
  const unitEntry = state.manifest.units.find((unit) => unit.id === unitId);
  state.unitEntry = unitEntry || state.manifest.units[0];
  if (window.CHECKIN_STATIC?.units?.[state.unitEntry.id]) {
    state.data = window.CHECKIN_STATIC.units[state.unitEntry.id];
  } else {
    const response = await fetch(state.unitEntry.data);
    state.data = await response.json();
  }
  state.activeDayIndex = 0;
  loadDone();
  render();
}

async function init() {
  if (window.CHECKIN_STATIC?.manifest) {
    state.manifest = window.CHECKIN_STATIC.manifest;
  } else {
    const manifestResponse = await fetch("data/manifest.json");
    state.manifest = await manifestResponse.json();
  }
  const params = new URLSearchParams(window.location.search);
  const unitId = params.get("unit") || state.manifest.defaultUnit;
  await loadUnit(unitId);
}

init().catch(() => {
  document.body.innerHTML = "<main class='app-shell'><h1>加载失败</h1><p>请确认 English-Checkin.html 是最新版本，且 web/audio 文件夹没有被移动。</p></main>";
});

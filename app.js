// ============================================================
// Dutch Practice Tool — "SA Kids Dutch Hub" App Logic
// ============================================================

const APP = {
  currentProfile: null,
  currentModule: null,
  currentLevel: null,
  streak: 0,
  questionIndex: 0,
  currentData: null,
  vocabPool: [],
  vocabIndex: 0,
  spellingPool: [],
  spellingIndex: 0,
  textIndex: 0,
};

// ── Storage ────────────────────────────────────
function getProfiles() {
  return JSON.parse(localStorage.getItem("oefenmeester_profiles") || "{}");
}

function saveProfiles(profiles) {
  localStorage.setItem("oefenmeester_profiles", JSON.stringify(profiles));
}

function getProfile(name) {
  const profiles = getProfiles();
  if (!profiles[name]) {
    profiles[name] = {
      name,
      level: null,
      totalAnswered: 0,
      totalCorrect: 0,
      bestStreak: 0,
      currentStreak: 0,
      lezenDone: 0,
      lezenCorrect: 0,
      vocabDone: 0,
      vocabCorrect: 0,
      spellingDone: 0,
      spellingCorrect: 0,
      perfectTexts: 0,
      completedTexts: [],
      earnedBadges: [],
      lastPlayed: null,
      history: []
    };
    saveProfiles(profiles);
  }
  return profiles[name];
}

function updateProfile(updates) {
  const profiles = getProfiles();
  Object.assign(profiles[APP.currentProfile], updates);
  profiles[APP.currentProfile].lastPlayed = new Date().toISOString();
  saveProfiles(profiles);
}

function profile() {
  return getProfile(APP.currentProfile);
}

// Log an activity entry for monthly trend tracking
function logActivity(module, isCorrect) {
  const profiles = getProfiles();
  const p = profiles[APP.currentProfile];
  if (!p.history) p.history = [];
  p.history.push({
    date: new Date().toISOString(),
    module: module,    // "lezen", "vocab", "spelling"
    correct: isCorrect ? 1 : 0
  });
  saveProfiles(profiles);
}

// Build monthly rolling totals from history
function buildMonthlyTrends(history) {
  if (!history || history.length === 0) return [];

  // Group by month
  const months = {};
  history.forEach(h => {
    const d = new Date(h.date);
    const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
    if (!months[key]) months[key] = { answered: 0, correct: 0, lezen: 0, vocab: 0, spelling: 0, rekenen: 0 };
    months[key].answered++;
    months[key].correct += h.correct;
    if (h.module === "lezen") months[key].lezen++;
    else if (h.module === "vocab") months[key].vocab++;
    else if (h.module === "spelling") months[key].spelling++;
    else if (h.module === "rekenen") months[key].rekenen++;
  });

  // Sort by month and compute rolling totals
  const sorted = Object.keys(months).sort();
  let cumAnswered = 0, cumCorrect = 0, cumLezen = 0, cumVocab = 0, cumSpelling = 0, cumRekenen = 0;
  return sorted.map(key => {
    cumAnswered += months[key].answered;
    cumCorrect += months[key].correct;
    cumLezen += months[key].lezen;
    cumVocab += months[key].vocab;
    cumSpelling += months[key].spelling;
    cumRekenen += months[key].rekenen;
    const [y, m] = key.split("-");
    const label = monthName(parseInt(m)) + " " + y;
    return { key, label, cumAnswered, cumCorrect, cumLezen, cumVocab, cumSpelling, cumRekenen, monthAnswered: months[key].answered, monthCorrect: months[key].correct };
  });
}

function monthName(m) {
  return ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"][m - 1] || "";
}

// ── Navigation ─────────────────────────────────
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function goHome() {
  APP.currentModule = null;
  APP.streak = 0;
  showScreen("home-screen");
  renderHome();
}

function goToProfiles() {
  showScreen("profile-screen");
  renderProfiles();
}

// ── Confetti Animation ─────────────────────────
function launchConfetti() {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";
  const colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6fff", "#ff9f43"];
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement("div");
    dot.className = "confetti-dot";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    dot.style.animationDelay = Math.random() * 0.5 + "s";
    dot.style.animationDuration = (1 + Math.random() * 1.5) + "s";
    container.appendChild(dot);
  }
  setTimeout(() => container.innerHTML = "", 3000);
}

function launchMiniCelebration() {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";
  const emojis = ["⭐", "🌟", "✨", "💫"];
  for (let i = 0; i < 12; i++) {
    const span = document.createElement("span");
    span.className = "confetti-dot mini-star";
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDelay = Math.random() * 0.3 + "s";
    span.style.animationDuration = (0.8 + Math.random()) + "s";
    container.appendChild(span);
  }
  setTimeout(() => container.innerHTML = "", 2000);
}

// ── Profile Screen ─────────────────────────────
function renderProfiles() {
  const profiles = getProfiles();
  const names = Object.keys(profiles);
  const container = document.getElementById("profile-list");
  
  let html = "";
  if (names.length > 0) {
    html += `<h3>Kies je profiel:</h3><div class="profile-cards">`;
    names.forEach(name => {
      const p = profiles[name];
      const levelLabel = p.level && LEVEL_INFO[p.level] ? LEVEL_INFO[p.level].emoji + " " + LEVEL_INFO[p.level].label : "Geen level";
      const badges = p.earnedBadges ? p.earnedBadges.length : 0;
      html += `
        <button class="profile-card" onclick="selectProfile('${name}')">
          <span class="profile-avatar">${name.charAt(0).toUpperCase()}</span>
          <span class="profile-name">${name}</span>
          <span class="profile-meta">${levelLabel} · 🏅 ${badges} badges</span>
        </button>`;
    });
    html += `</div><div class="divider"><span>of</span></div>`;
  }
  
  html += `
    <h3>Nieuw profiel maken:</h3>
    <div class="new-profile-form">
      <input type="text" id="new-name" placeholder="Je naam..." maxlength="20" class="fun-input" />
      <div class="level-pick">
        ${Object.entries(LEVEL_INFO).map(([key, info]) => `
        <button class="level-btn" onclick="createProfile('${key}')">
          <span class="level-emoji">${info.emoji}</span>
          <span>${info.label}</span>
          <span class="level-age">${info.desc}</span>
        </button>`).join("")}
      </div>
    </div>`;
  
  container.innerHTML = html;
}

function createProfile(level) {
  const nameInput = document.getElementById("new-name");
  const name = nameInput.value.trim();
  if (!name) {
    nameInput.classList.add("shake");
    setTimeout(() => nameInput.classList.remove("shake"), 500);
    return;
  }
  const p = getProfile(name);
  p.level = level;
  const profiles = getProfiles();
  profiles[name] = p;
  saveProfiles(profiles);
  selectProfile(name);
}

function selectProfile(name) {
  APP.currentProfile = name;
  APP.currentLevel = profile().level;
  goHome();
}

// ── Home Screen ────────────────────────────────
function renderHome() {
  const p = profile();
  const badges = p.earnedBadges || [];
  const li = LEVEL_INFO[p.level] || { label: "?", emoji: "?" };
  const levelLabel = li.emoji + " " + li.label;

  document.getElementById("home-welcome").innerHTML = `
    <div class="welcome-header">
      <div class="welcome-avatar bounce">${p.name.charAt(0).toUpperCase()}</div>
      <div>
        <h2>Hoi ${p.name}! 👋</h2>
        <p class="welcome-level">${levelLabel} · 🔥 Streak: ${p.currentStreak} · ⭐ ${p.totalCorrect} punten</p>
      </div>
    </div>`;

  // Recent badges
  const badgeHtml = badges.length > 0
    ? badges.slice(-4).map(id => {
        const b = CONTENT.badges.find(x => x.id === id);
        return b ? `<span class="mini-badge" title="${b.desc}">${b.emoji}</span>` : "";
      }).join("")
    : `<span class="no-badges">Verdien je eerste badge! 🏅</span>`;

  document.getElementById("home-badges").innerHTML = `<div class="badge-row">${badgeHtml}</div>`;
}

function startModule(mod) {
  APP.currentModule = mod;
  APP.streak = profile().currentStreak || 0;

  if (mod === "lezen") startLezen();
  else if (mod === "woordenschat") startWoordenSchat();
  else if (mod === "spelling") startSpelling();
  else if (mod === "rekenen") startRekenen();
  else if (mod === "voortgang") showProgress();
}

// ── BEGRIJPEND LEZEN ───────────────────────────
function startLezen() {
  showScreen("lezen-screen");
  const texts = CONTENT.lezen[APP.currentLevel] || CONTENT.lezen.age8_9;
  const completed = profile().completedTexts || [];
  
  let html = `<h2>📖 Begrijpend Lezen</h2><p class="module-intro">Kies een verhaal om te lezen!</p><div class="text-cards">`;
  texts.forEach((t, i) => {
    const done = completed.includes(t.id);
    html += `
      <button class="text-card ${done ? "done" : ""}" onclick="openText(${i})">
        <span class="text-num">${i + 1}</span>
        <span class="text-title">${t.title}</span>
        ${done ? '<span class="text-check">✅</span>' : '<span class="text-arrow">→</span>'}
      </button>`;
  });
  html += `</div><button class="back-btn" onclick="goHome()">← Terug</button>`;
  document.getElementById("lezen-content").innerHTML = html;
}

function openText(index) {
  const texts = CONTENT.lezen[APP.currentLevel] || CONTENT.lezen.age8_9;
  APP.textIndex = index;
  APP.currentData = texts[index];
  APP.questionIndex = 0;

  let html = `
    <h2>📖 ${APP.currentData.title}</h2>
    <div class="reading-text">${APP.currentData.text}</div>
    <button class="big-btn pulse" onclick="startTextQuestions()">Klaar! Beantwoord de vragen 📝</button>
    <button class="back-btn" onclick="startLezen()">← Terug naar verhalen</button>`;
  document.getElementById("lezen-content").innerHTML = html;
}

function startTextQuestions() {
  APP.questionIndex = 0;
  APP.textCorrect = 0;
  showTextQuestion();
}

function showTextQuestion() {
  const data = APP.currentData;
  const qi = APP.questionIndex;
  if (qi >= data.questions.length) {
    finishText();
    return;
  }
  const question = data.questions[qi];
  const progress = `Vraag ${qi + 1} van ${data.questions.length}`;
  const progressPct = ((qi) / data.questions.length) * 100;

  let html = `
    <h2>📖 ${data.title}</h2>
    <div class="progress-bar-container">
      <div class="progress-bar" style="width:${progressPct}%"></div>
    </div>
    <p class="question-progress">${progress}</p>
    <div class="question-box pop-in">
      <p class="question-text">${question.q}</p>
      <div class="options">`;
  question.options.forEach((opt, i) => {
    html += `<button class="option-btn" onclick="answerLezen(${qi}, ${i})">${opt}</button>`;
  });
  html += `</div></div>`;
  document.getElementById("lezen-content").innerHTML = html;
}

function answerLezen(qi, chosen) {
  const question = APP.currentData.questions[qi];
  const correct = chosen === question.correct;
  logActivity("lezen", correct);

  if (correct) {
    APP.streak++;
    APP.textCorrect++;
    launchMiniCelebration();
  } else {
    APP.streak = 0;
  }

  // Update profile
  const p = profile();
  updateProfile({
    totalAnswered: p.totalAnswered + 1,
    totalCorrect: p.totalCorrect + (correct ? 1 : 0),
    lezenCorrect: p.lezenCorrect + (correct ? 1 : 0),
    currentStreak: APP.streak,
    bestStreak: Math.max(p.bestStreak, APP.streak)
  });

  checkBadges();

  const enc = correct
    ? CONTENT.encouragement.correct[Math.floor(Math.random() * CONTENT.encouragement.correct.length)]
    : CONTENT.encouragement.incorrect[Math.floor(Math.random() * CONTENT.encouragement.incorrect.length)];

  const streakHtml = APP.streak >= 3
    ? `<p class="streak-msg">${CONTENT.encouragement.streak[Math.floor(Math.random() * CONTENT.encouragement.streak.length)].replace("{n}", APP.streak)}</p>` : "";

  let html = `
    <h2>📖 ${APP.currentData.title}</h2>
    <div class="feedback-box ${correct ? 'correct' : 'incorrect'} pop-in">
      <p class="feedback-emoji">${correct ? '✅' : '❌'}</p>
      <p class="feedback-text">${enc}</p>
      ${streakHtml}
      <div class="explanation-box">
        <p><strong>Uitleg:</strong> ${question.explanation}</p>
        ${correct ? "" : `<p><strong>Het goede antwoord was:</strong> ${question.options[question.correct]}</p>`}
      </div>
      <button class="big-btn" onclick="nextLezenQuestion()">Volgende →</button>
    </div>`;
  document.getElementById("lezen-content").innerHTML = html;
}

function nextLezenQuestion() {
  APP.questionIndex++;
  showTextQuestion();
}

function finishText() {
  const total = APP.currentData.questions.length;
  const correct = APP.textCorrect;
  const pct = Math.round((correct / total) * 100);
  const perfect = correct === total;

  if (perfect) launchConfetti();

  const p = profile();
  const completed = [...(p.completedTexts || [])];
  if (!completed.includes(APP.currentData.id)) completed.push(APP.currentData.id);
  
  updateProfile({
    lezenDone: completed.length,
    completedTexts: completed,
    perfectTexts: (p.perfectTexts || 0) + (perfect ? 1 : 0)
  });
  checkBadges();

  const stars = pct === 100 ? "⭐⭐⭐" : pct >= 60 ? "⭐⭐" : "⭐";
  
  let html = `
    <div class="finish-screen pop-in">
      <h2>${perfect ? "🎉 Perfect!" : pct >= 60 ? "👏 Goed gedaan!" : "💪 Blijf oefenen!"}</h2>
      <div class="finish-stars">${stars}</div>
      <p class="finish-score">${correct} van ${total} goed (${pct}%)</p>
      <div class="finish-buttons">
        <button class="big-btn" onclick="startLezen()">📖 Meer lezen</button>
        <button class="secondary-btn" onclick="goHome()">🏠 Home</button>
      </div>
    </div>`;
  document.getElementById("lezen-content").innerHTML = html;
}

// ── WOORDENSCHAT ───────────────────────────────
function startWoordenSchat() {
  showScreen("vocab-screen");
  const words = CONTENT.woordenschat[APP.currentLevel] || CONTENT.woordenschat.age8_9;
  APP.vocabPool = shuffle([...words]);
  APP.vocabIndex = 0;
  APP.vocabMode = "flashcard";
  showVocabMenu();
}

function showVocabMenu() {
  let html = `
    <h2>📚 Woordenschat</h2>
    <p class="module-intro">Kies een oefening!</p>
    <div class="module-menu">
      <button class="module-card" onclick="startFlashcards()">
        <span class="mod-emoji">🃏</span>
        <span class="mod-title">Flashcards</span>
        <span class="mod-desc">Leer nieuwe woorden!</span>
      </button>
      <button class="module-card" onclick="startVocabQuiz()">
        <span class="mod-emoji">❓</span>
        <span class="mod-title">Woordenquiz</span>
        <span class="mod-desc">Ken jij de betekenis?</span>
      </button>
      <button class="module-card" onclick="startFillBlank()">
        <span class="mod-emoji">✏️</span>
        <span class="mod-title">Invullen</span>
        <span class="mod-desc">Vul het juiste woord in!</span>
      </button>
    </div>
    <button class="back-btn" onclick="goHome()">← Terug</button>`;
  document.getElementById("vocab-content").innerHTML = html;
}

function startFlashcards() {
  APP.vocabIndex = 0;
  APP.vocabPool = shuffle([...(CONTENT.woordenschat[APP.currentLevel] || CONTENT.woordenschat.age8_9)]);
  showFlashcard();
}

function showFlashcard() {
  if (APP.vocabIndex >= APP.vocabPool.length) {
    APP.vocabIndex = 0;
    APP.vocabPool = shuffle(APP.vocabPool);
  }
  const word = APP.vocabPool[APP.vocabIndex];
  const progress = `Woord ${APP.vocabIndex + 1} van ${APP.vocabPool.length}`;

  let html = `
    <h2>🃏 Flashcards</h2>
    <p class="question-progress">${progress}</p>
    <div class="flashcard pop-in" onclick="flipCard(this)">
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <span class="flash-emoji">${word.emoji}</span>
          <span class="flash-word">${word.word}</span>
          <span class="flash-hint">Klik om te draaien!</span>
        </div>
        <div class="flashcard-back">
          <span class="flash-meaning">${word.meaning}</span>
          <span class="flash-sentence">"${word.sentence.replace("___", `<strong>${word.word}</strong>`)}"</span>
        </div>
      </div>
    </div>
    <div class="flash-nav">
      <button class="secondary-btn" onclick="prevFlashcard()">← Vorige</button>
      <button class="big-btn" onclick="nextFlashcard()">Volgende →</button>
    </div>
    <button class="back-btn" onclick="showVocabMenu()">← Terug</button>`;
  document.getElementById("vocab-content").innerHTML = html;
}

function flipCard(el) {
  el.classList.toggle("flipped");
}

function nextFlashcard() {
  const p = profile();
  updateProfile({ vocabDone: (p.vocabDone || 0) + 1 });
  checkBadges();
  APP.vocabIndex++;
  showFlashcard();
}

function prevFlashcard() {
  APP.vocabIndex = Math.max(0, APP.vocabIndex - 1);
  showFlashcard();
}

function startVocabQuiz() {
  APP.vocabPool = shuffle([...(CONTENT.woordenschat[APP.currentLevel] || CONTENT.woordenschat.age8_9)]);
  APP.vocabIndex = 0;
  showVocabQuizQuestion();
}

function showVocabQuizQuestion() {
  if (APP.vocabIndex >= Math.min(10, APP.vocabPool.length)) {
    showVocabMenu();
    return;
  }
  const word = APP.vocabPool[APP.vocabIndex];
  const allWords = CONTENT.woordenschat[APP.currentLevel] || CONTENT.woordenschat.age8_9;
  
  // Create wrong options
  let options = [word.meaning];
  const others = allWords.filter(w => w.word !== word.word);
  const shuffled = shuffle(others);
  for (let i = 0; i < 3 && i < shuffled.length; i++) {
    options.push(shuffled[i].meaning);
  }
  options = shuffle(options);
  const correctIdx = options.indexOf(word.meaning);

  const progress = `Vraag ${APP.vocabIndex + 1} van ${Math.min(10, APP.vocabPool.length)}`;
  const progressPct = (APP.vocabIndex / Math.min(10, APP.vocabPool.length)) * 100;

  let html = `
    <h2>❓ Woordenquiz</h2>
    <div class="progress-bar-container"><div class="progress-bar" style="width:${progressPct}%"></div></div>
    <p class="question-progress">${progress}</p>
    <div class="question-box pop-in">
      <p class="vocab-quiz-word">${word.emoji} ${word.word}</p>
      <p class="question-text">Wat betekent dit woord?</p>
      <div class="options">`;
  options.forEach((opt, i) => {
    html += `<button class="option-btn" onclick="answerVocabQuiz(${i}, ${correctIdx})">${opt}</button>`;
  });
  html += `</div></div><button class="back-btn" onclick="showVocabMenu()">← Terug</button>`;
  document.getElementById("vocab-content").innerHTML = html;
}

function answerVocabQuiz(chosen, correct) {
  const isCorrect = chosen === correct;
  const word = APP.vocabPool[APP.vocabIndex];
  logActivity("vocab", isCorrect);

  if (isCorrect) {
    APP.streak++;
    launchMiniCelebration();
  } else {
    APP.streak = 0;
  }

  const p = profile();
  updateProfile({
    totalAnswered: p.totalAnswered + 1,
    totalCorrect: p.totalCorrect + (isCorrect ? 1 : 0),
    vocabCorrect: (p.vocabCorrect || 0) + (isCorrect ? 1 : 0),
    vocabDone: (p.vocabDone || 0) + 1,
    currentStreak: APP.streak,
    bestStreak: Math.max(p.bestStreak, APP.streak)
  });
  checkBadges();

  const enc = isCorrect
    ? CONTENT.encouragement.correct[Math.floor(Math.random() * CONTENT.encouragement.correct.length)]
    : CONTENT.encouragement.incorrect[Math.floor(Math.random() * CONTENT.encouragement.incorrect.length)];

  let html = `
    <h2>❓ Woordenquiz</h2>
    <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'} pop-in">
      <p class="feedback-emoji">${isCorrect ? '✅' : '❌'}</p>
      <p class="feedback-text">${enc}</p>
      <div class="explanation-box">
        <p><strong>${word.word}</strong> = ${word.meaning}</p>
        <p>"${word.sentence.replace("___", `<strong>${word.word}</strong>`)}"</p>
      </div>
      <button class="big-btn" onclick="nextVocabQuiz()">Volgende →</button>
    </div>`;
  document.getElementById("vocab-content").innerHTML = html;
}

function nextVocabQuiz() {
  APP.vocabIndex++;
  showVocabQuizQuestion();
}

function startFillBlank() {
  APP.vocabPool = shuffle([...(CONTENT.woordenschat[APP.currentLevel] || CONTENT.woordenschat.age8_9)]);
  APP.vocabIndex = 0;
  showFillBlank();
}

function showFillBlank() {
  if (APP.vocabIndex >= Math.min(10, APP.vocabPool.length)) {
    showVocabMenu();
    return;
  }
  const word = APP.vocabPool[APP.vocabIndex];
  const progress = `Vraag ${APP.vocabIndex + 1} van ${Math.min(10, APP.vocabPool.length)}`;

  // Create options: correct word + 3 random
  const allWords = CONTENT.woordenschat[APP.currentLevel] || CONTENT.woordenschat.age8_9;
  let options = [word.word];
  const others = shuffle(allWords.filter(w => w.word !== word.word));
  for (let i = 0; i < 3 && i < others.length; i++) options.push(others[i].word);
  options = shuffle(options);
  const correctIdx = options.indexOf(word.word);

  let html = `
    <h2>✏️ Invullen</h2>
    <p class="question-progress">${progress}</p>
    <div class="question-box pop-in">
      <p class="question-text">Welk woord past in de zin?</p>
      <p class="fill-sentence">${word.sentence.replace("___", "<span class='blank'>___</span>")}</p>
      <p class="fill-hint">💡 Hint: ${word.meaning}</p>
      <div class="options">`;
  options.forEach((opt, i) => {
    html += `<button class="option-btn" onclick="answerFillBlank(${i}, ${correctIdx})">${opt}</button>`;
  });
  html += `</div></div><button class="back-btn" onclick="showVocabMenu()">← Terug</button>`;
  document.getElementById("vocab-content").innerHTML = html;
}

function answerFillBlank(chosen, correct) {
  const isCorrect = chosen === correct;
  const word = APP.vocabPool[APP.vocabIndex];
  logActivity("vocab", isCorrect);

  if (isCorrect) { APP.streak++; launchMiniCelebration(); }
  else APP.streak = 0;

  const p = profile();
  updateProfile({
    totalAnswered: p.totalAnswered + 1,
    totalCorrect: p.totalCorrect + (isCorrect ? 1 : 0),
    vocabCorrect: (p.vocabCorrect || 0) + (isCorrect ? 1 : 0),
    vocabDone: (p.vocabDone || 0) + 1,
    currentStreak: APP.streak,
    bestStreak: Math.max(p.bestStreak, APP.streak)
  });
  checkBadges();

  const enc = isCorrect
    ? CONTENT.encouragement.correct[Math.floor(Math.random() * CONTENT.encouragement.correct.length)]
    : CONTENT.encouragement.incorrect[Math.floor(Math.random() * CONTENT.encouragement.incorrect.length)];

  let html = `
    <div class="feedback-box ${isCorrect ? 'correct' : 'incorrect'} pop-in">
      <p class="feedback-emoji">${isCorrect ? '✅' : '❌'}</p>
      <p class="feedback-text">${enc}</p>
      <div class="explanation-box">
        <p>"${word.sentence.replace("___", `<strong>${word.word}</strong>`)}"</p>
      </div>
      <button class="big-btn" onclick="nextFillBlank()">Volgende →</button>
    </div>`;
  document.getElementById("vocab-content").innerHTML = html;
}

function nextFillBlank() {
  APP.vocabIndex++;
  showFillBlank();
}

// ── SPELLING & GRAMMATICA ──────────────────────
function startSpelling() {
  showScreen("spelling-screen");
  const exercises = CONTENT.spelling[APP.currentLevel] || CONTENT.spelling.age8_9;
  APP.spellingPool = shuffle([...exercises]);
  APP.spellingIndex = 0;
  showSpellingQuestion();
}

function showSpellingQuestion() {
  if (APP.spellingIndex >= APP.spellingPool.length) {
    finishSpelling();
    return;
  }
  const ex = APP.spellingPool[APP.spellingIndex];
  const progress = `Vraag ${APP.spellingIndex + 1} van ${APP.spellingPool.length}`;
  const progressPct = (APP.spellingIndex / APP.spellingPool.length) * 100;

  let html = `
    <h2>✍️ Spelling & Grammatica</h2>
    <div class="progress-bar-container"><div class="progress-bar" style="width:${progressPct}%"></div></div>
    <p class="question-progress">${progress}</p>
    <div class="question-box pop-in">
      <p class="question-text">${ex.q}</p>
      <div class="options">`;
  ex.options.forEach((opt, i) => {
    html += `<button class="option-btn" onclick="answerSpelling(${APP.spellingIndex}, ${i})">${opt}</button>`;
  });
  html += `</div></div><button class="back-btn" onclick="goHome()">← Terug</button>`;
  document.getElementById("spelling-content").innerHTML = html;
}

function answerSpelling(qi, chosen) {
  const ex = APP.spellingPool[qi];
  const correct = chosen === ex.correct;
  logActivity("spelling", correct);

  if (correct) { APP.streak++; launchMiniCelebration(); }
  else APP.streak = 0;

  const p = profile();
  updateProfile({
    totalAnswered: p.totalAnswered + 1,
    totalCorrect: p.totalCorrect + (correct ? 1 : 0),
    spellingDone: (p.spellingDone || 0) + 1,
    spellingCorrect: (p.spellingCorrect || 0) + (correct ? 1 : 0),
    currentStreak: APP.streak,
    bestStreak: Math.max(p.bestStreak, APP.streak)
  });
  checkBadges();

  const enc = correct
    ? CONTENT.encouragement.correct[Math.floor(Math.random() * CONTENT.encouragement.correct.length)]
    : CONTENT.encouragement.incorrect[Math.floor(Math.random() * CONTENT.encouragement.incorrect.length)];

  const streakHtml = APP.streak >= 3
    ? `<p class="streak-msg">${CONTENT.encouragement.streak[Math.floor(Math.random() * CONTENT.encouragement.streak.length)].replace("{n}", APP.streak)}</p>` : "";

  let html = `
    <h2>✍️ Spelling & Grammatica</h2>
    <div class="feedback-box ${correct ? 'correct' : 'incorrect'} pop-in">
      <p class="feedback-emoji">${correct ? '✅' : '❌'}</p>
      <p class="feedback-text">${enc}</p>
      ${streakHtml}
      <div class="explanation-box">
        <p><strong>Regel:</strong> ${ex.rule}</p>
        ${correct ? "" : `<p><strong>Het goede antwoord was:</strong> ${ex.options[ex.correct]}</p>`}
      </div>
      <button class="big-btn" onclick="nextSpelling()">Volgende →</button>
    </div>`;
  document.getElementById("spelling-content").innerHTML = html;
}

function nextSpelling() {
  APP.spellingIndex++;
  showSpellingQuestion();
}

function finishSpelling() {
  launchConfetti();
  let html = `
    <div class="finish-screen pop-in">
      <h2>🎉 Alle vragen gedaan!</h2>
      <p>Goed bezig! Je kunt opnieuw oefenen of terug naar home.</p>
      <div class="finish-buttons">
        <button class="big-btn" onclick="startSpelling()">🔄 Opnieuw</button>
        <button class="secondary-btn" onclick="goHome()">🏠 Home</button>
      </div>
    </div>`;
  document.getElementById("spelling-content").innerHTML = html;
}

// ── REKENEN ─────────────────────────────────────
function startRekenen() {
  showScreen("rekenen-screen");
  const data = CONTENT.rekenen[APP.currentLevel] || CONTENT.rekenen.age8_9;
  APP.rekenData = data;
  showRekenMenu();
}

function showRekenMenu() {
  const data = APP.rekenData;
  let html = `
    <h2>🧮 Rekenen</h2>
    <p class="module-intro">Kies een onderwerp!</p>
    <div class="module-menu">`;
  data.categories.forEach((cat, i) => {
    html += `
      <button class="module-card" onclick="startRekenCategory(${i})">
        <span class="mod-emoji">${cat.emoji}</span>
        <div>
          <span class="mod-title">${cat.name}</span>
          <span class="mod-desc">${cat.generate ? "Oneindig oefenen!" : cat.questions.length + " opgaven"}</span>
        </div>
      </button>`;
  });
  html += `</div><button class="back-btn" onclick="goHome()">← Terug</button>`;
  document.getElementById("rekenen-content").innerHTML = html;
}

function startRekenCategory(catIdx) {
  const cat = APP.rekenData.categories[catIdx];
  APP.rekenCat = cat;
  APP.rekenCatIdx = catIdx;
  APP.rekenQIndex = 0;
  APP.rekenCorrect = 0;
  APP.rekenTotal = 0;

  if (cat.generate) {
    APP.rekenQuestions = [];
    for (let i = 0; i < 10; i++) APP.rekenQuestions.push(cat.generate());
  } else {
    APP.rekenQuestions = shuffle([...cat.questions]);
  }
  showRekenQuestion();
}

function showRekenQuestion() {
  if (APP.rekenQIndex >= APP.rekenQuestions.length) {
    finishReken();
    return;
  }
  const q = APP.rekenQuestions[APP.rekenQIndex];
  const progress = `Opgave ${APP.rekenQIndex + 1} van ${APP.rekenQuestions.length}`;
  const progressPct = (APP.rekenQIndex / APP.rekenQuestions.length) * 100;

  let inputHtml;
  if (q.type === "mc") {
    inputHtml = `<div class="options">`;
    q.options.forEach((opt, i) => {
      inputHtml += `<button class="option-btn" onclick="answerRekenMC(${i}, ${q.correct})">${opt}</button>`;
    });
    inputHtml += `</div>`;
  } else {
    const unitLabel = q.unit ? ` (${q.unit})` : "";
    inputHtml = `
      <div class="reken-input-wrap">
        <input type="text" id="reken-answer" class="reken-input" placeholder="Typ je antwoord${unitLabel}..." autofocus
          onkeydown="if(event.key==='Enter') checkRekenAnswer()" />
        <button class="big-btn" onclick="checkRekenAnswer()">Controleer ✓</button>
      </div>`;
  }

  let html = `
    <h2>🧮 ${APP.rekenCat.name}</h2>
    <div class="progress-bar-container"><div class="progress-bar" style="width:${progressPct}%"></div></div>
    <p class="question-progress">${progress}</p>
    <div class="question-box pop-in">
      <p class="reken-question">${q.q}</p>
      ${inputHtml}
    </div>
    <button class="back-btn" onclick="showRekenMenu()">← Terug</button>`;
  document.getElementById("rekenen-content").innerHTML = html;

  // Focus the input
  setTimeout(() => { const inp = document.getElementById("reken-answer"); if (inp) inp.focus(); }, 100);
}

function checkRekenAnswer() {
  const input = document.getElementById("reken-answer");
  if (!input) return;
  let userVal = input.value.trim().replace(",", ".").replace("€", "").replace(" ", "");
  if (userVal === "") { input.classList.add("shake"); setTimeout(() => input.classList.remove("shake"), 500); return; }

  const q = APP.rekenQuestions[APP.rekenQIndex];
  let correct = false;

  if (q.type === "time") {
    // Normalize time: accept "11:00", "11.00", "11:00 uur"
    const normalized = userVal.replace(".", ":").replace(/\s*uur\s*/i, "");
    correct = normalized === String(q.answer);
  } else {
    const num = parseFloat(userVal);
    const expected = parseFloat(q.answer);
    correct = Math.abs(num - expected) < 0.05;
  }

  handleRekenResult(correct, q);
}

function answerRekenMC(chosen, correctIdx) {
  const q = APP.rekenQuestions[APP.rekenQIndex];
  handleRekenResult(chosen === correctIdx, q);
}

function handleRekenResult(correct, q) {
  logActivity("rekenen", correct);
  APP.rekenTotal++;
  if (correct) { APP.streak++; APP.rekenCorrect++; launchMiniCelebration(); }
  else { APP.streak = 0; }

  const p = profile();
  updateProfile({
    totalAnswered: p.totalAnswered + 1,
    totalCorrect: p.totalCorrect + (correct ? 1 : 0),
    rekenDone: (p.rekenDone || 0) + 1,
    rekenCorrect: (p.rekenCorrect || 0) + (correct ? 1 : 0),
    currentStreak: APP.streak,
    bestStreak: Math.max(p.bestStreak, APP.streak)
  });
  checkBadges();

  const enc = correct
    ? CONTENT.encouragement.correct[Math.floor(Math.random() * CONTENT.encouragement.correct.length)]
    : CONTENT.encouragement.incorrect[Math.floor(Math.random() * CONTENT.encouragement.incorrect.length)];

  const streakHtml = APP.streak >= 3
    ? `<p class="streak-msg">${CONTENT.encouragement.streak[Math.floor(Math.random() * CONTENT.encouragement.streak.length)].replace("{n}", APP.streak)}</p>` : "";

  // Build correct answer display
  let answerDisplay = "";
  if (q.type === "mc") {
    answerDisplay = q.explanation ? `<p><strong>Uitleg:</strong> ${q.explanation}</p>` : `<p><strong>Het goede antwoord:</strong> ${q.options[q.correct]}</p>`;
  } else {
    const unit = q.unit || "";
    answerDisplay = `<p><strong>Het goede antwoord:</strong> ${q.type === "money" ? "€" : ""}${q.answer}${unit ? " " + unit : ""}</p>`;
  }

  let html = `
    <h2>🧮 ${APP.rekenCat.name}</h2>
    <div class="feedback-box ${correct ? 'correct' : 'incorrect'} pop-in">
      <p class="feedback-emoji">${correct ? '✅' : '❌'}</p>
      <p class="feedback-text">${enc}</p>
      ${streakHtml}
      <div class="explanation-box">
        <p><strong>Vraag:</strong> ${q.q}</p>
        ${correct ? "" : answerDisplay}
      </div>
      <button class="big-btn" onclick="nextRekenQuestion()">Volgende →</button>
    </div>`;
  document.getElementById("rekenen-content").innerHTML = html;
}

function nextRekenQuestion() {
  APP.rekenQIndex++;
  showRekenQuestion();
}

function finishReken() {
  const total = APP.rekenTotal;
  const correct = APP.rekenCorrect;
  const pct = Math.round((correct / total) * 100);
  if (pct >= 80) launchConfetti();

  const stars = pct === 100 ? "⭐⭐⭐" : pct >= 60 ? "⭐⭐" : "⭐";

  let html = `
    <div class="finish-screen pop-in">
      <h2>${pct >= 80 ? "🎉 Fantastisch!" : pct >= 50 ? "👏 Goed gedaan!" : "💪 Blijf oefenen!"}</h2>
      <div class="finish-stars">${stars}</div>
      <p class="finish-score">${correct} van ${total} goed (${pct}%)</p>
      <div class="finish-buttons">
        <button class="big-btn" onclick="startRekenCategory(${APP.rekenCatIdx})">🔄 Opnieuw</button>
        <button class="secondary-btn" onclick="showRekenMenu()">🧮 Ander onderwerp</button>
        <button class="secondary-btn" onclick="goHome()">🏠 Home</button>
      </div>
    </div>`;
  document.getElementById("rekenen-content").innerHTML = html;
}

// ── PROGRESS / VOORTGANG ───────────────────────
function showProgress() {
  showScreen("progress-screen");
  const p = profile();
  const pct = p.totalAnswered > 0 ? Math.round((p.totalCorrect / p.totalAnswered) * 100) : 0;

  // Badge check
  const allBadges = CONTENT.badges.map(b => {
    const earned = (p.earnedBadges || []).includes(b.id);
    return `
      <div class="badge-card ${earned ? 'earned' : 'locked'}">
        <span class="badge-emoji">${earned ? b.emoji : '🔒'}</span>
        <span class="badge-name">${b.name}</span>
        <span class="badge-desc">${earned ? b.desc : '???'}</span>
      </div>`;
  }).join("");

  // Build monthly trends chart
  const trends = buildMonthlyTrends(p.history || []);
  const trendHtml = renderTrendChart(trends);

  let html = `
    <h2>📊 Voortgang van ${p.name}</h2>
    <div class="stats-grid">
      <div class="stat-card pop-in" style="--delay:0.1s">
        <span class="stat-num">${p.totalAnswered}</span>
        <span class="stat-label">Vragen beantwoord</span>
      </div>
      <div class="stat-card pop-in" style="--delay:0.2s">
        <span class="stat-num">${pct}%</span>
        <span class="stat-label">Goed</span>
      </div>
      <div class="stat-card pop-in" style="--delay:0.3s">
        <span class="stat-num">🔥 ${p.bestStreak}</span>
        <span class="stat-label">Beste streak</span>
      </div>
      <div class="stat-card pop-in" style="--delay:0.4s">
        <span class="stat-num">${p.lezenDone || 0}</span>
        <span class="stat-label">Teksten gelezen</span>
      </div>
    </div>

    <h3>📈 Maandelijkse Voortgang</h3>
    ${trendHtml}

    <h3>Scores per onderdeel</h3>
    <div class="score-bars">
      ${makeScoreBar("📖 Lezen", p.lezenCorrect || 0, p.lezenDone ? (p.lezenDone * 4) : 1)}
      ${makeScoreBar("📚 Woordenschat", p.vocabCorrect || 0, p.vocabDone || 1)}
      ${makeScoreBar("✍️ Spelling", p.spellingCorrect || 0, p.spellingDone || 1)}
      ${makeScoreBar("🧮 Rekenen", p.rekenCorrect || 0, p.rekenDone || 1)}
    </div>

    <h3>🏅 Badges</h3>
    <div class="badges-grid">${allBadges}</div>

    <button class="back-btn" onclick="goHome()">← Terug</button>`;
  document.getElementById("progress-content").innerHTML = html;
}

// Render a visual bar chart of monthly rolling totals
function renderTrendChart(trends) {
  if (trends.length === 0) {
    return `<div class="trend-empty pop-in">
      <p>📭 Nog geen gegevens!</p>
      <p class="trend-empty-sub">Begin met oefenen en je ziet hier je voortgang per maand groeien!</p>
    </div>`;
  }

  const maxVal = Math.max(...trends.map(t => t.cumAnswered), 1);

  // Rolling totals stacked bar chart
  let barsHtml = trends.map(t => {
    const totalH = Math.max((t.cumAnswered / maxVal) * 100, 4);
    const correctH = Math.max((t.cumCorrect / maxVal) * 100, 2);
    const pctCorrect = t.cumAnswered > 0 ? Math.round((t.cumCorrect / t.cumAnswered) * 100) : 0;
    return `
      <div class="trend-col">
        <div class="trend-bar-wrapper" style="height: 160px;">
          <div class="trend-bar trend-bar-total" style="height: ${totalH}%;" title="Totaal: ${t.cumAnswered}">
            <div class="trend-bar trend-bar-correct" style="height: ${correctH / totalH * 100}%;" title="Goed: ${t.cumCorrect}"></div>
          </div>
        </div>
        <span class="trend-value">${t.cumAnswered}</span>
        <span class="trend-label">${t.label}</span>
      </div>`;
  }).join("");

  // Monthly breakdown table
  let tableRows = trends.map(t => {
    const pct = t.cumAnswered > 0 ? Math.round((t.cumCorrect / t.cumAnswered) * 100) : 0;
    return `
      <tr>
        <td class="trend-td-label">${t.label}</td>
        <td class="trend-td-num">+${t.monthAnswered}</td>
        <td class="trend-td-num trend-td-correct">+${t.monthCorrect}</td>
        <td class="trend-td-num trend-td-cum">${t.cumAnswered}</td>
        <td class="trend-td-num trend-td-cum">${t.cumCorrect}</td>
        <td class="trend-td-num"><span class="trend-pct-badge ${pct >= 70 ? 'good' : pct >= 40 ? 'ok' : 'low'}">${pct}%</span></td>
      </tr>`;
  }).join("");

  // Per-module breakdown for the latest month
  const latest = trends[trends.length - 1];
  const moduleBreakdown = `
    <div class="trend-modules">
      <span class="trend-mod-chip">📖 Lezen: ${latest.cumLezen}</span>
      <span class="trend-mod-chip">📚 Woorden: ${latest.cumVocab}</span>
      <span class="trend-mod-chip">✍️ Spelling: ${latest.cumSpelling}</span>
      <span class="trend-mod-chip">🧮 Rekenen: ${latest.cumRekenen || 0}</span>
    </div>`;

  return `
    <div class="trend-chart-card pop-in">
      <div class="trend-legend">
        <span class="legend-item"><span class="legend-dot total"></span> Totaal beantwoord</span>
        <span class="legend-item"><span class="legend-dot correct"></span> Goed beantwoord</span>
      </div>
      <div class="trend-chart">${barsHtml}</div>
      ${moduleBreakdown}
    </div>

    <div class="trend-table-card pop-in">
      <h4>📋 Overzicht per maand</h4>
      <div class="trend-table-wrap">
        <table class="trend-table">
          <thead>
            <tr>
              <th>Maand</th>
              <th>Nieuw</th>
              <th>Goed</th>
              <th>Σ Totaal</th>
              <th>Σ Goed</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>`;
}

function makeScoreBar(label, correct, total) {
  const pct = Math.min(100, Math.round((correct / Math.max(total, 1)) * 100));
  return `
    <div class="score-bar-row">
      <span class="score-label">${label}</span>
      <div class="score-bar-bg">
        <div class="score-bar-fill" style="width:${pct}%"></div>
      </div>
      <span class="score-pct">${pct}%</span>
    </div>`;
}

// ── BADGES ─────────────────────────────────────
function checkBadges() {
  const p = profile();
  const earned = p.earnedBadges || [];
  let newBadge = null;

  CONTENT.badges.forEach(b => {
    if (!earned.includes(b.id) && b.requirement(p)) {
      earned.push(b.id);
      newBadge = b;
    }
  });

  if (newBadge) {
    updateProfile({ earnedBadges: earned });
    showBadgePopup(newBadge);
  }
}

function showBadgePopup(badge) {
  launchConfetti();
  const popup = document.getElementById("badge-popup");
  popup.innerHTML = `
    <div class="badge-popup-content pop-in">
      <h3>🏅 Nieuwe Badge!</h3>
      <span class="badge-popup-emoji">${badge.emoji}</span>
      <p class="badge-popup-name">${badge.name}</p>
      <p class="badge-popup-desc">${badge.desc}</p>
      <button class="big-btn" onclick="closeBadgePopup()">Cool! 😎</button>
    </div>`;
  popup.classList.add("show");
}

function closeBadgePopup() {
  document.getElementById("badge-popup").classList.remove("show");
}

// ── Utilities ──────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Export/Import Progress ─────────────────────
function exportProgress() {
  const data = localStorage.getItem("oefenmeester_profiles") || "{}";
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "sa-kids-dutch-hub-voortgang.json";
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        localStorage.setItem("oefenmeester_profiles", JSON.stringify(data));
        alert("Voortgang geladen! ✅");
        goToProfiles();
      } catch {
        alert("Ongeldig bestand! ❌");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ── Reset / Delete ─────────────────────────────
function showResetMenu() {
  showScreen("reset-screen");
  const p = profile();
  const html = `
    <h2>🔄 Opnieuw Beginnen</h2>
    <p class="module-intro">Kies wat je wilt resetten voor <strong>${p.name}</strong>.</p>
    <div class="reset-options">
      <button class="reset-option-card" onclick="confirmReset('lezen')">
        <span class="mod-emoji">📖</span>
        <div>
          <span class="mod-title">Begrijpend Lezen</span>
          <span class="mod-desc">Wis alle lees-voortgang (${p.lezenDone || 0} teksten, ${p.lezenCorrect || 0} punten)</span>
        </div>
      </button>
      <button class="reset-option-card" onclick="confirmReset('woordenschat')">
        <span class="mod-emoji">📚</span>
        <div>
          <span class="mod-title">Woordenschat</span>
          <span class="mod-desc">Wis alle woordenschat-voortgang (${p.vocabDone || 0} woorden, ${p.vocabCorrect || 0} punten)</span>
        </div>
      </button>
      <button class="reset-option-card" onclick="confirmReset('spelling')">
        <span class="mod-emoji">✍️</span>
        <div>
          <span class="mod-title">Spelling & Grammatica</span>
          <span class="mod-desc">Wis alle spelling-voortgang (${p.spellingDone || 0} oefeningen, ${p.spellingCorrect || 0} punten)</span>
        </div>
      </button>
      <button class="reset-option-card" onclick="confirmReset('rekenen')">
        <span class="mod-emoji">🧮</span>
        <div>
          <span class="mod-title">Rekenen</span>
          <span class="mod-desc">Wis alle reken-voortgang (${p.rekenDone || 0} sommen, ${p.rekenCorrect || 0} punten)</span>
        </div>
      </button>
      <button class="reset-option-card danger-card" onclick="confirmReset('alles')">
        <span class="mod-emoji">💥</span>
        <div>
          <span class="mod-title">Alles Resetten</span>
          <span class="mod-desc">Begin helemaal opnieuw — alle scores, streaks en badges weg!</span>
        </div>
      </button>
    </div>
    <button class="back-btn" onclick="goHome()">← Terug</button>`;
  document.getElementById("reset-content").innerHTML = html;
}

function confirmReset(section) {
  const labels = {
    lezen: "📖 Begrijpend Lezen",
    woordenschat: "📚 Woordenschat",
    spelling: "✍️ Spelling & Grammatica",
    rekenen: "🧮 Rekenen",
    alles: "💥 ALLES"
  };
  showConfirm(
    "Weet je het zeker?",
    `Je wilt de voortgang van <strong>${labels[section]}</strong> verwijderen voor <strong>${profile().name}</strong>. Dit kan niet ongedaan worden!`,
    "Ja, resetten!",
    () => { executeReset(section); closeConfirm(); showResetMenu(); }
  );
}

function executeReset(section) {
  const p = profile();
  if (section === "lezen" || section === "alles") {
    updateProfile({ lezenDone: 0, lezenCorrect: 0, completedTexts: [], perfectTexts: 0 });
  }
  if (section === "woordenschat" || section === "alles") {
    updateProfile({ vocabDone: 0, vocabCorrect: 0 });
  }
  if (section === "spelling" || section === "alles") {
    updateProfile({ spellingDone: 0, spellingCorrect: 0 });
  }
  if (section === "rekenen" || section === "alles") {
    updateProfile({ rekenDone: 0, rekenCorrect: 0 });
  }
  if (section === "alles") {
    updateProfile({ totalAnswered: 0, totalCorrect: 0, bestStreak: 0, currentStreak: 0, earnedBadges: [], history: [] });
    APP.streak = 0;
  } else {
    // Remove history entries for the reset section
    const modMap = { lezen: "lezen", woordenschat: "vocab", spelling: "spelling", rekenen: "rekenen" };
    const modKey = modMap[section];
    if (modKey && p.history) {
      updateProfile({ history: p.history.filter(h => h.module !== modKey) });
    }
    // Recalculate totals
    const u = profile();
    updateProfile({
      totalAnswered: (u.lezenCorrect || 0) + (u.vocabDone || 0) + (u.spellingDone || 0) + (u.rekenDone || 0),
      totalCorrect: (u.lezenCorrect || 0) + (u.vocabCorrect || 0) + (u.spellingCorrect || 0) + (u.rekenCorrect || 0)
    });
  }
}

function confirmDeleteProfile() {
  const name = APP.currentProfile;
  showConfirm(
    "Profiel verwijderen?",
    `Weet je zeker dat je het profiel van <strong>${name}</strong> wilt verwijderen? Alle voortgang, scores en badges worden <strong>permanent</strong> verwijderd!`,
    "Ja, verwijder profiel!",
    () => { deleteProfile(name); closeConfirm(); }
  );
}

function deleteProfile(name) {
  const profiles = getProfiles();
  delete profiles[name];
  saveProfiles(profiles);
  APP.currentProfile = null;
  goToProfiles();
}

// ── Confirm Dialog ─────────────────────────────
function showConfirm(title, message, confirmText, onConfirm) {
  const dialog = document.getElementById("confirm-dialog");
  document.getElementById("confirm-dialog-content").innerHTML = `
    <h3>⚠️ ${title}</h3>
    <p style="margin: 16px 0; line-height: 1.5;">${message}</p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <button class="big-btn danger-btn" id="confirm-yes">${confirmText}</button>
      <button class="secondary-btn" onclick="closeConfirm()">Nee, toch niet</button>
    </div>`;
  dialog.classList.add("show");
  document.getElementById("confirm-yes").onclick = onConfirm;
}

function closeConfirm() {
  document.getElementById("confirm-dialog").classList.remove("show");
}

// ── Init ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  goToProfiles();
});

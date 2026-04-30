// ==== State & storage ====
const STORE_KEY = "nemcina-a1-progress-v1";
const state = load() || { known: {}, quiz: { best: 0, done: 0 }, flash: { seen: 0 }, drill: { mastered: {}, streaks: {}, attempts: 0, correct: 0, sessions: 0 }, oral: { mastered: {} } };
if (!state.drill) state.drill = { mastered: {}, streaks: {}, attempts: 0, correct: 0, sessions: 0 };
if (!state.oral) state.oral = { mastered: {} };
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); if (typeof renderRail === "function") renderRail(); }
function load() { try { return JSON.parse(localStorage.getItem(STORE_KEY)); } catch { return null; } }

const app = document.getElementById("app");
const nav = document.getElementById("mainNav");

nav.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;
  [...nav.children].forEach(b => b.classList.remove("active"));
  e.target.classList.add("active");
  render(e.target.dataset.view);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Opravdu resetovat veškerý pokrok?")) {
    localStorage.removeItem(STORE_KEY);
    location.reload();
  }
});

function render(view) {
  renderRail();
  switch (view) {
    case "home": return renderHome();
    case "vocab": return renderVocab();
    case "grammar": return renderGrammar();
    case "flashcards": return renderFlashcards();
    case "quiz": return renderQuiz();
    case "exam": return renderExam();
    case "test": return renderTest();
    case "drill": return renderDrill();
    case "oral": return renderOral();
    case "prepa1": return renderPrepA1();
    case "progress": return renderProgress();
  }
}

// ==== Right rail (sticky progress widget) ====
function renderRail() {
  const rail = document.getElementById("rail");
  if (!rail) return;
  const total = allWords().length;
  const known = Object.values(state.known).filter(Boolean).length;
  const drillTotal = (typeof PAST_TESTS !== "undefined") ? PAST_TESTS.length : 0;
  const drillMastered = Object.keys(state.drill.mastered).filter(k => state.drill.mastered[k]).length;
  const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  const setW = (id, pct) => { const el = document.getElementById(id); if (el) el.style.width = pct + "%"; };
  set("rail-vocab", `${known} / ${total}`);
  setW("rail-vocab-bar", total ? known/total*100 : 0);
  set("rail-drill", `${drillMastered} / ${drillTotal}`);
  setW("rail-drill-bar", drillTotal ? drillMastered/drillTotal*100 : 0);
  set("rail-quizzes", state.quiz.done);
  set("rail-best", `${state.quiz.best} / ${(typeof QUIZ !== "undefined") ? QUIZ.length : 0}`);
}

// ==== Helpers ====
const allWords = () => VOCAB.flatMap(l => l.groups.flatMap(g => g.items.map(([de, cs]) => ({ de, cs, lesson: l.id }))));
const wordKey = w => `${w.lesson}|${w.de}`;
const shuffle = arr => arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(x => x[1]);

// ==== HOME ====
function renderHome() {
  const total = allWords().length;
  const known = Object.values(state.known).filter(Boolean).length;
  app.innerHTML = `
    <h2>Vítej! 👋</h2>
    <p>Kompletní příprava na <b>zápočet z němčiny A1</b> (letní semestr 2026, vyučující Sedláčková). Aplikace pokrývá všech 776 slovíček z Lekce 6–10, gramatiku z 10 týdnů a podrobně vede přes všech 7 úloh zápočtového testu.</p>

    <div class="card" style="border-left:4px solid var(--accent)">
      <h3 style="margin-top:0">🎯 Doporučený postup k zápočtu</h3>
      <ol>
        <li><b>Projdi „🧠 Principy“</b> (v sekci Zápočet) — pochopíš, co přesně zkouška testuje.</li>
        <li><b>Projdi vzorový test</b> a modelové odpovědi na všech 7 úloh.</li>
        <li><b>Drill Perfektum + nicht/kein…sondern</b> — to je 40 % bodů testu.</li>
        <li><b>Nauč se 8 popisů obrázků</b> po 2 větách — 30 bodů zaručeno.</li>
        <li><b>Procvič slovíčka na kartičkách</b> — 776 slov.</li>
        <li><b>Simulace zkoušky</b> — projdi všech 7 úloh za sebou jako na zápočtu.</li>
      </ol>
    </div>

    <div class="card">
      <h3>Tvůj pokrok</h3>
      <div class="stat"><span>Naučená slovíčka</span><b>${known} / ${total}</b></div>
      <div class="bar"><div class="bar-fill" style="width:${total?known/total*100:0}%"></div></div>
      <div class="stat"><span>Nejlepší skóre v kvízu</span><b>${state.quiz.best} / ${QUIZ.length}</b></div>
      <div class="stat"><span>Počet absolvovaných kvízů</span><b>${state.quiz.done}</b></div>
    </div>

    <h3>Sekce aplikace</h3>
    <div class="grid">
      <div class="tile" data-go="test" style="border-color:var(--accent)"><h3>🎓 Zápočet (START ZDE)</h3><small>Principy testu, vzorový test, drilly, popis obrázků, simulace. <b>Nejdůležitější sekce.</b></small></div>
      <div class="tile" data-go="drill" style="border-color:var(--accent-2)"><h3>🔥 Drill minulých testů</h3><small><b>119 reálných otázek</b> ze 4 zápočtových testů (ročníky 2023 + 2024, varianty A/B). Spaced repetition — naučíš se je nazpaměť. <b>Klikačka!</b></small></div>
      <div class="tile" data-go="oral" style="border-color:var(--blue)"><h3>🗣️ Ústní zkouška</h3><small><b>7 témat</b> s větami nazpaměť (O sobě, Práce, Apple, Týden, Rodina, Dovolená, Volný čas). Výslovnost přes 🔊, trénink CZ→DE.</small></div>
      <div class="tile" data-go="prepa1" style="border-color:var(--gold)"><h3>📝 A1 Otázky a odpovědi</h3><small><b>11 témat</b> v Q&A stylu — představení, cestování, jídlo, počasí, rodina… Slovní zásoba + tipy na gramatiku.</small></div>
      <div class="tile" data-go="grammar"><h3>📖 Gramatika</h3><small>10 týdnů: Perfektum, modálky v préteritu, imperativ, spojky ADUSO, lokální předložky…</small></div>
      <div class="tile" data-go="vocab"><h3>📚 Slovíčka</h3><small>5 lekcí, ${total} slov po kategoriích. Hledání + označování naučených.</small></div>
      <div class="tile" data-go="flashcards"><h3>🃏 Kartičky</h3><small>CZ↔DE, výběr lekce, klávesové zkratky (mezerník otočí, šipky posouvají).</small></div>
      <div class="tile" data-go="quiz"><h3>🎯 Kvíz z gramatiky</h3><small>${QUIZ.length} otázek s vysvětlením. Test znalosti pravidel.</small></div>
      <div class="tile" data-go="exam"><h3>📝 Překlad slovíček</h3><small>20 náhodných slov — přelož do němčiny. Trénink slovní zásoby.</small></div>
      <div class="tile" data-go="progress"><h3>📊 Pokrok</h3><small>Přehled naučených slovíček po lekcích.</small></div>
    </div>
  `;
  app.querySelectorAll(".tile").forEach(t => t.addEventListener("click", () => {
    const v = t.dataset.go;
    [...nav.children].forEach(b => b.classList.remove("active"));
    nav.querySelector(`[data-view="${v}"]`).classList.add("active");
    render(v);
  }));
}

// ==== VOCAB ====
let currentLesson = "l6";
let vocabSearch = "";
function renderVocab() {
  app.innerHTML = `
    <h2>📚 Slovíčka</h2>
    <div class="lesson-nav">
      ${VOCAB.map(l => `<button data-l="${l.id}" class="${l.id===currentLesson?'active':''}">${l.title.split(':')[0]}</button>`).join("")}
    </div>
    <input class="search" id="vocSearch" placeholder="🔎 Hledat (DE nebo CZ)..." value="${vocabSearch}">
    <div id="vocBody"></div>
  `;
  app.querySelectorAll(".lesson-nav button").forEach(b => b.addEventListener("click", () => {
    currentLesson = b.dataset.l;
    renderVocab();
  }));
  const inp = document.getElementById("vocSearch");
  inp.addEventListener("input", e => { vocabSearch = e.target.value; renderVocabBody(); });
  inp.focus();
  renderVocabBody();
}
function renderVocabBody() {
  const lesson = VOCAB.find(l => l.id === currentLesson);
  const q = vocabSearch.trim().toLowerCase();
  const body = document.getElementById("vocBody");
  body.innerHTML = `<h3>${lesson.title}</h3>` + lesson.groups.map(g => {
    const items = g.items.filter(([de, cs]) => !q || de.toLowerCase().includes(q) || cs.toLowerCase().includes(q));
    if (!items.length) return "";
    return `
      <h4>${g.name}</h4>
      <table class="vocab-table">
        <thead><tr><th>Německy</th><th>Česky</th><th style="width:80px"></th></tr></thead>
        <tbody>
          ${items.map(([de, cs]) => {
            const k = `${lesson.id}|${de}`;
            const known = state.known[k];
            return `<tr class="${known?'known':''}">
              <td class="de">${de}</td>
              <td class="cs">${cs}</td>
              <td><button class="know-btn ${known?'on':''}" data-k="${k}">${known?'✓ umím':'umím'}</button></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    `;
  }).join("");
  body.querySelectorAll(".know-btn").forEach(b => b.addEventListener("click", () => {
    const k = b.dataset.k;
    state.known[k] = !state.known[k];
    save();
    renderVocabBody();
  }));
}

// ==== GRAMMAR ====
function renderGrammar() {
  app.innerHTML = `
    <h2>📖 Gramatika (souhrn 10 týdnů)</h2>
    <p style="color:var(--muted)">Klikni na týden pro rozbalení.</p>
    ${GRAMMAR.map((w, i) => `
      <div class="acc ${i===0?'open':''}">
        <div class="acc-h" data-i="${i}"><span>${w.title}</span><span>▾</span></div>
        <div class="acc-b">
          ${w.sections.map(s => `<h3>${s.h}</h3>${s.body}`).join("")}
        </div>
      </div>
    `).join("")}
  `;
  app.querySelectorAll(".acc-h").forEach(h => h.addEventListener("click", () => {
    h.parentElement.classList.toggle("open");
  }));
}

// ==== FLASHCARDS ====
let flashDeck = [], flashIdx = 0, flashDir = "de-cs", flashLesson = "all", flashFlipped = false;
function buildFlashDeck() {
  let words = allWords();
  if (flashLesson !== "all") words = words.filter(w => w.lesson === flashLesson);
  flashDeck = shuffle(words);
  flashIdx = 0;
  flashFlipped = false;
}
function renderFlashcards() {
  if (!flashDeck.length) buildFlashDeck();
  const w = flashDeck[flashIdx];
  const isKnown = w && state.known[wordKey(w)];
  app.innerHTML = `
    <h2>🃏 Kartičky</h2>
    <div class="flash-wrap">
      <div class="flash-opts">
        <label>Lekce:
          <select id="flashLesson">
            <option value="all" ${flashLesson==='all'?'selected':''}>Všechny</option>
            ${VOCAB.map(l => `<option value="${l.id}" ${flashLesson===l.id?'selected':''}>${l.title.split(':')[0]}</option>`).join("")}
          </select>
        </label>
        <label>Směr:
          <select id="flashDir">
            <option value="de-cs" ${flashDir==='de-cs'?'selected':''}>DE → CZ</option>
            <option value="cs-de" ${flashDir==='cs-de'?'selected':''}>CZ → DE</option>
          </select>
        </label>
        <button class="ghost" id="flashShuffle">🔀 Zamíchat</button>
        <button class="ghost" id="flashSpeak" title="Výslovnost">🔊 Výslovnost</button>
      </div>
      <div class="flash-meta">Kartička ${flashIdx+1} / ${flashDeck.length} ${isKnown?'· <span style="color:var(--ok)">✓ naučeno</span>':''}</div>
      <div class="flash-card" id="flashCard">
        <div class="flash-inner ${flashFlipped?'flipped':''}">
          <div class="flash-front">${flashDeck.length ? (flashDir==='de-cs' ? flashDeck[flashIdx].de : flashDeck[flashIdx].cs) : '—'}</div>
          <div class="flash-back">${flashDeck.length ? (flashDir==='de-cs' ? flashDeck[flashIdx].cs : flashDeck[flashIdx].de) : '—'}</div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="ghost" id="flashPrev">← Předchozí</button>
        <button class="primary" id="flashFlip">Otoč (Mezera)</button>
        <button class="ghost" id="flashNext">Další →</button>
        <button class="ghost" id="flashKnown">${isKnown?'✗ Zapomenout':'✓ Umím (K)'}</button>
      </div>
      <p style="text-align:center; color:var(--muted); font-size:12px; margin-top:14px">
        Klávesy: <b>Mezerník</b> = otočit · <b>← →</b> = předchozí/další · <b>K</b> = umím · <b>S</b> = výslovnost
      </p>
    </div>
  `;
  document.getElementById("flashLesson").addEventListener("change", e => { flashLesson = e.target.value; buildFlashDeck(); renderFlashcards(); });
  document.getElementById("flashDir").addEventListener("change", e => { flashDir = e.target.value; flashFlipped = false; renderFlashcards(); });
  document.getElementById("flashShuffle").addEventListener("click", () => { buildFlashDeck(); renderFlashcards(); });
  document.getElementById("flashCard").addEventListener("click", flipFlash);
  document.getElementById("flashFlip").addEventListener("click", flipFlash);
  document.getElementById("flashPrev").addEventListener("click", prevFlash);
  document.getElementById("flashNext").addEventListener("click", nextFlash);
  document.getElementById("flashKnown").addEventListener("click", toggleKnownFlash);
  document.getElementById("flashSpeak").addEventListener("click", speakCurrentFlash);
}
function prevFlash() { flashIdx = (flashIdx - 1 + flashDeck.length) % flashDeck.length; flashFlipped = false; renderFlashcards(); }
function toggleKnownFlash() {
  if (!flashDeck.length) return;
  const w = flashDeck[flashIdx];
  state.known[wordKey(w)] = !state.known[wordKey(w)];
  save();
  if (state.known[wordKey(w)]) nextFlash(); else renderFlashcards();
}
function speakCurrentFlash() {
  if (!flashDeck.length) return;
  const w = flashDeck[flashIdx];
  // Přečti vždy německou formu (bez členů a „¨-e“ apod.)
  const text = w.de.replace(/¨-[a-z]+/gi,'').replace(/,\s*-[a-z]*$/i,'').replace(/\s*\(.*?\)/g,'').replace(/\s*\/.*$/,'').trim();
  speak(text, "de-DE");
}
function speak(text, lang) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang; u.rate = 0.9;
  window.speechSynthesis.speak(u);
}
function flipFlash() { flashFlipped = !flashFlipped; renderFlashcards(); }
function nextFlash() { flashIdx = (flashIdx + 1) % flashDeck.length; flashFlipped = false; state.flash.seen++; save(); renderFlashcards(); }

// ==== QUIZ ====
let quizDeck = [], quizI = 0, quizScore = 0, quizAns = null;
function renderQuiz() {
  if (!quizDeck.length || quizI >= quizDeck.length) {
    quizDeck = shuffle([...QUIZ]);
    quizI = 0; quizScore = 0; quizAns = null;
  }
  const q = quizDeck[quizI];
  app.innerHTML = `
    <h2>🎯 Kvíz — gramatika</h2>
    <div class="quiz-prog">Otázka ${quizI+1} / ${quizDeck.length} · Skóre: <b>${quizScore}</b></div>
    <div class="card">
      <div class="quiz-q">${q.q}</div>
      <div id="opts">
        ${q.opts.map((o, i) => `<button class="opt" data-i="${i}">${String.fromCharCode(65+i)}) ${o}</button>`).join("")}
      </div>
      <div id="feedback"></div>
    </div>
    <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
      <button class="ghost" id="quizRestart">🔄 Restart</button>
      <button class="primary" id="quizNext" style="display:none">Další →</button>
    </div>
  `;
  app.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answerQuiz(parseInt(b.dataset.i))));
  document.getElementById("quizRestart").addEventListener("click", () => { quizDeck = []; renderQuiz(); });
  document.getElementById("quizNext").addEventListener("click", nextQuiz);
}
function answerQuiz(i) {
  if (quizAns !== null) return;
  quizAns = i;
  const q = quizDeck[quizI];
  const opts = app.querySelectorAll(".opt");
  opts.forEach((o, idx) => {
    o.classList.add("disabled");
    if (idx === q.a) o.classList.add("correct");
    else if (idx === i) o.classList.add("wrong");
  });
  const ok = i === q.a;
  if (ok) quizScore++;
  document.getElementById("feedback").innerHTML = `<div class="expl ${ok?'ok':'bad'}"><b>${ok?'Správně!':'Špatně.'}</b> ${q.expl}</div>`;
  document.getElementById("quizNext").style.display = "inline-block";
}
function nextQuiz() {
  quizI++;
  quizAns = null;
  if (quizI >= quizDeck.length) {
    state.quiz.done++;
    if (quizScore > state.quiz.best) state.quiz.best = quizScore;
    save();
    app.innerHTML = `
      <h2>🎯 Konec kvízu</h2>
      <div class="card">
        <h3 style="color:${quizScore >= quizDeck.length*0.8 ? 'var(--ok)' : 'var(--gold-shade)'}">Skóre: ${quizScore} / ${quizDeck.length}</h3>
        <p>${quizScore >= quizDeck.length*0.8 ? '🎉 Výborně! Připraven/a na zkoušku.' : quizScore >= quizDeck.length*0.5 ? '👍 Slušné. Projdi si ještě gramatiku.' : '📚 Zkus si projít sekci Gramatika a zkus to znovu.'}</p>
        <button class="primary" id="quizAgain">Znovu</button>
      </div>
    `;
    document.getElementById("quizAgain").addEventListener("click", () => { quizDeck = []; renderQuiz(); });
    return;
  }
  renderQuiz();
}

// ==== EXAM (typing test) ====
let examDeck = [], examI = 0, examScore = 0, examSubmitted = false;
function buildExamDeck() {
  examDeck = shuffle(allWords()).slice(0, 20);
  examI = 0; examScore = 0; examSubmitted = false;
}
function normalize(s) {
  return s.toLowerCase().trim()
    .replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ß/g,'ss')
    .replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i').replace(/ó/g,'o').replace(/ú/g,'u').replace(/ý/g,'y')
    .replace(/č/g,'c').replace(/ď/g,'d').replace(/ě/g,'e').replace(/ň/g,'n').replace(/ř/g,'r').replace(/š/g,'s').replace(/ť/g,'t').replace(/ž/g,'z')
    .replace(/[^\w\s]/g,'').replace(/\s+/g,' ');
}
function renderExam() {
  if (!examDeck.length) buildExamDeck();
  if (examI >= examDeck.length) {
    const pct = Math.round(examScore/examDeck.length*100);
    app.innerHTML = `
      <h2>📝 Výsledek zkoušky</h2>
      <div class="card">
        <h3 style="color:${pct>=80?'var(--ok)':pct>=50?'var(--gold-shade)':'var(--err)'}">${examScore} / ${examDeck.length} (${pct} %)</h3>
        <p>${pct>=80?'🎉 Výborně, můžeš jít na zkoušku!':pct>=50?'👍 Slušné, ještě se podívej na chyby.':'📚 Procvič slovíčka a zkus to znovu.'}</p>
        <button class="primary" id="examAgain">Nová zkouška (20 slov)</button>
      </div>
    `;
    document.getElementById("examAgain").addEventListener("click", () => { buildExamDeck(); renderExam(); });
    return;
  }
  const w = examDeck[examI];
  app.innerHTML = `
    <h2>📝 Zkouška — překlad</h2>
    <div class="quiz-prog">Slovo ${examI+1} / ${examDeck.length} · Skóre: <b>${examScore}</b></div>
    <div class="card">
      <p style="color:var(--muted); margin-bottom:4px">Přelož do němčiny:</p>
      <h3 style="font-size:24px; color:var(--strong); text-transform:none; letter-spacing:-0.2px">${w.cs}</h3>
      <input class="exam-input" id="examInput" placeholder="Napiš německý překlad..." autofocus autocomplete="off">
      <div id="examFeedback"></div>
      <div style="margin-top:10px; display:flex; gap:10px">
        <button class="primary" id="examSubmit">Zkontrolovat</button>
        <button class="ghost" id="examSkip">Přeskočit</button>
      </div>
    </div>
  `;
  const input = document.getElementById("examInput");
  input.focus();
  const submit = () => checkExam(w, input.value);
  document.getElementById("examSubmit").addEventListener("click", submit);
  document.getElementById("examSkip").addEventListener("click", () => { examI++; renderExam(); });
  input.addEventListener("keydown", e => { if (e.key === "Enter") examSubmitted ? (examI++, renderExam()) : submit(); });
}
function checkExam(w, answer) {
  if (examSubmitted) return;
  examSubmitted = true;
  // Porovnání: zvládá členy, varianty oddělené "/" a alternativy s mezerou
  const correct = w.de;
  const variants = correct.split("/").map(s => s.trim());
  const answerN = normalize(answer);
  const isCorrect = variants.some(v => {
    const variantCore = v.replace(/,.*/,'').trim(); // odstranit "-e", "-n"
    const full = normalize(variantCore);
    const noArticle = normalize(variantCore.replace(/^(der|die|das)\s+/,''));
    return answerN === full || answerN === noArticle;
  });
  if (isCorrect) {
    examScore++;
    state.known[wordKey(w)] = true;
    save();
    document.getElementById("examFeedback").innerHTML = `<div class="expl ok"><b>Správně!</b> ${correct}</div>`;
  } else {
    document.getElementById("examFeedback").innerHTML = `<div class="expl bad"><b>Špatně.</b> Správně: <b style="color:var(--accent)">${correct}</b></div>`;
  }
  const sub = document.getElementById("examSubmit");
  sub.textContent = "Další →";
  sub.onclick = () => { examI++; renderExam(); };
}

// ==== TEST (Zápočet) ====
let testSub = "principles"; // principles | overview | perfektDrill | satzbauDrill | sondernDrill | imperativDrill | pictures | simulation
let drillI = 0;
let simI = 0, simTaskI = 0, simAnswers = [];

const TEST_TABS = [
  { k: "principles",    l: "🧠 Principy" },
  { k: "overview",      l: "📋 Vzorový test" },
  { k: "perfektDrill",  l: "🧱 Perfektum" },
  { k: "satzbauDrill",  l: "🧩 Tvorba vět" },
  { k: "imperativDrill",l: "📢 Imperativ" },
  { k: "sondernDrill",  l: "❌ nicht/kein…sondern" },
  { k: "pictures",      l: "🖼 Popis obrázků" },
  { k: "simulation",    l: "🎯 Simulace zkoušky" }
];

function renderTest() {
  app.innerHTML = `
    <h2>🎓 Zápočet — kompletní příprava</h2>
    <div class="lesson-nav">
      ${TEST_TABS.map(t => `<button data-s="${t.k}" class="${testSub===t.k?'active':''}">${t.l}</button>`).join("")}
    </div>
    <div id="testBody"></div>
  `;
  app.querySelectorAll(".lesson-nav button").forEach(b => b.addEventListener("click", () => {
    testSub = b.dataset.s;
    drillI = 0;
    if (testSub === "simulation") { simI = 0; simTaskI = 0; simAnswers = []; }
    renderTest();
  }));
  const views = {
    principles: renderPrinciples,
    overview: renderTestOverview,
    perfektDrill: () => renderDrill("perfektDrill", "Převeď větu do Perfekta"),
    satzbauDrill: () => renderDrill("satzbauDrill", "Vytvoř větu z klíčových slov"),
    imperativDrill: () => renderDrill("imperativDrill", "Vytvoř imperativ"),
    sondernDrill: () => renderDrill("sondernDrill", "Vytvoř větu s nicht/kein…, sondern"),
    pictures: renderPictureGuide,
    simulation: renderSimulation
  };
  (views[testSub] || renderPrinciples)();
}

function renderPrinciples() {
  const body = document.getElementById("testBody");
  body.innerHTML = `
    <div class="card" style="border-left:4px solid var(--accent)">
      <h3 style="margin-top:0">💡 Co od tebe paní Sedláčková v testu čeká</h3>
      <p>Test má <b>7 úloh a 100 bodů</b>. 50 % bodů je za produktivní psaní (úloha E, F, G), 25 % za gramatiku (Perfektum v B1+C), 15 % za konstrukci „nicht/kein…, sondern“ a 15 % za poslech.</p>
      <p><b>Priorita učení:</b></p>
      <ol>
        <li><b>Perfektum</b> (haben/sein + Partizip II) — bez toho nic neuděláš.</li>
        <li><b>nicht/kein…, sondern</b> — 15 bodů, jasná konstrukce.</li>
        <li><b>Tvorba vět z klíčových slov</b> — umět doplnit členy a předložky.</li>
        <li><b>Imperativ Sie</b> — lehké body.</li>
        <li><b>Připravené věty</b> pro úlohy E, F, G (jídlo, dny, obrázky).</li>
      </ol>
    </div>
    ${TESTS.principles.map((p, i) => `
      <div class="acc ${i<2?'open':''}">
        <div class="acc-h"><span>${p.h}</span><span>▾</span></div>
        <div class="acc-b">${p.b}</div>
      </div>
    `).join("")}
  `;
  body.querySelectorAll(".acc-h").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
}

function renderTestOverview() {
  const body = document.getElementById("testBody");
  body.innerHTML = `
    <div class="card">
      <h3>${TESTS.info.title}</h3>
      ${TESTS.info.body}
    </div>
    <p style="color:var(--muted)">Klikni na úkol pro rozbalení zadání a vzorových odpovědí.</p>
    ${TESTS.tasks.map((t, i) => `
      <div class="acc ${i===0?'open':''}">
        <div class="acc-h"><span>${t.title}</span><span>▾</span></div>
        <div class="acc-b">
          <p style="color:var(--muted)">${t.desc}</p>
          ${t.items.map(it => `
            <div style="margin:12px 0; padding:12px 16px; background:var(--bg-soft); border:1px solid var(--border); border-radius:10px;">
              <div style="color:var(--strong); margin-bottom:4px">${it.q}</div>
              <div style="color:var(--accent-shade)"><b>Vzor:</b> ${it.a}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("")}
  `;
  body.querySelectorAll(".acc-h").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
}

function renderDrill(which, label) {
  const deck = TESTS[which];
  const body = document.getElementById("testBody");
  if (drillI >= deck.length) {
    body.innerHTML = `
      <div class="card">
        <h3 style="color:var(--ok)">🎉 Hotovo!</h3>
        <p>Prošel/a jsi všechny příklady (${deck.length}).</p>
        <button class="primary" id="drillRestart">Znovu od začátku</button>
      </div>
    `;
    document.getElementById("drillRestart").addEventListener("click", () => { drillI = 0; renderTest(); });
    return;
  }
  const item = deck[drillI];
  body.innerHTML = `
    <div class="quiz-prog">Příklad ${drillI+1} / ${deck.length} · <span style="color:var(--muted)">Enter = zkontrolovat, ↓ = další</span></div>
    <div class="card">
      <p style="color:var(--muted); margin-bottom:4px">${label}:</p>
      <h3 style="color:var(--strong); font-size:20px; text-transform:none; letter-spacing:-0.2px">${item.q}</h3>
      <textarea class="exam-input" id="drillIn" rows="2" placeholder="Napiš větu..." autofocus></textarea>
      <div id="drillFb"></div>
      <div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap">
        <button class="primary" id="drillCheck">Zkontrolovat</button>
        <button class="ghost" id="drillHint">💡 Nápověda</button>
        <button class="ghost" id="drillShow">Ukaž řešení</button>
        <button class="ghost" id="drillNext">Další →</button>
      </div>
    </div>
  `;
  const ta = document.getElementById("drillIn");
  ta.focus();
  const check = () => {
    const ans = ta.value.trim();
    if (!ans) return;
    const ok = compareSentence(ans, item.a);
    document.getElementById("drillFb").innerHTML = `
      <div class="expl ${ok?'ok':'bad'}">
        <b>${ok?'Správně! ✅':'Porovnej své řešení se vzorem:'}</b><br>
        ${ok ? '' : `<span style="color:var(--muted)">Tvá věta:</span> ${escapeHtml(ans)}<br>`}
        <span style="color:var(--accent)">Vzor:</span> <b>${item.a}</b>
        ${item.hint ? `<br><span style="color:var(--blue); font-size:13px">💡 ${item.hint}</span>` : ''}
      </div>
    `;
  };
  document.getElementById("drillCheck").addEventListener("click", check);
  document.getElementById("drillHint").addEventListener("click", () => {
    document.getElementById("drillFb").innerHTML = `<div class="expl" style="border-left-color:var(--blue)"><b>💡 Nápověda:</b> ${item.hint || '(žádná nápověda)'}</div>`;
  });
  document.getElementById("drillShow").addEventListener("click", () => {
    document.getElementById("drillFb").innerHTML = `<div class="expl"><b>Řešení:</b> ${item.a}${item.hint?`<br><span style="color:var(--blue); font-size:13px">💡 ${item.hint}</span>`:''}</div>`;
  });
  const next = () => { drillI++; renderTest(); };
  document.getElementById("drillNext").addEventListener("click", next);
  ta.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); check(); }
    else if (e.key === "ArrowDown" && e.ctrlKey) { e.preventDefault(); next(); }
  });
}

// "Fuzzy" porovnávání věty (ignoruje interpunkci, mezery, velká písmena, diakritiku/přehlásky)
function compareSentence(a, b) {
  return normalize(a) === normalize(b);
}
function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderPictureGuide() {
  const body = document.getElementById("testBody");
  const g = TESTS.pictureGuide;
  body.innerHTML = `
    <div class="card">
      <h3 style="margin-top:0">🖼 Popis obrázků — jak na 30 bodů</h3>
      <p>${g.intro}</p>
      <p><b>Univerzální šablona pro 2 věty:</b></p>
      <ol>
        <li><b>Co vidíš / co se děje:</b> „Die Menschen <u>sind</u>…“ / „Der Mann <u>macht</u>…“ / „Zwei Freunde <u>trinken</u>…“</li>
        <li><b>Detail / emoce / počasí:</b> „Das Wetter ist…“ / „Sie haben…“ / „Es ist sehr…“</li>
      </ol>
    </div>
    <p style="color:var(--muted)">Pro každou typickou scénu máš připravený <b>slovník + 5 vzorových vět</b>. Nauč se 2 věty ke každé scéně — na testu to stačí.</p>
    ${g.scenes.map((s, i) => `
      <div class="acc ${i<3?'open':''}">
        <div class="acc-h"><span>${s.name}</span><span>▾</span></div>
        <div class="acc-b">
          <p style="color:var(--blue)"><b>Slovíčka:</b> ${s.vocab}</p>
          <ol>
            ${s.samples.map(v => `<li>${v}</li>`).join("")}
          </ol>
        </div>
      </div>
    `).join("")}
  `;
  body.querySelectorAll(".acc-h").forEach(h => h.addEventListener("click", () => h.parentElement.classList.toggle("open")));
}

// ==== SIMULACE zkoušky (všechny typy úloh po sobě) ====
const SIM_TASKS = [
  { type: "satzbau",  title: "Úloha B: Tvorba věty", deck: "satzbauDrill",   n: 3 },
  { type: "perfekt",  title: "Úloha C: Převod do Perfekta", deck: "perfektDrill", n: 3 },
  { type: "sondern",  title: "Úloha D: nicht/kein…, sondern", deck: "sondernDrill", n: 3 },
  { type: "essen",    title: "Úloha E: Jídlo a pití", custom: "essen", n: 3 },
  { type: "tage",     title: "Úloha F: 5 pracovních dnů", custom: "tage", n: 1 },
  { type: "bilder",   title: "Úloha G: Popis obrázku", custom: "bilder", n: 2 }
];
let simDecks = null;
function prepareSim() {
  simDecks = SIM_TASKS.map(t => {
    if (t.deck) return { t, items: shuffle([...TESTS[t.deck]]).slice(0, t.n) };
    return { t, items: Array(t.n).fill(null) };
  });
}

function renderSimulation() {
  if (!simDecks) prepareSim();
  const body = document.getElementById("testBody");
  const totalItems = simDecks.reduce((a, d) => a + d.items.length, 0);
  const doneItems = simAnswers.length;
  if (simTaskI >= simDecks.length) {
    // Výsledek
    let correct = 0, total = 0;
    simAnswers.forEach(a => { if (a.auto) { total++; if (a.ok) correct++; } });
    body.innerHTML = `
      <div class="card">
        <h3 style="color:var(--ok); margin-top:0">✅ Simulace dokončena</h3>
        <p>Prošel/a jsi všech ${simDecks.length} typů úloh (${totalItems} příkladů).</p>
        <p><b>Automaticky vyhodnocené (B, C, D):</b> ${correct} / ${total} správně</p>
        <p style="color:var(--muted)">Úlohy E, F, G jsou otevřené — porovnej si vlastní odpovědi se vzorem níže.</p>
      </div>
      <h3>📋 Tvé odpovědi</h3>
      ${simAnswers.map((a, i) => `
        <div class="card" style="padding:14px 18px">
          <div style="color:var(--muted); font-size:13px; margin-bottom:4px">${a.taskTitle}</div>
          <div style="color:var(--strong); margin-bottom:6px"><b>Zadání:</b> ${a.q}</div>
          <div style="margin-bottom:6px"><b>Tvá odpověď:</b> ${escapeHtml(a.answer || '(prázdné)')}</div>
          <div style="color:var(--accent)"><b>Vzor:</b> ${a.model}</div>
          ${a.auto ? `<div style="margin-top:4px; color:${a.ok?'var(--ok)':'var(--err)'}; font-size:13px">${a.ok?'✓ správně':'✗ liší se od vzoru'}</div>` : `<div style="margin-top:4px; color:var(--muted); font-size:13px">otevřená úloha</div>`}
        </div>
      `).join("")}
      <button class="primary" id="simAgain" style="margin-top:14px">Nová simulace</button>
    `;
    document.getElementById("simAgain").addEventListener("click", () => { simDecks = null; simI = 0; simTaskI = 0; simAnswers = []; renderTest(); });
    return;
  }
  const task = simDecks[simTaskI];
  const itemIdx = simI;
  if (itemIdx >= task.items.length) {
    simTaskI++; simI = 0; renderTest(); return;
  }

  const progress = `Krok ${doneItems+1} / ${totalItems}`;
  const taskProgress = `Úloha ${simTaskI+1} / ${simDecks.length} · Příklad ${itemIdx+1} / ${task.items.length}`;

  // Otevřené úlohy
  if (task.t.custom === "essen") {
    const prompts = [
      "Napiš větu o tom, co rád/a jíš.",
      "Napiš větu o tom, co rád/a piješ (ráno / večer).",
      "Napiš větu o svém oblíbeném jídle."
    ];
    const models = [
      "Ich esse gern Pizza und Pasta.",
      "Zum Frühstück trinke ich Kaffee mit Milch.",
      "Mein Lieblingsessen ist Lendenbraten mit Knödeln."
    ];
    return renderSimStep(body, task, itemIdx, progress, taskProgress, prompts[itemIdx], models[itemIdx], false);
  }
  if (task.t.custom === "tage") {
    return renderSimStep(body, task, itemIdx, progress, taskProgress,
      "Napiš 5 pracovních dní v týdnu (od pondělí do pátku).",
      "Montag, Dienstag, Mittwoch, Donnerstag, Freitag", false, 2);
  }
  if (task.t.custom === "bilder") {
    const scenes = [
      { name: "🏖 Pláž / léto", model: "Die Menschen sind am Strand. Das Wetter ist sonnig und warm." },
      { name: "⛰ Hory / turistika", model: "Der Mann wandert in den Bergen. Die Landschaft ist wunderschön." }
    ];
    const s = scenes[itemIdx];
    return renderSimStep(body, task, itemIdx, progress, taskProgress,
      `Napiš 2 věty k obrázku: ${s.name}`, s.model, false, 3);
  }
  // Auto-hodnocené úlohy (perfekt, satzbau, sondern)
  const item = task.items[itemIdx];
  return renderSimStep(body, task, itemIdx, progress, taskProgress, item.q, item.a, true, 2, item.hint);
}

function renderSimStep(body, task, itemIdx, progress, taskProgress, q, model, auto, rows=2, hint="") {
  body.innerHTML = `
    <div class="quiz-prog">${progress} · <span style="color:var(--muted)">${taskProgress}</span></div>
    <div class="card">
      <h3 style="margin-top:0; color:var(--accent)">${task.t.title}</h3>
      <p style="color:var(--strong)"><b>Zadání:</b> ${q}</p>
      <textarea class="exam-input" id="simIn" rows="${rows}" placeholder="Napiš odpověď..." autofocus></textarea>
      <div id="simFb"></div>
      <div style="display:flex; gap:10px; margin-top:10px; flex-wrap:wrap">
        <button class="primary" id="simSubmit">Odeslat</button>
        <button class="ghost" id="simSkip">Přeskočit</button>
      </div>
    </div>
  `;
  const ta = document.getElementById("simIn");
  ta.focus();
  let submitted = false;
  const submit = () => {
    if (submitted) return;
    submitted = true;
    const ans = ta.value.trim();
    const ok = auto ? compareSentence(ans, model) : null;
    simAnswers.push({
      taskTitle: task.t.title,
      q, answer: ans, model, auto, ok: ok === true, hint
    });
    document.getElementById("simFb").innerHTML = auto
      ? `<div class="expl ${ok?'ok':'bad'}"><b>${ok?'Správně!':'Vzor:'}</b> ${model}${hint?`<br><span style="color:var(--blue); font-size:13px">💡 ${hint}</span>`:''}</div>`
      : `<div class="expl"><b>Vzor:</b> ${model}<br><span style="color:var(--muted); font-size:13px">(otevřená úloha — porovnej si vlastní odpověď)</span></div>`;
    const btn = document.getElementById("simSubmit");
    btn.textContent = "Další →";
    btn.onclick = () => { simI++; renderTest(); };
  };
  document.getElementById("simSubmit").addEventListener("click", submit);
  document.getElementById("simSkip").addEventListener("click", () => { simI++; renderTest(); });
  ta.addEventListener("keydown", e => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey || !e.shiftKey && rows === 2)) { e.preventDefault(); submit(); } });
}

// ==== A1 OTÁZKY (Q&A z dokumentu „Nemcina zkouska priprava") ====
function renderPrepA1() {
  const app = document.getElementById("app");
  const data = EXAM_PREP_A1;

  const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

  const speakBtn = (text, label = "🔊") =>
    `<button class="prep-speak" data-de="${escapeHtml(text)}" title="Přehrát německy">${label}</button>`;

  const sentenceRow = ([de, cz]) => `
    <div class="prep-sent">
      <div class="prep-sent-de">${escapeHtml(de)}</div>
      <div class="prep-sent-cz">${escapeHtml(cz)}</div>
      ${speakBtn(de)}
    </div>`;

  const vocabTable = (title, rows) => rows && rows.length ? `
    <div class="prep-vocab">
      <div class="prep-vocab-title">${escapeHtml(title)}</div>
      <div class="prep-vocab-list">
        ${rows.map(([de, cz]) => `
          <div class="prep-vocab-row">
            <div class="prep-vocab-de">${escapeHtml(de)}</div>
            <div class="prep-vocab-cz">${escapeHtml(cz)}</div>
            ${speakBtn(de.replace(/^(der|die|das)\s+/, "").split(" / ")[0])}
          </div>`).join("")}
      </div>
    </div>` : "";

  const tipBox = tip => tip ? `<div class="prep-tip">💡 ${escapeHtml(tip)}</div>` : "";

  const qaBlock = qa => `
    <div class="prep-qa">
      <div class="prep-q">
        <span class="prep-q-mark">❓</span>
        <div class="prep-q-text">
          <div class="prep-q-de">${escapeHtml(qa.q)}</div>
          <div class="prep-q-cz">🇨🇿 ${escapeHtml(qa.qcz)}</div>
        </div>
        ${speakBtn(qa.q)}
      </div>
      <div class="prep-a">
        ${qa.answers.map(([de, cz]) => `
          <div class="prep-a-row">
            <div class="prep-a-arrow">→</div>
            <div class="prep-a-text">
              <div class="prep-a-de">${escapeHtml(de)}</div>
              <div class="prep-a-cz">${escapeHtml(cz)}</div>
            </div>
            ${speakBtn(de)}
          </div>`).join("")}
      </div>
      ${tipBox(qa.tip)}
    </div>`;

  const conjBlock = c => !c ? "" : `
    <div class="prep-conj">
      <div class="prep-conj-title">Příklad: ${escapeHtml(c.verb)} (${escapeHtml(c.cz)})</div>
      <div class="prep-vocab-list">
        ${c.forms.map(([de, cz]) => `
          <div class="prep-vocab-row">
            <div class="prep-vocab-de">${escapeHtml(de)}</div>
            <div class="prep-vocab-cz">${escapeHtml(cz)}</div>
            ${speakBtn(de.replace(/^(er \/ sie \/ es|sie \/ Sie)\s+/, ""))}
          </div>`).join("")}
      </div>
    </div>`;

  const topicCard = (t, idx) => `
    <details class="prep-topic" ${idx === 0 ? "open" : ""}>
      <summary class="prep-topic-head">
        <span class="prep-topic-emoji">${t.emoji}</span>
        <span class="prep-topic-title">${idx + 1}. ${escapeHtml(t.title)}</span>
        <span class="prep-topic-de">(${escapeHtml(t.de)})</span>
      </summary>
      <div class="prep-topic-body">
        ${conjBlock(t.conjugation)}
        ${(t.qas || []).map(qaBlock).join("")}
        ${vocabTable("📋 Slovní zásoba", t.vocab)}
        ${vocabTable("📋 " + (t.vocab2Title || ""), t.vocab2)}
        ${vocabTable(t.vocab3Title || "", t.vocab3)}
        ${tipBox(t.tip)}
      </div>
    </details>`;

  app.innerHTML = `
    <div class="prep-wrap">
      <div class="card prep-intro">
        <h2>📝 ${escapeHtml(data.intro.title)}</h2>
        <div class="prep-sub">${escapeHtml(data.intro.subtitle)}</div>
        <div class="prep-person">${escapeHtml(data.intro.person)}</div>
      </div>

      <div class="card prep-greeting">
        <h3>⭐ Hotové představení na začátek zkoušky</h3>
        <div class="prep-greeting-hint">Tohle se nauč zpaměti — můžeš tím začít zkoušku:</div>
        <div class="prep-greeting-list">
          ${data.greeting.map(sentenceRow).join("")}
        </div>
        <button class="btn-primary prep-play-all" id="prepPlayAll">🔊 Přehrát celý úvod</button>
      </div>

      <h3 class="prep-section-h">Témata — otázky a odpovědi</h3>
      <div class="prep-topics">
        ${data.topics.map((t, i) => topicCard(t, i)).join("")}
      </div>

      <div class="card prep-tips">
        <h3>💡 Tipy na učení</h3>
        <ul>
          ${data.tips.map(t => `<li>${escapeHtml(t)}</li>`).join("")}
        </ul>
        <div class="prep-final">Hodně štěstí! 🍀 Viel Glück!</div>
      </div>
    </div>
  `;

  app.querySelectorAll(".prep-speak").forEach(b => {
    b.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      const text = b.getAttribute("data-de");
      if (text) speak(text, "de-DE");
    });
  });

  const playAll = document.getElementById("prepPlayAll");
  if (playAll) {
    let aborted = false;
    playAll.addEventListener("click", async () => {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      aborted = false;
      playAll.disabled = true;
      playAll.textContent = "⏳ Přehrávám…";
      const sentences = data.greeting.map(([de]) => de);
      for (const s of sentences) {
        if (aborted) break;
        await new Promise(resolve => {
          const u = new SpeechSynthesisUtterance(s);
          u.lang = "de-DE"; u.rate = 0.9;
          u.onend = resolve;
          u.onerror = resolve;
          window.speechSynthesis.speak(u);
        });
      }
      playAll.disabled = false;
      playAll.textContent = "🔊 Přehrát celý úvod";
    });
  }
}

// ==== PROGRESS ====
function renderProgress() {
  const byLesson = VOCAB.map(l => {
    const words = l.groups.flatMap(g => g.items.map(([de]) => `${l.id}|${de}`));
    const known = words.filter(k => state.known[k]).length;
    return { id: l.id, title: l.title, total: words.length, known };
  });
  const totalKnown = byLesson.reduce((a,b) => a+b.known, 0);
  const totalAll = byLesson.reduce((a,b) => a+b.total, 0);
  app.innerHTML = `
    <h2>📊 Tvůj pokrok</h2>
    <div class="card">
      <h3>Celkem</h3>
      <div class="stat"><span>Naučená slovíčka</span><b>${totalKnown} / ${totalAll} (${Math.round(totalKnown/totalAll*100)} %)</b></div>
      <div class="bar"><div class="bar-fill" style="width:${totalKnown/totalAll*100}%"></div></div>
      <div class="stat"><span>Absolvované kvízy</span><b>${state.quiz.done}</b></div>
      <div class="stat"><span>Nejlepší výsledek kvízu</span><b>${state.quiz.best} / ${QUIZ.length}</b></div>
      <div class="stat"><span>Prohlédnuté kartičky</span><b>${state.flash.seen}</b></div>
    </div>
    <h3>Po lekcích</h3>
    ${byLesson.map(l => `
      <div class="card" style="padding:14px 20px">
        <div class="stat"><span>${l.title}</span><b>${l.known} / ${l.total}</b></div>
        <div class="bar"><div class="bar-fill" style="width:${l.total?l.known/l.total*100:0}%"></div></div>
      </div>
    `).join("")}
  `;
}

// ==== Klávesové zkratky ====
window.addEventListener("keydown", e => {
  // nereaguj, když je uživatel ve vstupu
  const tag = document.activeElement && document.activeElement.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
  // jen pro kartičky
  const activeTab = nav.querySelector("button.active");
  if (!activeTab) return;
  const view = activeTab.dataset.view;
  if (view === "flashcards" && flashDeck.length) {
    if (e.code === "Space") { e.preventDefault(); flipFlash(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); nextFlash(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); prevFlash(); }
    else if (e.key.toLowerCase() === "k") { toggleKnownFlash(); }
    else if (e.key.toLowerCase() === "s") { speakCurrentFlash(); }
  }
});

// ==== DRILL testů (spaced repetition) ====
// Algoritmus: každá otázka potřebuje 2 správné odpovědi V ŘADĚ, aby byla „zvládnutá".
// - Správně: streak+1; když streak>=2 → otázka se „graduuje" (ukládá do mastered).
//   Dokud je v aktivním decku, re-insertuje se o 8–12 pozic dál.
// - Špatně: streak=0; re-insert o 2–4 pozice dál (vrátí se brzy).
// - Na startu: otázky, které jsou už mastered, jsou na konci (pro review); nové/rozpracované jdou první.
// - Možnosti odpovědí se v každém vyvolání zamíchají, takže si nezapamatuješ jen „vždy B".

const drillKey = q => `${q.v}${q.n}`;
let drillPDeck = [];          // pole indexů (do PAST_TESTS)
let drillPI = 0;
let drillAnswered = false;
let drillCurrentOpts = [];   // zamíchané možnosti pro aktuální otázku [{text, correct}]
let drillMode = "all";       // "all" | "A" | "B" | "review" | "quick" | "exam2024"
let drillSessionStats = { correct: 0, wrong: 0, currentStreak: 0, bestStreak: 0 };
let drillSessionMax = null;  // null = neomezeno; číslo = ukončit po N odpovědích
let drillAutoTimer = null;   // setTimeout handle pro auto-advance
let drillSessionWrong = [];  // [{key, topic, q, correct, chosen}] pro cvičný test

// Mapa otázek LS 2024/2025 (varianta A1–A30, B1–B30) → kategorie pro „na co si dát pozor"
const LS2024_TOPICS = {
  A1:"verbForms", A2:"verbForms", A3:"verbForms", B14:"verbForms", B16:"verbForms",
  B15:"imperativ",
  A4:"interrog",
  A6:"datum", B1:"datum",
  A5:"adjEnd", A7:"adjEnd", A8:"adjEnd", A19:"adjEnd", A21:"adjEnd",
  A24:"adjEnd", A25:"adjEnd", A27:"adjEnd",
  B2:"adjEnd", B3:"adjEnd", B4:"adjEnd", B7:"adjEnd", B8:"adjEnd",
  B9:"adjEnd", B12:"adjEnd", B23:"adjEnd", B25:"adjEnd", B27:"adjEnd",
  A9:"wohinWo", B5:"wohinWo",
  A10:"modal", B6:"modal", B17:"modal",
  A11:"subord", A14:"subord", A28:"subord", B11:"subord", B19:"subord",
  A17:"inversion", B20:"inversion",
  A12:"negation", A15:"negation", B18:"negation", B21:"negation",
  A16:"reflexive", B13:"reflexive",
  A18:"separable", B22:"separable",
  A20:"comparison", A22:"comparison", A23:"comparison",
  B24:"comparison", B26:"comparison", B28:"comparison",
  A13:"prepCase", A26:"prepCase", B10:"prepCase", B27:"prepCase",
  A29:"pronoun", B29:"pronoun",
  A30:"verbColloc", B30:"verbColloc",
};

const TOPIC_TIPS = {
  verbForms:  { label: "Časování silných sloves", tip: "sprechen, lesen, nehmen, geben mění kmen v <b>du</b> a <b>er/sie/es</b> (e→i, e→ie). U <b>fahren/laufen</b> je přehláska v <b>du/er/sie/es</b>, ALE v <b>ihr-tvaru přehláska MIZÍ</b> (ihr lauft, ihr fahrt)." },
  imperativ:  { label: "Imperativ", tip: "Imperativ <b>du</b>: vezmi přítomný čas du-tvaru, odeber -st. U <b>fahren/laufen</b> přehláska <b>MIZÍ</b> (Fahr! Lauf!). U sprechen/geben/nehmen e→i <b>zůstává</b> (Sprich! Gib! Nimm!). Imperativ <b>ihr</b> = tvar přít. času bez zájmena (Sagt! Macht!)." },
  interrog:   { label: "Tázací zájmena (welch-/wessen)", tip: "<b>welch-</b> se skloňuje jako určitý člen: welches Buch (n.), welchen Mann (m. ak.), welcher Frau (f. dat.). <b>Wessen?</b> = Čí? — nemění se podle rodu." },
  datum:      { label: "Datum (Heute haben wir den ...)", tip: "Po „Heute/Morgen haben wir...“ je datum v <b>AKUZATIVU s členem den</b>: den ersten/zweiten/dritten… vierundzwanzigsten Mai." },
  adjEnd:     { label: "Adjektivní koncovky", tip: "Klíč: 1) <b>der-slovo</b> (der/die/das, dieser, jeder…) → slabé skloňování (-e/-en). 2) <b>ein-slovo</b> (ein, mein, kein…) → smíšené (signál vyjadřuje koncovka adj.). 3) <b>BEZ členu</b> → silné (koncovka jako u členu). V <b>dativu/genitivu po der-slově je VŽDY -en</b>." },
  wohinWo:    { label: "Wohin (akuzativ) vs Wo (dativ)", tip: "<b>Wohin?</b> = kam? → <b>AKUZATIV</b> (in den Tisch, ins Schlafzimmer). <b>Wo?</b> = kde? → <b>DATIV</b> (in dem Tisch, im Schlafzimmer). Týká se in/an/auf/über/unter/vor/hinter/neben/zwischen." },
  modal:      { label: "Modální slovesa + infinitiv", tip: "Modální (wollen/können/müssen/sollen/möchten) je na 2. místě, <b>infinitiv úplně NA KONCI</b> věty. Odlučitelné předpony zůstávají u infinitivu (anbieten, ablegen, vorstellen)." },
  subord:     { label: "Vedlejší věta — sloveso na konci", tip: "Po spojkách <b>dass, ob, weil, wenn, obwohl, warum</b> jde určité sloveso <b>NA ÚPLNÝ KONEC</b>. Pokud je tam modální sloveso, je <b>až za infinitivem</b> (… arbeiten müssen, … kommen muss)." },
  inversion:  { label: "Inverze po vedlejší větě", tip: "Když věta začíná vedlejší větou (Wenn ich Schmerzen habe, …), v hlavní větě je <b>INVERZE</b> — sloveso na 1. místě, podmět za ním (… gehe ich zum Arzt)." },
  negation:   { label: "nicht vs kein, jed-", tip: "<b>kein-</b> popírá podstatné jméno s neurčitým / žádným členem (kein Reis, keine Zeit). <b>nicht</b> popírá sloveso/větu/část. Po „ist/sind/haben“ + nominativ/akuzativ bez členu vyber <b>kein</b>. <b>jed-</b> má koncovky jako určitý člen (jeder Mann, jedes Auto, jede Frau)." },
  reflexive:  { label: "Reflexivní zájmena (mir/mich, dir/dich)", tip: "Pokud sloveso řídí <b>akuzativ</b> (interessieren für, freuen über) → <b>mich, dich, sich</b>. S částí těla nebo s druhým předmětem → <b>DATIV</b> (Ich wasche <b>mir</b> die Hände — myju <b>si</b> ruce)." },
  separable:  { label: "Odlučitelné předpony", tip: "V přítomném čase odlučitelná předpona jde <b>NA KONEC</b> věty (legt … ab, bietet … an). V infinitivu / po modálním <b>zůstává spojená</b> (ablegen, anbieten, vorstellen)." },
  comparison: { label: "Komparativ a superlativ", tip: "Po komparativu vždy <b>als</b> (jünger als ich). Pro stejné srovnání <b>so … wie</b> (so gut wie ich). Superlativ příslovce: <b>am …sten</b> (am schnellsten, am spätesten). Superlativ adjektiva: der/die/das + …ste + koncovka." },
  prepCase:   { label: "Předložky s pevným pádem", tip: "<b>DATIV</b>: aus, bei, mit, nach, seit, von, zu, gegenüber. <b>AKUZATIV</b>: durch, für, gegen, ohne, um. „<b>wissen/erzählen von + dativ</b>“ = vědět/vyprávět o kom/čem. <b>nach + DATIV</b> (nach der neuesten Mode)." },
  pronoun:    { label: "Zástupná zájmena (eins/einen)", tip: "Když nahrazujeme „ein/eine/ein + substantivum“ samotným zájmenem, ein dostává <b>koncovku členu</b>: masc. nom. <b>einer</b>, masc. ak. <b>einen</b>, fem. <b>eine</b>, neutr. <b>eins</b> (NE „ein“!)." },
  verbColloc: { label: "Vazby slovesa", tip: "<b>gern + sloveso</b> = rád dělat něco (gern kommen, gern lesen). <b>jdm. stehen</b> = slušet komu (+ DATIV): Die Bluse steht <b>Ihnen</b>. <b>jdm. gefallen</b> = líbit se komu (+ DATIV)." },
};

const ENCOURAGE_OK = ["Skvělé! 🎉", "Výborně! ⚡", "Trefa! 🎯", "Bomba! 💪", "Tak se to dělá! 👏", "Pokračuj! 🔥", "Bingo! ✨", "Tohle máš! 🌟"];
const ENCOURAGE_BAD = ["Nevadí — vrátí se brzy. 💪", "Tohle je oříšek. Zapamatuj si vzor. 🌰", "Příště lépe! 📚", "Dáš to, jen klid. 😌", "Zkus si to projít znovu. 🔄"];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function vibrate(pattern) { if (navigator.vibrate) try { navigator.vibrate(pattern); } catch {} }

function buildDrillDeck(mode = "all") {
  drillMode = mode;
  drillSessionMax = null;
  drillSessionWrong = [];

  let pool = PAST_TESTS.map((_, i) => i);
  if (mode === "A") pool = pool.filter(i => PAST_TESTS[i].v === "A");
  else if (mode === "B") pool = pool.filter(i => PAST_TESTS[i].v === "B");
  else if (mode === "A23") pool = pool.filter(i => PAST_TESTS[i].v === "A23");
  else if (mode === "B23") pool = pool.filter(i => PAST_TESTS[i].v === "B23");
  else if (mode === "2024") pool = pool.filter(i => PAST_TESTS[i].v === "A" || PAST_TESTS[i].v === "B");
  else if (mode === "2023") pool = pool.filter(i => PAST_TESTS[i].v === "A23" || PAST_TESTS[i].v === "B23");
  else if (mode === "review") pool = pool.filter(i => state.drill.mastered[drillKey(PAST_TESTS[i])]);
  else if (mode === "exam2024") {
    // Cvičný test: 60 otázek LS 2024/2025 v pevném pořadí (A1–30, B1–30), single pass
    const aPool = pool.filter(i => PAST_TESTS[i].v === "A").sort((x,y) => PAST_TESTS[x].n - PAST_TESTS[y].n);
    const bPool = pool.filter(i => PAST_TESTS[i].v === "B").sort((x,y) => PAST_TESTS[x].n - PAST_TESTS[y].n);
    drillPDeck = aPool.concat(bPool);
    drillSessionMax = drillPDeck.length;
    drillPI = 0;
    drillAnswered = false;
    drillSessionStats = { correct: 0, wrong: 0, currentStreak: 0, bestStreak: 0 };
    return;
  }
  else if (mode === "quick") {
    // Rychlá session: 10 otázek, prioritně nezvládnuté + pár review
    const fresh = shuffle(pool.filter(i => !state.drill.mastered[drillKey(PAST_TESTS[i])]));
    const masteredArr = shuffle(pool.filter(i => state.drill.mastered[drillKey(PAST_TESTS[i])]));
    pool = fresh.slice(0, 8).concat(masteredArr.slice(0, 2));
    if (pool.length < 10) pool = pool.concat(fresh.slice(8, 10 - pool.length + 8));
    drillSessionMax = 10;
    drillPDeck = shuffle(pool);
    drillPI = 0; drillAnswered = false;
    drillSessionStats = { correct: 0, wrong: 0, currentStreak: 0, bestStreak: 0 };
    return;
  }

  // Nové/rozpracované nahoru, zvládnuté dolů
  const fresh = pool.filter(i => !state.drill.mastered[drillKey(PAST_TESTS[i])]);
  const mastered = pool.filter(i => state.drill.mastered[drillKey(PAST_TESTS[i])]);
  drillPDeck = shuffle(fresh).concat(shuffle(mastered));
  drillPI = 0;
  drillAnswered = false;
  drillSessionStats = { correct: 0, wrong: 0, currentStreak: 0, bestStreak: 0 };
}

function renderDrill() {
  if (drillAutoTimer) { clearTimeout(drillAutoTimer); drillAutoTimer = null; }

  const totalCount = PAST_TESTS.length;
  const masteredCount = Object.keys(state.drill.mastered).filter(k => state.drill.mastered[k]).length;
  const acc = state.drill.attempts ? Math.round(state.drill.correct / state.drill.attempts * 100) : 0;

  if (!drillPDeck.length) {
    // ===== HOME / MODE PICKER =====
    app.innerHTML = `
      <h2>🔥 Drill testů</h2>
      <p style="color:var(--muted); margin:0 0 16px">Aktivně si dril<wbr>luj 119 otázek z minulých zápočtů. Každou musíš dát 2× správně za sebou — pak je tvoje.</p>

      <div class="card drill-stats">
        <div class="stat"><span>Zvládnuté otázky</span><b>${masteredCount} / ${totalCount}</b></div>
        <div class="bar"><div class="bar-fill" style="width:${totalCount?masteredCount/totalCount*100:0}%"></div></div>
        <div class="stat"><span>Přesnost (celkem)</span><b>${acc} %</b></div>
        <div class="stat"><span>Sessions</span><b>${state.drill.sessions}</b></div>
      </div>

      <div class="drill-mode-stack">
        <button class="primary drill-cta" data-mode="quick">⚡ Rychlá session <span class="drill-cta-sub">10 otázek · ~3 min</span></button>
        <button class="primary drill-cta" data-mode="exam2024" style="background:var(--accent-2); box-shadow:0 4px 0 var(--accent-2-shade)">📝 Cvičný test 2024/2025 <span class="drill-cta-sub">60 otázek · % skóre + tipy na konci</span></button>
        <button class="primary drill-cta drill-cta-secondary" data-mode="all">🎯 Pokračovat (Všech 119)</button>
        ${masteredCount ? `<button class="ghost drill-cta" data-mode="review">📖 Review zvládnutých (${masteredCount})</button>` : ''}
      </div>

      <details class="drill-details">
        <summary>Po ročníku / variantě</summary>
        <h4 style="color:var(--blue-shade); margin:14px 0 8px">Ročník 2024/2025 (60 otázek)</h4>
        <div class="drill-mode-row">
          <button class="btn drill-mode-btn" data-mode="2024" style="background:var(--blue); box-shadow:0 4px 0 var(--blue-shade)">📘 Celý 2024 (60)</button>
          <button class="btn drill-mode-btn" data-mode="A" style="background:var(--blue); box-shadow:0 4px 0 var(--blue-shade); opacity:.85">Varianta A (30)</button>
          <button class="btn drill-mode-btn" data-mode="B" style="background:#A560E8; box-shadow:0 4px 0 #7C3FBA">Varianta B (30)</button>
        </div>
        <h4 style="color:var(--accent-2-shade); margin:14px 0 8px">Ročník 2023/2024 (59 otázek)</h4>
        <div class="drill-mode-row">
          <button class="btn drill-mode-btn" data-mode="2023" style="background:var(--accent-2); box-shadow:0 4px 0 var(--accent-2-shade)">📕 Celý 2023 (59)</button>
          <button class="btn drill-mode-btn" data-mode="A23" style="background:var(--accent-2); box-shadow:0 4px 0 var(--accent-2-shade); opacity:.85">Varianta A23 (29)</button>
          <button class="btn drill-mode-btn" data-mode="B23" style="background:#FB923C; box-shadow:0 4px 0 #C77024">Varianta B23 (30)</button>
        </div>
      </details>

      <p style="color:var(--muted); margin-top:18px; font-size:12px; text-align:center">💡 Klávesy: <b>1 / 2 / 3</b> = odpověď · <b>Enter</b> = další</p>
      ${masteredCount ? `<div style="margin-top:10px; text-align:center"><button class="ghost" id="drillReset" style="font-size:11px; padding:6px 12px">🗑️ Resetovat drill pokrok</button></div>` : ''}
    `;
    app.querySelectorAll("[data-mode]").forEach(b => b.addEventListener("click", () => {
      buildDrillDeck(b.dataset.mode);
      state.drill.sessions++;
      save();
      renderDrill();
    }));
    const rst = document.getElementById("drillReset");
    if (rst) rst.addEventListener("click", () => {
      if (confirm("Resetovat veškerý drill pokrok (zvládnuté otázky + statistiky)?")) {
        state.drill = { mastered: {}, streaks: {}, attempts: 0, correct: 0, sessions: 0 };
        save();
        renderDrill();
      }
    });
    return;
  }

  // ===== END OF SESSION =====
  if (drillPI >= drillPDeck.length || (drillSessionMax && (drillSessionStats.correct + drillSessionStats.wrong) >= drillSessionMax)) {
    const total = drillSessionStats.correct + drillSessionStats.wrong;
    const pct = total ? Math.round(drillSessionStats.correct / total * 100) : 0;
    const isQuick = drillMode === "quick";
    const isExam = drillMode === "exam2024";
    let cheer = "🎉 Skvělá práce!";
    if (isExam) {
      if (pct >= 90) cheer = "🏆 Skvělé! Na zkoušku jsi připraven/a.";
      else if (pct >= 75) cheer = "🔥 Dobrý výkon — pár oblastí ještě dotáhni.";
      else if (pct >= 60) cheer = "💪 Slušné, ale je nad čím pracovat.";
      else if (pct >= 40) cheer = "📚 Chce to ještě drillovat — zaměř se na témata níže.";
      else cheer = "⚠️ Tohle bude potřebovat víc tréninku. Projdi si tipy a dej druhý pokus.";
    } else {
      if (pct >= 90) cheer = "🏆 Bomba! Tohle máš ve fingrech.";
      else if (pct >= 70) cheer = "🔥 Dobrá session — pokračuj!";
      else if (pct >= 50) cheer = "💪 Slušné — ještě jeden kolo a bude to.";
      else cheer = "📚 Hlavně se nedej. Tyhle se brzy vrátí.";
    }

    // Pro cvičný test: agregace chyb podle tématu
    let watchOutHtml = "";
    if (isExam) {
      const topicCounts = {};       // topic -> count
      const topicQuestions = {};    // topic -> [{q, chosen, correct}]
      const noTopic = [];
      drillSessionWrong.forEach(w => {
        const t = LS2024_TOPICS[w.key];
        if (t) {
          topicCounts[t] = (topicCounts[t] || 0) + 1;
          (topicQuestions[t] = topicQuestions[t] || []).push(w);
        } else {
          noTopic.push(w);
        }
      });
      const sortedTopics = Object.keys(topicCounts).sort((a,b) => topicCounts[b] - topicCounts[a]);

      if (drillSessionWrong.length === 0) {
        watchOutHtml = `
          <div class="card" style="margin-top:18px; border-left:4px solid var(--ok)">
            <h3 style="margin:0 0 8px; color:var(--ok)">🎯 Bez chyb!</h3>
            <p style="margin:0; color:var(--muted)">Žádná otázka špatně — gramatiku máš zvládnutou. Můžeš jít na ostro.</p>
          </div>
        `;
      } else {
        watchOutHtml = `
          <div class="card" style="margin-top:18px; border-left:4px solid var(--accent-2)">
            <h3 style="margin:0 0 4px">⚠️ Na co si dát pozor</h3>
            <p style="margin:0 0 14px; color:var(--muted); font-size:13px">Témata seřazena podle počtu chyb. Klikni na téma pro rozbalení tipu a všech tvých chyb.</p>
            ${sortedTopics.map(t => {
              const tip = TOPIC_TIPS[t] || { label: t, tip: "" };
              const items = topicQuestions[t];
              return `
                <details class="watchout-topic" style="margin-bottom:8px; border:1px solid var(--border); border-radius:8px; padding:10px 12px; background:var(--bg)">
                  <summary style="cursor:pointer; font-weight:700; display:flex; justify-content:space-between; align-items:center; gap:8px">
                    <span>${tip.label}</span>
                    <span style="background:var(--err); color:#fff; padding:2px 10px; border-radius:12px; font-size:12px">${topicCounts[t]}× chyba</span>
                  </summary>
                  <div style="margin-top:10px; padding:10px 12px; background:#FFF8EC; border-left:3px solid var(--gold-shade); border-radius:6px; font-size:14px; line-height:1.5">
                    <b>💡 Pravidlo:</b> ${tip.tip}
                  </div>
                  <div style="margin-top:10px">
                    ${items.map(w => `
                      <div style="padding:8px 10px; margin-bottom:6px; background:#FFEEEE; border-radius:6px; font-size:13px">
                        <div style="color:var(--muted); font-size:11px; margin-bottom:2px">Varianta ${w.q.v} · Otázka ${w.q.n}</div>
                        <div style="margin-bottom:4px">${w.q.q.replace("______", `<mark style="background:#FFD7D7; padding:1px 4px; border-radius:3px">______</mark>`)}</div>
                        <div style="font-size:12px"><span style="color:var(--err)">Tvoje:</span> <s>${w.chosen}</s> &nbsp; <span style="color:var(--ok)">Správně:</span> <b>${w.correct === "0" ? "(prázdné)" : w.correct}</b></div>
                        ${w.q.cz ? `<div style="font-size:12px; color:var(--muted); margin-top:3px">🇨🇿 ${w.q.cz}</div>` : ''}
                      </div>
                    `).join("")}
                  </div>
                </details>
              `;
            }).join("")}
            ${noTopic.length ? `<div style="font-size:12px; color:var(--muted); margin-top:8px">+ ${noTopic.length} dalších chyb bez kategorie</div>` : ''}
          </div>
        `;
      }
    }

    app.innerHTML = `
      <div class="drill-end">
        <h2 style="text-align:center; margin-bottom:8px">${isExam ? "📝 Cvičný test 2024/2025 hotový" : isQuick ? "⚡ Rychlá session hotová" : "🎉 Session dokončena"}</h2>
        <p style="text-align:center; color:var(--muted); margin:0 0 18px; font-size:15px">${cheer}</p>

        <div class="drill-end-score">
          <div class="drill-end-num" style="color:${pct>=70?'var(--ok)':pct>=50?'var(--gold-shade)':'var(--err)'}">${pct} %</div>
          <div class="drill-end-lbl">${isExam ? "přesnost cvičného testu" : "přesnost session"}</div>
        </div>

        <div class="card">
          <div class="stat"><span>✅ Správně</span><b style="color:var(--ok)">${drillSessionStats.correct}</b></div>
          <div class="stat"><span>❌ Špatně</span><b style="color:var(--err)">${drillSessionStats.wrong}</b></div>
          <div class="stat"><span>🔥 Nejlepší řetězec</span><b>${drillSessionStats.bestStreak}</b></div>
          ${isExam ? '' : `<div class="stat"><span>🏆 Zvládnuté celkem</span><b>${masteredCount} / ${totalCount}</b></div>
          <div class="bar"><div class="bar-fill" style="width:${totalCount?masteredCount/totalCount*100:0}%"></div></div>`}
        </div>

        ${watchOutHtml}

        <div class="drill-actions-stack">
          <button class="primary drill-cta" id="drillAgain">🔁 ${isExam ? "Znovu cvičný test" : "Další session"}</button>
          <button class="ghost drill-cta" id="drillBack">← Zpět na výběr</button>
        </div>
      </div>
    `;
    document.getElementById("drillAgain").addEventListener("click", () => {
      buildDrillDeck(drillMode);
      state.drill.sessions++;
      save();
      renderDrill();
    });
    document.getElementById("drillBack").addEventListener("click", () => {
      drillPDeck = [];
      renderDrill();
    });
    return;
  }

  // ===== QUESTION VIEW =====
  const qIdx = drillPDeck[drillPI];
  const q = PAST_TESTS[qIdx];
  const key = drillKey(q);
  const streak = state.drill.streaks[key] || 0;

  if (!drillAnswered) {
    drillCurrentOpts = shuffle(q.opts.map((text, i) => ({ text, correct: i === q.a })));
  }

  const sessionAnswered = drillSessionStats.correct + drillSessionStats.wrong;
  const sessionTotal = drillSessionMax || drillPDeck.length;
  const sessionPct = drillSessionMax ? (sessionAnswered / drillSessionMax * 100) : ((drillPI / drillPDeck.length) * 100);

  const masteryHint = state.drill.mastered[key]
    ? '<span class="drill-mastery-pill mastered">✓ Už zvládnutá — review</span>'
    : streak === 0
      ? '<span class="drill-mastery-pill fresh">Nová · 2× správně = zvládnutá</span>'
      : '<span class="drill-mastery-pill streak1">✅ 1× — ještě 1× a máš ji!</span>';

  const streakBadge = drillSessionStats.currentStreak > 0
    ? `<span class="drill-streak active">🔥 <b>${drillSessionStats.currentStreak}</b></span>`
    : `<span class="drill-streak">🔥 <b>0</b></span>`;

  const modeLabels = {
    all: "Všech 119", "2024": "Ročník 2024", "2023": "Ročník 2023",
    A: "Varianta A", B: "Varianta B", A23: "Varianta A23", B23: "Varianta B23",
    review: "Review", quick: "Rychlá session", exam2024: "📝 Cvičný test 2024/25"
  };
  const modeLabel = modeLabels[drillMode] || drillMode;

  app.innerHTML = `
    <div class="drill-stage">
      <div class="drill-topbar">
        <div class="drill-progress-row">
          <div class="bar drill-progress-bar"><div class="bar-fill" style="width:${sessionPct}%"></div></div>
          ${streakBadge}
        </div>
        <div class="drill-meta-row">
          <span>${drillMode === "quick" ? `${sessionAnswered}/${drillSessionMax} odpovědí` : `Otázka ${drillPI+1}/${drillPDeck.length}`}</span>
          <span class="dot">·</span>
          <span>${modeLabel}</span>
          <span class="dot">·</span>
          <span>✅ ${drillSessionStats.correct} / ❌ ${drillSessionStats.wrong}</span>
        </div>
      </div>

      <div class="drill-question-card">
        <div class="drill-question-meta">Varianta ${q.v} · Otázka ${q.n}/30</div>
        ${masteryHint}
        <div class="drill-question">${q.q.replace("______", '<span class="drill-blank">______</span>')}</div>
      </div>

      <div class="drill-options" id="opts">
        ${drillCurrentOpts.map((o, i) => `
          <button class="opt drill-opt" data-i="${i}">
            <span class="drill-opt-num">${i+1}</span>
            <span class="drill-opt-text">${o.text}</span>
          </button>
        `).join("")}
      </div>

      <div id="feedback" class="drill-feedback"></div>

      <div class="drill-actions" id="drillActions">
        <button class="ghost drill-back-btn" id="drillBack">← Zpět</button>
        ${drillMode === "exam2024" ? '' : '<button class="ghost drill-skip-btn" id="drillSkip">Přeskočit</button>'}
        <button class="primary drill-next-btn" id="drillNext" style="display:none">Další →</button>
      </div>
    </div>
  `;

  app.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answerDrill(parseInt(b.dataset.i))));
  document.getElementById("drillBack").addEventListener("click", () => { drillPDeck = []; renderDrill(); });
  const skipBtn = document.getElementById("drillSkip");
  if (skipBtn) skipBtn.addEventListener("click", () => { drillPI++; drillAnswered = false; renderDrill(); });
  document.getElementById("drillNext").addEventListener("click", nextDrill);
}

function answerDrill(i) {
  if (drillAnswered) return;
  drillAnswered = true;
  const qIdx = drillPDeck[drillPI];
  const q = PAST_TESTS[qIdx];
  const key = drillKey(q);
  const chosen = drillCurrentOpts[i];
  const ok = chosen.correct;

  const opts = app.querySelectorAll(".opt");
  opts.forEach((o, idx) => {
    o.classList.add("disabled");
    if (drillCurrentOpts[idx].correct) o.classList.add("correct");
    else if (idx === i) o.classList.add("wrong");
  });

  state.drill.attempts++;
  const isExam = drillMode === "exam2024";
  if (ok) {
    state.drill.correct++;
    drillSessionStats.correct++;
    drillSessionStats.currentStreak++;
    if (drillSessionStats.currentStreak > drillSessionStats.bestStreak) {
      drillSessionStats.bestStreak = drillSessionStats.currentStreak;
    }
    vibrate(30);  // krátká kladná vibrace
    if (!isExam) {
      const newStreak = (state.drill.streaks[key] || 0) + 1;
      state.drill.streaks[key] = newStreak;
      if (newStreak >= 2) {
        state.drill.mastered[key] = true;
        drillPDeck.splice(drillPI, 1);
        drillPI--;
      } else {
        drillPDeck.splice(drillPI, 1);
        const insertAt = Math.min(drillPDeck.length, drillPI + 8 + Math.floor(Math.random()*5));
        drillPDeck.splice(insertAt, 0, qIdx);
        drillPI--;
      }
    }
  } else {
    drillSessionStats.wrong++;
    drillSessionStats.currentStreak = 0;
    vibrate([60, 40, 60]);  // delší "wrong" pattern
    if (isExam) {
      drillSessionWrong.push({ key, q, chosen: chosen.text, correct: q.opts[q.a] });
    } else {
      state.drill.streaks[key] = 0;
      drillPDeck.splice(drillPI, 1);
      const insertAt = Math.min(drillPDeck.length, drillPI + 2 + Math.floor(Math.random()*3));
      drillPDeck.splice(insertAt, 0, qIdx);
      drillPI--;
    }
  }
  save();

  const correctText = q.opts[q.a];
  const cheer = ok ? pick(ENCOURAGE_OK) : pick(ENCOURAGE_BAD);
  const willMaster = ok && (state.drill.mastered[key]);
  const masteryNote = willMaster ? '<div class="drill-master-pop">🏆 Otázka zvládnutá! Posouvá se do review.</div>' : '';
  // Plná správná věta s vyplněnou odpovědí (zvýrazněná). Pokud je správná odpověď "0", doplníme prázdno.
  const fillText = correctText === "0" ? "" : correctText;
  const fullSentence = q.q.replace("______", `<mark class="drill-answer-fill">${fillText || "—"}</mark>`);
  const czLine = q.cz ? `<div class="drill-feedback-cz"><span class="drill-feedback-cz-flag">🇨🇿</span> ${q.cz}</div>` : '';

  document.getElementById("feedback").innerHTML = `
    <div class="expl ${ok?'ok':'bad'} drill-feedback-box">
      <div class="drill-feedback-head"><b>${ok ? '✅ Správně!' : '❌ Špatně.'}</b> <span class="drill-cheer">${cheer}</span></div>
      ${!ok ? `
        <div class="drill-feedback-correct">Správná odpověď: <b>${correctText === "0" ? "(nic — prázdné pole)" : correctText}</b></div>
        <div class="drill-feedback-sentence">
          <div class="drill-feedback-sentence-de">${fullSentence}</div>
          ${czLine}
        </div>
        <div class="drill-feedback-why"><span class="drill-feedback-why-label">💡 Proč:</span> ${q.expl}</div>
      ` : `<div class="drill-feedback-expl">${q.expl}</div>`}
      ${masteryNote}
    </div>
  `;

  // Aktualizovat streak badge nahoře (bez plného re-renderu)
  const streakEl = document.querySelector(".drill-streak");
  if (streakEl) {
    streakEl.classList.toggle("active", drillSessionStats.currentStreak > 0);
    streakEl.innerHTML = `🔥 <b>${drillSessionStats.currentStreak}</b>`;
  }
  // Aktualizovat skóre v meta řádku
  const metaRow = document.querySelector(".drill-meta-row");
  if (metaRow) {
    const last = metaRow.lastElementChild;
    if (last) last.textContent = `✅ ${drillSessionStats.correct} / ❌ ${drillSessionStats.wrong}`;
  }

  const nextBtn = document.getElementById("drillNext");
  nextBtn.style.display = "block";
  nextBtn.focus();

  // Auto-advance na správné odpovědi (1.2s) — uživatel může klepnout Další pro okamžitý přechod
  // V cvičném testu auto-advance vypneme, aby si user stihl přečíst vysvětlení
  if (ok && !isExam) {
    nextBtn.classList.add("drill-next-auto");
    nextBtn.innerHTML = 'Další → <span class="drill-auto-bar"></span>';
    drillAutoTimer = setTimeout(() => {
      drillAutoTimer = null;
      nextDrill();
    }, 1200);
  }
}

function nextDrill() {
  drillPI++;
  drillAnswered = false;
  renderDrill();
}

// Klávesové zkratky pro drill
document.addEventListener("keydown", e => {
  const activeTab = nav.querySelector("button.active");
  if (!activeTab || activeTab.dataset.view !== "drill") return;
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (!drillPDeck.length || drillPI >= drillPDeck.length) return;

  if (e.key === "Enter") {
    const next = document.getElementById("drillNext");
    if (next && next.style.display !== "none") { e.preventDefault(); nextDrill(); }
  } else if (!drillAnswered && ["1","2","3"].includes(e.key)) {
    const idx = parseInt(e.key) - 1;
    if (idx < drillCurrentOpts.length) { e.preventDefault(); answerDrill(idx); }
  }
});

// ==== ÚSTNÍ ZKOUŠKA ====
// Stav: state.oral.mastered[`${topicId}|${idx}`] = true
// Režimy: "browse" (přehled + 🔊) | "train" (CZ→DE recall + odhalit + auto-play)
let oralTopic = null;       // null = výběr tématu, jinak topic id
let oralMode = "browse";    // "browse" | "train"
let oralTrainIdx = 0;
let oralRevealed = false;
let oralPlayAllAbort = false;

const oralKey = (topicId, idx) => `${topicId}|${idx}`;
const oralFindTopic = id => ORAL_EXAM.find(t => t.id === id);
const oralMasteredCount = topic => topic.sentences.reduce((acc, _, i) => acc + (state.oral.mastered[oralKey(topic.id, i)] ? 1 : 0), 0);

function speakDe(text, rate = 0.9) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "de-DE";
  u.rate = rate;
  window.speechSynthesis.speak(u);
}

function renderOral() {
  // Cancel any ongoing speech when re-rendering the view
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  oralPlayAllAbort = true; // signal any sequential player to stop

  if (!oralTopic) return renderOralHome();
  const topic = oralFindTopic(oralTopic);
  if (!topic) { oralTopic = null; return renderOralHome(); }
  if (oralMode === "train") return renderOralTrain(topic);
  return renderOralBrowse(topic);
}

function renderOralHome() {
  const totalSentences = ORAL_EXAM.reduce((a, t) => a + t.sentences.length, 0);
  const totalMastered = ORAL_EXAM.reduce((a, t) => a + oralMasteredCount(t), 0);
  const speechSupport = ("speechSynthesis" in window);

  app.innerHTML = `
    <h2>🗣️ Ústní zkouška</h2>
    <p style="color:var(--muted); margin:0 0 14px">Nauč se 7 témat nazpaměť. Klepni 🔊 a slyšíš německou výslovnost (umělý hlas v prohlížeči). V trénovacím režimu vidíš český překlad a sám/sama říkáš německy.</p>

    ${!speechSupport ? `<div class="card" style="border-left:4px solid var(--err); background:var(--accent-2-tint)">
      <b>⚠️ Tento prohlížeč nepodporuje hlasovou syntézu.</b> Přehrávání výslovnosti nebude fungovat. Vyzkoušej Chrome / Safari / Edge.
    </div>` : ''}

    <div class="card oral-overall">
      <div class="stat"><span>Naučené věty (celkem)</span><b>${totalMastered} / ${totalSentences}</b></div>
      <div class="bar"><div class="bar-fill" style="width:${totalSentences?totalMastered/totalSentences*100:0}%"></div></div>
    </div>

    <h3 style="margin:18px 0 10px">Vyber téma</h3>
    <div class="oral-topics">
      ${ORAL_EXAM.map(t => {
        const m = oralMasteredCount(t);
        const tot = t.sentences.length;
        const pct = tot ? m/tot*100 : 0;
        return `
          <button class="oral-topic-card" data-topic="${t.id}">
            <div class="oral-topic-emoji">${t.emoji}</div>
            <div class="oral-topic-body">
              <div class="oral-topic-title">${t.title}</div>
              <div class="oral-topic-de">${t.de}</div>
              <div class="oral-topic-meta">${m} / ${tot} naučeno · ${tot} vět</div>
              <div class="bar oral-topic-bar"><div class="bar-fill" style="width:${pct}%"></div></div>
            </div>
            <div class="oral-topic-go">›</div>
          </button>
        `;
      }).join("")}
    </div>

    <details class="drill-details" style="margin-top:18px">
      <summary>💡 Tipy na zapamatování (z PDF)</summary>
      <ul style="margin:10px 0 4px; padding-left:20px; color:var(--text); font-size:14px; line-height:1.6">
        <li>Uč se <b>jedno téma denně</b> — ne vše najednou.</li>
        <li>Říkej věty <b>NAHLAS</b> — výslovnost A1 je logická.</li>
        <li>Slova jako Burger, Steak, DJ, Hiking, Computer, Telefon, Fitness = stejná v němčině.</li>
        <li>Pokud zapomeneš slovo, řekni: <i>"Moment bitte..."</i> a zopakuj větu.</li>
        <li>Každá věta = jeden fakt. Nespojuj víc věcí dohromady.</li>
      </ul>
    </details>
  `;

  app.querySelectorAll(".oral-topic-card").forEach(b => b.addEventListener("click", () => {
    oralTopic = b.dataset.topic;
    oralMode = "browse";
    renderOral();
  }));
}

function renderOralTopicHeader(topic) {
  const m = oralMasteredCount(topic);
  const tot = topic.sentences.length;
  const pct = tot ? m/tot*100 : 0;
  return `
    <div class="oral-header">
      <button class="ghost oral-back" id="oralBack">← Zpět na výběr</button>
      <div class="oral-header-title">
        <span class="oral-header-emoji">${topic.emoji}</span>
        <div>
          <div class="oral-header-h">${topic.title}</div>
          <div class="oral-header-de">${topic.de}</div>
        </div>
      </div>
      ${topic.intro ? `<div class="oral-header-intro">${topic.intro}</div>` : ''}
      <div class="oral-header-progress">
        <div class="bar"><div class="bar-fill" style="width:${pct}%"></div></div>
        <div class="oral-header-progress-txt">${m} / ${tot} naučeno</div>
      </div>
      <div class="oral-mode-tabs">
        <button class="oral-mode-tab ${oralMode==='browse'?'active':''}" data-mode="browse">📜 Přehled</button>
        <button class="oral-mode-tab ${oralMode==='train'?'active':''}" data-mode="train">🧠 Trénink (CZ→DE)</button>
      </div>
    </div>
  `;
}

function renderOralBrowse(topic) {
  app.innerHTML = `
    ${renderOralTopicHeader(topic)}
    <div class="oral-actions-row">
      <button class="primary oral-play-all" id="oralPlayAll">▶ Přehrát celé téma</button>
      <button class="ghost" id="oralStop">⏹ Stop</button>
    </div>
    <div class="oral-list">
      ${topic.sentences.map(([de, cz], i) => {
        const k = oralKey(topic.id, i);
        const known = state.oral.mastered[k];
        return `
          <div class="oral-row ${known?'known':''}" data-i="${i}">
            <div class="oral-row-num">${i+1}</div>
            <div class="oral-row-body">
              <div class="oral-row-de">${de}</div>
              <div class="oral-row-cz">${cz}</div>
            </div>
            <div class="oral-row-actions">
              <button class="oral-play-btn" data-de="${encodeURIComponent(de)}" title="Přehrát výslovnost">🔊</button>
              <button class="oral-play-btn oral-play-slow" data-de="${encodeURIComponent(de)}" title="Pomalu">🐌</button>
              <button class="oral-know-btn ${known?'on':''}" data-key="${k}">${known?'✓ Umím':'Umím'}</button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  document.getElementById("oralBack").addEventListener("click", () => { oralTopic = null; renderOral(); });
  app.querySelectorAll(".oral-mode-tab").forEach(b => b.addEventListener("click", () => {
    oralMode = b.dataset.mode;
    if (oralMode === "train") { oralTrainIdx = 0; oralRevealed = false; }
    renderOral();
  }));
  app.querySelectorAll(".oral-play-btn").forEach(b => b.addEventListener("click", () => {
    const text = decodeURIComponent(b.dataset.de);
    const slow = b.classList.contains("oral-play-slow");
    speakDe(text, slow ? 0.65 : 0.9);
    b.classList.add("speaking");
    setTimeout(() => b.classList.remove("speaking"), 1500);
  }));
  app.querySelectorAll(".oral-know-btn").forEach(b => b.addEventListener("click", () => {
    const k = b.dataset.key;
    state.oral.mastered[k] = !state.oral.mastered[k];
    save();
    renderOral();
  }));
  document.getElementById("oralPlayAll").addEventListener("click", () => playOralSequence(topic));
  document.getElementById("oralStop").addEventListener("click", () => {
    oralPlayAllAbort = true;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  });
}

function playOralSequence(topic) {
  if (!("speechSynthesis" in window)) return;
  oralPlayAllAbort = false;
  let i = 0;
  const playNext = () => {
    if (oralPlayAllAbort) return;
    if (i >= topic.sentences.length) return;
    const [de] = topic.sentences[i];
    // Highlight current row
    app.querySelectorAll(".oral-row").forEach(r => r.classList.remove("playing"));
    const row = app.querySelector(`.oral-row[data-i="${i}"]`);
    if (row) {
      row.classList.add("playing");
      row.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    const u = new SpeechSynthesisUtterance(de);
    u.lang = "de-DE";
    u.rate = 0.9;
    u.onend = () => { i++; setTimeout(playNext, 400); };
    u.onerror = () => { i++; setTimeout(playNext, 400); };
    window.speechSynthesis.speak(u);
  };
  playNext();
}

function renderOralTrain(topic) {
  const total = topic.sentences.length;
  if (oralTrainIdx >= total) {
    const m = oralMasteredCount(topic);
    app.innerHTML = `
      ${renderOralTopicHeader(topic)}
      <div class="card" style="text-align:center; padding:24px">
        <h2 style="margin:0 0 8px">🎉 Téma projeté!</h2>
        <p style="color:var(--muted); margin:0 0 16px">Naučeno ${m} / ${total} vět v tomto tématu.</p>
        <div class="oral-actions-row" style="justify-content:center">
          <button class="primary" id="oralTrainAgain">🔁 Znovu od začátku</button>
          <button class="ghost" id="oralTrainBrowse">📜 Přehled</button>
        </div>
      </div>
    `;
    document.getElementById("oralBack").addEventListener("click", () => { oralTopic = null; renderOral(); });
    app.querySelectorAll(".oral-mode-tab").forEach(b => b.addEventListener("click", () => {
      oralMode = b.dataset.mode; oralTrainIdx = 0; oralRevealed = false; renderOral();
    }));
    document.getElementById("oralTrainAgain").addEventListener("click", () => {
      oralTrainIdx = 0; oralRevealed = false; renderOral();
    });
    document.getElementById("oralTrainBrowse").addEventListener("click", () => {
      oralMode = "browse"; renderOral();
    });
    return;
  }

  const [de, cz] = topic.sentences[oralTrainIdx];
  const k = oralKey(topic.id, oralTrainIdx);
  const known = state.oral.mastered[k];

  app.innerHTML = `
    ${renderOralTopicHeader(topic)}
    <div class="oral-train-card">
      <div class="oral-train-progress">Věta ${oralTrainIdx+1} / ${total}</div>
      <div class="oral-train-prompt">
        <div class="oral-train-label">🇨🇿 Řekni německy nahlas:</div>
        <div class="oral-train-cz">${cz}</div>
      </div>
      ${oralRevealed ? `
        <div class="oral-train-reveal">
          <div class="oral-train-label">🇩🇪 Správně:</div>
          <div class="oral-train-de-row">
            <div class="oral-train-de">${de}</div>
            <button class="oral-play-btn oral-train-play" id="oralTrainPlay" title="Přehrát">🔊</button>
            <button class="oral-play-btn oral-play-slow" id="oralTrainPlaySlow" title="Pomalu">🐌</button>
          </div>
        </div>
      ` : `
        <div class="oral-train-hint">💭 Zkus to nejdřív sám/sama. Pak klepni „Odhalit".</div>
      `}
    </div>

    <div class="oral-train-actions">
      ${!oralRevealed
        ? `<button class="primary oral-train-cta" id="oralReveal">👁 Odhalit + přehrát</button>`
        : `
          <button class="ghost oral-train-skip" id="oralTrainAgain">↺ Ještě jednou</button>
          <button class="ghost oral-train-skip" id="oralTrainNext">→ Další</button>
          <button class="primary oral-train-cta" id="oralTrainKnow">${known?'✓ Umím (přepnuto)':'✓ Umím — další'}</button>
        `
      }
    </div>
  `;

  document.getElementById("oralBack").addEventListener("click", () => { oralTopic = null; renderOral(); });
  app.querySelectorAll(".oral-mode-tab").forEach(b => b.addEventListener("click", () => {
    oralMode = b.dataset.mode; renderOral();
  }));

  if (!oralRevealed) {
    document.getElementById("oralReveal").addEventListener("click", () => {
      oralRevealed = true;
      renderOral();
      // Auto-play German pronunciation right after reveal
      setTimeout(() => speakDe(de, 0.9), 100);
    });
  } else {
    const playBtn = document.getElementById("oralTrainPlay");
    const playSlowBtn = document.getElementById("oralTrainPlaySlow");
    if (playBtn) playBtn.addEventListener("click", () => speakDe(de, 0.9));
    if (playSlowBtn) playSlowBtn.addEventListener("click", () => speakDe(de, 0.65));
    document.getElementById("oralTrainAgain").addEventListener("click", () => {
      oralRevealed = false; renderOral();
    });
    document.getElementById("oralTrainNext").addEventListener("click", () => {
      oralTrainIdx++; oralRevealed = false; renderOral();
    });
    document.getElementById("oralTrainKnow").addEventListener("click", () => {
      state.oral.mastered[k] = true;
      save();
      oralTrainIdx++; oralRevealed = false; renderOral();
    });
  }
}

// ==== Init ====
renderRail();
renderHome();

// ==== State & storage ====
const STORE_KEY = "nemcina-a1-progress-v1";
const state = load() || { known: {}, quiz: { best: 0, done: 0 }, flash: { seen: 0 }, drill: { mastered: {}, streaks: {}, attempts: 0, correct: 0, sessions: 0 } };
if (!state.drill) state.drill = { mastered: {}, streaks: {}, attempts: 0, correct: 0, sessions: 0 };
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
let drillMode = "all";       // "all" | "A" | "B" | "review"
let drillSessionStats = { correct: 0, wrong: 0 };

function buildDrillDeck(mode = "all") {
  drillMode = mode;
  let pool = PAST_TESTS.map((_, i) => i);
  if (mode === "A") pool = pool.filter(i => PAST_TESTS[i].v === "A");
  else if (mode === "B") pool = pool.filter(i => PAST_TESTS[i].v === "B");
  else if (mode === "A23") pool = pool.filter(i => PAST_TESTS[i].v === "A23");
  else if (mode === "B23") pool = pool.filter(i => PAST_TESTS[i].v === "B23");
  else if (mode === "2024") pool = pool.filter(i => PAST_TESTS[i].v === "A" || PAST_TESTS[i].v === "B");
  else if (mode === "2023") pool = pool.filter(i => PAST_TESTS[i].v === "A23" || PAST_TESTS[i].v === "B23");
  else if (mode === "review") pool = pool.filter(i => state.drill.mastered[drillKey(PAST_TESTS[i])]);

  // Nové/rozpracované nahoru, zvládnuté dolů
  const fresh = pool.filter(i => !state.drill.mastered[drillKey(PAST_TESTS[i])]);
  const mastered = pool.filter(i => state.drill.mastered[drillKey(PAST_TESTS[i])]);
  drillPDeck = shuffle(fresh).concat(shuffle(mastered));
  drillPI = 0;
  drillAnswered = false;
  drillSessionStats = { correct: 0, wrong: 0 };
}

function renderDrill() {
  const totalCount = PAST_TESTS.length;
  const masteredCount = Object.keys(state.drill.mastered).filter(k => state.drill.mastered[k]).length;
  const acc = state.drill.attempts ? Math.round(state.drill.correct / state.drill.attempts * 100) : 0;

  if (!drillPDeck.length) {
    app.innerHTML = `
      <h2>🔥 Drill — Minulé zápočtové testy (ČZU Šumperk)</h2>
      <div class="card" style="border-left:4px solid var(--accent)">
        <p style="margin-top:0">Čtyři reálné zápočtové testy ze dvou ročníků: <b>2024/2025</b> (A + B = 60 otázek) a <b>2023/2024</b> (A23 + B23 = 59 otázek) — celkem <b>119 otázek</b>. Každá se bude opakovat, dokud na ni neodpovíš <b>2× správně za sebou</b>. Špatné odpovědi se vrací brzy, správné se posouvají dál. Tahle technika (spaced repetition + active recall) tě to naučí nejrychleji.</p>
      </div>

      <div class="card">
        <h3 style="margin-top:0">Tvůj pokrok</h3>
        <div class="stat"><span>Zvládnuté otázky</span><b>${masteredCount} / ${totalCount}</b></div>
        <div class="bar"><div class="bar-fill" style="width:${totalCount?masteredCount/totalCount*100:0}%"></div></div>
        <div class="stat"><span>Celková přesnost</span><b>${acc} %</b></div>
        <div class="stat"><span>Počet sessions</span><b>${state.drill.sessions}</b></div>
      </div>

      <div class="card">
        <h3 style="margin-top:0">Vyber režim</h3>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px;">
          <button class="primary" data-mode="all">🎯 Všech 119 otázek</button>
          <button class="ghost" data-mode="review" ${masteredCount?'':'disabled'}>📖 Review (${masteredCount} zvládnutých)</button>
        </div>
        <h4 style="margin:14px 0 8px; color:var(--blue-shade)">Ročník 2024/2025 (60 otázek)</h4>
        <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:12px;">
          <button class="btn" data-mode="2024" style="background:var(--blue); color:#fff; box-shadow:0 4px 0 var(--blue-shade)">📘 Celý ročník 2024 (60)</button>
          <button class="btn" data-mode="A" style="background:var(--blue); color:#fff; box-shadow:0 4px 0 var(--blue-shade); opacity:.85">Varianta A (30)</button>
          <button class="btn" data-mode="B" style="background:#A560E8; color:#fff; box-shadow:0 4px 0 #7C3FBA">Varianta B (30)</button>
        </div>
        <h4 style="margin:14px 0 8px; color:var(--accent-2-shade)">Ročník 2023/2024 (59 otázek)</h4>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <button class="btn" data-mode="2023" style="background:var(--accent-2); color:#fff; box-shadow:0 4px 0 var(--accent-2-shade)">📕 Celý ročník 2023 (59)</button>
          <button class="btn" data-mode="A23" style="background:var(--accent-2); color:#fff; box-shadow:0 4px 0 var(--accent-2-shade); opacity:.85">Varianta A23 (29)</button>
          <button class="btn" data-mode="B23" style="background:#FB923C; color:#fff; box-shadow:0 4px 0 #C77024">Varianta B23 (30)</button>
        </div>
        <p style="color:var(--muted); margin-top:14px; font-size:13px">💡 Klávesové zkratky: <b>1 / 2 / 3</b> odpověď, <b>Enter</b> = další otázka.</p>
        ${masteredCount ? `<div style="margin-top:14px"><button class="ghost" id="drillReset">🗑️ Resetovat drill pokrok</button></div>` : ''}
      </div>
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

  // Konec session (deck prázdný — všechny otázky zvládnuté v této session)
  if (drillPI >= drillPDeck.length) {
    const total = drillSessionStats.correct + drillSessionStats.wrong;
    const pct = total ? Math.round(drillSessionStats.correct / total * 100) : 0;
    app.innerHTML = `
      <h2>🎉 Hotovo — session dokončena</h2>
      <div class="card">
        <h3 style="margin-top:0; color:var(--ok)">Všechny otázky v této session jsi zvládl/a 2× za sebou.</h3>
        <div class="stat"><span>Správně</span><b style="color:var(--ok)">${drillSessionStats.correct}</b></div>
        <div class="stat"><span>Špatně</span><b style="color:var(--err)">${drillSessionStats.wrong}</b></div>
        <div class="stat"><span>Přesnost session</span><b>${pct} %</b></div>
        <div class="stat"><span>Zvládnuté celkem</span><b>${masteredCount} / ${totalCount}</b></div>
        <div class="bar"><div class="bar-fill" style="width:${totalCount?masteredCount/totalCount*100:0}%"></div></div>
      </div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
        <button class="primary" id="drillAgain">🔁 Další session</button>
        <button class="ghost" id="drillBack">← Zpět na výběr</button>
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

  const qIdx = drillPDeck[drillPI];
  const q = PAST_TESTS[qIdx];
  const key = drillKey(q);
  const streak = state.drill.streaks[key] || 0;

  // Zamíchat možnosti (jen jednou pro aktuální otázku)
  if (!drillAnswered) {
    drillCurrentOpts = shuffle(q.opts.map((text, i) => ({ text, correct: i === q.a })));
  }

  const remaining = drillPDeck.length - drillPI;
  const modeLabels = {
    all:    "Všech 119",
    "2024": "Ročník 2024 (A+B)",
    "2023": "Ročník 2023 (A23+B23)",
    A:      "Varianta A (2024)",
    B:      "Varianta B (2024)",
    A23:    "Varianta A23 (ZS 2023)",
    B23:    "Varianta B23 (2023)",
    review: "Review"
  };
  const modeLabel = modeLabels[drillMode] || drillMode;

  app.innerHTML = `
    <h2>🔥 Drill — ${modeLabel}</h2>
    <div class="quiz-prog">
      Otázka ${drillPI+1} / ${drillPDeck.length} · Zbývá: <b>${remaining}</b> · Zvládnuto celkem: <b>${masteredCount}/${totalCount}</b> · Session: ✅ ${drillSessionStats.correct} / ❌ ${drillSessionStats.wrong}
    </div>
    <div class="bar"><div class="bar-fill" style="width:${totalCount?masteredCount/totalCount*100:0}%"></div></div>

    <div class="card">
      <div style="color:var(--muted); font-size:12px; margin-bottom:8px;">
        Varianta ${q.v} · Otázka ${q.n}/30 · Streak: ${streak === 0 ? "— — —" : streak === 1 ? "✅ — —" : "✅ ✅ ✔️"}
      </div>
      <div class="quiz-q" style="font-size:20px; line-height:1.5">${q.q.replace("______", '<span style="color:var(--accent); letter-spacing:2px">______</span>')}</div>
      <div id="opts">
        ${drillCurrentOpts.map((o, i) => `<button class="opt" data-i="${i}"><b style="color:var(--accent); margin-right:10px">${i+1}</b>${o.text}</button>`).join("")}
      </div>
      <div id="feedback"></div>
    </div>
    <div style="margin-top:14px; display:flex; gap:10px; flex-wrap:wrap;">
      <button class="ghost" id="drillBack">← Zpět</button>
      <button class="ghost" id="drillSkip">Přeskočit</button>
      <button class="primary" id="drillNext" style="display:none">Další →</button>
    </div>
  `;

  app.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => answerDrill(parseInt(b.dataset.i))));
  document.getElementById("drillBack").addEventListener("click", () => { drillPDeck = []; renderDrill(); });
  document.getElementById("drillSkip").addEventListener("click", () => { drillPI++; drillAnswered = false; renderDrill(); });
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
  if (ok) {
    state.drill.correct++;
    drillSessionStats.correct++;
    const newStreak = (state.drill.streaks[key] || 0) + 1;
    state.drill.streaks[key] = newStreak;
    if (newStreak >= 2) {
      state.drill.mastered[key] = true;
      // Odstranit z decku
      drillPDeck.splice(drillPI, 1);
      drillPI--; // po drillPI++ v nextDrill skončíme na správné pozici
    } else {
      // Re-insert o 8-12 pozic dál
      drillPDeck.splice(drillPI, 1);
      const insertAt = Math.min(drillPDeck.length, drillPI + 8 + Math.floor(Math.random()*5));
      drillPDeck.splice(insertAt, 0, qIdx);
      drillPI--;
    }
  } else {
    drillSessionStats.wrong++;
    state.drill.streaks[key] = 0;
    // Re-insert o 2-4 pozice dál (vrátí se brzy)
    drillPDeck.splice(drillPI, 1);
    const insertAt = Math.min(drillPDeck.length, drillPI + 2 + Math.floor(Math.random()*3));
    drillPDeck.splice(insertAt, 0, qIdx);
    drillPI--;
  }
  save();

  const correctText = q.opts[q.a];
  document.getElementById("feedback").innerHTML = `
    <div class="expl ${ok?'ok':'bad'}">
      <b>${ok ? '✅ Správně!' : '❌ Špatně.'}</b>
      ${!ok ? `Správná odpověď: <b style="color:var(--ok)">${correctText}</b>.<br>` : ''}
      <span style="color:var(--text)">${q.expl}</span>
    </div>
  `;
  document.getElementById("drillNext").style.display = "inline-block";
  document.getElementById("drillNext").focus();
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

// ==== Init ====
renderRail();
renderHome();

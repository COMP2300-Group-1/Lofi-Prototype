/**
 * COMP2300 Interactive Lo-Fi Prototype Script
 * Deliverable 2: "Runway" (Fuel Gauge) + "What-If Lab" + "Circle" Hybrid
 * Authors: Jun Han, Ong Jie Son, Xu Suyang
 * Client: Pauline Yong (CEO, Sigma Wealth / FPAM Johor)
 */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. Bilingual Dictionary (English & Bahasa Melayu) - US-10
  // -------------------------------------------------------------------------
  let currentLang = "en";

  const i18n = {
    en: {
      langCode: "EN",
      metaBadge: 'COMP2300 • Deliverable 2: Concept 1 "Runway" Hybrid',
      metaTitle: "Student & Fresh Graduate Financial Resilience Navigator",
      metaSubtitle: "Low-Fidelity Interactive Prototype implementing Deliverable 2.md & Wireframe.drawio | Client: Pauline Yong (FPAM)",
      viewModeLabel: "View Mode:",
      btnMobile: "Mobile Simulator (390px)",
      btnDesktop: "Desktop Dashboard (Fluid)",
      langName: "Language:",
      dAppTitle: "Runway: Financial Resilience Navigator",
      dAppSub: "EduCity Campus • Concept 1 'Runway' with What-If Lab & Circle",
      dUserPill: "Student Account (PTPTN Holder)",
      mobileHeaderTitle: "Runway Fuel Gauge",
      sbNavTitle: "Navigation Modules",
      navGauge: "Runway Gauge",
      navTracker: "Quick-Add Tracker",
      navBnpl: "What-If Lab & BNPL",
      navEvents: "Circle & Graceful Out",
      navWidgets: "Ambient Widgets",
      sbFooterTitle: "⚡ Safe-to-Spend Today",
      sbSafeVal: "RM 25.00 / day",
      sbFooterSub: "Runway: 18 Days Normal Life Remaining",
      desktopHeaderTitle: "Runway Fuel Gauge",
      desktopHeaderDesc: 'Glance-First Daily Runway • Answers: "How many days of normal life do I have left?"',
      desktopContextPill: "RUNWAY: 18 DAYS (CALM BUFFER)",
      runwayHeroLabel: "Daily Survival Runway",
      runwayDaysSub: "Of Normal Living Costs Remaining",
      safeTodayText: "Safe-to-Spend Today: RM 25.00",
      capacityGaugeTitle: "Spending Capacity Gauge",
      gaugeStatusText: "Safe Spending Buffer: 37.5% (Non-Punitive)",
      moneyLeftLabel: "Money Left",
      moneySpentLabel: "Money Spent",
      subMoneyLeft: "Buffer until 30 Nov",
      subMoneySpent: "Semester month burn",
      spendingGoalTitle: "Monthly Spending Goal",
      goalSpentLabel: "Spent: RM 750.00",
      goalCapLabel: "Target Cap: RM 1,200.00",
      bannerReminderTitle: "Gentle Auto-Debit Reminder:",
      bannerReminderDesc: "SPayLater installment (RM 65.00) scheduled in 3 days. Your safe runway already reserves this fund.",
      catBreakdownTitle: "Spending Categories Breakdown",
      catFood: "Food & Dining (Daily subsistence)",
      catTrans: "Transport & Petrol (Campus shuttle/Grab)",
      catAcad: "Academic & Printing (Coursework supplies)",
      ctaQuickTitle: "Want to Log a Purchase? ✨",
      ctaQuickSub: "Use the rapid numeric keypad. No compulsory categorization required (< 5 seconds).",
      btnOpenKeypad: "⌨️ Open Numeric Keypad",
      titleEmpathy: "Design Thinking: Avoiding Money Shame",
      descEmpathy: "Traditional apps trigger avoidance loops through harsh red alerts and tabular spreadsheets. Concept 1 ('Runway') replaces punitive scolding with calm visual fuel gauges that preserve user engagement even when finances run tight.",
      titleCalcAudit: "Calculations & Audit Trail",
      lblCalcBase: "Base Income / Allowance:",
      lblCalcExp: "Current Logged Expenditures:",
      lblCalcBnpl: "Reserved BNPL Commitments:",
      lblCalcNet: "Calculated Safe Buffer:",
      titleGigSmoothing: "Gig-Income Smoothing",
      descGigSmoothing: "For freelancers & gig workers (Grab, Lalamove, part-time tutoring) with variable weekly earnings.",
      lblGigToggle: "Enable 4-Week Rolling Smoothing:",
      valSmoothedIncome: "4-Week Smoothed Baseline: RM 1,320.00 / month",
      descSmoothedStat: "✅ Stabilized: Irregular paychecks will not artificially distort daily runway.",
      titleRecentEntries: "Recent Logged Entries",
      titleCatSelector: "Categories Selection & Log Entry",
      lblInputAmt: "Expense Amount (RM):",
      lblInputDesc: "Transaction Description (Optional):",
      titleNecessities: "Basic Necessities Deduction",
      descNecessities: "Non-negotiable living baseline: EduCity rent (RM 550), basic grocery staples (RM 200), and mobile telco data (RM 50).",
      titleBnplCollision: "BNPL Collision & Installments",
      titleCollisionWarn: "💡 Gentle Reminder:",
      descCollisionWarn: "SPayLater (RM 120) and Atome (RM 50) auto-debit within 4 days of each other. Failure incurs RM 10 late administrative fee.",
      titleMamakSim: "☕ 'Mamak Night' Decision Simulator",
      descMamakSim: "Slide between a light drink vs full supper to see the real-time impact on your weekly survival runway.",
      titleSalarySim: "🎓 Graduate Salary Reality Simulator",
      descSalarySim: "Malaysian statutory contribution breakdown (EPF 11%, SOCSO 0.5%, EIS 0.2%, PTPTN) against Belanjawanku benchmarks.",
      lblGrossSalary: "Gross Monthly Job Offer (RM):",
      titleGracefulOut: "💬 'Graceful Out' Refusal Toolkit",
      descGracefulOut: "Low-stigma pre-made prompts to decline or negotiate peer spending without social embarrassment.",
      prompt1: "\"I'm in for teh tarik, skipping late supper tonight!\"",
      prompt2: "\"On a tight budget sprint this week, jom lepak for drinks only!\"",
      prompt3: "\"I'll pass on this roadtrip to keep my savings goal, count me in for the next one!\"",
      titleSquadGoals: "🔥 Squad Goals: No-Boba Week",
      titlePrivacyBox: "🔒 Zero-Credential Local-First Privacy",
      descPrivacyBox: "1. Instant Onboarding: Undergraduates start tracking in under 2 minutes with zero bank credential linking.<br>2. Local Storage Only: All ledger entries stay encrypted on the local device."
    },
    bm: {
      langCode: "BM",
      metaBadge: 'COMP2300 • Serahan 2: Konsep 1 "Runway" Hibrid',
      metaTitle: "Navigator Daya Tahan Kewangan Pelajar & Graduan Baharu",
      metaSubtitle: "Prototaip Interaktif Fideliti Rendah berpandukan Deliverable 2.md & Wireframe.drawio | Klien: Pauline Yong (FPAM)",
      viewModeLabel: "Mod Paparan:",
      btnMobile: "Simulator Mudah Alih (390px)",
      btnDesktop: "Papan Pemuka Komputer (Responsif)",
      langName: "Bahasa:",
      dAppTitle: "Runway: Navigator Daya Tahan Kewangan",
      dAppSub: "Kampus EduCity • Konsep 1 'Runway' bersama Makmal What-If & Circle",
      dUserPill: "Akaun Pelajar (Pemegang PTPTN)",
      mobileHeaderTitle: "Tolok Runway Harian",
      sbNavTitle: "Modul Navigasi",
      navGauge: "Tolok Runway",
      navTracker: "Penjejak Pantas",
      navBnpl: "Makmal What-If & BNPL",
      navEvents: "Circle & Tolak Berhemah",
      navWidgets: "Widget Ambien",
      sbFooterTitle: "⚡ Had Selamat Hari Ini",
      sbSafeVal: "RM 25.00 / hari",
      sbFooterSub: "Runway: Baki 18 Hari Hidup Normal",
      desktopHeaderTitle: "Tolok Bahan Api Runway",
      desktopHeaderDesc: 'Pandangan Pantas Harian • Menjawab: "Berapa hari hidup normal yang saya ada lagi?"',
      desktopContextPill: "RUNWAY: 18 HARI (ZON TENANG)",
      runwayHeroLabel: "Tempoh Runway Kelangsungan",
      runwayDaysSub: "Baki Kos Kehidupan Normal",
      safeTodayText: "Had Selamat Hari Ini: RM 25.00",
      capacityGaugeTitle: "Tolok Kapasiti Perbelanjaan",
      gaugeStatusText: "Penampan Selamat: 37.5% (Tanpa Tekanan)",
      moneyLeftLabel: "Wang Berbaki",
      moneySpentLabel: "Wang Dibelanjakan",
      subMoneyLeft: "Penampan sehingga 30 Nov",
      subMoneySpent: "Aliran keluar bulan semester",
      spendingGoalTitle: "Sasaran Belanja Bulanan",
      goalSpentLabel: "Dibelanja: RM 750.00",
      goalCapLabel: "Had Sasaran: RM 1,200.00",
      bannerReminderTitle: "Peringatan Mesra Debit Automatik:",
      bannerReminderDesc: "Bayaran ansuran SPayLater (RM 65.00) dalam 3 hari. Runway anda sudah menyimpan dana ini lebih awal.",
      catBreakdownTitle: "Pecahan Kategori Perbelanjaan",
      catFood: "Makanan & Minuman (Sara diri harian)",
      catTrans: "Pengangkutan & Minyak (Bas/Grab)",
      catAcad: "Akademik & Cetakan (Bahan projek)",
      ctaQuickTitle: "Mahu Log Belanja? ✨",
      ctaQuickSub: "Gunakan pad nombor pantas. Tidak wajib memilih kategori rumit (< 5 saat).",
      btnOpenKeypad: "⌨️ Buka Pad Nombor Pantas",
      titleEmpathy: "Pemikiran Reka Bentuk: Elak Rasa Bersalah",
      descEmpathy: "Aplikasi tradisional mencetuskan rasa takut melalui amaran merah menyala dan jadual akaun rumit. Konsep 1 ('Runway') menggantikannya dengan tolok tenang yang mengekalkan motivasi harian pelajar.",
      titleCalcAudit: "Pengiraan & Jejak Audit",
      lblCalcBase: "Pendapatan / Elaun Asas:",
      lblCalcExp: "Jumlah Belanja Dicatat:",
      lblCalcBnpl: "Komitmen BNPL Dikhususkan:",
      lblCalcNet: "Baki Bersih Selamat:",
      titleGigSmoothing: "Penstabilan Pendapatan Gig",
      descGigSmoothing: "Untuk pekerja gig & bebas (Grab, Lalamove, tuisyen) dengan pendapatan mingguan yang berubah-ubah.",
      lblGigToggle: "Aktifkan Purata Bergerak 4 Minggu:",
      valSmoothedIncome: "Purata 4 Minggu: RM 1,320.00 / bulan",
      descSmoothedStat: "✅ Distabilkan: Gaji mingguan tidak menentu tidak akan memesongkan runway harian.",
      titleRecentEntries: "Catatan Terbaharu",
      titleCatSelector: "Pilihan Kategori & Catatan",
      lblInputAmt: "Jumlah Belanja (RM):",
      lblInputDesc: "Keterangan Perbelanjaan (Pilihan):",
      titleNecessities: "Tolakan Keperluan Asas",
      descNecessities: "Kos hidup wajib: Sewa EduCity (RM 550), barangan dapur asas (RM 200), pelan data telefon (RM 50).",
      titleBnplCollision: "Perlanggaran Tarikh BNPL",
      titleCollisionWarn: "💡 Peringatan Mesra:",
      descCollisionWarn: "SPayLater (RM 120) dan Atome (RM 50) didebit dalam selang 4 hari. Kegagalan bayaran dikenakan denda RM 10.",
      titleMamakSim: "☕ Simulator Keputusan 'Mamak Night'",
      descMamakSim: "Gelongsor antara minum santai vs makan malam berat untuk melihat kesan langsung pada runway mingguan anda.",
      titleSalarySim: "🎓 Simulator Gaji Sebenar Graduan",
      descSalarySim: "Pecahan potongan wajib Malaysia (KWSP 11%, PERKESO 0.5%, SIP 0.2%, PTPTN) berbanding piawaian Belanjawanku.",
      lblGrossSalary: "Tawaran Gaji Kasar Bulanan (RM):",
      titleGracefulOut: "💬 Toolkit Tolak Berhemah",
      descGracefulOut: "Templat mesej santai untuk menolak atau berunding perbelanjaan sosial tanpa rasa segan.",
      prompt1: "\"Aku join minum teh tarik je, malam ni skip makan berat k!\"",
      prompt2: "\"Tengah bajet ketat minggu ni, jom lepak minum santai je!\"",
      prompt3: "\"Aku skip trip ni dulu nak cukupkan tabung, trip depan gerak sama!\"",
      titleSquadGoals: "🔥 Squad Goals: Minggu Tanpa Boba",
      titlePrivacyBox: "🔒 Privasi Data Tempatan Tanpa Akaun Bank",
      descPrivacyBox: "1. Onboarding Pantas: Mula menjejak dalam masa 2 minit tanpa pautan perbankan dalam talian.<br>2. Storan Tempatan: Semua rekod disimpan selamat dalam peranti anda sendiri."
    }
  };

  const applyLanguage = (lang) => {
    currentLang = lang;
    const t = i18n[lang];

    const safeSetText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    };

    const safeSetHTML = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    safeSetText("lbl-lang-code", t.langCode);
    safeSetText("meta-badge", t.metaBadge);
    safeSetText("meta-title", t.metaTitle);
    safeSetText("meta-subtitle", t.metaSubtitle);
    safeSetText("lbl-view-mode", t.viewModeLabel);
    safeSetText("btn-text-mobile", t.btnMobile);
    safeSetText("btn-text-desktop", t.btnDesktop);
    safeSetText("lbl-lang-name", t.langName);
    safeSetText("d-app-title", t.dAppTitle);
    safeSetText("d-app-sub", t.dAppSub);
    safeSetText("d-user-pill-text", t.dUserPill);
    safeSetText("mobile-header-screen-title", t.mobileHeaderTitle);
    safeSetText("sb-nav-title", t.sbNavTitle);
    safeSetText("nav-lbl-gauge", t.navGauge);
    safeSetText("nav-lbl-tracker", t.navTracker);
    safeSetText("nav-lbl-bnpl", t.navBnpl);
    safeSetText("nav-lbl-events", t.navEvents);
    safeSetText("nav-lbl-widgets", t.navWidgets);
    safeSetText("sb-footer-title", t.sbFooterTitle);
    safeSetText("sb-safe-val", t.sbSafeVal);
    safeSetText("sb-footer-sub", t.sbFooterSub);
    safeSetText("desktop-header-title", t.desktopHeaderTitle);
    safeSetText("desktop-header-desc", t.desktopHeaderDesc);
    safeSetText("desktop-context-pill", t.desktopContextPill);
    safeSetText("lbl-runway-hero", t.runwayHeroLabel);
    safeSetText("sub-runway-days", t.runwayDaysSub);
    safeSetText("val-safe-today", t.safeTodayText);
    safeSetText("title-capacity-gauge", t.capacityGaugeTitle);
    safeSetText("gauge-status-text", t.gaugeStatusText);
    safeSetText("lbl-money-left", t.moneyLeftLabel);
    safeSetText("lbl-money-spent", t.moneySpentLabel);
    safeSetText("sub-money-left", t.subMoneyLeft);
    safeSetText("sub-money-spent", t.subMoneySpent);
    safeSetText("title-spending-goal", t.spendingGoalTitle);
    safeSetText("lbl-goal-spent", t.goalSpentLabel);
    safeSetText("lbl-goal-cap", t.goalCapLabel);
    safeSetText("banner-reminder-title", t.bannerReminderTitle);
    safeSetText("banner-reminder-desc", t.bannerReminderDesc);
    safeSetText("title-cat-breakdown", t.catBreakdownTitle);
    safeSetText("cat-lbl-food", t.catFood);
    safeSetText("cat-lbl-trans", t.catTrans);
    safeSetText("cat-lbl-acad", t.catAcad);
    safeSetText("cta-quickadd-title", t.ctaQuickTitle);
    safeSetText("cta-quickadd-sub", t.ctaQuickSub);
    safeSetText("btn-open-keypad", t.btnOpenKeypad);
    safeSetText("title-empathy-box", t.titleEmpathy);
    safeSetText("desc-empathy-box", t.descEmpathy);
    safeSetText("title-calc-audit", t.titleCalcAudit);
    safeSetText("lbl-calc-base", t.lblCalcBase);
    safeSetText("lbl-calc-exp", t.lblCalcExp);
    safeSetText("lbl-calc-bnpl", t.lblCalcBnpl);
    safeSetText("lbl-calc-net", t.lblCalcNet);
    safeSetText("title-gig-smoothing", t.titleGigSmoothing);
    safeSetText("desc-gig-smoothing", t.descGigSmoothing);
    safeSetText("lbl-gig-toggle", t.lblGigToggle);
    safeSetText("val-smoothed-income", t.valSmoothedIncome);
    safeSetText("desc-smoothed-stat", t.descSmoothedStat);
    safeSetText("title-recent-entries", t.titleRecentEntries);
    safeSetText("title-cat-selector", t.titleCatSelector);
    safeSetText("lbl-input-amt", t.lblInputAmt);
    safeSetText("lbl-input-desc", t.lblInputDesc);
    safeSetText("title-necessities", t.titleNecessities);
    safeSetText("desc-necessities", t.descNecessities);
    safeSetText("title-bnpl-collision", t.titleBnplCollision);
    safeSetText("title-collision-warn", t.titleCollisionWarn);
    safeSetText("desc-collision-warn", t.descCollisionWarn);
    safeSetText("title-mamak-sim", t.titleMamakSim);
    safeSetText("desc-mamak-sim", t.descMamakSim);
    safeSetText("title-salary-sim", t.titleSalarySim);
    safeSetText("desc-salary-sim", t.descSalarySim);
    safeSetText("lbl-gross-salary", t.lblGrossSalary);
    safeSetText("title-graceful-out", t.titleGracefulOut);
    safeSetText("desc-graceful-out", t.descGracefulOut);
    safeSetText("prompt-text-1", t.prompt1);
    safeSetText("prompt-text-2", t.prompt2);
    safeSetText("prompt-text-3", t.prompt3);
    safeSetText("title-squad-goals", t.titleSquadGoals);
    safeSetText("title-privacy-box", t.titlePrivacyBox);
    safeSetHTML("desc-privacy-box", t.descPrivacyBox);
  };

  const btnLangToggle = document.getElementById("btn-lang-toggle");
  if (btnLangToggle) {
    btnLangToggle.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "bm" : "en";
      applyLanguage(nextLang);
    });
  }

  // -------------------------------------------------------------------------
  // 2. Viewport Scaling Mode (Desktop Dashboard vs Mobile Simulator)
  // -------------------------------------------------------------------------
  const btnModeMobile = document.getElementById("btn-mode-mobile");
  const btnModeDesktop = document.getElementById("btn-mode-desktop");
  const deviceContainer = document.querySelector(".device-container");

  const setViewportMode = (mode) => {
    if (!deviceContainer) return;
    const screenViewport = document.querySelector(".screen-viewport");
    if (screenViewport) screenViewport.scrollTop = 0;

    if (mode === "desktop") {
      deviceContainer.classList.remove("mobile-view");
      deviceContainer.classList.add("desktop-view");
      if (btnModeDesktop) {
        btnModeDesktop.classList.add("active");
        btnModeDesktop.setAttribute("aria-pressed", "true");
      }
      if (btnModeMobile) {
        btnModeMobile.classList.remove("active");
        btnModeMobile.setAttribute("aria-pressed", "false");
      }
    } else {
      deviceContainer.classList.remove("desktop-view");
      deviceContainer.classList.add("mobile-view");
      if (btnModeMobile) {
        btnModeMobile.classList.add("active");
        btnModeMobile.setAttribute("aria-pressed", "true");
      }
      if (btnModeDesktop) {
        btnModeDesktop.classList.remove("active");
        btnModeDesktop.setAttribute("aria-pressed", "false");
      }
    }
  };

  if (btnModeMobile) {
    btnModeMobile.addEventListener("click", () => setViewportMode("mobile"));
  }

  if (btnModeDesktop) {
    btnModeDesktop.addEventListener("click", () => setViewportMode("desktop"));
  }

  if (window.innerWidth >= 992) {
    setViewportMode("desktop");
  } else {
    setViewportMode("mobile");
  }

  // -------------------------------------------------------------------------
  // 3. Status Bar Clocks
  // -------------------------------------------------------------------------
  const mobileTimeElem = document.getElementById("mobile-current-time");
  const desktopTimeElem = document.getElementById("desktop-current-time");

  const updateClocks = () => {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, "0");
    const mins = String(now.getMinutes()).padStart(2, "0");
    const timeStr = `${hrs}:${mins}`;

    if (mobileTimeElem) mobileTimeElem.textContent = timeStr;
    if (desktopTimeElem) {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayName = days[now.getDay()];
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      desktopTimeElem.textContent = `${dayName}, ${timeStr} ${ampm}`;
    }
  };
  updateClocks();
  setInterval(updateClocks, 30000);

  // -------------------------------------------------------------------------
  // 4. Tab Navigation & Screen Routing
  // -------------------------------------------------------------------------
  const navTabs = document.querySelectorAll(".nav-tab-btn");
  const screens = document.querySelectorAll(".screen-view");
  const mobileHeaderTitle = document.getElementById("mobile-header-screen-title");
  const desktopHeaderTitle = document.getElementById("desktop-header-title");
  const desktopHeaderDesc = document.getElementById("desktop-header-desc");
  const desktopContextPill = document.getElementById("desktop-context-pill");

  const screenMetadata = {
    "screen-gauge": {
      title: "Runway Fuel Gauge",
      desc: 'Glance-First Daily Runway • Answers: "How many days of normal life do I have left?"',
      pill: "RUNWAY: 18 DAYS (CALM BUFFER)"
    },
    "screen-tracker": {
      title: "Quick-Add Tracker",
      desc: "Rapid Numeric Keypad (< 5s) & 4-Week Gig-Income Smoothing",
      pill: "RAPID LOGGING & GIG MODE"
    },
    "screen-bnpl": {
      title: "What-If Lab & BNPL",
      desc: "Decision Simulator: 'Mamak Night' & Malaysian Graduate Salary (EPF/SOCSO)",
      pill: "DECISION SIMULATION"
    },
    "screen-events": {
      title: "Circle & Graceful Out",
      desc: "Low-Stigma Refusal Prompts & Squad Goals Peer Challenge",
      pill: "PEER SOCIAL BUDGETING"
    },
    "screen-widgets": {
      title: "Ambient Widgets",
      desc: "Zero-Click Lockscreen, 2x2 Homescreen Card & System Tray Glance",
      pill: "AMBIENT AVOIDANCE MITIGATION"
    }
  };

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetScreenId = tab.getAttribute("data-target");

      navTabs.forEach((t) => {
        if (t.getAttribute("data-target") === targetScreenId) {
          t.classList.add("active");
          t.setAttribute("aria-selected", "true");
        } else {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        }
      });

      screens.forEach((screen) => {
        if (screen.id === targetScreenId) {
          screen.classList.add("active");
        } else {
          screen.classList.remove("active");
        }
      });

      const screenViewport = document.querySelector(".screen-viewport");
      if (screenViewport) {
        screenViewport.scrollTop = 0;
      }

      const meta = screenMetadata[targetScreenId];
      if (meta) {
        if (mobileHeaderTitle) mobileHeaderTitle.textContent = meta.title;
        if (desktopHeaderTitle) desktopHeaderTitle.textContent = meta.title;
        if (desktopHeaderDesc) desktopHeaderDesc.textContent = meta.desc;
        if (desktopContextPill) desktopContextPill.textContent = meta.pill;
      }
    });
  });

  // -------------------------------------------------------------------------
  // 5. Core Financial State & Calculations
  // -------------------------------------------------------------------------
  let state = {
    baseAllowance: 1200.0,
    spent: 750.0,
    bnplCommitments: 170.0,
    dailyBurnRate: 25.0, // RM 25 / day normal living cost
    activeMoodTag: "Food",
    gigSmoothingActive: true
  };

  const valRunwayDays = document.getElementById("val-runway-days");
  const valSafeToday = document.getElementById("val-safe-today");
  const gaugeMoneyLeft = document.getElementById("gauge-money-left");
  const gaugeMoneySpent = document.getElementById("gauge-money-spent");
  const trackerMoneyLeft = document.getElementById("tracker-money-left");
  const trackerMoneySpent = document.getElementById("tracker-money-spent");
  const calcLoggedExp = document.getElementById("calc-logged-exp");
  const calcNetBuffer = document.getElementById("calc-net-buffer");
  const gaugeStatusText = document.getElementById("gauge-status-text");
  const sbSafeVal = document.getElementById("sb-safe-val");
  const sbFooterSub = document.getElementById("sb-footer-sub");

  const recalculateAllBalances = () => {
    const moneyLeft = Math.max(0, state.baseAllowance - state.spent);
    const netBuffer = Math.max(0, moneyLeft - state.bnplCommitments);

    // Calculate remaining runway days
    const runwayDays = state.dailyBurnRate > 0 ? Math.floor(netBuffer / state.dailyBurnRate) : 0;
    const safeDaily = (netBuffer / 30).toFixed(2);

    if (valRunwayDays) valRunwayDays.textContent = `${runwayDays} DAYS`;
    if (valSafeToday) valSafeToday.textContent = `Safe-to-Spend Today: RM ${state.dailyBurnRate.toFixed(2)}`;
    if (gaugeMoneyLeft) gaugeMoneyLeft.textContent = `RM ${moneyLeft.toFixed(2)}`;
    if (gaugeMoneySpent) gaugeMoneySpent.textContent = `RM ${state.spent.toFixed(2)}`;
    if (trackerMoneyLeft) trackerMoneyLeft.textContent = `RM ${moneyLeft.toFixed(2)}`;
    if (trackerMoneySpent) trackerMoneySpent.textContent = `RM ${state.spent.toFixed(2)}`;
    if (calcLoggedExp) calcLoggedExp.textContent = `- RM ${state.spent.toFixed(2)}`;
    if (calcNetBuffer) calcNetBuffer.textContent = `RM ${netBuffer.toFixed(2)}`;

    if (sbSafeVal) sbSafeVal.textContent = `RM ${state.dailyBurnRate.toFixed(2)} / day`;
    if (sbFooterSub) sbFooterSub.textContent = `Runway: ${runwayDays} Days Normal Life Remaining`;

    if (gaugeStatusText) {
      const pct = Math.max(0, (moneyLeft / state.baseAllowance) * 100).toFixed(1);
      gaugeStatusText.textContent = `Safe Spending Buffer: ${pct}% (Non-Punitive)`;
    }
  };

  // -------------------------------------------------------------------------
  // 6. Rapid Numeric Keypad Modal (< 5s Logging - US-04)
  // -------------------------------------------------------------------------
  const keypadModal = document.getElementById("keypad-modal");
  const fabQuickAdd = document.getElementById("fab-quick-add");
  const btnOpenKeypad = document.getElementById("btn-open-keypad");
  const btnCloseKeypad = document.getElementById("btn-close-keypad");
  const keypadAmountDisplay = document.getElementById("keypad-amount-display");
  const keypadSelectedTag = document.getElementById("keypad-selected-tag");
  const keypadKeys = document.querySelectorAll(".key-btn");
  const moodTagButtons = document.querySelectorAll(".mood-tag-btn");
  const btnKeypadSave = document.getElementById("btn-keypad-save");
  const trackerRecentList = document.getElementById("tracker-recent-list");

  let keypadBuffer = "0";

  const openKeypad = () => {
    keypadBuffer = "0";
    if (keypadAmountDisplay) keypadAmountDisplay.textContent = "RM 0.00";
    if (keypadModal) keypadModal.classList.add("open");
  };

  const closeKeypad = () => {
    if (keypadModal) keypadModal.classList.remove("open");
  };

  if (fabQuickAdd) fabQuickAdd.addEventListener("click", openKeypad);
  if (btnOpenKeypad) btnOpenKeypad.addEventListener("click", openKeypad);
  if (btnCloseKeypad) btnCloseKeypad.addEventListener("click", closeKeypad);

  keypadKeys.forEach((keyBtn) => {
    keyBtn.addEventListener("click", () => {
      const val = keyBtn.getAttribute("data-key");
      if (val === "backspace") {
        keypadBuffer = keypadBuffer.length > 1 ? keypadBuffer.slice(0, -1) : "0";
      } else if (val === ".") {
        if (!keypadBuffer.includes(".")) keypadBuffer += ".";
      } else {
        if (keypadBuffer === "0") keypadBuffer = val;
        else if (keypadBuffer.length < 7) keypadBuffer += val;
      }
      const num = parseFloat(keypadBuffer) || 0;
      if (keypadAmountDisplay) keypadAmountDisplay.textContent = `RM ${num.toFixed(2)}`;
    });
  });

  moodTagButtons.forEach((tagBtn) => {
    tagBtn.addEventListener("click", () => {
      moodTagButtons.forEach((b) => b.classList.remove("active"));
      tagBtn.classList.add("active");
      state.activeMoodTag = tagBtn.getAttribute("data-tag") || "Food";
      if (keypadSelectedTag) keypadSelectedTag.textContent = tagBtn.textContent;
    });
  });

  if (btnKeypadSave) {
    btnKeypadSave.addEventListener("click", () => {
      const amt = parseFloat(keypadBuffer) || 0;
      if (amt <= 0) {
        alert("Please enter a valid expense amount.");
        return;
      }

      state.spent += amt;
      recalculateAllBalances();

      if (trackerRecentList) {
        const itemRow = document.createElement("div");
        itemRow.className = "wf-item-row";
        itemRow.innerHTML = `
          <div>
            <div class="item-title">${state.activeMoodTag}: Quick-Add Entry</div>
            <div class="item-desc">Logged in &lt; 5s via Keypad</div>
          </div>
          <span style="font-weight: 700;">RM ${amt.toFixed(2)}</span>
        `;
        trackerRecentList.prepend(itemRow);
      }

      btnKeypadSave.textContent = "Saved ✓";
      setTimeout(() => {
        btnKeypadSave.textContent = "✓ Save Entry (< 5s)";
        closeKeypad();
      }, 500);
    });
  }

  // -------------------------------------------------------------------------
  // 7. "Mamak Night" Decision Simulator Slider (Concept 2 Idea 1)
  // -------------------------------------------------------------------------
  const sliderMamak = document.getElementById("slider-mamak-cost");
  const lblMamakSelected = document.getElementById("lbl-mamak-selected");
  const valMamakCost = document.getElementById("val-mamak-cost");
  const valMamakImpact = document.getElementById("val-mamak-impact");

  const updateMamakSimulator = () => {
    if (!sliderMamak) return;
    const cost = parseFloat(sliderMamak.value) || 3;
    if (valMamakCost) valMamakCost.textContent = `RM ${cost.toFixed(2)}`;

    let choice = "Teh Tarik Only";
    let impactText = "✅ Preserves +1.2 Days of Runway vs ordering full supper!";
    let impactColor = "var(--calm-safe)";

    if (cost <= 4) {
      choice = "Teh Tarik Only";
      impactText = "✅ Safe Choice: Preserves +1.2 Days of Runway!";
      impactColor = "var(--calm-safe)";
    } else if (cost <= 10) {
      choice = "Roti Canai + Teh Tarik";
      impactText = "⚡ Moderate: Absorbs ~0.3 Days of Runway.";
      impactColor = "var(--calm-amber)";
    } else if (cost <= 18) {
      choice = "Mee Goreng + Teh Tarik";
      impactText = "⚠️ Heavier: Absorbs ~0.6 Days of Runway.";
      impactColor = "var(--calm-amber)";
    } else {
      choice = "Full Supper Feast";
      impactText = "⛔ High Impact: Consumes -1.2 Days of your weekly food runway!";
      impactColor = "#d90429";
    }

    if (lblMamakSelected) lblMamakSelected.textContent = `Selected: ${choice}`;
    if (valMamakImpact) {
      valMamakImpact.textContent = impactText;
      valMamakImpact.style.color = impactColor;
    }
  };

  if (sliderMamak) {
    sliderMamak.addEventListener("input", updateMamakSimulator);
    updateMamakSimulator();
  }

  // -------------------------------------------------------------------------
  // 8. Malaysian Graduate Salary Reality Simulator (US-08)
  // -------------------------------------------------------------------------
  const simGrossSalary = document.getElementById("sim-gross-salary");
  const simEpfVal = document.getElementById("sim-epf-val");
  const simSocsoVal = document.getElementById("sim-socso-val");
  const simTakehomeVal = document.getElementById("sim-takehome-val");

  const calculateGraduateSalary = () => {
    if (!simGrossSalary) return;
    const gross = parseFloat(simGrossSalary.value) || 3000;
    const epf = gross * 0.11;
    const socso = gross * 0.007; // 0.5% socso + 0.2% eis
    const ptptn = 150.0;
    const takehome = Math.max(0, gross - epf - socso - ptptn);

    if (simEpfVal) simEpfVal.textContent = `- RM ${epf.toFixed(2)}`;
    if (simSocsoVal) simSocsoVal.textContent = `- RM ${socso.toFixed(2)}`;
    if (simTakehomeVal) simTakehomeVal.textContent = `RM ${takehome.toFixed(2)}`;
  };

  if (simGrossSalary) {
    simGrossSalary.addEventListener("input", calculateGraduateSalary);
    calculateGraduateSalary();
  }

  // -------------------------------------------------------------------------
  // 9. "Graceful Out" Copyable Prompts (Concept 3)
  // -------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll(".btn-copy-prompt");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-copy");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        navigator.clipboard.writeText(targetEl.textContent.trim()).then(() => {
          const original = btn.textContent;
          btn.textContent = "Copied! ✓";
          setTimeout(() => {
            btn.textContent = original;
          }, 1500);
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 10. Gig-Income Smoothing Toggle (US-05)
  // -------------------------------------------------------------------------
  const chkGigSmoothing = document.getElementById("chk-gig-smoothing");
  const calcBaseVal = document.getElementById("calc-base-val");

  if (chkGigSmoothing) {
    chkGigSmoothing.addEventListener("change", () => {
      state.gigSmoothingActive = chkGigSmoothing.checked;
      if (state.gigSmoothingActive) {
        state.baseAllowance = 1320.0; // 4-week smoothed average
        if (calcBaseVal) calcBaseVal.textContent = "RM 1,320.00 (Smoothed)";
      } else {
        state.baseAllowance = 1050.0; // Raw volatile single-week rate
        if (calcBaseVal) calcBaseVal.textContent = "RM 1,050.00 (Unsmoothed)";
      }
      recalculateAllBalances();
    });
  }

  // -------------------------------------------------------------------------
  // 11. Initial Run
  // -------------------------------------------------------------------------
  recalculateAllBalances();
  applyLanguage("en");
});

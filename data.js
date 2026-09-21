// Источник истины для лендинга AI Recruiter.
// Собрано на основе HR_analytics_RF_2026.docx (данные рынка найма РФ, 04.06.2026)
// + тарифы AI Recruiter из существующего index.html (см. TARIFF_FIXED / TARIFF_TIERS).

window.AI_RECRUITER_DATA = {
  // 8 отраслей. icon — эмодзи для превью; в проде заменим на SVG.
  industries: [
    {
      id: 'it',
      name: 'IT / Телеком / Digital',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 21h8M12 18v3M6 8l3 3-3 3M10 14h4"/></svg>',
      responses: { min: 15, avg: 60, max: 250 },
      interviews: { min: 2, avg: 4, max: 8 },
      funnel: { responses: 60, screening: 18, hrInterview: 8, final: 3, offer: 1.8, hire: 1.4 },
      convResponseToOffer: 3.0,
      convResponseToHire: 2.38,
      hrScreeningRate: 0.133, // 8/60 — отклик → HR-интервью прошёл
      avgHireCost: 180000,
      avgSalary: 250000,
    },
    {
      id: 'retail',
      name: 'Ритейл / Массовый найм',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
      responses: { min: 30, avg: 120, max: 500 },
      interviews: { min: 3, avg: 6, max: 15 },
      funnel: { responses: 120, screening: 54, hrInterview: 27, final: 19, offer: 8.5, hire: 5.1 },
      convResponseToOffer: 7.1,
      convResponseToHire: 4.25,
      avgHireCost: 95000,
      hrScreeningRate: 0.225, // 27/120
      avgSalary: 80000,
    },
    {
      id: 'production',
      name: 'Производство / Рабочие',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V11l5 3V11l5 3V8l8 4v9H3z"/><path d="M7 17h2M11 17h2M15 17h2"/></svg>',
      responses: { min: 8, avg: 45, max: 200 },
      interviews: { min: 1, avg: 3, max: 6 },
      funnel: { responses: 45, screening: 18, hrInterview: 10, final: 6, offer: 3.5, hire: 2.5 },
      convResponseToOffer: 7.9,
      convResponseToHire: 5.51,
      avgHireCost: 65000,
      hrScreeningRate: 0.222, // 10/45
      avgSalary: 70000,
    },
    {
      id: 'sales',
      name: 'Продажи / B2B / Консалтинг',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/></svg>',
      responses: { min: 20, avg: 80, max: 300 },
      interviews: { min: 2, avg: 4, max: 9 },
      funnel: { responses: 80, screening: 28, hrInterview: 14, final: 8, offer: 3.9, hire: 2.7 },
      convResponseToOffer: 4.8,
      convResponseToHire: 3.37,
      avgHireCost: 130000,
      hrScreeningRate: 0.175, // 14/80
      avgSalary: 120000,
    },
    {
      id: 'finance',
      name: 'Финансы / Банки',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10h18M5 10v9h14v-9M3 10l9-6 9 6"/><path d="M7 14h2M11 14h2M15 14h2"/></svg>',
      responses: { min: 25, avg: 100, max: 400 },
      interviews: { min: 2, avg: 4, max: 7 },
      funnel: { responses: 100, screening: 30, hrInterview: 14, final: 7, offer: 3.7, hire: 2.9 },
      convResponseToOffer: 3.7,
      convResponseToHire: 2.9,
      avgHireCost: 210000,
      hrScreeningRate: 0.140, // 14/100
      avgSalary: 180000,
    },
    {
      id: 'medicine',
      name: 'Медицина / Фарма',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 3v6H3v6h6v6h6v-6h6V9h-6V3z"/></svg>',
      responses: { min: 5, avg: 35, max: 150 },
      interviews: { min: 1, avg: 3, max: 5 },
      funnel: { responses: 35, screening: 16, hrInterview: 9, final: 5, offer: 3.1, hire: 2.5 },
      convResponseToOffer: 8.9,
      convResponseToHire: 7.13,
      avgHireCost: 145000,
      hrScreeningRate: 0.257, // 9/35
      avgSalary: 110000,
    },
    {
      id: 'construction',
      name: 'Строительство',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V11l7-5 7 5v10M9 21v-5h6v5"/><path d="M9 11h6M11 11v4M13 11v4"/></svg>',
      responses: { min: 8, avg: 40, max: 180 },
      interviews: { min: 1, avg: 3, max: 6 },
      funnel: { responses: 40, screening: 16, hrInterview: 9, final: 5, offer: 2.9, hire: 2.0 },
      convResponseToOffer: 7.3,
      convResponseToHire: 4.94,
      avgHireCost: 85000,
      hrScreeningRate: 0.225, // 9/40
      avgSalary: 95000,
    },
    {
      id: 'logistics',
      name: 'Логистика / Транспорт',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>',
      responses: { min: 12, avg: 55, max: 220 },
      interviews: { min: 1, avg: 3, max: 7 },
      funnel: { responses: 55, screening: 23, hrInterview: 12, final: 8, offer: 4.1, hire: 2.7 },
      convResponseToOffer: 7.4,
      convResponseToHire: 4.83,
      avgHireCost: 90000,
      hrScreeningRate: 0.218, // 12/55
      avgSalary: 85000,
    },
    {
      id: 'education',
      name: 'Образование / EdTech',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M5 11v5c0 1 3 2.5 7 2.5s7-1.5 7-2.5v-5M22 9v5"/></svg>',
      responses: { min: 15, avg: 50, max: 180 },
      interviews: { min: 2, avg: 4, max: 7 },
      funnel: { responses: 50, screening: 20, hrInterview: 10, final: 6, offer: 3.5, hire: 2.4 },
      convResponseToOffer: 7.0,
      convResponseToHire: 4.8,
      avgHireCost: 110000,
      hrScreeningRate: 0.20, // 10/50
      avgSalary: 130000,
    },
  ],

  // 4 размера компаний. vacanciesPerYear — сколько вакансий в год в ОДНОЙ компании такого размера.
  // Микро убран — пакет 300к фикс делает AI Recruiter экономически невыгодным при 1-3 вакансиях в год.
  companySizes: [
    { id: 'small',     name: 'Малая',      range: '16-100 чел.',   vacancyPerYear: { min: 4.5, avg: 20, max: 45 } },
    { id: 'medium',    name: 'Средняя',    range: '101-500 чел.',  vacancyPerYear: { min: 30, avg: 90, max: 220 } },
    { id: 'large',     name: 'Крупная',    range: '501-3000 чел.', vacancyPerYear: { min: 150, avg: 500, max: 1400 } },
    { id: 'enterprise',name: 'Энтерпрайз', range: '3000+ чел.',    vacancyPerYear: { min: 800, avg: 2500, max: 7000 } },
  ],

  // Полная матрица "отрасль × размер" (32 комбинации).
  // vacanciesPerYear — точечная средняя (avg) для комбинации.
  // Источник: HR_analytics_RF_2026.docx, раздел 4 (vacYear avg).
  matrix: {
    'it|small':         { vacAvg: 11.5 },
    'it|medium':        { vacAvg: 57.5 },
    'it|large':         { vacAvg: 276 },
    'it|enterprise':    { vacAvg: 1380 },

    'retail|small':     { vacAvg: 30 },
    'retail|medium':    { vacAvg: 150 },
    'retail|large':     { vacAvg: 720 },
    'retail|enterprise':{ vacAvg: 3600 },

    'production|small': { vacAvg: 22.5 },
    'production|medium':{ vacAvg: 112.5 },
    'production|large': { vacAvg: 540 },
    'production|enterprise':{ vacAvg: 2700 },

    'sales|small':      { vacAvg: 25 },
    'sales|medium':     { vacAvg: 125 },
    'sales|large':      { vacAvg: 600 },
    'sales|enterprise': { vacAvg: 3000 },

    'finance|small':    { vacAvg: 13.5 },
    'finance|medium':   { vacAvg: 67.5 },
    'finance|large':    { vacAvg: 324 },
    'finance|enterprise':{ vacAvg: 1620 },

    'medicine|small':   { vacAvg: 12.5 },
    'medicine|medium':  { vacAvg: 62.5 },
    'medicine|large':   { vacAvg: 300 },
    'medicine|enterprise':{ vacAvg: 1500 },

    'construction|small':   { vacAvg: 21.5 },
    'construction|medium':  { vacAvg: 107.5 },
    'construction|large':   { vacAvg: 516 },
    'construction|enterprise':{ vacAvg: 2580 },

    'logistics|small':  { vacAvg: 27.5 },
    'logistics|medium': { vacAvg: 137.5 },
    'logistics|large':  { vacAvg: 660 },
    'logistics|enterprise':{ vacAvg: 3300 },

    'education|small':  { vacAvg: 18 },
    'education|medium': { vacAvg: 75 },
    'education|large':  { vacAvg: 360 },
    'education|enterprise':{ vacAvg: 1800 },
  },

  // Тарифы AI Recruiter (₽). Регион по умолчанию — intl_ru (иностранные языки + РФ).
  tariffs: {
    fixedBelow10k: 300000,        // ₽ фикс за пакет до 10 000 мин
    tiers: [
      { threshold: 10001,  perMin: 29 },
      { threshold: 30001,  perMin: 26 },
      { threshold: 50001,  perMin: 23 },
      { threshold: 100001, perMin: 21 },
      { threshold: 150001, perMin: 18 },
      { threshold: 200001, perMin: 15 },
    ],
  },

  // Конверсии AI Recruiter (наши данные с холодной базы, Excel).
  // Источник: текущий index.html, CONVERSIONS.standard.
  ourConversion: {
    contact: 0.263,    // попытка → контакт
    interview: 0.501,  // контакт → содержательное интервью
    relevant: 0.271,   // интервью → релевантный кандидат
  },

  // Рыночные гипотезы по конкурентам (контакт → конверсия в релевантного).
  competitorConversion: {
    cc:  0.08,   // КЦ 8%
    bot: 0.02,   // сценарный бот 2%
    ai:  0.05,   // ИИ на рынке 5% (наша фактическая на холодной выше — 4.4%, но используем для сравнения с гипотезами)
  },

  // Стоимость каналов конкурентов.
  competitorCostPerMin: {
    cc:  17,  // КЦ ₽/мин (типичная оценка оператора)
    bot: 3,   // сценарный бот ₽/мин
  },

  // Параметры ручного труда (для расчёта «если делать вручную»).
  manual: {
    attemptMin: 1,        // минут на 1 попытку звонка рекрутером
    interviewMin: 15,     // минут на 1 интервью
    recruiterSalary: 80000, // ₽/мес
    workingHours: 160,    // часов в месяц
    aiControlMin: 3,      // минут контроля AI-интервью человеком
  },

  // SaaS-альтернатива (для сравнения в карточке сценариев).
  saas: {
    costPerInterview: 149, // ₽/интервью
  },

  // Параметры сравнения контактов (для CPA).
  market: {
    contactDurationMin: 10,  // средняя длительность разговора
    shortCallPct: 15,        // % разговоров <10 сек (не тарифицируются у AI)
  },
};
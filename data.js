// Источник истины для лендинга AI Recruiter.
// Собрано на основе HR_analytics_RF_2026.docx (данные рынка найма РФ, 04.06.2026)
// + тарифы AI Recruiter из существующего index.html (см. TARIFF_FIXED / TARIFF_TIERS).

window.AI_RECRUITER_DATA = {
  // 8 отраслей. icon — эмодзи для превью; в проде заменим на SVG.
  industries: [
    {
      id: 'it',
      name: 'IT / Digital',
      icon: '💻',
      // Средние отклики и интервью на 1 вакансию
      responses: { min: 15, avg: 60, max: 250 },
      interviews: { min: 2, avg: 4, max: 8 },
      // Воронка на 1 среднюю вакансию (абсолютные числа)
      funnel: { responses: 60, screening: 18, hrInterview: 8, final: 3, offer: 1.8, hire: 1.4 },
      // Конверсии (%)
      convResponseToOffer: 3.0,
      convResponseToHire: 2.38,
      // Средняя стоимость закрытия 1 вакансии (₽) — отраслевая оценка, классический канал (КЦ + рекрутер)
      avgHireCost: 180000,
      // Средняя зарплата закрытой вакансии (₽) — для ROI
      avgSalary: 250000,
    },
    {
      id: 'retail',
      name: 'Ритейл / Массовый найм',
      icon: '🛒',
      responses: { min: 30, avg: 120, max: 500 },
      interviews: { min: 3, avg: 6, max: 15 },
      funnel: { responses: 120, screening: 54, hrInterview: 27, final: 19, offer: 8.5, hire: 5.1 },
      convResponseToOffer: 7.1,
      convResponseToHire: 4.25,
      avgHireCost: 95000,
      avgSalary: 80000,
    },
    {
      id: 'production',
      name: 'Производство / Рабочие',
      icon: '🏭',
      responses: { min: 8, avg: 45, max: 200 },
      interviews: { min: 1, avg: 3, max: 6 },
      funnel: { responses: 45, screening: 18, hrInterview: 10, final: 6, offer: 3.5, hire: 2.5 },
      convResponseToOffer: 7.9,
      convResponseToHire: 5.51,
      avgHireCost: 65000,
      avgSalary: 70000,
    },
    {
      id: 'sales',
      name: 'Продажи / B2B',
      icon: '📈',
      responses: { min: 20, avg: 80, max: 300 },
      interviews: { min: 2, avg: 4, max: 9 },
      funnel: { responses: 80, screening: 28, hrInterview: 14, final: 8, offer: 3.9, hire: 2.7 },
      convResponseToOffer: 4.8,
      convResponseToHire: 3.37,
      avgHireCost: 130000,
      avgSalary: 120000,
    },
    {
      id: 'finance',
      name: 'Финансы / Банки',
      icon: '🏦',
      responses: { min: 25, avg: 100, max: 400 },
      interviews: { min: 2, avg: 4, max: 7 },
      funnel: { responses: 100, screening: 30, hrInterview: 14, final: 7, offer: 3.7, hire: 2.9 },
      convResponseToOffer: 3.7,
      convResponseToHire: 2.9,
      avgHireCost: 210000,
      avgSalary: 180000,
    },
    {
      id: 'medicine',
      name: 'Медицина / Фарма',
      icon: '⚕️',
      responses: { min: 5, avg: 35, max: 150 },
      interviews: { min: 1, avg: 3, max: 5 },
      funnel: { responses: 35, screening: 16, hrInterview: 9, final: 5, offer: 3.1, hire: 2.5 },
      convResponseToOffer: 8.9,
      convResponseToHire: 7.13,
      avgHireCost: 145000,
      avgSalary: 110000,
    },
    {
      id: 'construction',
      name: 'Строительство',
      icon: '🏗️',
      responses: { min: 8, avg: 40, max: 180 },
      interviews: { min: 1, avg: 3, max: 6 },
      funnel: { responses: 40, screening: 16, hrInterview: 9, final: 5, offer: 2.9, hire: 2.0 },
      convResponseToOffer: 7.3,
      convResponseToHire: 4.94,
      avgHireCost: 85000,
      avgSalary: 95000,
    },
    {
      id: 'logistics',
      name: 'Логистика / Транспорт',
      icon: '🚚',
      responses: { min: 12, avg: 55, max: 220 },
      interviews: { min: 1, avg: 3, max: 7 },
      funnel: { responses: 55, screening: 23, hrInterview: 12, final: 8, offer: 4.1, hire: 2.7 },
      convResponseToOffer: 7.4,
      convResponseToHire: 4.83,
      avgHireCost: 90000,
      avgSalary: 85000,
    },
  ],

  // 5 размеров компаний. vacanciesPerYear — сколько вакансий в год в ОДНОЙ компании такого размера.
  companySizes: [
    { id: 'micro',     name: 'Микро',      range: '1-15 чел.',     vacanciesPerYear: { min: 0.2, avg: 2.5, max: 7 } },
    { id: 'small',     name: 'Малая',      range: '16-100 чел.',   vacancyPerYear: { min: 4.5, avg: 20, max: 45 } },
    { id: 'medium',    name: 'Средняя',    range: '101-500 чел.',  vacancyPerYear: { min: 30, avg: 90, max: 220 } },
    { id: 'large',     name: 'Крупная',    range: '501-3000 чел.', vacancyPerYear: { min: 150, avg: 500, max: 1400 } },
    { id: 'enterprise',name: 'Энтерпрайз', range: '3000+ чел.',    vacancyPerYear: { min: 800, avg: 2500, max: 7000 } },
  ],

  // Полная матрица "отрасль × размер" (40 комбинаций).
  // vacanciesPerYear — точечная средняя (avg) для комбинации.
  // Источник: HR_analytics_RF_2026.docx, раздел 4 (vacYear avg).
  matrix: {
    'it|micro':         { vacAvg: 1.8 },
    'it|small':         { vacAvg: 11.5 },
    'it|medium':        { vacAvg: 57.5 },
    'it|large':         { vacAvg: 276 },
    'it|enterprise':    { vacAvg: 1380 },

    'retail|micro':     { vacAvg: 4.8 },
    'retail|small':     { vacAvg: 30 },
    'retail|medium':    { vacAvg: 150 },
    'retail|large':     { vacAvg: 720 },
    'retail|enterprise':{ vacAvg: 3600 },

    'production|micro': { vacAvg: 3.6 },
    'production|small': { vacAvg: 22.5 },
    'production|medium':{ vacAvg: 112.5 },
    'production|large': { vacAvg: 540 },
    'production|enterprise':{ vacAvg: 2700 },

    'sales|micro':      { vacAvg: 4.0 },
    'sales|small':      { vacAvg: 25 },
    'sales|medium':     { vacAvg: 125 },
    'sales|large':      { vacAvg: 600 },
    'sales|enterprise': { vacAvg: 3000 },

    'finance|micro':    { vacAvg: 2.2 },
    'finance|small':    { vacAvg: 13.5 },
    'finance|medium':   { vacAvg: 67.5 },
    'finance|large':    { vacAvg: 324 },
    'finance|enterprise':{ vacAvg: 1620 },

    'medicine|micro':   { vacAvg: 2.0 },
    'medicine|small':   { vacAvg: 12.5 },
    'medicine|medium':  { vacAvg: 62.5 },
    'medicine|large':   { vacAvg: 300 },
    'medicine|enterprise':{ vacAvg: 1500 },

    'construction|micro':   { vacAvg: 3.4 },
    'construction|small':   { vacAvg: 21.5 },
    'construction|medium':  { vacAvg: 107.5 },
    'construction|large':   { vacAvg: 516 },
    'construction|enterprise':{ vacAvg: 2580 },

    'logistics|micro':  { vacAvg: 4.4 },
    'logistics|small':  { vacAvg: 27.5 },
    'logistics|medium': { vacAvg: 137.5 },
    'logistics|large':  { vacAvg: 660 },
    'logistics|enterprise':{ vacAvg: 3300 },
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
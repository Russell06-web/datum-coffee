/* Port of the Figma Make source's src/i18n.ts — same language keys/content, JS object instead of typed TS export. */
window.DATUM_I18N = (function () {
  var LANGS = [
    { code: "en", label: "English", native: "EN" },
    { code: "zh", label: "中文", native: "中文" },
    { code: "ja", label: "日本語", native: "日本語" },
    { code: "ko", label: "한국어", native: "한국어" }
  ];

  var T = {
    en: {
      nav: ["Origins", "Process", "Menu", "Journal"],
      tagline: "Specialty Roasters — Est. 2019",
      heroTitle: ["COFFEE.", "NOTHING", "ELSE."],
      heroDesc: "We source, roast, and serve single-origin coffee with zero compromise. No house blends. No guesswork.",
      heroCta: "See Origins",
      heroCtaSub: "How We Roast →",
      stats: [["12", "Active Origins"], ["48h", "Roast to Ship"], ["100%", "Traceable"]],
      secManifesto: "§ 001",
      manifestoTitle: "Our rules.",
      manifestoItems: [
        "No flavored syrups.",
        "No oat milk upsells.",
        "No music after 11am.",
        "No paper sleeves on ceramic cups."
      ],
      secOrigins: "§ 002",
      originsTitle: "Origins",
      originsDesc: "Every bag is traceable to a single farm, cooperative, or washing station.",
      originsElevation: "Elevation",
      originsProcess: "Process",
      origins: [
        { region: "Ethiopia", sub: "Yirgacheffe", notes: "Jasmine · Bergamot · Black Cherry", process: "Natural" },
        { region: "Colombia", sub: "Huila", notes: "Brown Sugar · Red Apple · Almond", process: "Washed" },
        { region: "Guatemala", sub: "Antigua", notes: "Dark Chocolate · Smoke · Dried Plum", process: "Honey" }
      ],
      secProcess: "§ 003",
      processTitle: ["The roast", "is the recipe."],
      processSteps: [
        ["Green selection", "We cup every lot before purchase. Defect rate must be under 3%."],
        ["Charge temperature", "200°C. Drum speed fixed. No variables hidden from the log."],
        ["Development time", "22–26% DTR. Adjusted per density and moisture content."],
        ["Rest period", "48 hours minimum before bags are sealed. No exceptions."]
      ],
      secMenu: "§ 004",
      menuTitle: "Menu",
      menu: [
        { name: "Espresso", desc: "Single shot. 18g in, 36g out. 27 seconds." },
        { name: "Lungo", desc: "Extended pull. Balanced bitterness, clean finish." },
        { name: "Cortado", desc: "Equal parts espresso and steamed milk." },
        { name: "Filter", desc: "Daily rotating single origin. Brewed to order." },
        { name: "Cold Brew", desc: "16-hour steep. Full immersion. No dilution." },
        { name: "Batch Brew", desc: "High-volume precision. Served by the flask." }
      ],
      secJournal: "§ 005 — Journal",
      journalTitle: ["On water temperature", "and stubbornness."],
      journalDesc: "94°C is not a suggestion. We ran 240 extractions across six water temperatures to prove what the data already told us.",
      journalCta: "Read the full piece →",
      footerSub: "Specialty Coffee Roasters",
      footerCities: "Berlin · Oslo · London",
      footerNav: "Navigation",
      footerContact: "Contact",
      copyright: "© 2026 Datum Coffee",
      orderBtn: "Order",
      processCta: "See The Menu →"
    },

    zh: {
      nav: ["產地", "工藝", "菜單", "日誌"],
      tagline: "精品烘焙師 — 創立於 2019",
      heroTitle: ["咖啡。", "只有", "咖啡。"],
      heroDesc: "我們採購、烘焙並供應單一產地咖啡，零妥協。沒有混合豆，沒有猜測。",
      heroCta: "查看產地",
      heroCtaSub: "我們如何烘焙 →",
      stats: [["12", "活躍產地"], ["48h", "烘焙出貨"], ["100%", "可追溯"]],
      secManifesto: "§ 001",
      manifestoTitle: "我們的守則。",
      manifestoItems: [
        "不使用調味糖漿。",
        "不推銷燕麥奶加購。",
        "上午十一點後不播放音樂。",
        "陶瓷杯不套紙套。"
      ],
      secOrigins: "§ 002",
      originsTitle: "產地",
      originsDesc: "每一袋咖啡都可追溯至單一農場、合作社或水洗站。",
      originsElevation: "海拔",
      originsProcess: "處理法",
      origins: [
        { region: "衣索比亞", sub: "耶加雪菲", notes: "茉莉花 · 佛手柑 · 黑櫻桃", process: "日曬" },
        { region: "哥倫比亞", sub: "惠蘭", notes: "黑糖 · 紅蘋果 · 杏仁", process: "水洗" },
        { region: "瓜地馬拉", sub: "安提瓜", notes: "黑巧克力 · 煙燻 · 梅乾", process: "蜜處理" }
      ],
      secProcess: "§ 003",
      processTitle: ["烘焙本身", "就是配方。"],
      processSteps: [
        ["生豆篩選", "每一批次購入前皆進行杯測，瑕疵率須低於 3%。"],
        ["入鍋溫度", "200°C，滾筒轉速固定，所有變數皆記錄於日誌。"],
        ["發展時間", "DTR 維持 22–26%，依豆密度與含水率調整。"],
        ["靜置期", "封袋前至少靜置 48 小時，無例外。"]
      ],
      secMenu: "§ 004",
      menuTitle: "菜單",
      menu: [
        { name: "義式濃縮", desc: "單份。投粉 18g，萃取 36g，27 秒。" },
        { name: "倫哥", desc: "延長萃取，苦味平衡，尾韻乾淨。" },
        { name: "科塔多", desc: "濃縮與蒸奶各半。" },
        { name: "手沖濾杯", desc: "每日輪換單一產地，現點現沖。" },
        { name: "冷萃", desc: "浸泡 16 小時，全浸式，不稀釋。" },
        { name: "批次沖煮", desc: "大量精準沖煮，以保溫瓶供應。" }
      ],
      secJournal: "§ 005 — 日誌",
      journalTitle: ["論水溫", "與固執。"],
      journalDesc: "94°C 不是建議，是事實。我們以六種水溫進行了 240 次萃取，只為用數據證明數據本來就說的話。",
      journalCta: "閱讀完整文章 →",
      footerSub: "精品咖啡烘焙商",
      footerCities: "柏林 · 奧斯陸 · 倫敦",
      footerNav: "導覽",
      footerContact: "聯絡",
      copyright: "© 2026 Datum Coffee",
      orderBtn: "點單",
      processCta: "查看菜單 →"
    },

    ja: {
      nav: ["産地", "製法", "メニュー", "ジャーナル"],
      tagline: "スペシャルティロースター — 2019年創業",
      heroTitle: ["コーヒー。", "それだけ。", ""],
      heroDesc: "妥協なく、シングルオリジンのコーヒーを調達・焙煎・提供します。ブレンドなし。曖昧さなし。",
      heroCta: "産地を見る",
      heroCtaSub: "焙煎について →",
      stats: [["12", "産地数"], ["48h", "焙煎〜出荷"], ["100%", "トレーサブル"]],
      secManifesto: "§ 001",
      manifestoTitle: "私たちのルール。",
      manifestoItems: [
        "フレーバーシロップは使わない。",
        "オーツミルクは勧めない。",
        "午前11時以降は音楽を流さない。",
        "陶器カップに紙スリーブはつけない。"
      ],
      secOrigins: "§ 002",
      originsTitle: "産地",
      originsDesc: "すべての袋は、単一の農場・協同組合・精製所までトレース可能です。",
      originsElevation: "標高",
      originsProcess: "精製方法",
      origins: [
        { region: "エチオピア", sub: "イルガチェフェ", notes: "ジャスミン · ベルガモット · ブラックチェリー", process: "ナチュラル" },
        { region: "コロンビア", sub: "ウイラ", notes: "黒糖 · 赤リンゴ · アーモンド", process: "ウォッシュト" },
        { region: "グアテマラ", sub: "アンティグア", notes: "ダークチョコ · スモーク · ドライプラム", process: "ハニー" }
      ],
      secProcess: "§ 003",
      processTitle: ["焙煎こそが", "レシピである。"],
      processSteps: [
        ["生豆セレクション", "購入前にすべてのロットをカッピング。欠点豆率は3%未満が必須。"],
        ["チャージ温度", "200°C。ドラム回転数は固定。すべての変数はログに記録。"],
        ["ディベロップメント時間", "DTRは22〜26%。密度と水分含量に応じて調整。"],
        ["レスト期間", "袋を封する前に最低48時間の静置。例外なし。"]
      ],
      secMenu: "§ 004",
      menuTitle: "メニュー",
      menu: [
        { name: "エスプレッソ", desc: "シングルショット。イン18g、アウト36g、27秒。" },
        { name: "ルンゴ", desc: "長めの抽出。苦味のバランスとクリーンな余韻。" },
        { name: "コルタード", desc: "エスプレッソとスチームミルクを同量。" },
        { name: "フィルター", desc: "毎日替わるシングルオリジン。注文後に抽出。" },
        { name: "コールドブリュー", desc: "16時間浸漬。フルイマージョン。希釈なし。" },
        { name: "バッチブリュー", desc: "大量精密抽出。フラスコで提供。" }
      ],
      secJournal: "§ 005 — ジャーナル",
      journalTitle: ["水温と", "頑固さについて。"],
      journalDesc: "94°Cは提案ではない。6種類の水温で240回の抽出を行い、データが既に語っていたことを証明した。",
      journalCta: "全文を読む →",
      footerSub: "スペシャルティコーヒーロースター",
      footerCities: "ベルリン · オスロ · ロンドン",
      footerNav: "ナビゲーション",
      footerContact: "お問い合わせ",
      copyright: "© 2026 Datum Coffee",
      orderBtn: "注文",
      processCta: "メニューを見る →"
    },

    ko: {
      nav: ["산지", "공정", "메뉴", "저널"],
      tagline: "스페셜티 로스터 — 2019년 설립",
      heroTitle: ["커피.", "그것뿐.", ""],
      heroDesc: "타협 없이 싱글 오리진 커피를 소싱하고, 로스팅하고, 서빙합니다. 블렌드 없음. 추측 없음.",
      heroCta: "산지 보기",
      heroCtaSub: "로스팅 방식 →",
      stats: [["12", "활성 산지"], ["48h", "로스팅→출고"], ["100%", "추적 가능"]],
      secManifesto: "§ 001",
      manifestoTitle: "우리의 규칙.",
      manifestoItems: [
        "향 시럽은 사용하지 않는다.",
        "오트 밀크 업셀은 하지 않는다.",
        "오전 11시 이후에는 음악을 틀지 않는다.",
        "도자기 컵에 종이 슬리브를 끼우지 않는다."
      ],
      secOrigins: "§ 002",
      originsTitle: "산지",
      originsDesc: "모든 봉지는 단일 농장, 협동조합 또는 워싱 스테이션까지 추적 가능합니다.",
      originsElevation: "고도",
      originsProcess: "가공 방식",
      origins: [
        { region: "에티오피아", sub: "예가체프", notes: "자스민 · 베르가모트 · 블랙체리", process: "내추럴" },
        { region: "콜롬비아", sub: "우일라", notes: "흑설탕 · 홍사과 · 아몬드", process: "워시드" },
        { region: "과테말라", sub: "안티구아", notes: "다크초콜릿 · 스모크 · 건자두", process: "허니" }
      ],
      secProcess: "§ 003",
      processTitle: ["로스팅이", "곧 레시피다."],
      processSteps: [
        ["생두 선별", "구매 전 모든 로트를 커핑. 결점두 비율은 3% 미만이어야 한다."],
        ["투입 온도", "200°C. 드럼 속도 고정. 모든 변수는 로그에 기록."],
        ["발전 시간", "DTR 22~26%. 밀도와 수분 함량에 따라 조정."],
        ["휴지 기간", "봉인 전 최소 48시간 안정화. 예외 없음."]
      ],
      secMenu: "§ 004",
      menuTitle: "메뉴",
      menu: [
        { name: "에스프레소", desc: "싱글 샷. 투입 18g, 추출 36g, 27초." },
        { name: "룽고", desc: "긴 추출. 균형 잡힌 쓴맛, 깨끗한 여운." },
        { name: "코르타도", desc: "에스프레소와 스팀 밀크 동량." },
        { name: "필터", desc: "매일 바뀌는 싱글 오리진. 주문 후 추출." },
        { name: "콜드 브루", desc: "16시간 침출. 풀 이머전. 희석 없음." },
        { name: "배치 브루", desc: "대용량 정밀 추출. 플라스크로 제공." }
      ],
      secJournal: "§ 005 — 저널",
      journalTitle: ["수온과", "고집에 대하여."],
      journalDesc: "94°C는 제안이 아니다. 우리는 6가지 수온으로 240번의 추출을 진행해, 데이터가 이미 말하고 있던 것을 증명했다.",
      journalCta: "전문 읽기 →",
      footerSub: "스페셜티 커피 로스터",
      footerCities: "베를린 · 오슬로 · 런던",
      footerNav: "내비게이션",
      footerContact: "문의",
      copyright: "© 2026 Datum Coffee",
      orderBtn: "주문",
      processCta: "메뉴 보기 →"
    }
  };

  return { LANGS: LANGS, T: T };
})();

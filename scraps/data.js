// Scraps記事データ
// 新しい記事を追加するときはここに追記する（更新日降順を維持）
//
// このファイルは index.html と scraps/index.html の両方から読み込まれる
// （データの二重管理を避けるための単一ソース）。
//   - index.html        からは  <script src="scraps/data.js">    で読み込む
//   - scraps/index.html からは  <script src="data.js">           で読み込む
//
// url はどちらのページからでも同じ値で正しくリンクできるよう、
// サイト絶対パス（/lungatlas/scraps/... ）で記述すること。
const SCRAPS_DATA = [
  {
    title: "MARIPOSA試験 — 1次治療 amivantamab + lazertinib vs osimertinib（EGFR変異陽性NSCLC）",
    summary: "治療歴なしのEGFR exon 19 del/L858R NSCLC でamivantamab + lazertinib が osimertinib単剤を上回るPFS・OS を示した最大規模第3相試験。Grade≥3有害事象80%。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/mariposa.html"
  },
  {
    title: "AEGEAN試験 — 周術期 durvalumab + 化学療法（切除可能NSCLC）",
    summary: "切除可能Stage II–IIIB(N2) NSCLCで周術期durvalumabを検証。pCR・EFSを改善。OSは未成熟。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/aegean.html"
  },
  {
    title: "JCOG0802/WJOG4607L試験 — 小型末梢NSCLC 区域切除 vs 肺葉切除",
    summary: "臨床病期IA、腫瘍径2cm以下、CTR>0.5の小型末梢NSCLCで区域切除と肺葉切除を比較。区域切除でOS非劣性・優越性が示された一方、局所再発は高率。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/jcog0802.html"
  },
  {
    title: "ALINA試験 — 術後補助 alectinib vs 白金製剤化学療法（ALK陽性NSCLC）",
    summary: "完全切除ALK陽性Stage IB（4cm以上）–IIIA NSCLCでalectinibを24か月投与し、白金製剤化学療法よりDFSを改善した第3相試験。OSは未成熟。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/alina.html"
  },
  {
    title: "MARIPOSA-2試験 — osimertinib後 amivantamab + 化学療法（EGFR変異陽性NSCLC）",
    summary: "osimertinib耐性後のEGFR ex19del/L858R NSCLCでamivantamab + carboplatin-pemetrexedがPFS・ORRを改善した第3相試験。OSは有利な傾向だが規定有意水準に未到達。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/mariposa2.html"
  },
  {
    title: "ADAURA試験 — 術後補助 osimertinib vs placebo（EGFR変異陽性NSCLC）",
    summary: "完全切除EGFR exon 19 del/L858R陽性Stage IB–IIIA NSCLCでosimertinibを最長3年投与。DFSに続きOS最終解析でも有意差。術後化学療法との順序とStage IBの扱いは要確認。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/adaura.html"
  },
  {
    title: "PACIFIC試験 — 切除不能III期NSCLC 根治的CRT後 durvalumab consolidation",
    summary: "切除不能III期NSCLCの根治的同時化学放射線療法後にdurvalumabを最大12か月投与。PFS・OS両主要評価項目で有意差。5年OS率42.9%。PD-L1問わず適応。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/pacific.html"
  },
  {
    title: "CROWN試験 — 1次治療 lorlatinib vs crizotinib（ALK陽性NSCLC）",
    summary: "未治療ALK陽性NSCLCで3世代ALK-TKIロルラチニブが長期PFSを示した第3相試験。7年フォローでPFS中央値未到達。OS優越性は未示、毒性プロファイルは2世代と大きく異なる。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/crown.html"
  },
  // {
  //   title: "記事タイトル",
  //   summary: "一言サマリー（100字以内）",
  //   date: "2026-06-24",                          // YYYY-MM-DD形式
  //   url: "/lungatlas/scraps/article-slug.html"   // サイト絶対パス
  // }
];

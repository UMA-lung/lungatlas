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

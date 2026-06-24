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

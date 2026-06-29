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
    title: "PAPILLON試験 — 1次治療 amivantamab + 化学療法（EGFR exon 20挿入変異NSCLC）",
    summary: "治療歴なしEGFR exon 20挿入変異NSCLCで、amivantamab + carboplatin-pemetrexedが化学療法単独を上回るPFSを示した第3相試験。PFS中央値11.4 vs 6.7か月。NCCN Category 1 preferred。",
    date: "2026-06-30",
    url: "/lungatlas/scraps/papillon.html"
  },
  {
    title: "CheckMate 227試験 — 1次治療 nivolumab + ipilimumab（化学療法なし、IV期 EGFR/ALK野生型NSCLC）",
    summary: "治療歴なしIV期EGFR/ALK野生型NSCLCで、化学療法を含まないnivolumab+ipilimumabが化学療法を上回るOSを示した第3相試験。PD-L1問わず長期benefit。TMBをco-primaryに用いた歴史的試験。",
    date: "2026-06-29",
    url: "/lungatlas/scraps/cm227.html"
  },
  {
    title: "CheckMate 9LA試験 — 1次治療 nivolumab + ipilimumab + 化学療法2サイクル（IV期 EGFR/ALK野生型NSCLC）",
    summary: "治療歴なしIV期EGFR/ALK野生型NSCLCで、nivolumab+ipilimumab+化学療法2サイクルが化学療法4サイクルを上回るOSを示した第3相試験。PD-L1・組織型問わず有効。6年フォローまで報告。",
    date: "2026-06-29",
    url: "/lungatlas/scraps/cm9la.html"
  },
  {
    title: "POSEIDON試験 — 1次治療 durvalumab ± tremelimumab + 化学療法（IV期 EGFR/ALK野生型NSCLC）",
    summary: "治療歴なしIV期EGFR/ALK野生型NSCLCで、tremelimumab限定コース+durvalumab+化学療法がPFS・OSを改善した第3相試験。5年OS率15.7% vs 6.8%。durvalumab+化学のみではOS有意差なし。",
    date: "2026-06-29",
    url: "/lungatlas/scraps/poseidon.html"
  },
  {
    title: "IMpower010試験 — 切除後NSCLC 補助化学療法後 atezolizumab（術後補助免疫療法）",
    summary: "完全切除stage IB-IIIA NSCLCで補助化学療法後のatezolizumabがDFSを改善した初の第3相免疫療法試験。PD-L1 TC≥1% stage II-IIIAで顕著。EGFR/ALK陽性では効果が一貫しない。",
    date: "2026-06-29",
    url: "/lungatlas/scraps/impower010.html"
  },
  {
    title: "FLAURA2試験 — 1次治療 osimertinib + 化学療法 vs osimertinib単剤（EGFR変異陽性NSCLC）",
    summary: "治療歴なしEGFR ex19del/L858R 進行NSCLCでosimertinib + プラチナ-ペメトレキセドがosimertinib単剤を上回るPFS・OSを示した第3相試験。OS中央値47.5 vs 37.6か月。毒性は増加。",
    date: "2026-06-28",
    url: "/lungatlas/scraps/flaura2.html"
  },
  {
    title: "JCOG0201 — 薄層CT所見（CTR）による早期肺腺癌の病理的非侵襲性予測：前向きコホート研究",
    summary: "早期末梢性肺癌でCTR≤0.25かつ≤2cmが病理的非侵襲性の高特異度予測因子（98.7%）。JCOG0802・0804の画像診断的基盤。RCTではなく前向きコホート研究。",
    date: "2026-06-25",
    url: "/lungatlas/scraps/jcog0201.html"
  },
  {
    title: "CALGB 140503試験 — 末梢性 Stage IA NSCLC（≤2cm）：縮小切除 vs 肺葉切除 非劣性RCT",
    summary: "末梢性2cm以下の病理N0確認NSCLCでsublobar resectionが肺葉切除に対しDFSで非劣性を示した国際第3相試験。wedge・区域切除を含む。JCOG0802と並ぶ縮小切除の2大RCT。",
    date: "2026-06-25",
    url: "/lungatlas/scraps/calgb140503.html"
  },
  {
    title: "MARIPOSA試験 — 1次治療 amivantamab + lazertinib vs osimertinib（EGFR変異陽性NSCLC）",
    summary: "治療歴なしのEGFR exon 19 del/L858R NSCLC でamivantamab + lazertinib が osimertinib単剤を上回るPFS・OS を示した最大規模第3相試験。Grade≥3有害事象80%。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/mariposa.html"
  },
  {
    title: "AEGEAN試験 — 切除可能NSCLC 周術期 durvalumab（術前化学療法併用＋術後維持）",
    summary: "切除可能stage II–IIIB(N2) NSCLCで周術期durvalumabがEFS・pCRを改善した第3相試験。EGFR/ALK陽性は効果解析から除外。pCR 17.2% vs 4.3%、EFS HR 0.68。",
    date: "2026-06-28",
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

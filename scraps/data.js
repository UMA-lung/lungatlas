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
    title: "UFT（テガフール・ウラシル）術後補助療法 — 日本発のstage I NSCLCエビデンス",
    summary: "完全切除p-stage I肺腺癌に対する経口UFT 2年投与のエビデンス群。JLCRG試験（NEJM 2004）とメタアナリシス2本が根拠。腫瘍径2cm超が適応基準。JCOG0707でS-1に置き換わらず標準として残る。",
    date: "2026-07-15",
    url: "/lungatlas/scraps/uft.html"
  },
  {
    title: "LACEメタアナリシス — 完全切除NSCLCに対する術後補助シスプラチン併用化学療法（IPDプール解析）",
    summary: "完全切除NSCLCの術後補助シスプラチン併用化学療法の個別患者データプール解析（5試験4584例）。OS HR 0.89、5年絶対benefit 5.4%。stage II–IIIで有益、IAはむしろ有害の可能性。術後補助化学療法の古典的基盤。",
    date: "2026-07-15",
    url: "/lungatlas/scraps/lace.html"
  },
  {
    title: "NeoADAURA試験 — 切除可能EGFR変異NSCLC 術前 osimertinib ± 化学療法",
    summary: "切除可能stage II–IIIB(N2) EGFR変異NSCLCで術前osimertinib（±化学療法）がMPRを改善した第3相試験。MPR 26%/25% vs 2%。分子標的薬の術前療法として初の第3相benefit。EFSは未成熟。",
    date: "2026-07-15",
    url: "/lungatlas/scraps/neoadaura.html"
  },
  {
    title: "CheckMate 77T試験 — 切除可能NSCLC 周術期 nivolumab（術前化学療法併用＋術後維持）",
    summary: "切除可能stage IIA–IIIB NSCLCで周術期nivolumab（術前化学療法併用＋術後維持）がEFS・pCRを改善した第3相試験。EFS中央値40.1 vs 17.0か月、HR 0.59。CheckMate 816（術前のみ）と同じnivolumabの周術期版。",
    date: "2026-07-09",
    url: "/lungatlas/scraps/cm77t.html"
  },
  {
    title: "JCOG1211 — GGO優位・3cm以下肺腺癌に対する区域切除：単群検証的第3相試験",
    summary: "clinical T1N0・GGO優位・CTR 0.25-0.5・3cm以下の肺腺癌に対する区域切除の単群検証的第3相試験。5年RFS 98.0%と良好。JCOG0804・0802と並ぶCTR基準シリーズの一角。",
    date: "2026-07-02",
    url: "/lungatlas/scraps/jcog1211.html"
  },
  {
    title: "IMpower150試験 — 1次治療 atezolizumab + bevacizumab + 化学療法（ABCP、非扁平IV期NSCLC）",
    summary: "治療歴なし非扁平IV期NSCLCで、atezolizumab+bevacizumab+化学療法(ABCP)がPFS・OSを改善した第3相試験。EGFR/ALK変異例も組み入れ、探索的にbenefit。ATTLAS試験の理論的根拠となった元試験。",
    date: "2026-07-02",
    url: "/lungatlas/scraps/impower150.html"
  },
  {
    title: "ATTLAS試験（KCSG-LU19-04）— TKI耐性後 atezolizumab + bevacizumab + 化学療法（EGFR/ALK陽性NSCLC）",
    summary: "EGFR-TKIまたはALK-TKI耐性後のEGFR/ALK陽性NSCLCで、atezolizumab+bevacizumab+化学療法(ABCP)がPFSを改善した韓国発の第3相試験。PFS中央値8.5 vs 5.6か月、HR 0.62。",
    date: "2026-07-02",
    url: "/lungatlas/scraps/attlas.html"
  },
  {
    title: "LAURA試験 — 切除不能III期EGFR変異NSCLC 根治的CRT後 osimertinib地固め療法",
    summary: "切除不能stage III EGFR変異NSCLC（CRT後病勢進行なし）でosimertinibがPFSを劇的に改善した第3相試験。PFS中央値39.1 vs 5.6か月、HR 0.16。OSは未成熟。PACIFIC-durvalumabのEGFR限界を補う位置づけ。",
    date: "2026-07-02",
    url: "/lungatlas/scraps/laura.html"
  },
  {
    title: "EMPOWER-Lung 3試験 — 1次治療 cemiplimab + 化学療法 vs 化学療法（進行NSCLC、PD-L1問わず）",
    summary: "治療歴なしstage III/IV・EGFR/ALK/ROS1陰性NSCLCで、cemiplimab + プラチナ化学療法が化学療法単独を上回るOS・PFSを示した第3相試験。PD-L1問わず有効。OS中央値21.9 vs 13.0か月。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/empower-lung3.html"
  },
  {
    title: "IMpower110試験 — 1次治療 atezolizumab単剤 vs 化学療法（PD-L1陽性 IV期NSCLC）",
    summary: "PD-L1陽性・EGFR/ALK陰性のIV期NSCLCで、atezolizumab単剤がPD-L1高発現群でOSを改善した第3相試験。OS中央値20.2 vs 13.1か月。SP142アッセイ使用。高+中発現群では有意に到達せず。",
    date: "2026-06-30",
    url: "/lungatlas/scraps/impower110.html"
  },
  {
    title: "EMPOWER-Lung 1試験 — 1次治療 cemiplimab単剤 vs 化学療法（PD-L1≥50% 進行NSCLC）",
    summary: "PD-L1≥50%・EGFR/ALK/ROS1陰性の進行NSCLCで、cemiplimab単剤が化学療法を上回るOS・PFSを示した第3相試験。5年OS率29.0% vs 15.0%。PD-L1≥90%で最大効果。増悪後cemiplimab継続デザインが特徴。",
    date: "2026-06-30",
    url: "/lungatlas/scraps/empower-lung1.html"
  },
  {
    title: "KEYNOTE-024試験 — 1次治療 pembrolizumab単剤 vs 化学療法（PD-L1 TPS≥50% IV期NSCLC）",
    summary: "PD-L1 TPS≥50%・EGFR/ALK陰性のIV期NSCLCで、pembrolizumab単剤が化学療法を上回るPFS・OSを示した第3相試験。免疫療法が1次治療で化学療法に優越を示した最初の試験。5年OS率31.9% vs 16.3%。",
    date: "2026-06-30",
    url: "/lungatlas/scraps/kn024.html"
  },
  {
    title: "KEYNOTE-407試験 — 1次治療 pembrolizumab + カルボプラチン・タキサン（扁平 IV期NSCLC）",
    summary: "治療歴なし扁平上皮IV期NSCLCで、pembrolizumab + カルボプラチン・パクリタキセル/nab-パクリタキセルがOS・PFSを改善した第3相試験。PD-L1問わず有効。OS中央値17.1 vs 11.6か月。扁平の標準化学免疫療法。",
    date: "2026-06-30",
    url: "/lungatlas/scraps/kn407.html"
  },
  {
    title: "KEYNOTE-189試験 — 1次治療 pembrolizumab + ペメトレキセド・プラチナ（非扁平 IV期 EGFR/ALK陰性NSCLC）",
    summary: "治療歴なし非扁平IV期EGFR/ALK陰性NSCLCで、pembrolizumab + ペメトレキセド・プラチナがOS・PFSを改善した第3相試験。PD-L1問わず有効。5年OS率19.4% vs 11.3%。化学療法+IOの基準レジメン。",
    date: "2026-06-30",
    url: "/lungatlas/scraps/kn189.html"
  },
  {
    title: "PALOMA-3試験 — 皮下注 vs 静注 amivantamab（+ lazertinib、難治性EGFR変異NSCLC）",
    summary: "osimertinib＋化学療法後に進行したEGFR変異NSCLCで、皮下注amivantamabが静注に対しPK・有効性で非劣性を示した第3相試験。投与時間短縮・IRR 5分の1・VTE減少。探索的OSは皮下注群で改善。",
    date: "2026-06-24",
    url: "/lungatlas/scraps/paloma3.html"
  },
  {
    title: "PAPILLON試験 — 1次治療 amivantamab + 化学療法（EGFR exon 20挿入変異NSCLC）",
    summary: "治療歴なしEGFR exon 20挿入変異NSCLCで、amivantamab + carboplatin-pemetrexedが化学療法単独を上回るPFSを示した第3相試験。PFS中央値11.4 vs 6.7か月。NCCN Category 1 preferred。",
    date: "2026-06-29",
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

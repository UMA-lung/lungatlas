---
concept: irAE（免疫関連有害事象 / immune-related adverse events）
category: adverse-events
disease_setting: cross-cutting（ICI全般）
drugs: [nivolumab, pembrolizumab, atezolizumab, durvalumab, ipilimumab, tremelimumab]
status: draft
last_verified: 2026-07-08
sources:
  - id: asco2021
    ref: "Schneider BJ, et al. J Clin Oncol. 2021;39(36):4073-4126"
    doi: "10.1200/JCO.21.01440"
    note: "Erratum: JCO 2022;40(3):315, PMID 35030312"
    pmid: "34724392"
    checked: true
  - id: esmo2022
    ref: "Haanen J, et al. Ann Oncol. 2022;33(12):1217-1238"
    pmid: "36270461"
    doi: "10.1016/j.annonc.2022.10.001"
    checked: true
  - id: sitc2021
    ref: "Brahmer JR, et al. J Immunother Cancer. 2021;9(6):e002435"
    doi: "10.1136/jitc-2021-002435"
    checked: true
  - id: jsmo3
    ref: "日本臨床腫瘍学会 がん免疫療法ガイドライン 第3版（金原出版, 2023）"
    isbn: "978-4307102124"
    checked: true
  - id: nishino2016
    ref: "Nishino M, et al. JAMA Oncol. 2016;2(12):1607-1616"
    pmid: "27540850"
    doi: "10.1001/jamaoncol.2016.2453"
    checked: true
  - id: mahmood2018
    ref: "Mahmood SS, et al. J Am Coll Cardiol. 2018;71(16):1755-1764"
    pmid: "29567210"
    doi: "10.1016/j.jacc.2018.02.037"
    checked: true
  - id: wang2018
    ref: "Wang DY, et al. JAMA Oncol. 2018;4(12):1721-1728"
    pmid: "30242316"
    doi: "10.1001/jamaoncol.2018.3923"
    checked: true
  - id: martins2019
    ref: "Martins F, et al. Nat Rev Clin Oncol. 2019;16:563-580"
    pmid: "31092901"
    doi: "10.1038/s41571-019-0218-0"
    checked: true
  - id: xu2019
    ref: "Xu C, et al. BMC Cancer 2019（PD-1/PD-L1+CTLA-4併用毒性メタ）"
    pmid: "31182049"
    checked: true
  - id: nccn
    ref: "NCCN Clinical Practice Guidelines in Oncology — Management of Immune Checkpoint Inhibitor-Related Toxicities, Version 1.2026（2025-10-23）"
    note: "臨床版 Version 1.2026 の用量をASCO/ESMOとクロスチェック済み。3者の差異は各臓器別セクションに明記。"
    checked: true
  - id: bjc2024
    ref: "Jayathilaka B, et al. Br J Cancer. 2024;132(1):51-57"
    pmid: "39489880"
    doi: "10.1038/s41416-024-02887-1"
    note: "Correction: Br J Cancer 132(1):137, PMID 39658607"
    checked: true
pending: []
# publish_checklist充足済み（pending:[]／要確認ゼロ／GL版数確定）。Masaの医学監修サイン後にstatus: publishedへ。
publish_checklist:
  - "pending: [] であること"
  - "本文に 要確認 コメントが残っていないこと"
  - "参照GL版数（ASCO/NCCN/ESMO/JSMO/日本肺癌GL）を確定"
concepts: [pneumonitis, myocarditis, colitis, hepatitis, endocrinopathy, dermatitis, neurotoxicity, nephritis, myositis]
---

# irAE（免疫関連有害事象）

## 1. irAEとは・機序
免疫チェックポイント阻害薬（ICI）は免疫寛容を解除して抗腫瘍免疫を高めるが、その結果として自己反応性T細胞の活性化などにより多臓器に炎症性の有害事象を生じうる。これをirAE（免疫関連有害事象）と呼ぶ。従来の細胞傷害性化学療法のAEと異なり、(1)多臓器にわたる、(2)発症時期が遅く・不定、(3)ICI中止後も遅発しうる、(4)副腎皮質ステロイド等の免疫抑制が治療の基本、という特徴を持つ。［出典: esmo2022, asco2021, martins2019］
※irAEマネジメントの推奨の多くは観察研究・専門家合意に基づく（エビデンスの質は中〜低）。

## 2. 疫学・頻度
- 全irAE（any grade）: 実臨床で約40%、高grade（≥G3）約20%。［bjc2024］
- 単剤 vs 併用（any grade）: 単剤 約30.5% / 併用 約45.7%。［bjc2024］
- 併用（PD-1/PD-L1＋CTLA-4）の詳細: any grade 約88% / ≥G3 約41%。［xu2019］
- クラス別の傾向: 頻度・重症度は 抗CTLA-4 ＞ 抗PD-1 ≈ 抗PD-L1。大腸炎・下垂体炎・皮疹は抗CTLA-4で相対的に多く、肺臓炎・甲状腺機能低下・関節痛は抗PD-1/PD-L1で多い傾向。［martins2019, esmo2022］
- 致死的毒性（クラス別・稀）: 抗PD-1 約0.36% / 抗PD-L1 約0.38% / 抗CTLA-4 約1.08% / 併用 約1.23%。irAE中で致死率が最も高いのは心筋炎。［wang2018］
注: いずれもプール推定値で、がん種・レジメン・用量により変動する。

## 3. 発症時期
おおむね皮膚→消化管/肝→内分泌→肺・腎の順で発症が遅くなる傾向があるが個人差が大きく、ICI中止後数か月での遅発例もある。薬剤別の発症時期の詳細は「AE発症時期」ページ（ae-timing.html）を参照。［出典: esmo2022］

## 4. Grade別マネジメントの原則（CTCAE v5.0）
| Grade | ICIの扱い | ステロイド | 備考 |
|---|---|---|---|
| G1 | 原則継続（多くは経過観察・厳重モニタ） | 通常不要 | 神経・血液・心毒性は低gradeでも慎重に |
| G2 | 休薬し ≤G1 で再開を検討 | PSL 0.5–1 mg/kg/day を考慮 | 臓器により対応差 |
| G3 | 休薬（多くは中止方向）＋高用量ステロイド開始 | PSL/mPSL 1–2 mg/kg/day | 4–6週以上かけ漸減。48–72hで反応なければ追加免疫抑制 |
| G4 | 原則恒久中止 | 高用量ステロイド | 内分泌障害（ホルモン補充で管理可）は例外 |
| 特例 | 心筋炎・重症神経障害は低gradeでも中止方向 | — | overlap症候群に注意 |
［出典: asco2021, esmo2022］

## 5. 臓器別irAE
### ① 肺臓炎（Pneumonitis）※肺癌で最重要
- 頻度: 抗PD-1単剤で全grade約2.7%・≥G3約0.8%。NSCLCでは高く全grade約4.1%・≥G3約1.8%。併用でさらに高頻度（約10%）。PD-1>PD-L1の傾向。［nishino2016, asco2021］
- リスク: 既存間質性肺疾患/肺線維症、胸部放射線歴（例: PACIFIC後のdurvalumab）、COPD・喫煙、EGFR-TKIとの併用/近接。
- 臨床像: 呼吸困難・乾性咳嗽・発熱・低酸素。無症候の画像異常もある。下肺優位が多い。原発巣進行・感染・放射線肺臓炎との鑑別が必須。
- 診断: 胸部CT（すりガラス影、器質化肺炎/NSIP/過敏性肺臓炎/びまん性肺胞傷害の各パターン）、感染除外（培養、必要時BAL）。
- 対応: G1は休薬±経過観察で1–2週再評価。G2は休薬＋PSL/mPSL 1–2 mg/kg/day（ASCO・NCCN）。ESMOは1 mg/kg/day。いずれも感染除外を並行実施。G3–4は入院、mPSL 1–2 mg/kg/day（ASCO・ESMO・NCCN 一致）、ICI休薬〜恒久中止。48–72hで改善なければinfliximab/MMF/IVIG等を追加。ステロイドは長め（4–6週以上）に漸減。［asco2021, esmo2022, nccn］

### ② 心筋炎（Myocarditis）※稀だが最高致死
- 頻度: 0.04–1.14%（報告により変動）。併用で高い。致死率は約25–50%とirAE中で最も高い。［mahmood2018, wang2018］
- 発症: 早期（中央値約34日、81%が3か月以内）。1–2回投与後でも生じうる。［mahmood2018］
- overlap: 筋炎・重症筋無力症と重複しうる（呼吸筋不全に注意）。
- 診断: トロポニン（最も鋭敏。Mahmoodコホートで感度94%）、ECG、心エコー（LVEF正常でも否定不可）、心臓MRI、必要時心筋生検。
- 対応: 疑い/確定時は即ICI中止・入院・モニタ。ステロイドは高用量を早期開始（GL間で戦略差あり）：
  ・NCCN 1.2026: Grade 1（トロポニン上昇のみ）でも24時間以内に 1–2 mg/kg/day 開始を考慮。Grade≥2は PSL 1–2 mg/kg/day、不応で mPSL 1 g/day。
  ・ASCO 2021: PSL 1–2 mg/kg/day、不応で mPSL 1 g/day パルス。
  ・ESMO 2022: mPSL 500–1000 mg/day×3日 パルスを先行 → 改善後 PSL 1 mg/kg/day（最大80 mg）。
  いずれも≥G2で永久中止。不応例は abatacept / ATG / infliximab / IVIG / MMF 等を追加。［asco2021, esmo2022, nccn, mahmood2018］

### ③ 大腸炎（Colitis）
- 頻度: 抗CTLA-4で高頻度、PD-1/PD-L1では相対的に低い。
- 臨床像: 下痢・腹痛・血便・粘液便。重症で穿孔リスク。
- 診断: 便培養・C. difficile除外、CRP、必要時に下部消化管内視鏡＋生検、腹部CT。
- 対応: G1対症（継続可）。G2はPSL 1 mg/kg/day（ASCO・NCCN）。G3–4はmPSL 1–2 mg/kg/day。G4は永久中止（NCCN）／CTLA-4阻害薬は永久中止を検討（ASCO）。ステロイド抵抗性はinfliximab（5 mg/kg）第一選択、代替にvedolizumab。穿孔・中毒性巨大結腸は外科。［asco2021, esmo2022, nccn］

### ④ 肝（Hepatitis）
- 臨床像: 多くは無症候のトランスアミナーゼ上昇。ビリルビン上昇は重症所見。
- 診断: AST/ALT/ALP/T-Bil、ウイルス性・薬剤性・自己免疫性・胆道閉塞・肝転移を除外、画像。
- 対応: G1経過観察。G2は休薬＋PSL 0.5–1 mg/kg/day。G3–4はmPSL 1–2 mg/kg/day。ステロイド抵抗性はMMF（※infliximabは肝毒性のため回避）。［asco2021, esmo2022］

### ⑤ 内分泌
- 甲状腺機能異常（内分泌irAEで最多）: 甲状腺炎による一過性中毒症の後、機能低下へ移行しうる。多くはICI継続可、ホルモン補充で管理。
- 下垂体炎: 抗CTLA-4/併用で多い。頭痛・倦怠感・複数のホルモン軸低下。ACTH–コルチゾール軸低下は生命に関わる。
- 副腎不全: 副腎クリーゼに注意（ステロイド補充を優先）。
- 1型糖尿病（劇症含む）: DKAで発症しうる緊急事態。インスリン導入。
- 原則（ASCO・ESMO・NCCN 3者共通）: ホルモン補充で管理可能な内分泌障害はICI継続/再開が可能（G4でも例外扱い）。高用量ステロイドは原則不要で、内分泌補充が主体（下垂体炎の腫瘤効果等の特殊例を除く）。［asco2021, esmo2022, nccn］

### ⑥ 皮膚
- 最も早期・高頻度。斑状丘疹状発疹・掻痒・白斑（PD-1で）。
- 重症: SJS/TEN・DRESS・水疱性類天疱瘡は稀だが緊急、皮膚科連携。
- 対応: 軽症は外用ステロイド＋抗ヒスタミン。重症は全身ステロイド・ICI中止・皮膚科。［asco2021, esmo2022］

### ⑦ 神経
- 稀だが重篤: 重症筋無力症（MG）、Guillain-Barré症候群、脳炎、無菌性髄膜炎、末梢神経障害。
- MGは心筋炎・筋炎とoverlapし呼吸不全リスク。
- 対応: ≥G2で休薬〜中止、ステロイド、重症はIVIG/血漿交換、神経内科連携。［asco2021, esmo2022］

### ⑧ 腎
- 急性間質性腎炎が主。Cr上昇。PPI/NSAID併用が交絡因子。
- 対応: G2以上でPSL 0.5–1 mg/kg/day（ASCO・NCCN。NCCNは1週不応で1–2へ増量）。ESMOは1 mg/kg/day。腎前性/閉塞性/他薬剤を除外、原因薬剤（PPI等）の中止も検討。腎生検を考慮。［asco2021, esmo2022, nccn］

### ⑨ 筋・関節
- 関節炎、筋痛/筋炎。筋炎は心筋炎・MGとのoverlapに注意（CK・トロポニンを確認）。
- 対応: NSAIDs〜ステロイド、リウマチ科連携。［asco2021, esmo2022］

### ⑩ その他
- 血液: 免疫性血小板減少、自己免疫性溶血性貧血、無顆粒球症。
- 眼: ぶどう膜炎。
- 膵: 無症候のリパーゼ/アミラーゼ上昇が多く、臨床的膵炎は稀。［asco2021, esmo2022］

## 6. 特記事項（肺癌臨床向け）
- 肺臓炎の鑑別が難しい: 原発巣進行・感染・放射線肺臓炎との区別。PACIFIC後durvalumabは胸部放射線歴があり要注意。
- overlap症候群（心筋炎＋筋炎＋MG）: 発症時は3病態を評価。呼吸筋不全に注意。
- irAEと有効性: irAE発現例で予後良好とする報告があるが、リードタイムバイアス等の交絡があり因果は確立していない。irAEを効果の代替指標として扱わない。
- ステロイドと有効性: irAE治療目的の短期ステロイドが有効性を大きく損なうという明確なエビデンスは限定的。一方でベースラインで高用量ステロイド（PSL≧10mg相当）を要する状態は予後不良と関連する報告があるが交絡に注意。
- 再投与（rechallenge）: irAE軽快後の再開は可能な場合があるが、再燃・新規irAEのリスク。心筋炎・重症神経障害・G4等では原則行わない。個別判断。
- ベースライン自己免疫疾患: 増悪リスクを評価し慎重に導入。
※各論の詳細は関連ページ（ae-timing.html 等）へリンク。

## 7. 日本での注記
- 国内承認ICI（肺癌領域）: nivolumab・pembrolizumab（抗PD-1）、atezolizumab・durvalumab（抗PD-L1）、ipilimumab（抗CTLA-4、併用）。tremelimumabは一部併用で承認（肺癌への適用は添付文書で確認）。
- 参照GL: 日本臨床腫瘍学会「がん免疫療法ガイドライン 第3版」（2023）、日本肺癌学会「肺癌診療ガイドライン 2024年版」。
- irAEはICI中止後も遅発しうる（数か月後）ため、治療終了後も注意喚起する。

## 8. COI注記
ICIの承認試験の多くは製薬企業がスポンサーである。本ページは横断的リファレンスであり、特定薬剤・レジメンの優劣は論じない。

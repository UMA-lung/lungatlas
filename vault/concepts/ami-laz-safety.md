---
concept_id: ami-laz-safety
title: "アミバンタマブ＋ラゼルチニブ 副作用管理"
subtitle: "VTE・IRRを中心とした管理プロトコル"
related_trial: mariposa
status: in-progress

coi:
  note: "主要データはJanssen Research and Development（Johnson & Johnson）スポンサー試験由来。管理プロトコルはMARIPOSAプロトコル文書（v4/v5）に基づく。"

references:
  mariposa_pfs:
    citation: "Cho BC, et al; MARIPOSA Investigators. Amivantamab plus Lazertinib in Previously Untreated EGFR-Mutated Advanced NSCLC. N Engl J Med. 2024;391(16):1486-1498."
    pmid: "38924756"
    doi: "10.1056/NEJMoa2403614"
    label: "MARIPOSA主要解析"
  mariposa_os:
    citation: "Yang JC-H, et al; MARIPOSA Investigators. Overall Survival with Amivantamab–Lazertinib in EGFR-Mutated Advanced NSCLC. N Engl J Med. 2025;393(17):1681-1693."
    pmid: "40923797"
    doi: "10.1056/NEJMoa2503001"
    label: "MARIPOSA OS最終解析"
  mariposa_protocol:
    citation: "MARIPOSA Trial Protocol v4 (2022) / v5. NCT04487080. Published as Supplementary to NEJM 2024/2025."
    pmid: null
    nct: "NCT04487080"
    label: "MARIPOSAプロトコル v4/v5"
    note: "IRR前投薬・Grade別対応・減量段階・VTE用量調整の一次出典"
  irr_chrysalis:
    citation: "Park K, Sabari JK, Haura EB, et al. Management of infusion-related reactions (IRRs) in patients receiving amivantamab in the CHRYSALIS study. Lung Cancer. 2023;178:166-171."
    pmid: "36868177"
    doi: "10.1016/j.lungcan.2023.02.008"
    label: "CHRYSALIS IRR管理"
  irr_dougherty:
    citation: "Dougherty L, Lewis W, O'Neill M, et al. Infusion-Related Reaction Management With Amivantamab for EGFR Exon 20 Insertion Mutation NSCLC: A Practical Guide for Advanced Practitioners. J Adv Pract Oncol. 2024;15(4)."
    pmid: null
    pmc: "PMC11409773"
    label: "IRR実践ガイド（JADPRO 2024）"
  vte_asco_gl:
    citation: "Key NS, Khorana AA, Kuderer NM, et al. Venous Thromboembolism Prophylaxis and Treatment in Patients With Cancer: ASCO Guideline Update. J Clin Oncol. 2023;41(16):3063-3071."
    pmid: "37075273"
    doi: "10.1200/JCO.23.00294"
    label: "がん関連VTE ASCO GL 2023"
  jsmo_anticoag_statement:
    citation: "日本臨床腫瘍学会・日本腫瘍循環器学会・日本循環器学会・日本肺癌学会・日本癌治療学会・日本血栓止血学会・日本静脈学会. 非小細胞肺癌治療薬アミバンタマブ・ラゼルチニブ併用療法における予防的抗凝固療法の適正使用に関する合同ステートメント. 2025年12月8日."
    url: "https://www.jsmo.or.jp/wp/wp-content/uploads/ee30e148c8b4bead39977162d71a83d1.pdf"
    label: "7学会合同ステートメント（日本・VTE予防）"
  paloma3:
    citation: "Subcutaneous Amivantamab vs Intravenous Amivantamab, Both in Combination With Lazertinib, in Refractory EGFR-Mutated NSCLC: PALOMA-3. J Clin Oncol. 2024;42(30):3593-3605."
    pmid: null
    doi: "10.1200/JCO.24.01001"
    nct: "NCT05388669"
    label: "PALOMA-3（SC amivantamab）"
    note: "PMID要確認（scrapsで別途対応予定）"

---

# VTE（静脈血栓塞栓症）

## 発生率
<!-- 出典: MARIPOSA主要解析（PMID 38924756）/ OS最終解析（PMID 40923797） -->

| 指標 | ami+laz群 | osi群 |
|------|-----------|-------|
| 全Grade（主要解析時） | 37% | 9% |
| 全Grade（OS最終解析時） | 40% | 11% |
| Grade 3以上 | 10% | 記載なし |

## 発症時期
<!-- 出典: MARIPOSAプロトコル v4/v5・OS最終解析（PMID 40923797） -->

- **中央値**: 84日（範囲: 6〜777日）
- **62%が治療開始から最初の4ヶ月以内に集中**
- 早期発症パターンが特徴的であり、治療開始直後からのモニタリングが重要

## VTEの内訳
<!-- 出典: OS最終解析 本文Table 2（PMID 40923797, p.1690）= Any Grade PT別、発生率15%以上のみ記載 -->
<!-- 主要解析時の値は主要解析（PMID 38924756）付録由来 -->

| 種別 | OS最終解析（本文Table 2, 2024/12/4カット） | 主要解析時（2023/8/11カット） | Grade≥3（OS解析） |
|------|------|------|------|
| 肺塞栓症（PE） | 19% | 17% | 9% |
| 深部静脈血栓症（DVT） | 16% | 14% | 3% |
| 四肢静脈血栓症 | 記載なし（<15%でリスト外） | 4% | － |
| 血栓症 | 同上 | 2% | － |
| 静脈血栓症 | 同上 | 2% | － |
| 表在静脈血栓症 | 同上 | 1% | － |
| 血栓性静脈炎 | 同上 | 1% | － |
| 肺梗塞 | 同上 | <1% | － |

<!-- 注: OS本文Table 2はAny Grade・発生率15%以上のPTのみ掲載のため、
     PE・DVT以外の内訳はOS論文本文には数値記載なし。
     四肢静脈血栓症以下は主要解析（PMID 38924756）付録由来。
     14%→16%、17%→19%の上昇はデータカット延長による累積発生率上昇（母集団N=421は同一）。 -->
<!-- 付録Table S5は重篤AE（Serious AE）のみ: PE 6%, DVT 3%（Any Gradeとは別レイヤー） -->

## 発症リスク因子
<!-- 出典: MARIPOSA OS最終解析（PMID 40923797）・探索的考察 -->

- **腫瘍奏効（tumor response）との関連**: 以前の解析でリスク因子として特定
- **推定機序**: アミバンタマブ＋ラゼルチニブによる迅速な腫瘍細胞死が引き起こす一過性の凝固亢進状態の可能性（推測。原著に確定的な記載なし）

## 予防的抗凝固療法
<!-- 出典: MARIPOSAプロトコル v4/v5 -->

### 推奨
- **対象**: ami+laz療法を受ける**全患者**
- **期間**: 治療開始から**最初の4ヶ月間**
- **薬剤**: 地域のガイドラインに従ったDOACまたはLMWH
  - DOAC推奨例: アピキサバン、リバーロキサバン
  - **ビタミンK拮抗薬は薬物相互作用のため非推奨**
- **一般的VTE予防・治療原則**: がん関連VTE ASCO GL 2023（PMID 37075273）を参照

### 日本における予防的抗凝固療法（保険適用）
<!-- 出典: 厚生労働省保険局医療課 2025/3/27承認 / 7学会合同ステートメント 2025/12/8 -->
<!-- ステートメントPDF: https://www.jsmo.or.jp/wp/wp-content/uploads/ee30e148c8b4bead39977162d71a83d1.pdf -->

- **薬剤・用量**: アピキサバン 2.5mg 1日2回
- **期間**: 併用療法開始から4ヶ月間
- **保険適用**: 2025年3月27日付で厚生労働省保険局医療課により承認
- **合同ステートメント**: 日本臨床腫瘍学会・日本腫瘍循環器学会・日本循環器学会・
  日本肺癌学会・日本癌治療学会・日本血栓止血学会・日本静脈学会の7学会が
  2025年12月8日に発出

#### 日本人での注意点
<!-- 出典: 合同ステートメント / アピキサバン添付文書 -->
- 活動性悪性腫瘍症例では日本人でアピキサバン血中濃度が高くなることが知られるが、
  2.5mg 1日2回投与の出血リスクは審査報告書で評価されている
- **腎機能障害**: CLcr 15mL/min未満には投与しない。CLcr 15〜50mL/minでは出血リスク増大のおそれ
- アピキサバンが投与できない場合は、ラゼルチニブとの併用投与を避け他の治療選択肢を考慮（添付文書）
- 本ステートメントは診療ガイドラインではなく、診療判断は最新の添付文書に基づき各医療機関・担当医の裁量と責任で行う

### 推奨と実態の乖離（重要な臨床的注意点）
<!-- 出典: MARIPOSA OS最終解析（PMID 40923797）・MARIPOSAプロトコル v4/v5 -->

- 予防推奨はプロトコル改訂第3版（2022年8月）に導入
- **導入時点で大半の患者はすでに高リスクの最初の4ヶ月間を経過していた**
- 最初のVTE発症時に抗凝固療法を受けていたのは **ami+laz群のわずか1%**
- ベースラインで抗凝固療法を受けていたのは **5%** のみ

## VTE発症後の対応
<!-- 出典: MARIPOSAプロトコル v4/v5（NCT04487080, p.60, p.72, p.120-121） -->

| 状況 | 対応 |
|------|------|
| 臨床的に安定している場合 | 治験薬継続、抗凝固療法を開始 |
| 臨床的不安定（呼吸不全・心機能不全等） | 回復まで休薬 |
| VTE発症による用量減量 | **不要**（用量調整規定なし） |
| 適切な抗凝固療法継続中にVTE再発 | 併用療法を**永久中止**（医師判断でいずれか単剤継続は許容） |

## 抗凝固療法中の転帰
<!-- 出典: MARIPOSA OS最終解析（PMID 40923797） -->

- 抗凝固薬使用中の出血イベント発生率: **8%**
- 抗凝固薬使用中のVTE再発率: **2%**

---

# IRR（注入関連反応）

## 発生率
<!-- 出典: MARIPOSA主要解析（PMID 38924756）/ OS最終解析（PMID 40923797） -->

| 指標 | ami+laz群 |
|------|-----------|
| 全Grade（主要解析時） | 63% |
| 全Grade（OS最終解析時） | 65% |
| Grade 3以上 | 6% |
| IRRによる治療中止 | 5% |

## 発症タイミング
<!-- 出典: MARIPOSA OS最終解析（PMID 40923797）・CHRYSALIS IRR管理（PMID 36868177） -->

- **初回投与（C1D1）に90%が集中**
- C1D2での発生: 3.4〜4%
- C2以降の発生: 0.1%以下（極めて稀）

## 初回2日間分割投与の根拠
<!-- 出典: MARIPOSAプロトコル v4/v5・CHRYSALIS IRR管理（PMID 36868177） -->

- 1日目: **350mg**を低速で投与（1050mgの場合）
- 2日目: 残量（700mg）を投与
- 根拠: IRRの発生率と重症度を最小化するため
- 効果: 2日目以降の安全性・忍容性が向上

## 前投薬レジメン
<!-- 出典: MARIPOSAプロトコル v4（p.44 Table 5）/ v5（p.57 Table 5）・JADPRO 2024（PMC11409773） -->

| 薬剤 | 用量 | タイミング | 必須回 |
|------|------|-----------|--------|
| デキサメタゾン | 10mg IV または経口 | 投与45〜60分前 | C1D1・C1D2は必須。C1D8以降は任意 |
| 抗ヒスタミン薬（ジフェンヒドラミン等） | 25〜50mg | IV: 15〜30分前、経口: 30〜60分前 | 全投与回で必須 |
| 解熱鎮痛薬（アセトアミノフェン等） | 650〜1000mg | IV: 15〜30分前、経口: 30〜60分前 | 全投与回で必須 |

## IRR Grade別対応フロー
<!-- 出典: MARIPOSAプロトコル v4（p.50-51 Table 11）/ v5（p.64-65 Table 11）・CHRYSALIS（PMID 36868177）・JADPRO 2024（PMC11409773） -->

| Grade | 対応 |
|-------|------|
| **Grade 1** | 投与中断を検討。症状消失後、中断前の**50%の速度**で再開 |
| **Grade 2** | 投与中断。輸液・抗ヒスタミン薬を投与。症状消失後、**50%の速度**で再開 |
| **Grade 3** | 投与中止。**再発時は永久中止** |
| **Grade 4** | 直ちに投与中止。**永久中止（再投与不可）** |

## IRR後の再投与
<!-- 出典: MARIPOSAプロトコル v4（p.50 Table 11）/ v5（p.64 Table 11）・JADPRO 2024（PMC11409773） -->

- Grade 1〜3: 症状がGrade 1以下に回復後、再開可
- 再開時は**IRR発生時点の速度の50%から開始**し、30分間無症状なら徐々に増速
- Grade 4: **再投与不可**

## 皮下注製剤（SC amivantamab）でのIRR
<!-- 出典: PALOMA-3試験（J Clin Oncol. 2024;42(30):3593-3605, doi:10.1200/JCO.24.01001, NCT05388669）-->

- SC製剤ではIRR発生率がIV群66%に対し**SC群13%**と大幅に低下
- ただし皮膚毒性（皮疹・爪囲炎等）の発生率は製剤変更で変わらない

### 日本における承認状況（リブロファズ®配合皮下注）
<!-- 出典: ヤンセン 2025/12/22承認発表 / 薬価収載2026/3/18 -->
- **製品名**: リブロファズ配合皮下注（アミバンタマブ／ボルヒアルロニダーゼ アルファ）
- **承認**: 2025年12月22日／**薬価収載・発売**: 2026年3月18日
- **適応**: ①EGFR遺伝子エクソン20挿入変異陽性、②EGFR遺伝子変異陽性の切除不能な進行・再発NSCLC
- **MARIPOSAレジメン（common変異1次治療）での位置づけ**: ②に対しB法（ラゼルチニブ併用、4週間1サイクル、エクソン20挿入を除く）で使用可
- **承認根拠**: PALOMA-3（NCT05388669）/ PALOMA-2（NCT05498428）
- 1バイアル(10mL)中アミバンタマブ1600mg／ボルヒアルロニダーゼ アルファ20000U含有
<!-- 要確認: SC版でのVTE予防抗凝固の扱い（IV版同様アピキサバン推奨か） -->

---

# 用量調整基準

## アミバンタマブ減量段階
<!-- 出典: MARIPOSAプロトコル v4（p.48 Table 9）/ v5（p.62 Table 9） -->

| 段階 | 体重<80kg | 体重≥80kg |
|------|-----------|-----------|
| 通常用量 | 1050mg | 1400mg |
| 第1減量 | 700mg | 1050mg |
| 第2減量 | 700mg（固定） | 1050mg（固定） |
| 第3減量 | 350mg | 700mg |

## ラゼルチニブ減量段階
<!-- 出典: MARIPOSAプロトコル v4（p.48 Table 9）/ v5（p.62 Table 9） -->

| 段階 | 用量 |
|------|------|
| 通常用量 | 240mg/日 |
| 第1減量 | 160mg/日 |

## 皮膚毒性による用量調整
<!-- 出典: MARIPOSAプロトコル v4/v5 -->

| Grade | 対応 |
|-------|------|
| Grade 1〜2 | 原則継続。Grade 2が2週間改善しない場合は減量を検討 |
| Grade 3〜4 | Grade 2以下に改善するまで休薬後、1段階低い用量で再開 |
| Grade 4発疹またはTEN等 | アミバンタマブを**永久中止** |

## VTE・IRRによる用量調整
<!-- 出典: MARIPOSAプロトコル v4/v5 -->

- VTE発症: **用量減量不要**（臨床的不安定時のみ休薬）
- IRR発症: **薬剤自体の用量減量規定なし**（投与速度の調整で管理）

---

# 主な有害事象発生率（ami+laz群、全Grade）
<!-- 出典: MARIPOSA主要解析（PMID 38924756）-->

| 有害事象 | 発生率 |
|----------|--------|
| 爪囲炎 | 68% |
| 注入関連反応（IRR） | 63% |
| 皮疹 | 62% |
| 低アルブミン血症 | 48% |
| VTE | 40%（OS最終解析時） |
| ALT上昇 | 36% |
| 末梢性浮腫 | 36% |
| 口内炎 | 29% |
| 便秘 | 29% |
| 下痢 | 29% |
| ざ瘡様皮膚炎 | 29% |
| ILD/肺臓炎 | 3%（Grade 3以上: 1%） |

# Grade 3以上有害事象・治療中止
<!-- 出典: MARIPOSA主要解析（PMID 38924756）/ OS最終解析（PMID 40923797） -->

| 指標 | ami+laz群 | osi群 |
|------|-----------|-------|
| Grade 3以上（主要解析時） | 75% | 43% |
| Grade 3以上（OS最終解析時） | 80% | 52% |
| 全薬剤中止（TRAE） | 10% | 3% |
| いずれかの薬剤中止 | 35% | 14% |
| 用量減量率 | 59% | 5% |
| TRAE Grade 5（治療関連死） | 4件（1%） | 2件（<1%） |

pending:
  - "PALOMA-3 PMIDの確認（DOI 10.1200/JCO.24.01001は確認済み、scrapsで別途対応予定）"
  - "SC版（リブロファズ®）でのVTE予防抗凝固の扱い（IV版同様アピキサバン推奨か）"

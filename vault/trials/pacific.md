---
trial: PACIFIC
trial_id: pacific
category: trial
disease_setting: 切除不能III期NSCLC 根治的CRT後 地固め療法
stage: III
line: consolidation
drugs: [デュルバルマブ]
population: 白金製剤ベース同時化学放射線療法(cCRT)を2サイクル以上施行し増悪のない切除不能Stage III NSCLC、WHO PS 0-1、PD-L1発現問わず
sponsor: AstraZeneca
nct: 要確認
status: draft
last_verified: 2026-07-01
sources:
  - type: paper
    label: PACIFIC 原著（PFS主要解析）
    authors: Antonia SJ, Villegas A, Daniel D, et al.
    journal: N Engl J Med
    year: 2017
    volume_pages: "377(20):1919-1929"
    doi: 10.1056/NEJMoa1709937
    pmid: 28885881
    checked: true
  - type: paper
    label: PACIFIC OS主要解析
    authors: Antonia SJ, Villegas A, Daniel D, et al.
    journal: N Engl J Med
    year: 2018
    volume_pages: "379(24):2342-2350"
    doi: 10.1056/NEJMoa1809697
    pmid: 30280658
    checked: true
  - type: paper
    label: PACIFIC 4年フォローアップ
    authors: Faivre-Finn C, Vicente D, Kurata T, et al.
    journal: J Thorac Oncol
    year: 2021
    volume_pages: "16(5):860-867"
    doi: 10.1016/j.jtho.2020.12.015
    pmid: 33476803
    checked: true
  - type: paper
    label: PACIFIC 5年フォローアップ（原試験の最長期データ）
    authors: Spigel DR, Faivre-Finn C, Gray JE, et al.
    journal: J Clin Oncol
    year: 2022
    volume_pages: "40(12):1301-1311"
    doi: 10.1200/JCO.21.01308
    pmid: 35108059
    checked: true
pending:
  - "NCT番号未確認"
  - "ORR数値が解析時点により異なる（原著28.4% vs 16.0%、5年フォロー29.8% vs 18.3%）。原因未確認"
  - "デュルバルマブ群の治療関連死亡数：原著(2017)には全死因死亡率(4.4% vs 6.4%)のみ記載、治療関連死の数値は未確認"
  - "PD-L1<1%サブグループの解釈（探索的解析、CIが1をまたぐ）が国内外添付文書の記載表現とどう対応するか要確認"
  - "PACIFIC-2（同時併用、陰性試験）データは別途vault化予定（NotebookLM抽出待ち）"
publish_checklist: []
concepts: [crt-regimen-selection]
---

## 試験デザイン
- 第3相、二重盲検、プラセボ対照、国際共同試験
- 対象：白金製剤ベースcCRTを2サイクル以上施行し増悪のない切除不能Stage III NSCLC、WHO PS 0-1、PD-L1発現問わず（All-comers）
- 除外基準：PD-1/PD-L1抗体治療歴、CRTによるGrade2以上肺臓炎、活動性自己免疫疾患等
- 介入群：デュルバルマブ10mg/kg Q2W、最大12ヶ月間 静注
- 対照群：プラセボ　同スケジュール
- ランダム化比：2:1（介入群476例、対照群237例）
- 層別化因子：年齢（65歳未満/以上）、性別、喫煙歴
- 主要評価項目：PFS（BICR判定）、OS
- 副次評価項目：12/18ヶ月PFS率、ORR、DoR、TTDM、安全性、QoL

## 有効性データの推移（データカットオフ別）

| 解析時点 | データカットオフ | PFS中央値 | PFS HR (95%CI) | OS中央値 | OS HR (95%CI) |
|---|---|---|---|---|---|
| 原著（PFS主解析） | 2017-02-13 | 16.8 vs 5.6ヶ月 | 0.52 (0.42-0.65), p<0.001 | 未到達（両群とも） | 未算出 |
| OS主解析 | 2018-03-22 | 17.2 vs 5.6ヶ月 | 0.51 (0.41-0.63) | 未到達 vs 28.7ヶ月 | 0.68 (99.73%CI 0.47-0.997), p=0.0025 |
| 4年フォロー（探索的） | 2020-03-20 | 16.9 vs 5.6ヶ月 | 0.55 (0.44-0.67) | 47.5 vs 29.1ヶ月 | 0.71 (0.57-0.88) |
| 5年フォロー（探索的、最長期） | 2021-01-11 | 16.9 vs 5.6ヶ月 | 0.55 (0.45-0.68) | 47.5 vs 29.1ヶ月 | 0.72 (0.59-0.89) |

※4年・5年フォローはいずれも事前規定された探索的解析（exploratory）。

## Landmark生存率

| 時点 | PFS率（デュルバルマブ vs プラセボ） | OS率（デュルバルマブ vs プラセボ） |
|---|---|---|
| 24ヶ月 | 記載なし | 66.3% vs 55.6%（p=0.005） |
| 48ヶ月（4年） | 35.3% vs 19.5% | 49.6% vs 36.3% |
| 60ヶ月（5年） | 33.1% vs 19.0% | 42.9% vs 33.4% |

## 奏効率
- ORR：原著28.4% vs 16.0%（p<0.001）／5年フォロー論文29.8% vs 18.3%（解析時点により差異あり、要確認）
- DoR中央値：未到達 vs 13.8ヶ月（原著時点）
- 5年時点でも奏効者の約半数で奏効が持続（Spigel 2022）

## サブグループ解析
- 35の事前規定サブグループでPFS改善は概ね一貫（原著）
- PD-L1発現（25%未満 vs 25%以上）：事前規定、いずれもデュルバルマブ群良好
- **PD-L1 <1%（事後解析・探索的）**：OS HR 1.05（95%CI 0.69-1.62、4年時点）→ HR 1.15（95%CI 0.75-1.75、5年時点）。CIが1をまたぐため効果が不明確。組織回収率やCRTによる発現変化などの限界がSpigel論文中で指摘されている。

## 安全性データ
- Grade3以上AE：29.9% vs 26.1%（原著）、30.5% vs 26.1%（OS解析時点）
- 免疫関連AE（全Grade・全原因）：66.7% vs 49.1%（OS解析時点）
- 肺臓炎/放射線肺臓炎（全Grade）：33.9% vs 24.8%（Grade3以上 3.4% vs 2.6%、原著時点）
- AEによる投与中止：15.4% vs 9.8%
- 治療関連死亡数：<!-- 要確認: 原著(2017)には全死因死亡率(4.4% vs 6.4%)のみ記載 -->
- 4年・5年フォロー論文では安全性データの更新なし

## 国内承認情報
- 2018年7月2日、「切除不能な局所進行の非小細胞肺癌における根治的化学放射線療法後の維持療法」で国内製造販売承認取得（本邦初の抗PD-L1抗体）
- PACIFIC試験のPFSデータに基づく承認
- 出典：アストラゼネカ プレスリリース（2018年7月2日）、最適使用推進ガイドライン デュルバルマブ（平成30年8月策定）

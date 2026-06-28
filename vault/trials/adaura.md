---
trial: ADAURA
drugs: [osimertinib]
stage: IB-IIIA
staging_system: AJCC第7版
setting: 術後補助療法
line: adjuvant
concepts: [dfs-vs-os]
verified_sources:
  - pmid: 34534430
    label: "JCO 2023 DFS final"
    checked: "DFS primary, subgroup, safety"
  - pmid: 37272535
    label: "NEJM 2023 OS final (Tsuboi et al.)"
    checked: "OS primary, OS by stage, Japan IB exclusion, chemo rate by stage"
pending: []
status: published
last_verified: 2026-06
---

## OS by Stage（探索的解析、NEJM 2023 OS final, データカットオフ2023-01-27）

| Stage | HR | 95% CI | 備考 |
|---|---|---|---|
| IB | 0.44 | 0.17–1.02 | CI crosses 1 |
| II | 0.63 | 0.34–1.12 | CI crosses 1 |
| IIIA | 0.37 | 0.20–0.64 | |
| II–IIIA | 0.49 | 0.33–0.73 | |
| IB–IIIA（全体） | 0.49 | 0.34–0.70 | 主要解析集団 |

※Stage IAはAJCC第8版再分類で3名該当のみ、独立HR算出なし
※サブグループ解析はすべて探索的（pre-specifiedではない）

## Japan Stage IB除外（NEJM 2023 OS final, 補足資料プロトコル詳細）

補足資料に明記：「In Japan, patients with stage IB disease were excluded.」
SAPのImportant Protocol Deviations表でも、日本施設の対象はStage II/IIIAと規定。

## 術後補助化学療法施行率（補足資料 Table S2）

| Stage | オシメルチニブ群 | プラセボ群 |
|---|---|---|
| IB–IIIA全体 | 60% (202/339) | 60% (207/343) |
| IB | 25% (27/107) | 28% (30/109) |
| II | 70% (80/115) | 73% (85/116) |
| IIIA | 81% (95/117) | 78% (92/118) |

主にプラチナ製剤併用療法。Stage IB約26%、Stage II–IIIA約76%。

## Stage IB登録上限

全ランダム化患者の約30%（約210名）にキャップ。
主要評価項目はStage II–IIIAのDFS（Stage IB–IIIAのDFSは副次評価項目）。

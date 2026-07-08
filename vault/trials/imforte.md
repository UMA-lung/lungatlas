---
trial: IMforte
trial_id: imforte
category: trial
disease_setting: ED-SCLC 維持療法（アテゾリズマブ+CE誘導後）
stage: ED
line: maintenance
drugs: [ルルビネクテジン, アテゾリズマブ]
population: アテゾリズマブ+カルボプラチン+エトポシド4サイクル誘導後にPDがない患者（CR/PR/SD）、PS0-1、CNS転移なし
sponsor: F. Hoffmann-La Roche/Jazz Pharmaceuticals
nct: NCT05091567
japan_approval_status: 国内未承認（ルルビネクテジンは肺癌診療ガイドライン2025年版に「2025年7月時点 本邦未承認」と明記。IMforteレジメン全体が国内未承認）
status: published
last_verified: 2026-07-08
sources:
  - type: paper
    label: IMforte 主論文
    authors: Paz-Ares L, et al.
    journal: Lancet
    year: 2025
    volume_pages: "405:2129-2143"
    doi: 10.1016/S0140-6736(25)01011-6
    pmid: 40473449
    checked: true
pending: []
publish_checklist: [数値NotebookLM抽出+Masa監修済, 国内承認状況web検証済, PMID/DOI確認済]
concepts: []
---

## 試験デザイン
- 第3相、ランダム化（1:1）、非盲検（open-label）
- 対象：アテゾリズマブ+カルボプラチン+エトポシドの4サイクル誘導療法完了後にPDがない患者（CR/PR/SD）、PS0-1、CNS転移なし
- 介入群（Arm A）：ルルビネクテジン 3.2mg/m² ＋ アテゾリズマブ 1200mg、21日毎 IV。ペグフィルグラスチム（G-CSF）一次予防必須
- 対照群（Arm B）：アテゾリズマブ 1200mg、21日毎 IV（単剤維持）
- 主要評価項目：IRF判定PFS、OS
- 副次評価項目：治験医師判定PFS、ORR、DOR、PFS率・OS率、安全性、HRQoL等

## 患者背景
- 登録数：介入群242例、アテゾ単独群241例
- 年齢中央値：介入群65.0歳、対照群67.0歳
- PS：PS0 43%/42%、PS1 57%/58%
- 肝転移（誘導開始時）：介入群41%、対照群39%
- PCI既往：介入群14%、対照群15%

## 有効性データ
- OS中央値：13.2ヶ月（95%CI 11.9–16.4） vs 10.6ヶ月（95%CI 9.5–12.2）、HR 0.73（95%CI 0.57–0.95）、p=0.017（中間解析）
- PFS（IRF判定）：5.4ヶ月（95%CI 4.2–5.8） vs 2.1ヶ月（95%CI 1.6–2.7）、HR 0.54（95%CI 0.43–0.67）、p<0.0001
- PFS（治験医師判定）：HR 0.55（95%CI 0.45–0.68）
- ORR（維持開始後・IRF判定）：19%（34/175、95%CI 14–26） vs 10%（19/182、95%CI 6–16）
- PFS率：6ヶ月 41.2% vs 18.7%、12ヶ月 20.5% vs 12.0%
- OS率：12ヶ月 56.3% vs 44.1%

## 安全性データ
- Grade3以上有害事象：38%（92/242） vs 22%（53/240）
- 治療関連死：介入群2例（敗血症、発熱性好中球減少症）、対照群1例（敗血症）
- 血液毒性（Grade3–4）：貧血 8% vs 1%、好中球数減少 7% vs 0%、血小板数減少 7% vs 0%（介入群で高頻度）

## 重要な留意点
- ルルビネクテジンは2025年7月時点で本邦未承認（肺癌診療ガイドライン2025年版に明記）。IMforteレジメン全体が国内未承認。
- 国内のED-SCLC維持療法の標準は、誘導療法（プラチナ+エトポシド+アテゾリズマブ/デュルバルマブ）後の免疫チェックポイント阻害薬単剤維持。IMforteはこれに上乗せする新規レジメンだが国内では実施不可。
- IMforteの対照群はアテゾリズマブ単剤維持であり、直接比較（RCT）である点に注意（間接比較ではない）。
- 提示のp値は中間解析時点のOS（p=0.017）。最終解析ではない。
- COI：試験スポンサーはF. Hoffmann-La Roche（Jazz Pharmaceuticals共同出資）。

---
concept: 切除不能III期NSCLC 化学放射線療法・地固め療法 ガイドライン比較
concept_id: stage3-nsclc-guidelines
category: concept
disease_setting: 切除不能III期NSCLC 化学放射線療法
status: draft
last_verified: 2026-07-01
sources:
  - type: guideline
    label: 肺癌診療ガイドライン2025年版（日本肺癌学会）
    publisher: 日本肺癌学会
    year: 2025
    url: https://www.haigan.gr.jp/publication/guideline/examination/2025/1/2/250102060100.html
    checked: true
  - type: guideline
    label: NCCN Guidelines NSCLC v7.2025 Insights
    publisher: NCCN
    year: 2025
    journal: J Natl Compr Canc Netw
    volume_pages: "23(9)"
    url: https://jnccn.org/view/journals/jnccn/23/9/article-p354.xml
    checked: true
  - type: guideline
    label: ESMO Clinical Practice Guideline eUpdate（Early and locally advanced NSCLC、durvalumab地固め）
    publisher: ESMO
    journal: Ann Oncol
    url: https://www.annalsofoncology.org/article/S0923-7534(20)39865-3/fulltext
    checked: true
pending:
  - "NCCN/ESMOの原文（PDF）は購読・登録制のため、二次情報（学会誌掲載記事・製薬会社HCP向けサイト）経由での確認。原文の直接引用ではない点に注意"
  - "NCCN/ESMOにおける『同時併用 vs 逐次CRT』の推奨文言の直接引用は未確認（一般に同時併用が標準治療とされているが、CQレベルでの明文化は未確認）"
  - "LAURA試験（EGFR陽性、術後オシメルチニブ地固め）は本ページでは概要のみ。独立したvault化・専用ページ化は別途予定"
  - "ESMOのオシメルチニブ地固めに関する記載は未確認"
publish_checklist: []
---

## CQ37: 化学放射線療法 vs 放射線単独（日本肺癌学会2025年版）
- 推奨：切除不能局所進行NSCLC、PS0-1の患者に化学放射線療法を行うよう強く推奨〔推奨度1、エビデンスの強さA〕
- 根拠：CDDP含む化学療法+放射線併用群が放射線単独群よりOS良好（HR 0.87, p=0.0052、2年死亡リスク15-30%減少）
- 高齢者（71歳以上）：JCOG0301試験でCBDCA連日併用群がRT単独群よりOS延長（HR 0.68, 95%CI 0.47-0.98, p=0.0179、中央値22.4 vs 16.9ヶ月）

## CQ38: 同時併用 vs 逐次CRT（日本肺癌学会2025年版）
- 推奨：PS0-1患者の化学放射線療法における併用時期は同時併用を行うことを強く推奨〔推奨度1、エビデンスの強さA〕
- 根拠となる試験：
  - Furuse et al. J Clin Oncol. 1999;17(9):2692-9（PMID 10561343、MVP療法下、同時 vs 逐次、OS中央値16.5 vs 13.3ヶ月, p=0.03998）
  - RTOG9410（Curran et al. J Natl Cancer Inst. 2011;103(19):1452-60、PMID 21903745、CDDP+VBL、同時 vs 逐次、OS HR 0.812, 95%CI 0.663-0.996, p=0.046、中央値17.0 vs 14.6ヶ月）※同時併用群で急性好中球減少・血小板減少・食道炎の頻度が高い
  - Aupérin 2010メタアナリシス（本サイトvault/concepts/crt-regimen-selection.md参照、OS HR 0.84, 95%CI 0.74-0.95, p=0.004）
- 慢性期の有害事象は同時・逐次で同等とされる

## CQ39: 化学放射線療法のレジメン選択（日本肺癌学会2025年版）
- 推奨：プラチナ製剤+第三世代以降の細胞傷害性抗癌薬併用を強く推奨〔推奨度1、エビデンスの強さA〕
- 国内標準レジメン：CBDCA+PTX（CP療法）、CDDP+DTX（CD療法）※MVP療法（CDDP+VDS+MMC）との比較試験（WJTOG0105試験・OLCSG0007試験）に基づく
- 2017年会員アンケートでのレジメン使用比率：CP療法41.2%、CDDP+VNR療法21.8%、CD療法18.5%、CDDP+S-1療法12.4%
- 海外標準：PE療法（CDDP+ETP）、PP療法（PROCLAIM試験、CDDP+PEM）※日本人データ限定的、国内保険適用外
- 異なる細胞傷害性抗癌薬への変更による地固め化学療法は行わないよう勧められる（Hanna et al. J Clin Oncol. 2008;26(35):5755-60、PMID 19001323、中間解析でOS延長効果なし・Grade3-5AE増加・治療関連死5.5%で早期中止）

## CQ40: 高齢者（シスプラチン不適）（日本肺癌学会2025年版）
- 推奨：連日カルボプラチン投与による化学放射線療法を弱く推奨〔推奨度2、エビデンスの強さB〕
- JCOG0301試験：血液毒性は化学放射線療法群で高頻度（Grade3-4好中球減少57.3% vs 0%）

## CQ41: 同時CRT後の免疫チェックポイント阻害薬地固め（日本肺癌学会2025年版）
- 推奨：デュルバルマブによる地固め療法を強く推奨〔推奨度1、エビデンスの強さB〕（投票：強く推奨75%・弱く推奨25%、44名、2019年度）
- PD-L1発現別の効果：PD-L1陰性例のPFS HR 0.73（95%CI 0.48-1.11）、OS HR 1.36（95%CI 0.79-2.34、2018年NEJM OS解析時点）※事前規定ではない少数例（29.2%）の探索的事後解析であり、効果の違いは明らかでないと明記。なお4年・5年フォローではOS HRが1.05→1.15と推移（vault/trials/pacific.md参照）、解析時点によりHRが異なる点に留意
- 安全性（グローバル）：放射線肺臓炎/肺炎 デュルバルマブ群32.8% vs プラセボ群23.5%（Grade3以上は4.4% vs 4.3%）、Grade3以上免疫関連AE 3.4% vs 2.6%
- **日本人サブグループの毒性**（Murakami S, et al. ESMO Asia 2017 Congress, 403O）：放射線肺臓炎（全Grade）デュルバルマブ群73.6% vs プラセボ群60.0%、Grade3-4は5.6% vs 2.5%、Grade5は1.4% vs 2.5%
- NCCN引用：新規脳転移発生率はデュルバルマブ群で低い（6.5% vs 11.8%、5年解析）

## CQ42: EGFR陽性・同時CRT後のEGFR-TKI維持療法（日本肺癌学会2025年版、2025年新設CQ）
- 推奨：（EGFR ex19del/L858R陽性）オシメルチニブを用いた維持療法を弱く推奨〔推奨度2、エビデンスの強さB〕（投票：強く推奨19%・弱く推奨71%・根拠不明確9%・行わない弱く推奨2%、58名、2025年度）
- 根拠：LAURA試験（Lu S, et al. N Engl J Med. 2024;391(7):585-97、PMID 38828946）
  - PFS HR 0.16（95%CI 0.10-0.24, p<0.001、中央値39.1 vs 5.6ヶ月）
  - CNS-PFS HR 0.17（95%CI 0.09-0.32, p<0.001、中央値未到達 vs 14.9ヶ月）（Lu S, et al. Ann Oncol. 2024;35(12):1116-25、PMID 39289145）
  - OS中間解析：HR 0.81（95%CI 0.42-1.56, p=0.53、未成熟）
  - 安全性：Grade3以上AE オシメルチニブ群35% vs プラセボ群12%、放射線肺臓炎48%(Grade3以上2%) vs 38%(Grade3以上0%)、間質性肺炎8%(Grade3以上1%) vs 1%(Grade3以上0%)、治療関連死1例(1%)
- <!-- 要確認: LAURA試験は本ページ範囲外のため詳細vault化・独立ページ化は別途予定。ここではGL引用の範囲のみ記載 -->

## CQ43: 化学療法併用時の照射法（日本肺癌学会2025年版）
- a. 総線量：通常分割で少なくとも60Gyを強く推奨〔推奨度1、エビデンスA〕
- b. 74Gy高線量照射は行わないよう強く推奨〔推奨度1、エビデンスB〕（RTOG0617試験、OS HR 1.35, 95%CI 1.08-1.69、中央値28.7 vs 20.3ヶ月で高線量群不良）
- c. 正常臓器毒性を低減する照射野設定を強く推奨〔推奨度1、エビデンスB〕

## NCCN Guidelines（米国、v7.2025時点）
- デュルバルマブ地固め療法：Category 1推奨。PS0-1、根治的同時CRT後に増悪のない切除不能Stage III NSCLCが対象（PD-L1発現による制限なし）
- 5年フォローPACIFICデータを根拠として引用（OS 42.9% vs 33.4%、中央値47.5 vs 29.1ヶ月）。新規脳転移発生率もデュルバルマブ群で低い（6.5% vs 11.8%）
- オシメルチニブ地固め療法（EGFR陽性）も2024年版でCategory 1として追加（LAURA試験に基づく）
- 異なる薬剤への変更による地固め化学療法は、デュルバルマブ併用時の肺臓炎リスク増加への懸念から推奨されない

## ESMO Clinical Practice Guidelines（欧州）
- デュルバルマブ地固め療法：エビデンスグレード[I, A; ESMO-MCBS v1.1 score 4]（intention-to-treat集団、全PD-L1カテゴリ）
- **重要な相違点**：ESMOは欧州医薬品庁（EMA）承認の適応に従い、PD-L1発現≥1%の患者に限定して推奨（PD-L1<1%はEMA承認適応外）。ただしこの1%カットオフはpost-hoc（事後）サブグループ解析に基づく
- PFSベネフィットはPD-L1発現・患者背景等の事前規定サブグループ全体で一貫

## 3ガイドライン比較の要点

| 項目 | 日本肺癌学会2025年版 | NCCN v7.2025 | ESMO |
|---|---|---|---|
| デュルバルマブ地固め | 強く推奨（1, エビデンスB） | Category 1 | Grade I,A（MCBS 4） |
| PD-L1発現による制限 | なし（効果の違いは明らかでないと明記） | なし | **PD-L1≥1%に限定**（EMA承認に準拠） |
| オシメルチニブ地固め（EGFR+） | 弱く推奨（2, エビデンスB）※2025年新設 | Category 1 | 要確認（未確認） |
| 同時 vs 逐次CRT | 同時併用を強く推奨（1, エビデンスA） | 要確認（原文未確認、一般に同時併用が標準） | 要確認（原文未確認） |
| 異なる薬剤への地固め化学療法 | 行わないよう勧められる | 推奨されない（肺臓炎リスク） | 要確認 |

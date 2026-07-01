---
trial: PACIFIC-2
trial_id: pacific2
category: trial
disease_setting: 切除不能III期NSCLC cCRT中の同時併用療法
stage: III
line: concurrent (during cCRT)
drugs: [デュルバルマブ]
population: 白金製剤ベース同時化学放射線療法(cCRT)開始時から同時投与、切除不能Stage III NSCLC、WHO PS 0-1
sponsor: AstraZeneca
nct: 要確認
status: draft
last_verified: 2026-07-01
sources:
  - type: paper
    label: PACIFIC-2 主論文
    authors: Bradley JD, Sugawara S, Lee KH, et al.
    journal: J Clin Oncol
    year: 2025
    volume_pages: "43(33):3610-3621"
    doi: 10.1200/JCO-25-00036
    pmid: 要確認（web検索では41082707の可能性が高いがPubMed直接アクセス不可のため未確定）
    checked: true
pending:
  - "本論文には2026年1月付のErratumが存在（DOI 10.1200/JCO-25-03012）。安全性データを含む可能性があり、status: published化前に訂正内容の確認要"
  - "Grade3/4治療関連AE・治療関連死ともデュルバルマブ群の方がプラセボ群より低い値で抽出された（一般的な『同時併用で毒性増加』という論調と方向性が逆）。原著PDFで数値の文脈（治療関連 vs 全原因、定義）を再確認要"
  - "二次情報源（ASCO Publications記事）では『デュルバルマブ群の致死的AE(全原因)発生率13.7%』との記載があるが、NotebookLM抽出では未検出。原著ページ番号での確認要"
  - "ORR数値は原著アブストラクト・主要図表に明記なし"
  - "PMID未確定（PubMedへの直接アクセスがbot検出でブロックされるため）"
publish_checklist: []
concepts: [crt-regimen-selection]
---

## 試験デザイン
- 第3相、二重盲検、プラセボ対照
- データカットオフ：2023年9月7日
- 対象：切除不能Stage III NSCLC、WHO PS 0-1。PACIFIC試験（地固め）とほぼ同様の基準だが、同時併用試験のためCRT中の増悪がないことという組み入れ条件は含まれない
- 介入群：cCRT開始時からデュルバルマブ1500mg Q4W同時投与、cCRT終了後も最大12ヶ月（または病勢進行・不耐容まで）継続
- 対照群：cCRT＋プラセボ　同スケジュール
- ランダム化比：2:1（デュルバルマブ群219例、プラセボ群109例、計328例）
- 層別化因子：年齢（65歳未満/以上）、病期（IIIA vs IIIB/C）
- 主要評価項目：PFS
- 副次評価項目：OS、ORR、安全性

## 有効性データ
- PFS：中央値13.8 vs 9.4ヶ月、HR 0.85（95%CI 0.65-1.12）、p=0.247（有意差なし）
- OS：中央値36.4 vs 29.5ヶ月、HR 1.03（95%CI 0.78-1.39）、p=0.823（有意差なし）
- ORR：原著に数値の明記なし

## サブグループ解析
- 事前規定サブグループ（年齢、性別、人種、喫煙歴、病期、組織型、PD-L1発現、EGFR変異状況、放射線照射野等）で解析されたが、主要解析と同様に一貫した改善は見られなかった

## 安全性データ（要確認あり、pending参照）
- 治療関連Grade3/4 AE：デュルバルマブ群41.6% vs プラセボ群47.2%
- 治療関連死：デュルバルマブ群2例(0.9%) vs プラセボ群2例(1.9%)
- AEによる投与中止：デュルバルマブ群92例(42%) vs プラセボ群37例(34%)（デュルバルマブ群で高い）
- 致死的AE（全原因、Grade5）：NotebookLM抽出では未検出。二次情報源によれば約13.7%（デュルバルマブ群）との記載あり、要原著確認

## 結論・PACIFICとの関係
cCRT開始時からのデュルバルマブ同時投与は、cCRT単独と比較してPFS・OSともに統計学的に有意なベネフィットを示さなかった。この結果は、CRT終了後のデュルバルマブ地固め療法（PACIFICレジメン）が本設定における標準治療であり続けることを支持する。

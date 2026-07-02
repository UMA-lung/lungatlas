---
title: 肺癌疫学総論
category: concept
status: draft
pending:
  - "GLOBOCAN 2022一次論文（Bray et al. CA Cancer J Clin 2024）のPMID未確認"
  - "世界のASIRの数値差（23.1 vs 23.6 /10万、二次解析論文間の差）の原因を一次資料Table3で要確認"
  - "全国肺癌登録合同委員会2010年報告の正式な著者名・掲載誌・PMID未確認"
  - "人口ベース（進行期含む全症例）の初診時病期分布：未取得。全国がん登録報告書PDFの精読が必要"
  - "人口ベース（進行期含む全症例）の組織型分布：未取得。現状は手術症例registryのみ確認済み"
  - "アスベスト曝露量とリスク倍率の対応（アモサイト50 fibers/mL→5倍等）：比較対象群の定義が教科書内で不明確"
  - "喫煙者の肺癌リスク倍率（男性9-10倍・女性20倍以上）：教科書内に一次出典論文名の記載なし"
  - "人種別罹患率数値がShields'（黒人男性83.7・白人男性65.9 /10万）とPearson's（黒人男性117・白人男性80 /10万）で異なる：測定年代・年齢調整基準の違いの可能性、一次資料未確認"
  - "CPS II（アスベストRR）・NIOSH Steenland推計・Nyberg 1990（NO2）・BEIR IV（ラドン）は教科書内引用のみでPMID未確認"
  - "Pearson'sの「population risk」の定義（一般集団の喫煙状況を含むか）が教科書内に明記なし"
applies_to: [NSCLC, SCLC]
last_reviewed: 2026-07-01
sources:
  - type: paper
    label: GLOBOCAN 2022（世界がん統計、一次資料）
    authors: Bray F, Laversanne M, Sung H, et al.
    journal: CA Cancer J Clin
    year: 2024
    volume_pages: "74(3):229-263"
    doi: 10.3322/caac.21834
    pmid: 要確認
  - type: paper
    label: GLOBOCAN 2022由来の肺癌特化解析（ASIR/ASMRの性別内訳）
    journal: Epidemiologia
    note: "タイトル：Global, Regional, and National Burden of Tracheal, Bronchus, and Lung Cancer in 2022: Evidence from the GLOBOCAN Study（PMC11675692）。著者・巻号・PMID要確認"
    pending: true
  - type: registry
    label: 国立がん研究センター がん統計「肺」
    publisher: 国立研究開発法人国立がん研究センター
    url: https://ganjoho.jp/reg_stat/statistics/stat/cancer/12_lung.html
    accessed: 2026-07-01
    note: "更新・確認日2026年3月23日。罹患データ2023年・死亡データ2024年・5年相対生存率は2009〜2011年診断例"
  - type: survey
    label: 国民健康・栄養調査（喫煙の状況）
    publisher: 厚生労働省
    years_used: [2022, 2023, 2024]
    note: "令和4年・令和5年・令和6年の各「結果の概要」より、現在習慣的に喫煙している者の割合を採録"
  - type: paper
    label: 全国肺癌登録合同委員会 2010年手術症例報告（組織型分布）
    note: "A Report from the Japanese Joint Committee of Lung Cancer Registry: a Study of 18,973 Surgical Cases in 2010（Secondary Publication）。正式な著者名・掲載誌・PMID要確認"
    pending: true
  - type: paper
    label: 肺癌リスク予測モデル（Spitzモデル）
    authors: Spitz MR, Hong WK, Amos CI, et al.
    journal: J Natl Cancer Inst
    year: 2007
    volume_pages: "99(9):715-726"
    doi: 10.1093/jnci/djk153
    pmid: 17470739
  - type: paper
    label: LLPリスク予測モデル（Liverpool Lung Project）
    authors: Cassidy A, Myles JP, van Tongeren M, et al.
    journal: Br J Cancer
    year: 2008
    volume_pages: "98(2):270-276"
    doi: 10.1038/sj.bjc.6604158
    pmid: 18087271
  - type: textbook
    label: "Shields' General Thoracic Surgery, Ch.89: Lung Cancer: Epidemiology and Carcinogenesis"
    authors: Samson P, Colditz GA
    pages: "PDF pp.2297-2330"
    note: 危険因子（喫煙・ETS・アスベスト・ラドン・職業性曝露・大気汚染・遺伝的因子・人種差）の記述に使用
  - type: textbook
    label: "Fishman's Pulmonary Diseases and Disorders, Ch.55 (Asbestos-Related Lung Disease) / Ch.60 (Indoor and Outdoor Air Pollution) / Ch.106 (SCLC)"
    pages: "PDF pp.984-990, 1041-1068, 1931-1932"
    note: アスベスト・大気汚染・ラドン・SCLC疫学の記述に使用
  - type: textbook
    label: "Pearson's Thoracic & Cardiovascular Surgery, Ch.57: Biology and Epidemiology of Lung Cancer"
    pages: "PDF pp.727-747（書籍p.708-728）"
    note: 危険因子・年齢性差・人種差の記述に使用
---

## 罹患・死亡（世界、GLOBOCAN 2022）

| 指標 | 全体 | 男性 | 女性 |
|---|---|---|---|
| 新規罹患数 | 約2,480,675例 | 約1.57百万例（63.4%） | ― |
| 死亡数 | 約1,817,469人 | 約123万人（67.85%） | ― |
| 年齢調整罹患率（ASIR、人口10万対） | 23.1 | 32.1 | 16.2 |
| 年齢調整死亡率（ASMR、人口10万対） | 16.8 | 24.8 | 9.8 |

<!-- 出典: Bray F, et al. CA Cancer J Clin 2024;74(3):229-263, doi:10.3322/caac.21834（GLOBOCAN 2022一次資料）-->
<!-- 性別内訳のASIR/ASMRはGLOBOCAN 2022由来の二次解析論文（Epidemiologia誌, PMC11675692）から引用。一次資料Table3との数値照合が要確認 -->

<!-- 要確認: 別の二次解析論文（Chinese Medical Journal, PMC12276566等）ではASIR 23.6/10万と記載されており、23.1との差の原因（算出方法の違い等）は一次資料未照合 -->

2022年時点で肺癌は世界で最も罹患数の多いがん種であり、全がん症例の12.4%を占める。

## 罹患・死亡（日本、国立がん研究センター）

| 指標 | 全体 | 男性 | 女性 |
|---|---|---|---|
| 罹患数（2023年） | 123,989例 | 81,381例 | 42,607例 |
| 死亡数（2024年） | 75,569人 | 52,333人 | 23,236人 |
| 罹患率（人口10万対） | 99.7 | 134.5 | 66.7 |
| 死亡率（人口10万対） | 62.8 | 89.5 | 37.6 |
| 5年相対生存率（2009〜2011年診断例） | 34.9% | 29.5% | 46.8% |

<!-- 出典: 国立がん研究センター がん統計「肺」ページ（ganjoho.jp/reg_stat/statistics/stat/cancer/12_lung.html、更新・確認日2026年3月23日）-->
<!-- 元データ: 全国がん登録罹患データ（罹患）、人口動態統計死亡データ（死亡）、地域がん登録生存率データ（生存率） -->

## 喫煙率の年次推移（日本）

| 年 | 全体 | 男性 | 女性 |
|---|---|---|---|
| 2022年（令和4年） | 14.8% | 24.8% | 6.2% |
| 2023年（令和5年） | 15.7% | 25.6% | 6.9% |
| 2024年（令和6年） | 14.8% | 24.5% | 6.5% |

<!-- 出典: 厚生労働省「国民健康・栄養調査」令和4年・令和5年・令和6年 各「結果の概要」-->
<!-- 「現在習慣的に喫煙している者」の定義：たばこを「毎日吸っている」または「時々吸う日がある」と回答した者 -->
<!-- 要確認: 令和5年（2023年）は公式報告書内で「5年ぶりの有意な増加」と言及されているが、背景要因の記載はなし。推測で補わない -->

## 組織型分布（手術症例、全国肺癌登録合同委員会2010年）

| 組織型 | 割合 |
|---|---|
| 腺癌 | 55.7% |
| 扁平上皮癌 | 33.0% |
| 大細胞癌 | 3.6% |
| 小細胞癌 | 3.4% |

<!-- 出典: 全国肺癌登録合同委員会 2010年報告（18,973例、手術症例限定）。正式な著者名・掲載誌・PMID要確認 -->

⚠️ **重要な留意点**：上記は手術可能例（早期〜局所進行期）に限定した組織型分布であり、進行期を含む全肺癌症例（population-based）の組織型分布ではない。選択バイアスに注意すること。

## 危険因子（詳細）

出典は原則としてShields'（Ch.89）・Fishman's（Ch.55/60/106）・Pearson's（Ch.57）の教科書2次資料。Spitz 2007・Cassidy 2008のみ原著論文（PMID確認済み）。

### 喫煙（能動喫煙）

| 指標 | 数値 | 出典 |
|---|---|---|
| 男性喫煙者の肺癌リスク | 非喫煙者の約9〜10倍 | Shields' Ch.89 |
| 女性喫煙者の肺癌リスク | 非喫煙者の約20倍以上 | Shields' Ch.89 |
| SCLCの喫煙関連割合 | 98% | Fishman's Ch.106 |
| 全肺癌に占める喫煙起因割合 | 約90% | Pearson's Ch.57 |

<!-- 出典: Shields' Ch.89 (PDF p.2297-2302)。1950年Wynder & Graham研究：肺癌の96.5%が中等度〜重度喫煙者（一般人口の喫煙率73.7%との対比）。要確認：倍率の算出根拠論文名の記載なし -->

### 受動喫煙（ETS）

| 指標 | 数値 | 出典 |
|---|---|---|
| 家庭内ETS曝露、非喫煙者のOR | 1.34（NRC 1986） | Shields' Ch.89 |
| ETS曝露OR | 1.76 | Pearson's Ch.57 |
| 喫煙者と同居する場合のリスク増加 | 20% | Pearson's Ch.57 |
| 世界の受動喫煙関連死亡（年間） | 約22,000人 | Shields' Ch.89 |
| 米国の受動喫煙関連死亡（年間） | 約3,000人 | Pearson's Ch.57 |
| 非喫煙者の肺癌に占める受動喫煙起因割合 | 約1/4 | Pearson's Ch.57 |

<!-- 要確認: リスク増加は生後〜25歳の曝露開始時に認められ、それ以降の曝露では関連が明確でないとの記載あり（Shields' Ch.89）。ORの数値差（1.34 vs 1.76）は研究間の違いによるものと考えられるが一次資料未確認 -->

### アスベスト

| 曝露パターン | 相対リスク | 出典 |
|---|---|---|
| アスベスト曝露のみ（非喫煙） | RR 3.6 | Shields' Ch.89（CPS II） |
| 石綿肺のみ（非喫煙） | RR 7.4 | Shields' Ch.89（CPS II） |
| 喫煙のみ（アスベスト曝露なし） | RR 10.3 | Shields' Ch.89（CPS II） |
| 喫煙＋アスベスト曝露 | RR 14.4（相加的） | Shields' Ch.89（CPS II） |
| 喫煙＋石綿肺 | RR 36.8（相加以上） | Shields' Ch.89（CPS II） |
| アスベスト曝露非喫煙者 | 一般集団比 約5倍 | Pearson's Ch.57 |
| アスベスト曝露喫煙者 | 非曝露非喫煙者比 >50倍 | Pearson's Ch.57 |

喫煙とアスベストの相互作用について、Fishman's（Ch.55）は「相乗的（multiplicative）」と記載する一方、上記CPS IIデータ（Shields'）は「相加的（additive）」という表現を用いている。相互作用の様式については資料間で表現が一致していない。

その他の所見（Fishman's Ch.55）：
- アスベスト曝露者の癌死亡は肺癌を中心に約3倍超
- 肺癌は曝露から約40年後、中皮腫は約45年後にピーク
- 禁煙により肺癌死亡率は約2/3低下
- アスベスト関連肺癌で最も高頻度の組織型は腺癌
- アスベスト絶縁工の肺癌死亡の18%は胸部X線で肺実質線維化を認めない

<!-- 出典: Shields' Ch.89 (PDF p.2313-2314, CPS IIコホート・石綿絶縁工2,000人超)、Fishman's Ch.55 (PDF p.984-990)、Pearson's Ch.57 (PDF p.734) -->
<!-- 要確認: アモサイト50 fibers/mL曝露で5倍リスクとの記載（Fishman's）は比較対象群不明 -->

### ラドン

| 指標 | 数値 | 出典 |
|---|---|---|
| 米国住宅内ラドン平均値 | 約1.25〜1.5 pCi/L | Shields'（1.25）/Fishman's（1.5） |
| EPAガイドライン超過住宅割合（米国） | 約4% | Fishman's Ch.60 |
| 欧州における室内ラドン起因肺癌死亡割合 | 約9% | Pearson's Ch.57 |
| 非喫煙者の肺癌に占める室内ラドン起因割合 | 約30% | Pearson's Ch.57 |

喫煙とラドンの相互作用様式についても資料間で見解が分かれる：BEIR IV（1988年）は相乗的（multiplicative）と結論した一方、Darby & Sametによるより新しいレビューでは相加的（additive）と示唆されている（Shields' Ch.89）。

職業性ラドン曝露（鉱山労働者）では、累積曝露0〜500 WLM（work-level month）の範囲で超過相対リスクはほぼ線形に増加する（Shields' Ch.89, Table 89.5）。

<!-- 出典: Shields' Ch.89 (PDF p.2315-2318)、Fishman's Ch.60 (PDF p.1041-1068)、Pearson's Ch.57 (PDF p.734) -->
<!-- 要確認: Shields'とFishman'sで米国住宅内ラドン平均値が異なる（1.25 vs 1.5 pCi/L）。測定年・調査方法の違いの可能性 -->

### 職業性発癌物質（アスベスト以外）

IARCが特定した既知の職業性肺発癌物質（Shields' Ch.89, Table 89.7）：ヒ素、石綿、ベリリウム、カドミウム、クロロメチルエーテル類、クロム、ニッケル、多環芳香族炭化水素、ラドン、シリカ、塩化ビニル

米国における職業性発癌物質関連の肺癌の年間発生数（NIOSH推計）：男性9,000〜10,000人、女性900〜1,900人。このうち半数以上がアスベスト関連とされる（Shields' Ch.89）。

<!-- 出典: Shields' Ch.89 (PDF p.2313, 2318, Table 89.7/89.8)、Fishman's Ch.106 (PDF p.1931-1932) -->
<!-- 要確認: NIOSH推計（Steenland et al.）の原著論文PMID未確認 -->

### 大気汚染

| 指標 | 数値 | 出典 |
|---|---|---|
| 「都市因子」による肺癌死亡率増加 | 10〜40% | Shields' Ch.89 |
| NO2高曝露（>29.3 μg/m³、21-30年）のRR | 1.44 | Shields' Ch.89（スウェーデン症例対照研究、1990年） |
| PM2.5長期曝露、10 μg/m³増加あたりの超過リスク | 約19% | Shields' Ch.89（米国コホート研究2件） |
| 大気汚染起因の肺癌割合 | 最大でも約1% | Pearson's Ch.57 |

Fishman's（Ch.60）は「大気汚染に起因する肺癌はごく一部」と記載しており、Pearson'sの「最大約1%」という記載と方向性は一致する。

<!-- 出典: Shields' Ch.89 (PDF p.2312)、Fishman's Ch.60 (PDF p.1041-1068)、Pearson's Ch.57 (PDF p.734) -->
<!-- 要確認: Nyberg 1990（スウェーデン症例対照研究）の原著論文PMID未確認 -->

### 遺伝的因子・家族歴

家族歴を有する非喫煙者の肺癌リスク：OR 2.00（95%CI 1.39-2.90）Spitz MR, Hong WK, Amos CI, et al. A risk model for prediction of lung cancer. J Natl Cancer Inst. 2007;99(9):715-726. doi:10.1093/jnci/djk153. PMID: 17470739

Liverpool Lung Projectモデルにおける家族歴（早期発症、60歳未満）のOR：2.02（95%CI 1.18-3.45）。晩期発症（60歳以上）ではOR 1.18で有意差なしCassidy A, Myles JP, van Tongeren M, et al. The LLP risk model: an individual risk prediction model for lung cancer. Br J Cancer. 2008;98(2):270-276. doi:10.1038/sj.bjc.6604158. PMID: 18087271

その他、両モデルで有意だったリスク因子（Shields' Ch.89, Table 89.2/89.3より）：

| リスク因子 | OR（95%CI） | 出典モデル |
|---|---|---|
| ETS曝露（非喫煙者） | 1.80（1.20-2.89） | Spitzモデル |
| 肺気腫既往（元喫煙者） | 2.65（1.95-3.60） | Spitzモデル |
| 粉塵曝露既往（元喫煙者） | 1.59 | Spitzモデル |
| 肺気腫既往（現喫煙者） | 2.13 | Spitzモデル |
| Pack-years ≥57.5（現喫煙者） | 1.85 | Spitzモデル |
| アスベスト曝露既往（現喫煙者） | 1.51 | Spitzモデル |
| 喫煙期間21-40年 | 4.27（2.62-6.94） | LLPモデル |
| 喫煙期間41-60年 | 12.27（7.41-20.30） | LLPモデル |
| 喫煙期間>60年 | 15.25（5.71-40.65） | LLPモデル |
| 肺炎既往 | 1.83（1.26-2.64） | LLPモデル |
| 職業性アスベスト曝露 | 1.89（1.35-2.62） | LLPモデル |
| 悪性腫瘍既往 | 1.96（1.22-3.14） | LLPモデル |

家族歴陽性者における肺癌リスクの2倍増加は32研究のメタアナリシスでも支持されている（Shields' Ch.89, PDF p.2303）。GSTM1遺伝子null型（人口の50%が該当）を有する場合、肺癌リスクが17%増加するとの報告もある（Benhamou et al., Shields' Ch.89 PDF p.2305で引用）。

<!-- 要確認: メタアナリシス（32研究）およびBenhamou et al.のPMIDは未確認 -->
<!-- Fishman's・Pearson'sには遺伝・家族歴に特化した疫学数値の記述なし -->

### 組織型別の危険因子・分子疫学

- フィルター付き低タール紙巻きたばこの普及により、より深い吸引パターンが生じ、末梢気道への発癌物質曝露が増加したことが、腺癌増加の一因である可能性が示唆されている（仮説）（Shields' Ch.89, PDF p.2301-2302）
- ヒト肺腺癌の24%でK-ras発癌遺伝子の活性化が確認されている（Shields' Ch.89, PDF p.2305）
- EGFR変異はNSCLC全体の10〜15%に認められ、女性・東アジア系・非喫煙者・腺癌（細気管支肺胞癌亜型を含む）でより高頻度（Shields' Ch.89, PDF p.2305-2306）
- KRAS変異はNSCLCの15〜25%に認められる（Shields' Ch.89, PDF p.2305）
- アスベスト関連肺癌で最も高頻度の組織型は腺癌（Fishman's Ch.55）
- 現在最も高頻度の組織型は腺癌（Pearson's Ch.57）

<!-- 出典: Shields' Ch.89 (PDF p.2301-2306)、Fishman's Ch.55、Pearson's Ch.57 (PDF p.727) -->

### 年齢・性差

- 診断時年齢中央値：70歳、約1/3が65〜74歳（Shields' Ch.89）
- 罹患率：男性は女性の約2倍（Pearson's Ch.57）
- 女性の肺癌死亡率は1930年から1997年にかけて600%増加（Pearson's Ch.57）
- 1987年、女性における癌死亡原因として肺癌が乳癌を上回った（Pearson's Ch.57）
- 女性は男性より喫煙発癌物質への感受性が高い可能性がメタアナリシスで示唆されている（RR 1.44）（Shields' Ch.89, PDF p.2308）
- 早期閉経（40歳以下）：腺癌リスク低下（OR 0.3）（Shields' Ch.89）
- エストロゲン補充療法：腺癌リスク増加（OR 1.7）、喫煙との併用でさらに増加（OR 32.4）（Shields' Ch.89, PDF p.2308）

<!-- 出典: Shields' Ch.89 (PDF p.2297, 2307-2308)、Pearson's Ch.57 (PDF p.729-730) -->
<!-- 要確認: エストロゲン補充療法併用時のOR 32.4は単一研究由来の可能性が高く、一次資料未確認。数値の大きさに留意し、断定的な記載を避けること -->

### 人種・民族差

| 人種・性別 | 罹患率（Shields', SEER 2012前後） | 罹患率（Pearson's, 1997-2001年齢標準化） |
|---|---|---|
| 黒人男性 | 83.7/10万 | 117/10万 |
| 白人男性 | 65.9/10万 | 80/10万 |
| 白人女性 | 50.8/10万 | 51/10万 |
| 黒人女性 | 49.0/10万 | 54/10万 |

両書で人種別の罹患率順位（黒人男性が最高）という方向性は一致するが、絶対値には差がある。測定年代・年齢調整基準の違いによるものと考えられるが、一次資料での確認はできていない。

東アジア系非喫煙者における分子疫学（Shields' Ch.89, PDF p.2310）：EGFR変異75%、HER2変異6%、ALK融合5%。東アジア系集団の検体では88%でEGFR・HER2・ALKいずれかの異常が確認されたとの記載もある。

<!-- 出典: Shields' Ch.89 (PDF p.2297, 2309-2310)、Pearson's Ch.57 (PDF p.730) -->
<!-- 要確認: 罹患率数値の資料間差の原因 -->

### 合併肺疾患・その他

喫煙者における各種肺疾患既往との相対リスク（メタアナリシス、Shields' Ch.89, PDF p.2307）：

| 合併疾患 | RR（喫煙者） | RR（非喫煙者） |
|---|---|---|
| COPD | 2.2 | 有意差なし |
| 慢性気管支炎 | 1.5 | 有意差なし |
| 肺気腫 | 2.0 | 有意差なし |
| 肺炎 | 1.4 | 1.4 |
| 結核 | 1.8 | 1.9 |

特発性肺線維症（CFA）患者における肺癌のOR：8.25（対照群比）（Shields' Ch.89, PDF p.2307）

βカロテン・ビタミンAサプリメントによる肺癌予防効果について、ATBC試験（喫煙者男性29,133人）・CARET試験（アスベスト曝露歴または喫煙歴を有する18,314人）では、βカロテン群でむしろ死亡率・肺癌発生数の増加が観察され、CARET試験は21ヶ月で早期中止となった。Physicians Health Studyではβカロテン補充による有益・有害いずれの効果も認められなかった（Shields' Ch.89, PDF p.2320-2321）。

<!-- 出典: Shields' Ch.89 (PDF p.2307, 2320-2321) -->

## 要確認のまま残っている項目

- GLOBOCAN 2022一次論文（Bray et al.）のPMID
- 世界のASIR数値差（23.1 vs 23.6/10万）の原因
- 全国肺癌登録合同委員会2010年報告の正式書誌情報
- 人口ベースの初診時病期分布（全国がん登録報告書PDFの精読が必要）
- 人口ベースの組織型分布（手術症例に偏らないデータ）

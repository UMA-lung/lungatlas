---
trial_id: mariposa
title: "MARIPOSA"
full_title: "Amivantamab plus Lazertinib in Previously Untreated EGFR-Mutated Advanced NSCLC"
nct: NCT04487080
phase: 3
status: published
published: false

population:
  disease: "未治療 EGFR 変異陽性（Ex19del または L858R）局所進行・転移性 NSCLC"
  egfr_mutations:
    - "Exon 19 deletion (Ex19del)"
    - "L858R (Exon 21)"
  exclusions:
    - "局所進行・転移性疾患に対する全身療法の既往（術前・術後補助療法は12ヶ月以上前であれば許容）"
    - "間質性肺疾患（ILD）の既往"
    - "症候性または不安定な脳転移"

design:
  type: "国際共同ランダム化第3相試験"
  randomization_ratio: "2:2:1"
  blinding: "ami+laz群はオープンラベル（投与経路の違いによる）。osi群・laz単剤群は二重盲検"
  enrollment_period: "2020年11月〜2022年5月"

arms:
  - id: ami_laz
    label: "アミバンタマブ + ラゼルチニブ"
    n: 429
    regimen:
      - drug: "アミバンタマブ（amivantamab）"
        dose: "体重80kg未満：1050mg、80kg以上：1400mg 静脈内投与"
        schedule: "第1サイクル：週1回（初回は2日間に分割）、第2サイクル以降：2週に1回"
      - drug: "ラゼルチニブ（lazertinib）"
        dose: "240mg 経口"
        schedule: "1日1回"
    cycle_days: 28
  - id: osi
    label: "オシメルチニブ"
    n: 429
    regimen:
      - drug: "オシメルチニブ（osimertinib）"
        dose: "80mg 経口"
        schedule: "1日1回"
    cycle_days: 28
  - id: laz_mono
    label: "ラゼルチニブ単剤（成分寄与評価アーム）"
    n: 216
    regimen:
      - drug: "ラゼルチニブ（lazertinib）"
        dose: "240mg 経口"
        schedule: "1日1回"
    cycle_days: 28
    note: "ami+laz併用の成分寄与評価を目的とするアームであり、主要仮説検定の比較対象ではない"

endpoints:
  primary:
    - name: "無増悪生存期間（PFS）"
      assessed_by: "BICR（独立中央判定）"
      prespecified: true
  secondary:
    - name: "全生存期間（OS）"
      prespecified: true
    - name: "客観的奏効率（ORR）"
    - name: "奏効持続期間（DoR）"
    - name: "後治療開始後の無増悪生存期間（PFS2）"
    - name: "頭蓋内 PFS（intracranial PFS）"
    - name: "症状増悪までの期間（TTSP）"
    - name: "安全性"

cutoff_dates:
  primary_analysis: "2023-08-11"
  os_final_analysis: "2024-12-04"

results:
  followup_median_months:
    primary: 22.0
    os_final: 37.8

  pfs:
    source: "BICR"
    data_cutoff: "2023-08-11"
    ami_laz:
      median_months: 23.7
      ci_95: "19.1–27.7"
    osi:
      median_months: 16.6
      ci_95: "14.8–18.5"
    hr: 0.70
    hr_ci_95: "0.58–0.85"
    p_value: "<0.001"

  os:
    data_cutoff: "2024-12-04"
    followup_median_months: 37.8
    ami_laz:
      median: "未到達（NE）"
      ci_95: "42.9–NE"
      os_3yr_pct: 60
      os_3yr_ci_95: "55–64"
    osi:
      median_months: 36.7
      ci_95: "33.4–41.0"
      os_3yr_pct: 51
      os_3yr_ci_95: "46–55"
    hr: 0.75
    hr_ci_95: "0.61–0.92"
    p_value: "0.005"

  orr:
    ami_laz_pct: 86
    ami_laz_ci_95: "83–89"
    osi_pct: 85
    osi_ci_95: "81–88"
    odds_ratio: 1.15
    or_ci_95: "0.78–1.70"
    note: "ORRは両群間で差を認めなかった"

  dor:
    ami_laz_median_months: 25.8
    ami_laz_ci_95: "20.1–NE"
    osi_median_months: 16.8
    osi_ci_95: "14.8–18.5"

  pfs2:
    ami_laz_median_months: 42.9
    ami_laz_ci_95: "37.6–NE"
    osi_median_months: 32.8
    osi_ci_95: "29.7–37.0"
    hr: 0.74
    hr_ci_95: "0.61–0.90"

  intracranial_pfs:
    ami_laz_median_months: 25.4
    ami_laz_ci_95: "20.1–29.5"
    osi_median_months: 22.2
    osi_ci_95: "18.4–26.9"
    hr: 0.79
    hr_ci_95: "0.61–1.02"
    note: "統計的有意差なし（CI上限>1.0）"

  subgroups_pfs:
    note: "以下はいずれも事前規定サブグループ解析。多重性の調整なし。決定的な治療効果の比較には用いないこと。"
    ex19del:
      hr: 0.65
      ci_95: "0.51–0.85"
    l858r:
      hr: 0.78
      ci_95: "0.59–1.02"
      note: "CI上限が1.0を超えており統計的有意差なし。ただし事前規定サブグループ（層別因子）"
    brain_mets_yes:
      hr: 0.69
      ci_95: "0.53–0.92"
    brain_mets_no:
      hr: 0.69
      ci_95: "0.53–0.89"
    asian:
      hr: 0.67
      ci_95: "0.52–0.86"
    non_asian:
      hr: 0.75
      ci_95: "0.56–0.99"
    ctdna_positive_ngs:
      hr: 0.71
      ci_95: "0.57–0.89"
      note: "探索的解析"
    ctdna_positive_ddpcr:
      hr: 0.68
      ci_95: "0.53–0.86"
      note: "探索的解析"
    tp53_comutation:
      hr: 0.65
      ci_95: "0.48–0.87"
      note: "探索的解析（Ann Oncol 2024, PMID 38942080 で詳報）"

  subgroups_os:
    note: "OS最終解析（NEJM 2025, PMID 40923797）より"
    ex19del:
      hr: 0.66
      ci_95: "0.50–0.86"
    l858r:
      hr: 0.90
      ci_95: "0.67–1.21"
      note: "CI上限が1.0を超えており統計的有意差なし"

  lazertinib_mono_arm:
    pfs_median_months: 18.5
    pfs_ci_95: "14.8–20.1"
    hr_vs_osi: 0.98
    hr_ci_95: "0.79–1.22"
    note: "osi群との間でPFSに差を認めず。ami+lazの上乗せ効果はアミバンタマブによるものと示唆される"

safety:
  data_cutoff_primary: "2023-08-11"
  data_cutoff_os: "2024-12-04"

  grade3_plus:
    ami_laz_primary_pct: 75
    ami_laz_os_cutoff_pct: 80
    osi_primary_pct: 43
    osi_os_cutoff_pct: 52

  treatment_related_death_grade5:
    ami_laz:
      n: 4
      pct: 1
      events:
        - "骨髄不全"
        - "過敏性肺胞炎"
        - "肺臓炎"
        - "突然死"
    osi:
      n: 2
      pct: "<1"
      events:
        - "間質性肺疾患"

  discontinuation_all_drugs:
    ami_laz_pct: 10
    osi_pct: 3
    note: "治療関連有害事象による全薬剤中止"

  discontinuation_any_drug:
    ami_laz_pct: 35
    osi_pct: 14
    note: "あらゆる有害事象によるいずれかの薬剤中止"

  dose_reduction:
    ami_laz_pct: 59
    osi_pct: 5

  common_ae_any_grade_ami_laz:
    note: "いずれかのGradeで発現率≥20%（ami+laz群）"
    events:
      - {name: "爪囲炎", pct: 68}
      - {name: "注入関連反応（IRR）", pct: 63}
      - {name: "皮疹", pct: 62}
      - {name: "低アルブミン血症", pct: 48}
      - {name: "ALT上昇", pct: 36}
      - {name: "末梢性浮腫", pct: 36}
      - {name: "口内炎", pct: 29}
      - {name: "便秘", pct: 29}
      - {name: "下痢", pct: 29}
      - {name: "ざ瘡様皮膚炎", pct: 29}

  vte:
    ami_laz_primary_pct: 37
    ami_laz_os_cutoff_pct: 40
    osi_primary_pct: 9
    osi_os_cutoff_pct: 11

  irr:
    ami_laz_pct: 63
    grade3_plus_pct: 6

  skin_ae:
    - {name: "爪囲炎", pct: 68}
    - {name: "皮疹", pct: 62}
    - {name: "ざ瘡様皮膚炎", pct: 29}
    - {name: "皮膚乾燥", pct: 16}

  ild_pneumonitis:
    ami_laz_pct: 3
    ami_laz_grade3_plus_pct: 1
    osi_pct: 3
    osi_grade3_plus_pct: 1

japan_asia:
  japan_patients_n: null
  note: "日本人患者の具体的な登録例数は主要論文に明記なし。日本において承認済み（EGFR Ex19del・L858R陽性の進行NSCLC一次治療）。アジア人サブグループ解析については Lung Cancer 2025（PMID 要確認）を参照"
  japan_approval: true

coi:
  sponsor: "Janssen Research and Development（Johnson & Johnson）"
  note: "多数の著者がJanssen、AstraZeneca、Roche、MSD等から講演料・コンサルティング料・研究費を受領。複数著者はJohnson & Johnsonの従業員であり株式保有の可能性あり。"

references:
  primary_pfs:
    citation: "Cho BC, Lu S, Felip E, et al; MARIPOSA Investigators. Amivantamab plus Lazertinib in Previously Untreated EGFR-Mutated Advanced NSCLC. N Engl J Med. 2024;391(16):1486-1498."
    pmid: "38924756"
    doi: "10.1056/NEJMoa2403614"
    epub: "2024-06-26"
  primary_os:
    citation: "Yang JC-H, Lu S, Hayashi H, et al; MARIPOSA Investigators. Overall Survival with Amivantamab–Lazertinib in EGFR-Mutated Advanced NSCLC. N Engl J Med. 2025;393(17):1681-1693."
    pmid: "40923797"
    doi: "10.1056/NEJMoa2503001"
    epub: "2025-09-07"
  secondary_highrisk:
    citation: "Felip E, Cho BC, Gutiérrez V, et al. Amivantamab plus lazertinib versus osimertinib in first-line EGFR-mutant advanced NSCLC with biomarkers of high-risk disease: secondary analysis from MARIPOSA. Ann Oncol. 2024;35(9):805-816."
    pmid: "38942080"
    doi: "10.1016/j.annonc.2024.05.541"
  asian_subset_pfs:
    citation: "Cho BC, Hayashi H, Lee JS, et al. Amivantamab plus lazertinib versus osimertinib as first-line treatment in EGFR-mutated advanced NSCLC: MARIPOSA Asian subset. Lung Cancer. 2025;204:108496."
    pmid: null
    doi: "要確認"
    pending: true
  asian_subset_os:
    citation: "Yang JC, Lu S, Hayashi H, et al. Overall survival for amivantamab plus lazertinib versus osimertinib as first-line treatment in Asian participants with EGFR-mutant advanced NSCLC: a MARIPOSA subset analysis. Lung Cancer. 2026."
    pmid: null
    doi: "S0169-5002(26)00049-8"
    pending: true

pending:
  - "アジア人サブセット論文（PFS）のPMID未確定（Lung Cancer 2025;204:108496）"
  - "アジア人サブセット論文（OS）のPMID未確定（Lung Cancer 2026）"
  - "日本人患者登録数（主要論文に記載なし。アジア人サブセット論文に記載の可能性あり）"
  - "L858R PFS HR（0.78, 95%CI 0.59–1.02）は事前規定サブグループだが統計的有意差なし：HTMLでの記載表現を要検討"
---

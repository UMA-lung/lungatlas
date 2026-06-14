# LungAtlas

肺がん臨床医向けオープンテキストブック。純粋な静的HTMLサイト（ビルドツールなし）。

## 絶対に守ること
- 既存ファイルを削除しない（git rm も禁止）
- ファイルを上書きする前に必ず内容を確認し、確認を求めること
- pushの前に必ず「pushしてよいですか？」と確認すること

## ファイル構成

```
index.html              # 変異陰性NSCLC化学療法
driver-positive.html    # 変異陽性NSCLC（日本語）
driver-positive-en.html # 変異陽性NSCLC（英語）
egfr-firstline.html     # EGFR変異陽性NSCLC 1次治療選択ガイド
about.html              # このサイトについて（日本語）
about-en.html           # About（英語）
nav.html                # 全ページ共通ナビ（変更時は全ページへの影響を確認）
home.html               # トップページ（未公開・注意）
Textbook/               # 参考PDFテキスト集（git管理外）
```

## デザインルール
- 新ページはindex.htmlのHTMLスタイルに合わせる
- nav.htmlのナビバーを必ず使用する
- 文字コードはUTF-8
- カラーパレット：グリーン基調（`--green-dark: #0d5c3a`など）
- フォント：Inter（本文）、JetBrains Mono（コード・強調）、Google Fonts経由

## Git運用
- コミットメッセージは日本語でよい
- mainブランチに直接pushしてよい
- pushは必ず医師の確認後に行う

## 医学的内容
- 薬剤名・試験名は正確に記載する
- 参照したPDFのページ番号をコメントに残す
- 未確認の情報は「要確認」とコメントする
- **書かれていないことを推測で補填しない**：テキスト・論文・ユーザーの入力に明記されていない内容（数値・臨床的意見・手術難易度など）は記載しない。根拠のある情報のみ書く

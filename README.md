# UTAU Natural Official Site

HTML / CSS / JavaScript only の1ページ構成テンプレートです。

## 起動方法
`index.html` をブラウザで開いてください。ローカルサーバーを使う場合は VS Code の Live Server などでも確認できます。

## 素材の差し替え
- `assets/images/character.png` : キャラクター立ち絵（透過PNG推奨）
- `assets/images/logo.svg` : ロゴ（現在はヘッダーに仮テキストを表示）
- `assets/audio/sample.mp3` : 音声サンプル
- `downloads/voicebank.zip` : 配布する音源ZIP

## 公開前に編集する箇所
- `CHARACTER NAME`、プロフィール、紹介文
- 音源形式・推奨環境・ファイルサイズ・バージョン
- 利用規約、二次創作ガイドライン、クレジット表記
- `your-email@example.com` と SNS のリンク
- ダウンロードするZIPファイルのパス

## メモ
Google Fontsを読み込んでいるため、Webフォントの利用時はインターネット接続が必要です。オフラインで使う場合はHTML内のGoogle Fonts読み込み行を削除し、CSSのフォールバックフォントを利用してください。

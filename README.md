# bookmarklet

## 必須ソフトウェア

 * Node.js (https://nodejs.org/)

## セットアップ

初回のみ以下を実行します.

    npm install

## ブックマークレット開発

ソースファイルは ./src/ 以下に作成します.
拡張子はブックマークレットをどのスキームで実行するかによって使い分けます.

    * data スキームで実行する場合は .html とする.
      Ex) data:text/html, <script>window.location.href="https://example.com"</script>

    * javascript スキームで実行する場合は .js とする.
      Ex) javascript:window.location.href="https://example.com"

## 新しいタブにおける注意点

Chrome において, 新しいタブ (まだページを開いていない状態) では,
window などのページに関連付くオブジェクトを利用することができません.

新しいタブでは次のブックマークレットは動作しません:

    javascript:window.location.href="https://example.com"

data スキームで HTML を記述すれば, 新しいタブでも動作します:

    data:text/html, <script>window.location.href="https://example.com"</script>

## テストを実行する

    npm run test

## ブックマークレットの生成

以下を実行すると, ./bookmarklet/ 以下にファイルが生成されます.

    npm run gulp build

生成されたファイルの内容をブックマークとして登録すれば, ブックマークレットとして利用できます.

## 作業ログ

    npm init
    npm install gulp
    npm install gulp-rename
    npm install gulp-replace
    npm install gulp-terser
    npm install gulp-html-minifier-terser
    npm install mocha


# PreFlop ポーカー攻略班

会員制ポーカー攻略サイトの静的プロトタイプです。

## できること

- 毎週の記事追加: `content/articles.js` に記事オブジェクトを追加
- 会員登録ベース: ログインID、パスワード、招待コード
- 招待コード: `PREFLOP-2026`, `YUJI-WEEKLY`, `RANGE-LAB`
- 会員限定記事: 未ログインの場合はログイン/登録画面へ誘導
- 固定URL運用: Netlifyプロジェクトとしてデプロイし、同じサイトURLを維持

## 毎週の記事更新

1. `content/articles.js` を開く
2. 既存の記事オブジェクトをコピーする
3. `id`, `title`, `date`, `body` を更新する
4. Netlifyへ再デプロイする

記事本文の型は `templates/article-template.js` を参照してください。

## 固定URL運用

Netlify Dropは毎回URLが変わりやすいので、本番では次のどちらかを使います。

- GitHubリポジトリをNetlifyに接続して自動デプロイ
- Netlify CLIで同じSite IDへデプロイ

一度Netlifyプロジェクトとして作成すれば、以後は同じURLに更新できます。

## 本番会員制にする場合

このプロトタイプのログイン情報はブラウザのlocalStorageに保存する簡易実装です。
本番公開時は、次のいずれかに置き換えてください。

- Netlify Identity
- Supabase Auth
- Firebase Auth
- 独自バックエンド認証

招待コードも本番ではサーバー側で検証する必要があります。


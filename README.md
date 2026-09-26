# YUKI PORTFOLIO SITE

WEBデザイナー / WEBエンジニア **YUKI ITO** のポートフォリオです。

旧サイト（HTML + SCSS + jQuery + onepage-scroll）を、Astro 5 + Tailwind CSS v4 + TypeScript で再構築しています。

## 構成

```
src/
  components/     Header, Footer, Hero, WorkCard, WorkSlide など
  content/works/  作品データ（Content Collections）
  data/           サイト情報・プロフィール文
  layouts/        BaseLayout
  pages/          ルーティング
  styles/         Tailwind v4 テーマ
```

| パス | 内容 |
| --- | --- |
| `/` | フルスクリーン縦スクロール（CSS scroll-snap） |
| `/works` | 作品一覧 |
| `/works/[slug]` | 作品詳細 |
| `/profile` | プロフィール |
| `/contact` | お問い合わせ |
| `/contact/thanks` | 送信完了 |

## 開発

```bash
npm install
npm run dev
```

本番ビルド:

```bash
npm run build
npm run preview
```

出力は静的ファイル（`dist/`）です。Vercel / Cloudflare Pages / Netlify いずれもビルドコマンド `npm run build`、公開ディレクトリ `dist` でデプロイできます。

Netlify Forms を使う場合は、`contact` フォームの `data-netlify` 属性をそのまま利用できます。

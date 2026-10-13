# YUKI PORTFOLIO

**YUKI ITO** のポートフォリオ（エンジニア）。訴求の正本は [`docs/positioning.md`](docs/positioning.md)。

Astro 5 + Tailwind CSS v4 + TypeScript の静的サイトです。フォントは Noto Sans JP / Noto Serif JP。

## 構成

```
src/
  components/     Header, Hero, SiteLogo, WorkCard, WorkSlide など
  content/works/  制作実績（Content Collections）— LOAN'S / MerValue
  data/           サイト情報・プロフィール・UI 文言
  layouts/        BaseLayout
  pages/          ルーティング
  styles/         Tailwind v4 テーマ・モーション
public/
  images/hero/    トップ KV
  images/logo/    ロゴ（白／黒）
  images/works/   実績キャプチャ
```

| パス | 内容 |
| --- | --- |
| `/` | フルスクリーン縦スクロール（白枠ヒーロー + 実績スライド、CSS scroll-snap） |
| `/works` | 制作実績一覧 |
| `/works/[slug]` | 制作実績詳細 |
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

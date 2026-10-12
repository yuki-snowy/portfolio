---
title: MerValue
titleLines:
  - MerValue
category: Webアプリ
period: 個人開発（0→1）
tools:
  - Astro SSR
  - TypeScript
  - React Islands
  - Tailwind CSS v4
  - Supabase (PostgreSQL)
  - Vitest
  - GitHub Actions
  - Netlify
excerpt: 家の中のガジェットや家財を登録し、減価償却の目安と参考中古相場から資産価値を可視化するWebアプリ。
heroImage: /images/works/mervalue/hero.svg
thumbnail: /images/works/mervalue/thumb.svg
gallery:
  - /images/works/mervalue/hero.svg
  - /images/works/mervalue/thumb.svg
featured: true
order: 2
seoTitle: MerValue — 家庭内資産管理アプリ
repoUrl: https://github.com/yuki-snowy/MerValue
---

家で保有するガジェット・家電・家具などを登録し、減価償却の目安と参考中古相場から資産価値を可視化する個人開発アプリです。SSR・型安全・テスト・CI・本番運用まで通したプロダクトとして仕上げています。

資産CRUD、カテゴリ自動提案API、参考相場の推定（スクレイピングなし）、メルカリ検索導線、ダッシュボード（合計・グラフ・カテゴリ構成）を実装。ビジネスロジックは `services/` に分離し、デモモードでSupabaseなしでもレビュー可能な構成にしました。Vitest + Testing Library と GitHub Actions（check / test / build）で品質ゲートを回しています。

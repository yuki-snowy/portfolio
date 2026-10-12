---
title: LOAN'S
titleLines:
  - LOAN'S
category: Webアプリ
period: 個人開発（0→1）
tools:
  - PHP 8.3+
  - Laravel 13
  - Tailwind CSS 4
  - Leaflet / OpenStreetMap
  - SQLite
  - PHPUnit
excerpt: 投資用物件の登録・比較とローン試算を行うWebアプリ。CRUDから返済シミュレーション・地図表示まで一気通貫で実装。
heroImage: /images/works/loans/hero.svg
thumbnail: /images/works/loans/thumb.svg
gallery:
  - /images/works/loans/hero.svg
  - /images/works/loans/thumb.svg
featured: true
order: 1
seoTitle: LOAN'S — 投資物件・ローン比較管理アプリ
repoUrl: https://github.com/yuki-snowy/LOANS
---

投資用物件の登録・比較と、ローン返済シミュレーションを行う個人開発のWebアプリケーションです。要件整理から設計・実装・テストまで単独で0→1しています。

物件CRUD（バリデーション付きモデル / Service / Controller / Blade）、元利均等・元金均等の返済計算、コンプライアンス判定、Leaflet + OpenStreetMapによる地図表示（一覧の複数ピン・詳細の単一ピン・登録時のインタラクティブ選択）までを実装しました。PHPUnitでバリデーション・計算エッジケース・シミュレーションフローをカバーしています。

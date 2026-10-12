---
title: LOAN'S
titleLines:
  - LOAN'S
category: Webアプリ
period: 個人開発（0→1）
tools:
  - PHP 8.3+
  - Laravel 13
  - Blade / Tailwind CSS 4 / Vite
  - Laravel Sail (MySQL 8)
  - Leaflet / 国土地理院
  - PHPUnit
excerpt: 住宅購入の候補物件管理と、ローン試算・審査判定を行うWebアプリ。地図・画像・補助金案内までローカル／Dockerで完結。
heroImage: /images/works/loans/hero.svg
thumbnail: /images/works/loans/thumb.svg
gallery:
  - /images/works/loans/hero.svg
  - /images/works/loans/thumb.svg
featured: true
order: 1
seoTitle: LOAN'S — 住宅購入の候補物件管理とローン試算アプリ
repoUrl: https://github.com/yuki-snowy/LOANS
---

住宅購入の候補物件管理と、ローン試算・審査判定を行う個人開発のWebアプリケーションです。認証・外部課金APIは使わず、ローカル／Docker（Laravel Sail）で完結する構成にしています。要件整理から設計・実装・テストまで単独で0→1しています。

物件CRUD（種目・間取り・築年・専有面積・構造・駅徒歩・評価・メモ、複数画像のクライアント圧縮アップロード）、郵便番号／住所検索と国土地理院タイルによる地図表示、月々返済・総返済・頭金概算と審査シグナル（安全／注意／危険）、補助金公式サイトへの参考リンクまでを実装しました。Service層（Property / LoanCalculator / Simulation / Geocode）にロジックを分離し、PHPUnit（CRUD・試算フロー・ジオコード・計算ユニット）で品質を担保しています。

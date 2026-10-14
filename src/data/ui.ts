/** サイト共通のUI文言（日本語） */
export const ui = {
  portfolio: "ポートフォリオ",
  scroll: "スクロール",
  viewMore: "もっと見る",
  view: "詳細",
  top: "トップ",
  other: "その他",
  archive: "アーカイブ",
  otherWorks: ["その他の", "制作"],
  backToTop: "トップへ戻る",
  webEngineering: "エンジニアリング",
  form: {
    name: "お名前",
    email: "メールアドレス",
    message: "メッセージ",
    namePlaceholder: "例：伊藤 優希",
    submit: "送信する",
  },
  workDetail: {
    tools: "技術スタック",
    period: "制作期間",
    comment: "コメント",
    links: "リンク",
  },
  pages: {
    works: {
      title: "制作実績",
      kicker: "WORKS",
    },
    profile: {
      title: "プロフィール",
      kicker: "PROFILE",
    },
    contact: {
      title: "お問い合わせ",
    },
    thanks: {
      title: "送信完了",
      kicker: "ありがとうございます",
    },
    notFound: {
      title: "ページが見つかりません",
      kicker: "404",
    },
  },
} as const;

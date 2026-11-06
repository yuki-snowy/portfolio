export const profile = {
  name: "YUKI ITO",
  portrait: "/images/profile/portrait.webp",
  bio: [
    "宮城県仙台市在住。",
    "WEBディレクター・WEBエンジニアとしてアプリやサイトの設計・実装をしています。",
    "WEBサイト / WEBアプリ を中心に、要件の整理から実装・動作確認まで一人で回すことが多いです。",
    "個人開発の成果物は制作実績にまとめています。",
  ],
  skills: [
    {
      heading: "スキル",
      body: [
        "PHP / Laravel / CakePHP / WordPress",
        "MySQL / PostgreSQL / Linux / Docker / AWS",
        "HTML / CSS / JavaScript",
      ],
    },
    {
      heading: "略歴",
      body: [
        "2016～　デバッグ専門の会社にて、ゲームタイトルのQA・品質検証に従事",
        "2018～　受託会社にて、PHP（CakePHP）/ WordPress を中心としたバックエンド開発を担当",
        "2022～　Web制作会社にて、大規模サイト運用やEC移行などのディレクションに参画",
        "現在に至る",
      ],
    },
  ],
} as const;

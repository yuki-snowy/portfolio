export const site = {
  name: "YUKI ITO",
  shortName: "YUKI",
  title: "YUKI ポートフォリオ",
  role: "web屋さん",
  description:
    "いろいろ作ったりしてるYUKI ITOのポートフォリオです。",
  url: "https://chipper-lamington-8da97a.netlify.app",
  twitter: "",
  ogImage: "/images/hero/kv-bg.jpg",
  emailPlaceholder: "sample@email.co.jp",
  copyrightYear: 2026,
} as const;

export const navItems = [
  { href: "/works", label: "制作実績" },
  { href: "/profile", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

export const site = {
  name: "YUKI ITO",
  shortName: "YUKI",
  title: "YUKI PORTFOLIO",
  role: "ENGINEER",
  /** トップヒーロー用（旧デザイン準拠） */
  heroTagline: "WEB ENGINEER",
  description: "YUKI ITO のポートフォリオ。個人開発のアプリとプロフィールを掲載しています。",
  url: "https://chipper-lamington-8da97a.netlify.app",
  twitter: "",
  ogImage: "/images/hero/kv-bg.jpg",
  logoWhite: "/images/logo/logo-white.png",
  logoBlack: "/images/logo/logo-black.png",
  favicon: "/favicon.png",
  emailPlaceholder: "sample@email.co.jp",
  copyrightYear: 2026,
} as const;

export const navItems = [
  { href: "/works", label: "制作実績" },
  { href: "/profile", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" },
] as const;

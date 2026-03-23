import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Oswald } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "SkillzRevo | Best Data Science, AI & Cybersecurity Training Institute in India 2025",
  description:
    "Transform your career with SkillzRevo's industry-leading courses in Data Science, Generative AI, Cybersecurity & Business Intelligence. 100% placement assistance with live projects.",
    keywords: ["SkillzRevo", "data science training", "AI courses", "cybersecurity certification", "business intelligence", "online tech courses india"],
  alternates: {
    canonical: "https://academy.skillzrevo.com/",
  },
    metadataBase: new URL('https://academy.skillzrevo.com'),

  openGraph: {
    title: "SkillzRevo | Best Data Science, AI & Cybersecurity Training Institute in India 2025",
    description:
      "Transform your career with SkillzRevo's industry-leading courses in Data Science, Generative AI, Cybersecurity & Business Intelligence. 100% placement assistance with live projects.",
    url: "https://academy.skillzrevo.com/",
    images: [
      {
        url: "/favicon.png",
        width: 500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

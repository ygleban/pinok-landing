import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pinok — операционка для ресторанов и салонов",
  description:
    "Чек-листы, расписание, отзывы и закупки в одном Telegram-боте. Триал 21 день бесплатно.",
  openGraph: {
    title: "Pinok — операционка для ресторанов и салонов",
    description:
      "Чек-листы, расписание, отзывы и закупки в одном Telegram-боте. Триал 21 день бесплатно.",
    type: "website",
    locale: "ru_RU",
    url: "https://pinok.pro",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

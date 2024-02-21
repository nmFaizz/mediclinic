import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const font = localFont({src: [
  {
    path: '../font/Gilroy-Bold.ttf',
    weight: '700'
  },
  {
    path: '../font/Gilroy-Light.ttf',
    weight: '400'
  },
  {
    path: '../font/Gilroy-Medium.ttf',
    weight: '600'
  }
]})

export const metadata: Metadata = {
  title: "MEDICLINIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

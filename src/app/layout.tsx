import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const font = localFont({src: [
  {
    path: '../font/Gilroy-ExtraBold.otf',
    weight: '500'
  },
  {
    path: '../font/Gilroy-Light.otf',
    weight: '400'
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

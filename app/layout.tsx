import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solobooks OS",
  description: "A blank starter template for a personal operating system dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personalized Greeting",
  description: "A warm greeting app that displays your name in real time",
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

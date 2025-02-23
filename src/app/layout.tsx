import type { Metadata } from "next";
import { AppProvider } from "./_components/AppProvider";
import "./global.css";

export const metadata: Metadata = {
  title: "Test Playground",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}

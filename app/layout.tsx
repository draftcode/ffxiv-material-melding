import "./globals.css";

export const metadata = {
  title: "FF14 禁断 Negative Binomial Distribution Stats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";
import { Yrsa } from "next/font/google";

const yrsa = Yrsa({ subsets: ["latin"] });

export const metadata = {
  title: "Wiki",
  description: "A redesigned Wiki experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${yrsa.className} bg-primary-color`}>{children}</body>
    </html>
  );
}

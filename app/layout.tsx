import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

import AppLayout from  './appLayout'

export const metadata: Metadata = {
  title: "TMW | Growth Consulting",
  description: "We’re data-driven strategists delivering growth optimization approaches to unlock the full swing potential of revenue streams in your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppLayout>
        {children}
        </AppLayout>
        </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import AppLayout from './appLayout';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMWGC | Digital Strategies for Growth Stage Enterprises',
  description:
    'We’re data-driven strategists delivering growth optimization approaches to unlock the channelize the fullswing potential of revenue streams in your business. Madras Wallstreet Growth Consulting, envisions to enable regional brands to achieve global reach through proven digital strategies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

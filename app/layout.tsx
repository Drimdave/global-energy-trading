import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Global Energy Trading',
  description:
    'A professional, minimal, and authoritative multi-page website for a global trading company in the oil, gas, refined products, and logistics sectors.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

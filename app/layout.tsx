import type { Metadata } from 'next';
import './globals.css';
import MetaPixel from '../components/MetaPixel';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Impact School of AI | Master Artificial Intelligence',
  description: 'Enroll in our premium AI course today and unlock 5 bonus courses absolutely FREE. Limited time offer!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#00ffcc] selection:text-[#0f2d2a]">
        {/* Suspense zaruri hai kyunki MetaPixel Next.js navigation hooks use karega */}
        <Suspense fallback={null}>
          <MetaPixel pixelId="727044806727599" />
        </Suspense>
        
        {/* Yahan humara pura website render hoga */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
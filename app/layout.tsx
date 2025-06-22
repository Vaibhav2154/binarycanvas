import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vaibhav M N - Computer Science Student & Developer',
  description: 'Portfolio of Vaibhav M N - Computer Science student, Flutter developer, and cybersecurity enthusiast with experience in ML, AI, and hackathon victories.',
  keywords: 'Vaibhav M N, Computer Science, Flutter Developer, Machine Learning, Cybersecurity, Portfolio',
  authors: [{ name: 'Vaibhav M N' }],
  creator: 'Vaibhav M N',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Vaibhav M N - Computer Science Student & Developer',
    description: 'Portfolio showcasing projects, achievements, and technical expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
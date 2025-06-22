import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vaibhav M N - Full Stack Developer',
  description: 'Computer Science student and Full Stack Developer specializing in Flutter, Next.js, and AI/ML. Creating innovative solutions that bridge technology and real-world impact.',
  keywords: ['Vaibhav M N', 'Full Stack Developer', 'Flutter Developer', 'Next.js', 'AI/ML', 'Computer Science'],
  authors: [{ name: 'Vaibhav M N' }],
  creator: 'Vaibhav M N',
  publisher: 'Vaibhav M N',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Vaibhav M N',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vaibhav-portfolio.vercel.app',
    title: 'Vaibhav M N - Full Stack Developer',
    description: 'Computer Science student and Full Stack Developer specializing in Flutter, Next.js, and AI/ML.',
    siteName: 'Vaibhav M N Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav M N - Full Stack Developer',
    description: 'Computer Science student and Full Stack Developer specializing in Flutter, Next.js, and AI/ML.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mobile-specific meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Vaibhav M N" />
        <meta name="application-name" content="Vaibhav M N Portfolio" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Touch icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
         <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="06e731ee-137f-4e26-b751-567b90262e82"
          strategy="afterInteractive"
        />
        <Script id="matomo-init" strategy="beforeInteractive">
        {`
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://binaryanvasvercel.matomo.cloud/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://cdn.matomo.cloud/binaryanvasvercel.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
      </head>
       <Script id="matomo-init" strategy="beforeInteractive">
        {`
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="https://binaryanvasvercel.matomo.cloud/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='https://cdn.matomo.cloud/binaryanvasvercel.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
import type { Metadata, Viewport } from 'next';
import { Inter, Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import { AudioProvider } from '@/components/AudioContext';
import { Toaster } from '@/components/ui/sonner';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({ 
  subsets: ['latin'], 
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700', '800', '900']
});
const rajdhani = Rajdhani({ 
  subsets: ['latin'], 
  variable: '--font-rajdhani',
  weight: ['300', '400', '500', '600', '700']
});
const shareTechMono = Share_Tech_Mono({ 
  subsets: ['latin'], 
  variable: '--font-share-tech-mono',
  weight: ['400']
});

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
    url: 'https://binaryanvas.vercel.app',
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
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <link rel="preconnect" href="https://cloud.umami.is" />
        <link rel="preconnect" href="https://binaryanvasvercel.matomo.cloud" />
      </head>
        <Script id="matomo-analytics" strategy="afterInteractive">
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
          `}        </Script>
      <body className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${shareTechMono.variable} font-sans`}>
      
        
        {/* Matomo Analytics */}
          <AudioProvider>
            {children}
          </AudioProvider>
          <Toaster />
        
      </body>
    </html>
  );
}
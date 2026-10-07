import './globals.css';

export const metadata = {
  title: 'J-R Fountain Diagnostic Centre | Modern Diagnostics, X-Ray, Ultrasound & Laboratory Ibadan',
  description: 'Leading diagnostic centre in Ibadan, Nigeria offering automated laboratory tests, digital X-Ray radiography, 3D/4D ultrasound scans, 24-hour cardiac studies, and doctor referral partnerships.',
  keywords: 'diagnostic centre ibadan, medical laboratory, digital xray ibadan, 3D 4D ultrasound scan, cardiac ECG holter ibadan, doctor referral diagnostic, J-R Fountain Diagnostic Centre',
  authors: [{ name: 'MichaelKeysoft' }],
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

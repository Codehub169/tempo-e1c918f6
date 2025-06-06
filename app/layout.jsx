import { Inter, Poppins } from 'next/font/google';
import './globals.css';

// Configure Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Configure Poppins font for display text/headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include weights used in tailwind.config.js
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'hueneu studio - Designs that whisper loud stories.',
  description: 'hueneu is a design studio specializing in branding, packaging, and creative projects where stories find their aesthetic.',
  icons: {
    icon: '/favicon.ico', // Assuming favicon.ico is in /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

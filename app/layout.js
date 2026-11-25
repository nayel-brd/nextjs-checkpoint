import './globals.css';
import Nav from './components/Nav';

// metadata is used by Next.js for the page <title> and description
export const metadata = {
  title: 'Nayel Bradai | Portfolio',
  description: 'Portfolio website built with Next.js',
};

// root layout: wraps every page with the navigation bar
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

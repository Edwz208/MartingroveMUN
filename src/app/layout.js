import './global.css';

export const metadata = {
    title: 'My App',
    icons: {
      icon: '/favicon.ico',
    },
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
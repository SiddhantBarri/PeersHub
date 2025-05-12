
import '../styles/style.css'; 

export const metadata = {
  title: 'PeersHub',
  description: 'Platform for student collaboration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Poppins:wght@300;400;500;600&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

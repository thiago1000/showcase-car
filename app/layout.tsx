import { Footer, NavBar } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Car Hub',
  description: 'Descubra o melhor aplicativo de aluguel de carros do mundo'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

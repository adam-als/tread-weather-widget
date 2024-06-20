import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import THEME from './(constants)/theme';

export const metadata: Metadata = {
  title: 'Wacky Weather Widget',
  description: 'There are never too many weather widgets',
};

//flex 1

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Make a  theme  registry */}
        <AppRouterCacheProvider>
          <ThemeProvider theme={THEME}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

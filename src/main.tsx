import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.tsx';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
      retry: 0,
    },
  },
});

async function enableMocking() {
  const { worker } = await import('./mocks/browser.js');

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
});

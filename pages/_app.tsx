import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';
import { EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import '../styles/mouse-pointer.css';

interface MyAppProps extends AppProps{
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache: clientSideEmotionCache }: MyAppProps) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

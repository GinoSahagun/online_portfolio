import { AppProps } from 'next/app';
import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { theme } from "../styles/theme";
import { createEmotionCache } from "../styles/theme";
import './styles.css';

const clientSideEmotionCache = createEmotionCache();

function MyApp({Component, pageProps}: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

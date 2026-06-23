import '../styles/globals.css'
import Script from 'next/script'
import { ThemeProvider } from '../components/ThemeContext'

const CF_BEACON_TOKEN = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      {CF_BEACON_TOKEN && (
        <Script
          id="cloudflare-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
        />
      )}
    </ThemeProvider>
  )
}

export default MyApp

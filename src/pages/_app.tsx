import type { AppProps } from 'next/app'
import { ReactQueryProvider } from 'providers/reactQuery'

import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider pageProps={pageProps}>
      <Component {...pageProps} />
    </ReactQueryProvider>
  )
}

export default MyApp

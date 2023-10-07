import { AppProps } from 'next/app'
import { ReactNode } from 'react'

export type IReactQueryProviderProps = {
  children: ReactNode
  pageProps: AppProps['pageProps']
}

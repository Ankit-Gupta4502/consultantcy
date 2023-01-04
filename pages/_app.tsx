import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useStore } from "../redux/store"
import Layout from '../Components/Layout/Layout'
import { Provider } from 'react-redux'
export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={useStore(pageProps.initialReduxState)}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
}

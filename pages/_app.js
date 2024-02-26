import '../styles/tailwind.css'
import { loadStoryblok } from '../utility/loadStoryblok'

loadStoryblok()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/tailwind.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import Feature from '../components/Feature'
import { Page } from '../components/Page'
import Hero from '../components/Hero'
import { FallbackComponent } from '../components/FallbackComponent'
const components = {
  feature: Feature,
  page: Page,
  hero: Hero,
}

storyblokInit({
  accessToken: 'x6bZznzJy7iTthk4OnIxrAtt',
  use: [apiPlugin],
  components,
  enableFallbackComponent: true,
  customFallbackComponent: FallbackComponent,
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

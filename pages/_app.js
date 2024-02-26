import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Cal from "../components/Cal";
import Hero from "../components/Hero";
import CalHeading from "../components/Calendar/CalHeading";
import Schedule from "../components/Calendar/Schedule";
import Header from "../components/Header";
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  cal: Cal,
  hero: Hero,
  calendar: CalHeading,
  schedule: Schedule,
  header: Header,
  
};

storyblokInit({
  accessToken: "x6bZznzJy7iTthk4OnIxrAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

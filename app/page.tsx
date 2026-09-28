import HomeHero from "./components/HomeHero";
import MetricsStrip from "./components/MetricsStrip";
import AboutBody from "./components/AboutBody";
import ScrollProgress from "./components/ScrollProgress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <HomeHero />
      <MetricsStrip />
      <AboutBody />
    </>
  );
}

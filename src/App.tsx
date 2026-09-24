import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { Cursor } from "./components/layout/Cursor";
import { PageTransition } from "./components/layout/PageTransition";
import { initSmoothScroll } from "./lib/lenis";
import { ScrollTrigger } from "./lib/gsap";

const Home = lazy(() => import("./pages/Home"));
const Impact = lazy(() => import("./pages/Impact"));
const ModelUN = lazy(() => import("./pages/ModelUN"));
const PublicSpeaking = lazy(() => import("./pages/PublicSpeaking"));
const About = lazy(() => import("./pages/About"));
const People = lazy(() => import("./pages/People"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Join = lazy(() => import("./pages/Join"));

function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="font-mono-label text-[var(--color-paper-dim)]">
        Loading…
      </span>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const teardown = initSmoothScroll();
    // Web fonts and lazy-mounted canvases can shift layout a frame or two
    // after mount, after ScrollTrigger's first measurement — which can leave
    // above-the-fold reveals stuck at opacity 0 on a cold load. Refresh once
    // fonts settle, and once more after paint as a belt-and-suspenders pass.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    requestAnimationFrame(() => requestAnimationFrame(() => ScrollTrigger.refresh()));
    return teardown;
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[var(--color-cobalt)] focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Cursor />
      <Nav />
      <main id="main-content" className="pt-16">
        <Suspense fallback={<PageLoading />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/model-un" element={<ModelUN />} />
              <Route path="/public-speaking" element={<PublicSpeaking />} />
              <Route path="/about" element={<About />} />
              <Route path="/people" element={<People />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </PageTransition>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

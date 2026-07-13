import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { LanguageProvider } from "./i18n/context"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Studio from "./pages/Studio"
import About from "./pages/About"
import Journal from "./pages/Journal"
import JournalDetail from "./pages/JournalDetail"
import ReachUs from "./pages/ReachUs"

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalDetail />} />
              <Route path="/reach-us" element={<ReachUs />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </HelmetProvider>
  )
}

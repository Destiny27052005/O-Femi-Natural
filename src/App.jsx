import { Routes, Route } from "react-router-dom"
import SiteHeader from "./components/SiteHeader"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import SiteFooter from "./components/SiteFooter"
import NotFound from "./components/NotFound"

function App() {

  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  )
}

export default App

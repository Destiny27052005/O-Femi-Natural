import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App

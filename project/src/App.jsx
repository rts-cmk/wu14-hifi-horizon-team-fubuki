import AboutUs from './pages/AboutUs'
import Blog from './pages/Cart'
import Brands from './pages/ProductComparison'
import ContactUs from './pages/ContactUs'
import Events from './pages/ProductDetails'
import Home from './pages/Home'
import Shop from './pages/Product'


import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './style/main.sass'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

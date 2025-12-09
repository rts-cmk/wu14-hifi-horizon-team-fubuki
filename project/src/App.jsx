import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Brands from './pages/Brands'
import ContactUs from './pages/ContactUs'
import Events from './pages/Events'
import Home from './pages/Home'
import Shop from './pages/Shop'


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

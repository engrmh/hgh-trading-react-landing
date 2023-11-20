import Navbar from "../navbar/navbar.jsx";
import Banner from "../banner/banner.jsx";
import './header.css'

export default function Header() {
  return (
      <div className='header'>
          <div className="sticky top-2">
              <Navbar/>
          </div>
          <Banner/>
      </div>
  )
}

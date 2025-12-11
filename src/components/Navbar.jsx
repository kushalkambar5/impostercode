import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import "../index.css"

export default function Navbar(){
    return(
        <nav className="w-full flex items-center justify-between py-6 px-10">
                
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <img src={Logo} alt="Logo" className="w-8" />
                  <h1 className="font-bold text-xl">ImposterCode</h1>
                </div>
        
                {/* Menu */}
                <ul className="flex gap-6 bg-blue-300 px-6 py-2 rounded-3xl">
                  <li key="Home"
                      className="
                      cursor-pointer 
                      px-3 py-1 
                      rounded-xl 
                      hover:bg-blue-700 
                      hover:text-white 
                      transition 
                      font-medium
                    "><Link to="/">Home</Link></li>
                  <li key="Menu"
                      className="
                      cursor-pointer 
                      px-3 py-1 
                      rounded-xl 
                      hover:bg-blue-700 
                      hover:text-white 
                      transition 
                      font-medium
                    "><Link to="/">Menu</Link></li>
                  <li key="Our Story"
                      className="
                      cursor-pointer 
                      px-3 py-1 
                      rounded-xl 
                      hover:bg-blue-700 
                      hover:text-white 
                      transition 
                      font-medium
                    "><Link to="/about">Our Story</Link></li>
                  <li key="Contact"
                      className="
                      cursor-pointer 
                      px-3 py-1 
                      rounded-xl 
                      hover:bg-blue-700 
                      hover:text-white 
                      transition 
                      font-medium
                    "><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
    )
}
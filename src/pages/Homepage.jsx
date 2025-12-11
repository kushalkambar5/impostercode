import homepagePicture from "../assets/homepage-picture.png";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom"
import ThemeToggle from "../components/ThemeToggle";


export default function Homepage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Navbar */}
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

        {/* Sign-Up & Login */}
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white rounded-full px-6 py-3 font-semibold hover:bg-blue-900">
            <Link to="/signup">Sign-Up</Link>
          </button>
          <button className="bg-blue-700 text-white rounded-full px-6 py-3 font-semibold hover:bg-blue-900">
            <Link to="/login">Login</Link>
          </button>
        </div>

      </nav>

      {/* Hero Section */}
      <section className="grid grid-cols-12 px-10 mt-10">

        {/* Left Side */}
        <div className="col-span-6 flex flex-col justify-center gap-6">
          <p className="text-sm font-semibold text-blue-700 tracking-wide">
            THE FUN-INTERACTIVE GAME
          </p>

          <h1 className="text-5xl font-extrabold leading-tight">
            ImposterCode <br /> (MULTIPLAYER)
          </h1>

          <p className="text-gray-600 w-150">
            - ImposterCode is a multiplayer social deduction game that combines
            Among Us–style gameplay with collaborative coding challenges. <br />
            - Players work together to debug and complete code while hidden
            saboteurs introduce bugs. <br />
            - Features real-time voice chat, AST-based sabotage detection, and
            voting mechanics.
          </p>

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold w-fit hover:bg-orange-700">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE — SINGLE HERO IMAGE */}
        <div className="col-span-6 flex justify-center items-center">
          <img
            src={homepagePicture}
            alt="Homepage Illustration"
            className="w-full max-w-[900px] object-contain drop-shadow-xl"
          />
        </div>

      </section>

    </div>
  );
}

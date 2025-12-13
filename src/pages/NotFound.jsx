import { Link } from "react-router-dom";
import image from "../assets/confused-imposter.png";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-sky-100 relative overflow-hidden px-6">
      
      {/* Background 404 */}
      <h1 className="absolute text-[40vw] font-extrabold text-white/40 leading-none select-none z-0">
        404
      </h1>

      {/* Illustration */}
      <img
        src={image}
        alt="Lost illustration"
        className="relative z-10 w-100 md:w-200 drop-shadow-xl pr-20"
      />

      {/* Text */}
      <h2 className="mt-8 text-3xl md:text-4xl font-bold text-gray-800 text-center z-10">
        Oops, I think we’re lost...
      </h2>

      <p className="mt-3 text-gray-600 text-center max-w-md z-10">
        Let’s get you back to somewhere familiar.
      </p>

      {/* Back Home Button */}
      <Link
        to="/"
        className="mt-8 z-10 flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-800 shadow-md hover:shadow-lg hover:scale-[1.02] transition no-underline focus:outline-none focus:ring-0"
      >
        ← Back Home
      </Link>
    </div>
  );
}

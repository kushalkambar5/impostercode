import Navbar from "../components/Navbar";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: login logic here
  }

  return (
    <>
      <Navbar />

      <h1 className="font-bold text-4xl text-blue-500 text-center mt-8">
        Login
      </h1>

      <section className="w-full max-w-md mx-auto mt-10 p-8 border rounded-3xl shadow flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full"
        >
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-xl p-2"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold mb-1">
              Password
            </label>

            <input
              type="password"
              id="password"
              className="border rounded-xl p-2"
              required
            />

            <button
              type="button"
              className="text-blue-500 text-sm mt-1 self-start"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
}

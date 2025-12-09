import Navbar from "../components/Navbar";

export default function Signup() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: add form submit logic
  }

  return (
    <>
      <Navbar />

      <h1 className="font-bold text-4xl text-blue-500 text-center mt-8">
        Sign Up
      </h1>

      <section className="w-full max-w-md mx-auto mt-10 p-8 border rounded-3xl shadow flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full"
        >
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

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
      </section>
    </>
  );
}

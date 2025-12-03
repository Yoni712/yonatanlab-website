export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Yonatan Lab
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          A collection of projects, experiments, and ideas built by 
          <span className="font-semibold"> Yonatan Michael Beyene</span>.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            View Projects
          </a>

          <a
            href="/about"
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            About Me
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>

        <p className="text-gray-500">
          No featured projects yet — but they will appear here soon.
        </p>
      </section>
    </main>
  );
}

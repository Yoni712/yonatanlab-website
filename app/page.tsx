export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute -top-40 -left-20 animate-pulse" />
        <div className="w-[600px] h-[600px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-0 right-0 animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-md">
          Yonatan Lab
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          A futuristic lab of projects, experiments, and ideas built by 
          <span className="font-semibold text-cyan-300"> Yonatan Michael Beyene</span>.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-7 py-3 rounded-lg bg-cyan-600/60 backdrop-blur-md text-white font-medium hover:bg-cyan-500/80 transition shadow-lg shadow-cyan-600/20"
          >
            View Projects
          </a>

          <a
            href="/about"
            className="px-7 py-3 rounded-lg border border-gray-500 text-gray-200 font-medium hover:bg-white/10 transition backdrop-blur-md"
          >
            About Me
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 mb-6">
          Featured Projects
        </h2>

        <p className="text-gray-400">
          No featured projects yet — but they will appear here soon.
        </p>
      </section>
    </main>
  );
}

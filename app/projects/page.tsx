export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Projects
        </h1>

        <p className="text-gray-300 text-lg mb-16 max-w-2xl">
          A growing collection of projects, ideas, and experiments from Yonatan Lab.
          Each project showcases something I built, explored, or tested.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Placeholder Project Card */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer">
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition">
              Coming Soon
            </h2>
            <p className="text-gray-400">
              Your future projects will appear here once you add them.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

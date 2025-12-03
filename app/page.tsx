import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0F] text-gray-200 overflow-hidden">

      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_6s_ease-in-out_infinite]"></div>
      </div>

      {/* Glowing Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-cyan-600/20 blur-3xl rounded-full absolute -top-40 -left-20 animate-pulse"></div>
        <div className="w-[600px] h-[600px] bg-purple-600/20 blur-3xl rounded-full absolute bottom-0 right-0 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-32 text-center animate-fadeIn">
        <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-md">
          Yonatan Lab
        </h1>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          A futuristic lab of projects, experiments, and ideas built by 
          <span className="font-semibold text-cyan-300"> Yonatan Michael Beyene</span>.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link 
            href="/projects" 
            className="px-6 py-3 rounded-lg bg-cyan-600/60 backdrop-blur-md text-white font-medium hover:bg-cyan-500/80 transition shadow-lg shadow-cyan-600/20"
          >
            View Projects
          </Link>

          <Link 
            href="/about" 
            className="px-6 py-3 rounded-lg border border-gray-500 text-gray-200 font-medium hover:bg-white/10 transition backdrop-blur-md"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-10"></div>

      {/* Inside the Lab Section */}
      <section className="relative max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">
          Inside the Lab
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          I build everything from AI tools and micro-startup prototypes to hardware devices  
          like solar power stations, robotics, and wireless ignition systems.  
          This lab represents my journey of constant curiosity and creation.
        </p>

        {/* Cool Icons Row */}
        <div className="flex justify-center gap-8 text-gray-400 text-sm">
          <div className="hover:text-cyan-300 transition">⚡ Hardware Builds</div>
          <div className="hover:text-cyan-300 transition">🤖 AI Experiments</div>
          <div className="hover:text-cyan-300 transition">💻 Web Projects</div>
          <div className="hover:text-cyan-300 transition">🔬 Tech Research</div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-10"></div>

      {/* Featured Projects */}
      <section className="relative max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* VoltVault */}
          <Link 
            href="/projects/volt-vault" 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition">
              VoltVault
            </h3>
            <p className="text-gray-400">
              A solar-charged portable power station built inside a toolbox, powered by recycled laptop batteries.
            </p>
          </Link>

          {/* IgnisLink */}
          <Link 
            href="/projects/ignis-link" 
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-300 transition">
              IgnisLink
            </h3>
            <p className="text-gray-400">
              A smartphone-controlled firework ignition system for precise and safe launches.
            </p>
          </Link>

        </div>
      </section>
    </main>
  );
}

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

            {/* VoltVault */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer">
                <a href="/projects/volt-vault">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-cyan-300 transition">
                    VoltVault
                    </h2>
                    <p className="text-gray-400">
                    A DIY solar-charged power station built inside a toolbox using recycled laptop batteries.
                    </p>
                </a>
            </div>

            {/* IgnisLink */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer">
                <a href="/projects/ignis-link">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-orange-300 transition">
                    IgnisLink
                    </h2>
                    <p className="text-gray-400">
                    A smartphone-controlled firework ignition system designed for safer and more precise launches.
                    </p>
                </a>
            </div>
            
            {/* Automatic Watering System */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer">
                <a href="/projects/automatic-watering-system">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-green-300 transition">
                    Automatic Watering System
                    </h2>
                    <p className="text-gray-400">
                    A simple Arduino-powered system that waters plants automatically when the soil becomes dry.
                    </p>
                </a>
            </div>

            {/* Remote Door Opener */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer">
                <a href="/projects/remote-door-opener">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-red-300 transition">
                    Remote Door Opener
                    </h2>
                    <p className="text-gray-400">
                    A simple ESP32-powered system that opens the door.
                    </p>
                </a>
            </div>

            {/* Drone swarm */}
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition group cursor-pointer">
                <a href="/projects/drone-swarm-rescue">
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-purple-300 transition">
                    Intelligent Replanning Drone Swarm
                    </h2>
                    <p className="text-gray-400">
                    Simulated the communication protocol for the swarm drones in PyBullet. 
                    </p>
                </a>
            </div>

        </div>
      </section>
    </main>
  );
}

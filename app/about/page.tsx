import { Github, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hi! My name is <span className="font-semibold text-cyan-300">Yonatan Michael Beyene</span>.
          I'm a developer and creator who loves building things — from AI tools and web applications
          to hardware, electronics, and Raspberry Pi projects. I enjoy turning ideas into real, working systems.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-10">
          Yonatan Lab is my personal space where I experiment, learn, document, and share the projects I build.
          Whether it’s a power station made from recycled laptop batteries or a remote-controlled ignition system,
          I love solving problems and exploring new technologies.
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-10"></div>

        {/* Contact Section */}
        <h2 className="text-3xl font-bold mb-4 text-cyan-300">Contact & Profiles</h2>
        <p className="text-gray-400 mb-6">Feel free to reach out or explore more of my work.</p>

        <div className="flex flex-col gap-4 text-lg">

            {/* GitHub */}
            <a 
                href="https://github.com/Yoni712"
                target="_blank"
                className="flex items-center gap-3 text-cyan-300 hover:text-cyan-200 transition"
            >
                <Github size={28} /> github.com/Yoni712
            </a>

            {/* LinkedIn */}
            <a 
                href="https://www.linkedin.com/in/yonatan-michael-589363162/"
                target="_blank"
                className="flex items-center gap-3 text-cyan-300 hover:text-cyan-200 transition"
            >
                <Linkedin size={28} /> linkedin.com/in/yonatan-michael
            </a>

            {/* Email */}
            <a 
                href="mailto:yonatanmichael12@gmail.com"
                className="flex items-center gap-3 text-cyan-300 hover:text-cyan-200 transition"
            >
                <Mail size={28} /> yonatanmichael12@gmail.com
            </a>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-10"></div>

        {/* What I Do */}
        <h2 className="text-3xl font-bold mb-4 text-cyan-300">What I Do</h2>

        <ul className="space-y-3 text-gray-300 leading-relaxed mb-10">
          <li>⚡ Build hardware projects (power systems, electronics, Pi builds)</li>
          <li>🤖 Experiment with AI tools & automation</li>
          <li>💻 Develop web applications & micro-startup prototypes</li>
          <li>🔬 Reverse-engineer problems and create practical solutions</li>
          <li>📦 Document and share my builds on my website</li>
        </ul>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent my-10"></div>

        {/* Skills */}
        <h2 className="text-3xl font-bold mb-4 text-cyan-300">Skills & Technologies</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">Electronics</div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">Hardware Design</div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">Python</div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">C/C#</div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">VHDL</div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">CAD</div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-center">Simulation (Simulink & PyBullet)</div>
        </div>

      </section>
    </main>
  );
}

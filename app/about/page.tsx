export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          About Me
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hi! My name is <span className="font-semibold text-cyan-300">Yonatan Michael Beyene</span>.
          I'm a creator, builder, and technology enthusiast who loves experimenting with
          AI tools, web development, hardware, and innovative ideas.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Yonatan Lab is my personal space where I explore new concepts,
          build meaningful projects, and document my progress along the way.
          Whether it's AI-based tools, web applications, Raspberry Pi builds,
          or micro-startups — I enjoy turning ideas into reality.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          My goal is to keep learning, improving, and sharing my journey.
          If you're interested in collaborating, or just want to follow my progress,
          feel free to connect with me.
        </p>
      </section>
    </main>
  );
}

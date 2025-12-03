import Image from "next/image";

export default function IgnisLinkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
          IgnisLink
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12">
          A remote firework ignition system controlled through your smartphone — built to ignite fireworks 
          safely and precisely, even in harsh weather.
        </p>

        {/* Overview */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-orange-300">Overview</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          IgnisLink is a project I built about two years ago. It’s designed to ignite fireworks remotely 
          using your phone from a safe distance. In Sweden, fireworks are typically used only on New Year’s Eve, 
          and weather can make lighting them tricky — especially in heavy rain.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Instead of trying to time the fuse perfectly to ignite at midnight, IgnisLink lets you press a button 
          on your phone exactly at 00:00 — and fire the firework instantly and reliably.
        </p>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-orange-300">How It Works</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The system uses a small ignition box with an internal igniter that activates on command from your phone. 
          The main goals were:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>Keep the user at a safe distance</li>
          <li>Guarantee perfect timing (exactly at midnight)</li>
          <li>Work in rain, snow, and cold Swedish winter conditions</li>
          <li>Provide a simple “press to ignite” interface</li>
        </ul>

        {/* Incomplete Areas */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-orange-300">Improvements I Want to Make</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The project is not fully finished, and although I paused it, these are things I want to fix:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>A reusable igniter instead of a single-use one</li>
          <li>A more compact ignition box</li>
          <li>A small antenna to increase communication distance</li>
          <li>A proper mobile app with customizable interface</li>
        </ul>

        {/* Photos Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-orange-300">Photos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {/* Image 1 */}
          <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 hover:border-orange-400/40 hover:shadow-orange-400/20 transition">
            <Image
              src="/ignislink/image1.png"
              alt="IgnisLink Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Learnings */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-orange-300">What I Learned</h2>
        <p className="text-gray-300 leading-relaxed mb-12">
          IgnisLink taught me about wireless communication, ignition circuits, weather-proof design thinking, 
          user timing precision, and how to plan a hardware product that interacts with a mobile interface.
        </p>

      </section>
    </main>
  );
}

import Image from "next/image";

export default function AutomaticWateringSystemPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
          Automatic Watering System
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12">
          A simple Arduino-powered system that automatically waters plants based on soil moisture levels.
        </p>

        {/* Overview */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          This project is a compact automatic watering system built using an Arduino, a moisture sensor,
          a relay module, a micro pump, and a DIY water container. Its goal is simple: prevent plants from
          drying out by watering them only when the soil moisture drops below a set threshold.
        </p>

        {/* Story */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">Story & Background</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The idea came after gifting a plant to a friend who joked about forgetting to water it.
          Later, the topic came up again after seeing similar systems online — and that became the
          spark for building a small automatic watering setup. I combined a moisture sensor that reads
          soil hydration with an Arduino that activates a small pump whenever the soil becomes too dry.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The water is delivered through a simple tubing system, and the electronics are powered by a
          homemade power bank. A custom enclosure will eventually be 3D printed to integrate everything
          neatly inside the flower pot.
        </p>

        {/* Technical Build */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">Technical Build</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The system uses a moisture sensor placed in the soil to monitor dryness levels. The Arduino
          reads the sensor values and, once the soil reaches a predefined threshold, it activates a relay
          connected to a micro pump. The pump draws water from a container and delivers it directly to the
          soil through plastic tubing.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><span className="font-semibold">Arduino:</span> Reads moisture levels and controls the relay</li>
          <li><span className="font-semibold">Moisture Sensor:</span> Measures soil hydration</li>
          <li><span className="font-semibold">Relay Module:</span> Switches the pump on/off</li>
          <li><span className="font-semibold">Micro Pump:</span> Waters the plant when needed</li>
          <li><span className="font-semibold">Tubing System:</span> Delivers water into the soil</li>
          <li><span className="font-semibold">DIY Power Bank:</span> Powers the entire system</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">How It Works</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The moisture sensor continuously sends readings to the Arduino. When the soil becomes too dry,
          the Arduino triggers the relay, which powers the pump for a few seconds to add water. Once the soil
          becomes moist again, the system automatically stops watering. This ensures the plant receives exactly
          the amount of water it needs.
        </p>

        {/* Photos Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Image 1 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-green-400/40 hover:shadow-green-400/20 transition">
            <Image
              src="/plant/IMG1.jpg"
              alt="Automatic Watering System Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-green-400/40 hover:shadow-green-400/20 transition">
            <Image
              src="/plant/IMG2.jpg"
              alt="Automatic Watering System Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Video Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">Video</h2>
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/xRFdTQWVeEk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Learnings */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-green-300">What I Learned</h2>
        <p className="text-gray-300 leading-relaxed">
          This project taught me about moisture sensing, relay control, pump operation, and designing small
          automation systems. It also gave me ideas for integrating everything into a future all-in-one pot
          design where the electronics and water reservoir are hidden inside.
        </p>

      </section>
    </main>
  );
}

import Image from "next/image";

export default function RemoteDoorOpenerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
          Remote Door Opener
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12">
          A WiFi‑controlled servo mechanism that presses the building entrance button remotely using an ESP32.
        </p>

        {/* Overview */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-blue-300">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          This project solves a common issue: opening the main building door remotely when delivery drivers arrive
          while you're not home. Using an ESP32 microcontroller, WiFi connectivity, and a servo motor, the system
          can press the physical door‑unlock button from anywhere in the world.
        </p>

        {/* Story */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-blue-300">Story & Background</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The idea came from a recurring problem: when delivery drivers arrived at the building entrance, there was
          no way to open the door remotely unless I was at home. After missing multiple deliveries and having them
          returned to the sender, I decided to engineer my own solution.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The entrance door in my building uses a simple push‑button system. By attaching a servo motor positioned
          above the button and controlling it over WiFi, I could trigger the door to open remotely. The challenge was
          creating a secure and reliable method to send commands from my phone. This was solved using Blynk, a free
          IoT platform that connects a smartphone app to the ESP32 via cloud servers.
        </p>

        {/* Technical Build */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-blue-300">Technical Build</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          The project uses an ESP32 microcontroller for WiFi control, paired with a standard servo motor mounted
          on a small 3D‑printed bracket. When the user presses a button in the Blynk app, the command is securely
          sent to the ESP32, which rotates the servo and presses the door button.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><span className="font-semibold">ESP32:</span> Provides WiFi connectivity and remote control</li>
          <li><span className="font-semibold">Servo Motor:</span> Physically presses the door button</li>
          <li><span className="font-semibold">Blynk App:</span> Secure cloud-based communication</li>
          <li><span className="font-semibold">3D‑Printed Mount:</span> Holds the servo in the correct position</li>
        </ul>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-blue-300">How It Works</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The ESP32 stays connected to WiFi and listens for commands from the Blynk cloud. When a command is sent
          through the phone app, the servo rotates for a short moment, pressing the door‑open button. Once activated,
          the building door unlocks just as if someone had pressed it manually.
        </p>

        {/* Photo */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-blue-300">Photo</h2>
        <div className="relative w-full h-[500px] md:h-[650px] rounded-xl overflow-hidden border border-white/10 hover:border-blue-400/40 hover:shadow-blue-400/20 transition">
          <Image
            src="/door/IMG1.jpg"
            alt="Remote Door Opener Image"
            fill
            className="object-contain bg-black"
          />
        </div>

        {/* Learnings */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-blue-300">What I Learned</h2>
        <p className="text-gray-300 leading-relaxed">
          This project taught me about secure remote control, IoT platforms, servo actuation, and practical
          problem‑solving through engineering. It also strengthened my understanding of ESP32 networking and
          real‑world microcontroller applications.
        </p>

      </section>
    </main>
  );
}

import Image from "next/image";

export default function VoltVaultPage() {
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
          VoltVault
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12">
          A DIY solar-charged portable power station built from recycled laptop batteries,
          housed inside a toolbox, complete with inverter, BMS, cooling system, and solar controller.
        </p>

        {/* Overview */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-cyan-300">Overview</h2>
        <p className="text-gray-300 leading-relaxed">
          VoltVault is a portable power station I built in 2021 as my final high-school project 
          (Gymnasiearbete). The idea was to create a fully functional solar-powered energy unit 
          using reclaimed 18650 lithium-ion cells from old laptops that were going to be recycled.
        </p>

        {/* Story */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-cyan-300">Story & Background</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The idea came after noticing one of my teachers collecting old laptops destined for recycling.
          As a tech enthusiast, I saw an opportunity — laptop battery packs contain high-quality 18650 cells 
          that can be reused. After explaining my project idea, my teacher allowed me to take the battery packs. 
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          I carefully opened the packs, removed the cells, charged them, and tested them over a week. 
          Any cell whose voltage dropped below a certain threshold was discarded. After testing everything, 
          I ended up with over <span className="font-semibold text-cyan-300">120 good cells</span>.
        </p>

        {/* Technical Build */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-cyan-300">Technical Build</h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          I assembled the cells into a large custom battery pack and connected them to a 
          Battery Management System (BMS) for safe charging and discharging. Everything was mounted
          inside a sturdy toolbox, making the entire system portable and rugged.
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li><span className="font-semibold">Battery Pack:</span> 18650 cells from recycled laptops</li>
          <li><span className="font-semibold">BMS:</span> For cell balancing & protection</li>
          <li><span className="font-semibold">Inverter:</span> Converts DC → AC for normal outlets</li>
          <li><span className="font-semibold">Solar Charge Controller:</span> Enables solar panel input</li>
          <li><span className="font-semibold">Cooling System:</span> Two PC fans with temperature-activated circuit</li>
          <li><span className="font-semibold">Safety Switch:</span> Master cutoff switch</li>
          <li><span className="font-semibold">Display:</span> Shows voltage, temperature, status</li>
        </ul>

        {/* Real-World Use */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-cyan-300">Real-World Use</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          I mainly use VoltVault during the summer when I'm out with friends, to charge phones, speakers,
          or small devices. In the end, it's essentially a portable outlet — but one built entirely by me,
          powered by recycled batteries and solar energy.
        </p>

        {/* Photos Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-cyan-300">Photos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Image 1 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition">
            <Image
              src="/voltvault/IMG_2137.jpg"
              alt="VoltVault Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition">
            <Image
              src="/voltvault/IMG_2138.jpg"
              alt="VoltVault Image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition">
            <Image
              src="/voltvault/IMG_2142.jpg"
              alt="VoltVault Image 3"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition">
            <Image
              src="/voltvault/IMG_2143.jpg"
              alt="VoltVault Image 4"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 5 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition">
            <Image
              src="/voltvault/IMG_2144.jpg"
              alt="VoltVault Image 5"
              fill
              className="object-cover"
            />
          </div>

          {/* Image 6 */}
          <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-400/40 hover:shadow-cyan-400/20 transition">
            <Image
              src="/voltvault/IMG_2145.jpg"
              alt="VoltVault Image 6"
              fill
              className="object-cover"
            />
          </div>

        </div>



        {/* Learnings */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-cyan-300">What I Learned</h2>
        <p className="text-gray-300 leading-relaxed">
          This project taught me about solar power systems, lithium-ion battery safety,
          electronics cooling, energy storage, and designing practical DIY hardware solutions.
        </p>

      </section>
    </main>
  );
}

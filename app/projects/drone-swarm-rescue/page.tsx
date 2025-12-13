import Image from "next/image";
export default function DroneSwarm() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0A0A0F] to-[#0F1B2B] text-gray-200 px-6 py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#00A8E8] opacity-20 blur-3xl rounded-full absolute top-20 left-10 animate-pulse" />
        <div className="w-[500px] h-[500px] bg-[#7F00FF] opacity-20 blur-3xl rounded-full absolute bottom-10 right-10 animate-pulse" />
      </div>

      <section className="relative max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-500">
          Intelligent Replanning Drone Swarm
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-8">
          A simulated drone swarm mission in PyBullet where agents search a grid for a missing person, keep going
          even when drones fail, and dynamically re-plan tasks through a market-style allocation + fault retasking.
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="https://github.com/MDU-C2/Intelligent-Drone-Swarm.git"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition"
          >
            View Code on GitHub →
          </a>
        </div>

        {/* Overview */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-purple-300">Overview</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          The swarm’s objective is to search a defined grid area (like a “lawnmower” sweep) to locate a randomly
          spawned subject. Agents continuously broadcast their state to a GUI, avoid collisions and borders, and
          can handle injected failures (battery, GPS, comms, motors) while the mission continues.
        </p>

        {/* How It Works */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-purple-300">How It Works</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
          <li>Search area is divided into grid sections, initially allocated to agents.</li>
          <li>Agents sweep their owned sections using waypoint paths (“lawnmower” pattern).</li>
          <li>A market mechanism reallocates sections dynamically if drones fail or return home.</li>
          <li>Fault injection triggers retasking (return home, hover as relay, emergency land, etc.).</li>
          <li>When a subject is detected, three nearby agents verify and vote before ending the mission.</li>
        </ul>

        {/* Code Overview */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-purple-300">Code Overview (.py files)</h2>
        {/* Codebase Structure Image */}
        <div className="my-8 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-sm text-gray-400 mb-3">
                High-level overview of the simulation codebase structure
            </p>

            <div className="rounded-lg overflow-hidden border border-white/10">
                <Image
                    src="/DroneSwarm/Simulation%20structure.png"
                    alt="Intelligent Replanning Drone Swarm simulation codebase structure"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                />
            </div>
        </div>

        
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">main.py</p>
            <p>
              The simulation “orchestrator”: creates the environment, spawns drones + subject, runs the main control loop,
              handles searching, voting verification, market updates, avoidance, faults/retasking, and return-home logic.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">controller.py</p>
            <p>
              Shared control + state bridge between GUI and simulation thread: start/abort search, run simulation in a thread,
              inject faults, and track when drones are “home ready” and “charged”.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">gui.py</p>
            <p>
              PyQt control panel: choose grid size and number of agents, start/abort mission, inject health faults,
              show live pings/assignments/market/voting, and enable a “Charge Agent” button when a drone returns home.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">drone.py</p>
            <p>
              Drone agent wrapper: tracks per-agent state (health, commands, subject-found flag) and uses PID control to move
              toward target positions. Also formats broadcast messages used by the GUI.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">env.py</p>
            <p>
              Custom PyBullet “aviary” environment: draws the search area overlay (grid, labels, borders), colors searched
              cells, and creates the helipad visualization at home.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">searchArea.py</p>
            <p>
              Search-area data model: generates grid sections, assigns sections to drones, marks sections searched, and supports
              reassignment when a drone fails.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">market.py</p>
            <p>
              Market-based task allocation: drones “buy” sections with points, dynamic pricing can reassign ownership during the mission,
              and sections are released back to the market when a drone lands/crashes/returns late.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">retasking.py</p>
            <p>
              Fault-to-action mapping: converts health status codes (battery, GPS, comms, motor, etc.) into behaviors like RETURN_HOME,
              LAND_NOW, or REDUCED_ROLE/hover.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">avoidance.py</p>
            <p>
              Collision/boundary avoidance helpers: computes repulsion from nearby drones and pushes agents away from search-area borders,
              plus utility to fetch all drone positions.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">subject.py</p>
            <p>
              Subject spawning + persistence: randomly places a “missing person” URDF in a grid section, stores the location to JSON,
              and provides access to that saved position for display/logic.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="font-semibold text-gray-200">tables.py</p>
            <p>
              Shared constants/tables: health codes → names, command table, and a search-area table helper used for ownership/scoring-style
              bookkeeping and GUI-friendly display.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-purple-300">Video</h2>
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_QKAbdWbOmc"
            title="Intelligent Replanning Drone Swarm Simulation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Learnings */}
        <h2 className="text-3xl font-bold mt-12 mb-4 text-purple-300">What I Learned</h2>
        <p className="text-gray-300 leading-relaxed mb-12">
          This project helped me practice multi-agent coordination, failure handling, task allocation, simulation control loops,
          and building a live GUI to monitor and steer a running system.
        </p>
      </section>
    </main>
  );
}

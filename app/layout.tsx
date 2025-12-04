import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Yonatan Lab",
  description: "Projects and experiments by Yonatan Michael Beyene",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#0A0A0F]">
      <body className="h-full bg-[#0A0A0F] text-gray-200 m-0 p-0">
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-[#0A0A0F]/40 border-b border-cyan-400/10 z-50 shadow-lg shadow-cyan-500/5">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition">
              <Image
                src="/favicon.png"
                alt="Yonatan Lab Logo"
                width={70}
                height={70}
                className="rounded"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Yonatan Lab
              </span>
            </a>

            {/* Nav Links */}
            <div className="flex gap-6 text-gray-300 tracking-wide">
              <a href="/" className="hover:text-white transition">Home</a>
              <a href="/projects" className="hover:text-white transition">Projects</a>
              <a href="/about" className="hover:text-white transition">About</a>
            </div>
          </div>
        </nav>

        {/* Page Content with Top Spacing */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
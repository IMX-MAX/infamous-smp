import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Swords, 
  ShieldAlert, 
  Coins, 
  HeartPulse, 
  Gamepad2, 
  Monitor, 
  Copy, 
  CheckCircle2,
  Server,
  Twitter,
  Youtube,
  MessageSquare
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const serverIP = "play.infamouss.net"; // Placeholder IP

  const handleCopyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 selection:bg-emerald-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Swords className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Infamouss<span className="text-emerald-500">SMP</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
              <MessageSquare className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors text-zinc-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Season 1 is Live
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
              Survive. Upgrade. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Dominate.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Infamouss SMP is an anarchy-style server similar to donutsmp. 
              Buy, sell, and build bases. Utilize our unique upgrade system to boost your stamina and health. 
              PvP, raiding, and much more await!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleCopyIP}
                className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto justify-center"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
                {copied ? "IP Copied!" : "Copy Server IP"}
                <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition-all scale-105 opacity-0 group-hover:opacity-100" />
              </button>
              <a 
                href="#"
                className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5" />
                Join Discord
              </a>
            </div>
          </motion.div>
        </div>

        {/* Status & Info Grid */}
        <div className="grid md:grid-cols-12 gap-6 mb-24">
          {/* Server Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Server className="w-32 h-32" />
            </div>
            
            <h2 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              Minecraft Server
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-zinc-400 font-medium">Current Status</span>
                <span className="text-emerald-400 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Operational
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">Status Legend</h3>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-zinc-300">Operational and working</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3 h-3 rounded-full bg-yellow-500 shrink-0" />
                <span className="text-zinc-300">In development or Technical Issues</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                <span className="text-zinc-300">Not usable</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="w-3 h-3 rounded-full bg-zinc-700 shrink-0" />
                <span className="text-zinc-300">Fully down</span>
              </div>
            </div>
          </motion.div>

          {/* Platform Support Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7 bg-gradient-to-br from-zinc-900/50 to-zinc-900/80 border border-white/5 rounded-3xl p-8 backdrop-blur-sm flex flex-col justify-center"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Play Anywhere. <br/>
              <span className="text-zinc-500">Coming Soon.</span>
            </h2>
            <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
              Infamouss SMP is currently a Java-exclusive experience, but we're actively working on bringing the chaos to Bedrock and Console players.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center gap-3 text-center">
                <Monitor className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="font-bold text-emerald-400">Java Edition</div>
                  <div className="text-xs text-emerald-500/70 uppercase tracking-wider font-bold mt-1">Available Now</div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col items-center justify-center gap-3 text-center opacity-70">
                <Gamepad2 className="w-8 h-8 text-zinc-400" />
                <div>
                  <div className="font-bold text-zinc-300">Bedrock & Console</div>
                  <div className="text-xs text-yellow-500/70 uppercase tracking-wider font-bold mt-1">In Development</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">Server Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Anarchy & Raiding</h3>
              <p className="text-zinc-400 leading-relaxed">
                No rules, no mercy. Build your base, defend your loot, and raid others in a true anarchy environment.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <HeartPulse className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Upgrade System</h3>
              <p className="text-zinc-400 leading-relaxed">
                Grind to become stronger. Spend your resources to permanently upgrade your maximum health and stamina.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                <Coins className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Player Economy</h3>
              <p className="text-zinc-400 leading-relaxed">
                Buy and sell items with other players. Corner the market and become the richest player on the server.
              </p>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Swords className="w-5 h-5 text-emerald-500" />
            <span className="font-display font-bold text-white">Infamouss SMP</span>
          </div>
          <p className="text-zinc-500 text-sm">
            Not affiliated with Mojang AB. Minecraft is a trademark of Mojang AB.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Discord</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Store</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-medium">Rules</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

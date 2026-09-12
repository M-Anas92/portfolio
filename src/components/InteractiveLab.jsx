import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveLab() {
  // Physics stage puck state
  const [puckX, setPuckX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  // Sync engine simulation state
  const [syncState, setSyncState] = useState({
    mutations: '0 mutations',
    badge: 'Clean',
    badgeColor: 'text-[#4edea3]',
    log: '[Thread: com.apple.coredata.sync] Schema verified at transaction #849120',
  });
  const [isSyncing, setIsSyncing] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.clientX - puckX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = Math.max(-120, Math.min(120, e.clientX - startXRef.current));
    setPuckX(newX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Spring back animation
    setPuckX(0);
  };

  const triggerSyncSimulation = () => {
    if (isSyncing) return;
    setIsSyncing(true);
    setSyncState({
      mutations: '14 mutations queued',
      badge: 'Syncing...',
      badgeColor: 'text-[#4d8eff]',
      log: '[Thread: network.worker] Replaying offline delta bundle #849121',
    });

    setTimeout(() => {
      setSyncState({
        mutations: '0 mutations',
        badge: 'Clean',
        badgeColor: 'text-[#4edea3]',
        log: '[Thread: com.apple.coredata.sync] All conflict matrices unified. 0 errors.',
      });
      setIsSyncing(false);
    }, 1400);
  };

  return (
    <section className="relative w-full py-20 bg-[#0a0e16]" id="mobile-lab">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#4d8eff] font-semibold">
            Interactive R&D Lab
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#dfe2ee] font-bold tracking-tight mt-1">
            Mobile & Web Interactive Telemetry
          </h2>
          <p className="font-body text-sm text-[#c2c6d6] mt-2 max-w-xl">
            Test interactive gesture physics, conflict-free sync algorithms, ActivityKit payload state machines, and shader compute kernels live in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lab Module 1: Physics Drag Stage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#181c24] p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-[#dfe2ee]">
                  Mobile Gesture & Physics Engine
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-[#262a33] text-[#adc6ff] font-mono text-[11px]">
                  Custom Spring Physics
                </span>
              </div>
              <p className="font-body text-xs text-[#c2c6d6] mb-4">
                Interactive gesture physics stage simulating 120Hz ProMotion touch interpolation. Try dragging the puck below!
              </p>

              {/* Drag Stage Container */}
              <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className="w-full h-36 bg-[#0a0e16] rounded-xl flex items-center justify-center p-4 relative cursor-grab active:cursor-grabbing overflow-hidden border border-white/5"
              >
                <div
                  style={{
                    transform: `translateX(${puckX}px) scale(${isDragging ? 1.05 : 1})`,
                    transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#4d8eff] to-[#571bc1] text-white font-mono text-xs font-semibold shadow-lg shadow-[#4d8eff]/30 flex items-center gap-2 select-none"
                >
                  <span className="material-symbols-outlined text-[16px]">touch_app</span>
                  <span>Drag Me Left/Right</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[#8c909f]">
              <span>Spring Stiffness: 350 N/m</span>
              <span className="text-[#4edea3]">Offset: {Math.round(puckX)}px</span>
            </div>
          </motion.div>

          {/* Lab Module 2: CRDT Offline Sync Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#181c24] p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-[#dfe2ee]">
                  Conflict-Free Offline Sync Engine
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-[#262a33] text-[#4edea3] font-mono text-[11px]">
                  Firebase Sync
                </span>
              </div>
              <p className="font-body text-xs text-[#c2c6d6] mb-4">
                Real-time delta resolution matrix simulating offline write-ahead logs and conflict convergence.
              </p>

              {/* Sync Dashboard */}
              <div className="w-full bg-[#0a0e16] rounded-xl p-4 border border-white/5 flex flex-col gap-3 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#c2c6d6]" id="sync-queue-count">
                    {syncState.mutations}
                  </span>
                  <button
                    onClick={triggerSyncSimulation}
                    disabled={isSyncing}
                    className="px-3 py-1 rounded bg-[#262a33] hover:bg-[#31353e] text-[#adc6ff] text-[11px] font-semibold transition-all border border-white/5 active:scale-95 disabled:opacity-50"
                  >
                    {isSyncing ? 'Replaying Deltas...' : 'Trigger Sync Matrix'}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-[#181c24] flex flex-col items-center">
                    <span className="text-[9px] text-[#8c909f]">RESOLUTION</span>
                    <span className="text-[#adc6ff] font-bold">LWW Rule</span>
                  </div>
                  <div className="p-2 rounded bg-[#181c24] flex flex-col items-center">
                    <span className="text-[9px] text-[#8c909f]">WAL WRITE</span>
                    <span className="text-[#d0bcff] font-bold">0.84ms</span>
                  </div>
                  <div className="p-2 rounded bg-[#181c24] flex flex-col items-center">
                    <span className="text-[9px] text-[#8c909f]">STATE</span>
                    <span className={`${syncState.badgeColor} font-bold`}>{syncState.badge}</span>
                  </div>
                </div>

                <div className="text-[10px] text-[#8c909f] truncate pt-1 border-t border-white/5">
                  {syncState.log}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[#8c909f]">
              <span>Isolation Level: Serializable</span>
              <span className="text-[#4edea3]">Cryptographically Verified</span>
            </div>
          </motion.div>

          {/* Lab Module 3: Dynamic Island State Machine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#181c24] p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-[#dfe2ee]">
                  Dynamic Island State Machine
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-[#262a33] text-[#d0bcff] font-mono text-[11px]">
                  ActivityKit
                </span>
              </div>
              <p className="font-body text-xs text-[#c2c6d6] mb-4">
                Adaptive payload packaging for lock screen widgets and Dynamic Island expanded views under 4KB budget constraints.
              </p>

              <div className="w-full h-36 bg-[#0a0e16] rounded-xl flex items-center justify-center p-4 border border-white/5">
                <div className="w-full max-w-sm h-14 bg-black rounded-3xl p-3 flex items-center justify-between shadow-xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-[#571bc1]/40 flex items-center justify-center text-[#d0bcff]">
                      <span className="material-symbols-outlined text-[18px]">flight_takeoff</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline text-xs text-white font-bold">SFO → JFK</span>
                      <span className="font-mono text-[9px] text-[#4edea3]">Boarding Group A</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono text-xs text-white font-bold">Gate B14</span>
                    <span className="font-mono text-[9px] text-[#8c909f]">Departs 22m</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[#8c909f]">
              <span>Payload Size: 1.1 KB / 4 KB</span>
              <span className="text-[#adc6ff]">APNs Token Rotated</span>
            </div>
          </motion.div>

          {/* Lab Module 4: Metal Micro-Shader Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#181c24] p-6 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-[#dfe2ee]">
                  Metal Performance Shaders (MPS)
                </h3>
                <span className="px-2.5 py-0.5 rounded bg-[#262a33] text-[#adc6ff] font-mono text-[11px]">
                  Metal Shading Lang
                </span>
              </div>
              <p className="font-body text-xs text-[#c2c6d6] mb-4">
                Real-time compute kernel offloading heavy visual matrix convolutions directly onto GPU clusters.
              </p>

              <div className="w-full h-36 bg-[#0a0e16] rounded-xl p-4 flex flex-col justify-center items-center relative overflow-hidden border border-white/5">
                <div className="w-full h-10 bg-gradient-to-r from-[#4d8eff] via-[#571bc1] to-[#4edea3] rounded-lg opacity-80 blur-sm animate-pulse"></div>
                <div className="relative z-10 font-mono text-xs text-[#dfe2ee] mt-2">
                  kernel void computeConvolution(texture2d&lt;float&gt; [[texture(0)]])
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-[#8c909f]">
              <span>Bandwidth: 135 GB/s</span>
              <span className="text-[#4edea3]">GPU Memory: 14MB</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

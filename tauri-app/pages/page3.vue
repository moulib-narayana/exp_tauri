<template>
  <div class="cyber-container">
    <div class="matrix-bg"></div>
    <div class="scan-lines"></div>
    <div class="glitch-overlay"></div>
    
    <div class="header">
      <h1 class="cyber-title glitch-text">CYBER_NEON</h1>
      <p class="cyber-subtitle">Welcome to the digital realm</p>
    </div>



    <div class="hologram-grid">
      <div v-for="i in 35" :key="i" class="hologram-card" :class="`hologram-${i % 7}`">
        <div class="card-glitch">
          <div class="card-content">
            <h3 class="card-title">Hologram {{ i }}</h3>
            <div class="hologram-icon">{{ ['🤖', '💻', '🔮', '⚡', '🌐', '🎮', '🚀'][i % 7] }}</div>
            <p class="card-text">Digital entity {{ i }} online</p>
            <div class="status-indicator">
              <span class="status-dot"></span>
              <span class="status-text">ACTIVE</span>
            </div>
            <button class="cyber-button">ACCESS</button>
          </div>
          <div class="card-reflection"></div>
        </div>
      </div>
    </div>

    <div class="floating-particles">
      <div v-for="i in 25" :key="`particle-${i}`" class="particle" :style="{ animationDelay: `${i * 0.2}s` }">
        {{ ['0', '1', '█', '▓', '▒', '░'][i % 6] }}
      </div>
    </div>

    <div class="energy-waves">
      <div class="wave wave-1"></div>
      <div class="wave wave-2"></div>
      <div class="wave wave-3"></div>
    </div>

    <div class="data-streams">
      <div v-for="i in 8" :key="`stream-${i}`" class="data-stream" :style="{ animationDelay: `${i * 0.5}s` }">
        <div class="data-bit" v-for="j in 20" :key="j">1</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cyber-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
  font-family: 'Courier New', monospace;
}

.matrix-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 0, 0.03) 2px,
      rgba(0, 255, 0, 0.03) 4px
    );
  pointer-events: none;
  z-index: 1;
}

.scan-lines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 1px,
      rgba(0, 255, 255, 0.1) 1px,
      rgba(0, 255, 255, 0.1) 2px
    );
  pointer-events: none;
  z-index: 2;
  animation: scan-move 10s linear infinite;
}

.glitch-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 30% 20%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: 3;
  animation: glitch-flicker 0.3s ease-in-out infinite;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.cyber-title {
  font-size: 4rem;
  color: #00ffff;
  text-shadow: 
    0 0 20px #00ffff,
    0 0 40px #00ffff,
    0 0 60px #00ffff;
  margin-bottom: 10px;
  letter-spacing: 0.2em;
  animation: cyber-pulse 2s ease-in-out infinite;
}

.cyber-subtitle {
  font-size: 1.3rem;
  color: #ff00ff;
  text-shadow: 0 0 10px #ff00ff;
  animation: subtitle-glitch 3s ease-in-out infinite;
}



.hologram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.hologram-card {
  height: 250px;
  perspective: 1000px;
  cursor: pointer;
}

.card-glitch {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.hologram-card:hover .card-glitch {
  transform: rotateY(10deg) rotateX(5deg);
}

.card-content {
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.card-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  animation: hologram-scan 3s linear infinite;
}

.card-title {
  color: #00ffff;
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-shadow: 0 0 10px #00ffff;
  z-index: 1;
  position: relative;
}

.hologram-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  animation: icon-float 3s ease-in-out infinite;
  z-index: 1;
  position: relative;
}

.card-text {
  color: rgba(0, 255, 255, 0.8);
  margin-bottom: 15px;
  z-index: 1;
  position: relative;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  z-index: 1;
  position: relative;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #00ff00;
  border-radius: 50%;
  animation: status-blink 1s ease-in-out infinite;
}

.status-text {
  color: #00ff00;
  font-size: 0.8rem;
  font-weight: bold;
}

.cyber-button {
  background: linear-gradient(45deg, #ff00ff, #00ffff);
  color: #000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.cyber-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.cyber-button:hover::before {
  left: 100%;
}

.cyber-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(255, 0, 255, 0.4);
}

.card-reflection {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, transparent 30%, rgba(0, 255, 255, 0.1) 50%, transparent 70%);
  pointer-events: none;
}

.floating-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.particle {
  position: absolute;
  color: #00ff00;
  font-size: 1rem;
  animation: particle-fall 6s linear infinite;
  opacity: 0.7;
}

.particle:nth-child(1) { left: 5%; animation-delay: 0s; }
.particle:nth-child(2) { left: 15%; animation-delay: 1s; }
.particle:nth-child(3) { left: 25%; animation-delay: 2s; }
.particle:nth-child(4) { left: 35%; animation-delay: 3s; }
.particle:nth-child(5) { left: 45%; animation-delay: 4s; }
.particle:nth-child(6) { left: 55%; animation-delay: 5s; }
.particle:nth-child(7) { left: 65%; animation-delay: 6s; }
.particle:nth-child(8) { left: 75%; animation-delay: 7s; }
.particle:nth-child(9) { left: 85%; animation-delay: 8s; }
.particle:nth-child(10) { left: 95%; animation-delay: 9s; }
.particle:nth-child(11) { left: 10%; animation-delay: 10s; }
.particle:nth-child(12) { left: 20%; animation-delay: 11s; }
.particle:nth-child(13) { left: 30%; animation-delay: 12s; }
.particle:nth-child(14) { left: 40%; animation-delay: 13s; }
.particle:nth-child(15) { left: 50%; animation-delay: 14s; }
.particle:nth-child(16) { left: 60%; animation-delay: 15s; }
.particle:nth-child(17) { left: 70%; animation-delay: 16s; }
.particle:nth-child(18) { left: 80%; animation-delay: 17s; }
.particle:nth-child(19) { left: 90%; animation-delay: 18s; }
.particle:nth-child(20) { left: 100%; animation-delay: 19s; }
.particle:nth-child(21) { left: 7%; animation-delay: 20s; }
.particle:nth-child(22) { left: 17%; animation-delay: 21s; }
.particle:nth-child(23) { left: 27%; animation-delay: 22s; }
.particle:nth-child(24) { left: 37%; animation-delay: 23s; }
.particle:nth-child(25) { left: 47%; animation-delay: 24s; }

.energy-waves {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  animation: wave-move 4s ease-in-out infinite;
}

.wave-1 { animation-delay: 0s; }
.wave-2 { animation-delay: 1.3s; }
.wave-3 { animation-delay: 2.6s; }

.data-streams {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.data-stream {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  animation: stream-flow 8s linear infinite;
}

.data-stream:nth-child(1) { left: 5%; top: 0; }
.data-stream:nth-child(2) { left: 20%; top: 0; }
.data-stream:nth-child(3) { left: 35%; top: 0; }
.data-stream:nth-child(4) { left: 50%; top: 0; }
.data-stream:nth-child(5) { left: 65%; top: 0; }
.data-stream:nth-child(6) { left: 80%; top: 0; }
.data-stream:nth-child(7) { left: 95%; top: 0; }
.data-stream:nth-child(8) { left: 12%; top: 0; }

.data-bit {
  color: #00ff00;
  font-size: 0.8rem;
  opacity: 0.8;
  animation: bit-flicker 0.5s ease-in-out infinite;
}

/* Animations */
@keyframes scan-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
}

@keyframes glitch-flicker {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes cyber-pulse {
  0%, 100% { text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff; }
  50% { text-shadow: 0 0 30px #00ffff, 0 0 60px #00ffff, 0 0 90px #00ffff; }
}

@keyframes subtitle-glitch {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-1px); }
  40% { transform: translateX(1px); }
  50% { transform: translateX(0); }
}

@keyframes hologram-scan {
  0% { left: -100%; }
  100% { left: 100%; }
}

@keyframes icon-float {
  0%, 100% { transform: translateY(0) rotateY(0deg); }
  50% { transform: translateY(-10px) rotateY(180deg); }
}

@keyframes status-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes particle-fall {
  0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

@keyframes wave-move {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes stream-flow {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

@keyframes bit-flicker {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.3; }
}

/* Card variations */
.hologram-0 { animation: slide-in-left 0.5s ease-out; }
.hologram-1 { animation: slide-in-right 0.7s ease-out; }
.hologram-2 { animation: slide-in-top 0.9s ease-out; }
.hologram-3 { animation: slide-in-bottom 1.1s ease-out; }
.hologram-4 { animation: zoom-in 1.3s ease-out; }
.hologram-5 { animation: flip-in 1.5s ease-out; }
.hologram-6 { animation: glitch-in 1.7s ease-out; }

@keyframes slide-in-left {
  0% { opacity: 0; transform: translateX(-100px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  0% { opacity: 0; transform: translateX(100px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-top {
  0% { opacity: 0; transform: translateY(-100px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in-bottom {
  0% { opacity: 0; transform: translateY(100px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes zoom-in {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes flip-in {
  0% { opacity: 0; transform: rotateY(90deg); }
  100% { opacity: 1; transform: rotateY(0deg); }
}

@keyframes glitch-in {
  0% { opacity: 0; transform: translateX(-20px) skewX(20deg); }
  25% { opacity: 0.5; transform: translateX(20px) skewX(-20deg); }
  50% { opacity: 0.8; transform: translateX(-10px) skewX(10deg); }
  75% { opacity: 0.9; transform: translateX(10px) skewX(-10deg); }
  100% { opacity: 1; transform: translateX(0) skewX(0deg); }
}

.cyber-btn {
  animation: cyber-glow 2s ease-in-out infinite;
}

@keyframes cyber-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.3); }
  50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.6); }
}

.glitch-text {
  animation: text-glitch 0.3s ease-in-out infinite;
}

@keyframes text-glitch {
  0%, 100% { transform: translateX(0); }
  10% { transform: translateX(-2px); }
  20% { transform: translateX(2px); }
  30% { transform: translateX(-1px); }
  40% { transform: translateX(1px); }
  50% { transform: translateX(0); }
}
</style> 

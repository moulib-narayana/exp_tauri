<template>
  <div class="space-container">
    <div class="stars"></div>
    <div class="stars2"></div>
    <div class="stars3"></div>
    
    <div class="header">
      <h1 class="cosmic-title">Cosmic Adventure</h1>
      <p class="cosmic-subtitle">Journey through the stars</p>
    </div>

    <div class="navigation">
      <NuxtLink to="/" class="nav-btn glow">Home</NuxtLink>
      <NuxtLink to="/page2" class="nav-btn glow">Page 2</NuxtLink>
      <NuxtLink to="/page3" class="nav-btn glow">Page 3</NuxtLink>
      <NuxtLink to="/page4" class="nav-btn glow">Page 4</NuxtLink>
    </div>

    <div class="cards-container">
      <div v-for="i in 25" :key="i" class="space-card" :class="`space-card-${i % 5}`">
        <div class="card-inner">
          <div class="card-front">
            <h3 class="planet-title">Planet {{ i }}</h3>
            <div class="planet-icon">🌍</div>
            <p class="planet-desc">Mysterious world {{ i }}</p>
          </div>
          <div class="card-back">
            <h4>Discovery {{ i }}</h4>
            <p>New life forms found!</p>
            <div class="alien">👽</div>
          </div>
        </div>
      </div>
    </div>

    <div class="floating-asteroids">
      <div v-for="i in 12" :key="`asteroid-${i}`" class="asteroid" :style="{ animationDelay: `${i * 0.3}s` }">
        ☄️
      </div>
    </div>

    <div class="nebula-effects">
      <div class="nebula nebula-1"></div>
      <div class="nebula nebula-2"></div>
      <div class="nebula nebula-3"></div>
    </div>
  </div>
</template>

<style scoped>
.space-container {
  min-height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.stars, .stars2, .stars3 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.stars {
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1" fill="white"/></svg>') repeat;
  animation: animate-stars 50s linear infinite;
}

.stars2 {
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.5" fill="white"/></svg>') repeat;
  animation: animate-stars 100s linear infinite;
}

.stars3 {
  background: transparent url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="1.5" fill="white"/></svg>') repeat;
  animation: animate-stars 150s linear infinite;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.cosmic-title {
  font-size: 4rem;
  color: #fff;
  text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff;
  animation: cosmic-glow 3s ease-in-out infinite alternate;
  margin-bottom: 10px;
}

.cosmic-subtitle {
  font-size: 1.3rem;
  color: #87ceeb;
  animation: fade-pulse 2s ease-in-out infinite;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  z-index: 10;
  position: relative;
}

.nav-btn {
  padding: 12px 24px;
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid #00ffff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn:hover {
  background: rgba(0, 255, 255, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.space-card {
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.space-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card-front {
  background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(75, 0, 130, 0.3));
  border: 1px solid rgba(138, 43, 226, 0.5);
  backdrop-filter: blur(10px);
}

.card-back {
  background: linear-gradient(135deg, rgba(255, 20, 147, 0.3), rgba(199, 21, 133, 0.3));
  border: 1px solid rgba(255, 20, 147, 0.5);
  backdrop-filter: blur(10px);
  transform: rotateY(180deg);
}

.planet-title {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-shadow: 0 0 10px #00ffff;
}

.planet-icon {
  font-size: 3rem;
  margin-bottom: 10px;
  animation: planet-rotate 10s linear infinite;
}

.planet-desc {
  color: rgba(255, 255, 255, 0.8);
}

.alien {
  font-size: 2rem;
  margin-top: 10px;
  animation: alien-bounce 1s ease-in-out infinite;
}

.floating-asteroids {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

.asteroid {
  position: absolute;
  font-size: 1.5rem;
  animation: asteroid-float 8s ease-in-out infinite;
}

.asteroid:nth-child(1) { top: 10%; left: 5%; }
.asteroid:nth-child(2) { top: 20%; right: 10%; }
.asteroid:nth-child(3) { top: 60%; left: 15%; }
.asteroid:nth-child(4) { top: 70%; right: 5%; }
.asteroid:nth-child(5) { top: 40%; left: 25%; }
.asteroid:nth-child(6) { top: 80%; right: 25%; }
.asteroid:nth-child(7) { top: 30%; left: 75%; }
.asteroid:nth-child(8) { top: 90%; left: 65%; }
.asteroid:nth-child(9) { top: 15%; left: 45%; }
.asteroid:nth-child(10) { top: 55%; right: 35%; }
.asteroid:nth-child(11) { top: 85%; left: 35%; }
.asteroid:nth-child(12) { top: 25%; right: 55%; }

.nebula-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.nebula {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  animation: nebula-pulse 6s ease-in-out infinite;
}

.nebula-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #ff69b4, transparent);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.nebula-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #00ffff, transparent);
  top: 60%;
  right: 20%;
  animation-delay: 2s;
}

.nebula-3 {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, #ffd700, transparent);
  top: 40%;
  left: 60%;
  animation-delay: 4s;
}

/* Animations */
@keyframes animate-stars {
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
}

@keyframes cosmic-glow {
  0% { text-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff; }
  100% { text-shadow: 0 0 30px #00ffff, 0 0 60px #00ffff, 0 0 80px #00ffff; }
}

@keyframes fade-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

@keyframes planet-rotate {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

@keyframes alien-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes asteroid-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-30px) rotate(90deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
  75% { transform: translateY(-40px) rotate(270deg); }
}

@keyframes nebula-pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

/* Card variations */
.space-card-0 { animation: slide-in-left 0.5s ease-out; }
.space-card-1 { animation: slide-in-right 0.7s ease-out; }
.space-card-2 { animation: slide-in-top 0.9s ease-out; }
.space-card-3 { animation: slide-in-bottom 1.1s ease-out; }
.space-card-4 { animation: zoom-in 1.3s ease-out; }

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

.glow {
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
}
</style> 

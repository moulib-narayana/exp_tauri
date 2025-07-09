<template>
  <div class="nature-container">
    <div class="forest-bg"></div>
    <div class="leaves-container">
      <div v-for="i in 30" :key="`leaf-${i}`" class="leaf" :style="{ animationDelay: `${i * 0.2}s` }">
        🍃
      </div>
    </div>
    
    <div class="header">
      <h1 class="nature-title">Enchanted Forest</h1>
      <p class="nature-subtitle">Where magic meets nature</p>
    </div>

    <div class="navigation">
      <NuxtLink to="/" class="nav-btn forest-btn">Home</NuxtLink>
      <NuxtLink to="/page1" class="nav-btn forest-btn">Page 1</NuxtLink>
      <NuxtLink to="/page3" class="nav-btn forest-btn">Page 3</NuxtLink>
      <NuxtLink to="/page4" class="nav-btn forest-btn">Page 4</NuxtLink>
    </div>

    <div class="cards-masonry">
      <div v-for="i in 30" :key="i" class="nature-card" :class="`nature-card-${i % 6}`">
        <div class="card-header">
          <h3 class="card-title">Creature {{ i }}</h3>
          <div class="creature-icon">{{ ['🦋', '🦊', '🦉', '🦌', '🐿️', '🦔'][i % 6] }}</div>
        </div>
        <div class="card-body">
          <p class="card-description">A magical creature from the enchanted forest</p>
          <div class="magic-sparkles">
            <span v-for="j in 5" :key="j" class="sparkle">✨</span>
          </div>
        </div>
        <div class="card-footer">
          <button class="magic-btn">Cast Spell</button>
        </div>
      </div>
    </div>

    <div class="floating-mushrooms">
      <div v-for="i in 15" :key="`mushroom-${i}`" class="mushroom" :style="{ animationDelay: `${i * 0.4}s` }">
        🍄
      </div>
    </div>

    <div class="water-ripples">
      <div class="ripple ripple-1"></div>
      <div class="ripple ripple-2"></div>
      <div class="ripple ripple-3"></div>
    </div>

    <div class="fireflies">
      <div v-for="i in 20" :key="`firefly-${i}`" class="firefly" :style="{ animationDelay: `${i * 0.3}s` }">
        ✨
      </div>
    </div>
  </div>
</template>

<style scoped>
.nature-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #2d5016 0%, #1a472a 50%, #0f3d1a 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.forest-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(34, 139, 34, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(0, 100, 0, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(50, 205, 50, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

.leaves-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.leaf {
  position: absolute;
  font-size: 1.2rem;
  animation: leaf-fall 8s linear infinite;
  opacity: 0.7;
}

.leaf:nth-child(1) { left: 5%; animation-delay: 0s; }
.leaf:nth-child(2) { left: 15%; animation-delay: 1s; }
.leaf:nth-child(3) { left: 25%; animation-delay: 2s; }
.leaf:nth-child(4) { left: 35%; animation-delay: 3s; }
.leaf:nth-child(5) { left: 45%; animation-delay: 4s; }
.leaf:nth-child(6) { left: 55%; animation-delay: 5s; }
.leaf:nth-child(7) { left: 65%; animation-delay: 6s; }
.leaf:nth-child(8) { left: 75%; animation-delay: 7s; }
.leaf:nth-child(9) { left: 85%; animation-delay: 8s; }
.leaf:nth-child(10) { left: 95%; animation-delay: 9s; }
.leaf:nth-child(11) { left: 10%; animation-delay: 10s; }
.leaf:nth-child(12) { left: 20%; animation-delay: 11s; }
.leaf:nth-child(13) { left: 30%; animation-delay: 12s; }
.leaf:nth-child(14) { left: 40%; animation-delay: 13s; }
.leaf:nth-child(15) { left: 50%; animation-delay: 14s; }
.leaf:nth-child(16) { left: 60%; animation-delay: 15s; }
.leaf:nth-child(17) { left: 70%; animation-delay: 16s; }
.leaf:nth-child(18) { left: 80%; animation-delay: 17s; }
.leaf:nth-child(19) { left: 90%; animation-delay: 18s; }
.leaf:nth-child(20) { left: 100%; animation-delay: 19s; }
.leaf:nth-child(21) { left: 7%; animation-delay: 20s; }
.leaf:nth-child(22) { left: 17%; animation-delay: 21s; }
.leaf:nth-child(23) { left: 27%; animation-delay: 22s; }
.leaf:nth-child(24) { left: 37%; animation-delay: 23s; }
.leaf:nth-child(25) { left: 47%; animation-delay: 24s; }
.leaf:nth-child(26) { left: 57%; animation-delay: 25s; }
.leaf:nth-child(27) { left: 67%; animation-delay: 26s; }
.leaf:nth-child(28) { left: 77%; animation-delay: 27s; }
.leaf:nth-child(29) { left: 87%; animation-delay: 28s; }
.leaf:nth-child(30) { left: 97%; animation-delay: 29s; }

.header {
  text-align: center;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.nature-title {
  font-size: 3.5rem;
  color: #90ee90;
  text-shadow: 0 0 20px #32cd32, 0 0 40px #32cd32;
  animation: nature-glow 4s ease-in-out infinite alternate;
  margin-bottom: 10px;
}

.nature-subtitle {
  font-size: 1.3rem;
  color: #98fb98;
  animation: subtitle-wave 3s ease-in-out infinite;
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
  background: rgba(34, 139, 34, 0.3);
  color: #90ee90;
  text-decoration: none;
  border-radius: 25px;
  border: 2px solid #32cd32;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(144, 238, 144, 0.3), transparent);
  transition: left 0.6s;
}

.nav-btn:hover::before {
  left: 100%;
}

.nav-btn:hover {
  background: rgba(34, 139, 34, 0.5);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 30px rgba(50, 205, 50, 0.4);
}

.cards-masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.nature-card {
  background: rgba(34, 139, 34, 0.2);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(144, 238, 144, 0.3);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.nature-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(144, 238, 144, 0.1), transparent);
  animation: card-rotate 8s linear infinite;
  opacity: 0;
  transition: opacity 0.3s;
}

.nature-card:hover::before {
  opacity: 1;
}

.nature-card:hover {
  transform: translateY(-15px) scale(1.05);
  box-shadow: 0 25px 50px rgba(50, 205, 50, 0.3);
  background: rgba(34, 139, 34, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-title {
  color: #90ee90;
  font-size: 1.4rem;
  margin: 0;
  text-shadow: 0 0 10px #32cd32;
}

.creature-icon {
  font-size: 2.5rem;
  animation: creature-bounce 2s ease-in-out infinite;
}

.card-body {
  margin-bottom: 15px;
}

.card-description {
  color: rgba(144, 238, 144, 0.9);
  margin-bottom: 10px;
}

.magic-sparkles {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.sparkle {
  font-size: 1rem;
  animation: sparkle-twinkle 1.5s ease-in-out infinite;
}

.sparkle:nth-child(1) { animation-delay: 0s; }
.sparkle:nth-child(2) { animation-delay: 0.3s; }
.sparkle:nth-child(3) { animation-delay: 0.6s; }
.sparkle:nth-child(4) { animation-delay: 0.9s; }
.sparkle:nth-child(5) { animation-delay: 1.2s; }

.card-footer {
  text-align: center;
}

.magic-btn {
  background: linear-gradient(45deg, #32cd32, #228b22);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.magic-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.magic-btn:hover::before {
  left: 100%;
}

.magic-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(50, 205, 50, 0.4);
}

.floating-mushrooms {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}

.mushroom {
  position: absolute;
  font-size: 1.8rem;
  animation: mushroom-grow 6s ease-in-out infinite;
}

.mushroom:nth-child(1) { top: 10%; left: 5%; }
.mushroom:nth-child(2) { top: 20%; right: 10%; }
.mushroom:nth-child(3) { top: 60%; left: 15%; }
.mushroom:nth-child(4) { top: 70%; right: 5%; }
.mushroom:nth-child(5) { top: 40%; left: 25%; }
.mushroom:nth-child(6) { top: 80%; right: 25%; }
.mushroom:nth-child(7) { top: 30%; left: 75%; }
.mushroom:nth-child(8) { top: 90%; left: 65%; }
.mushroom:nth-child(9) { top: 15%; left: 45%; }
.mushroom:nth-child(10) { top: 55%; right: 35%; }
.mushroom:nth-child(11) { top: 85%; left: 35%; }
.mushroom:nth-child(12) { top: 25%; right: 55%; }
.mushroom:nth-child(13) { top: 35%; left: 85%; }
.mushroom:nth-child(14) { top: 75%; right: 45%; }
.mushroom:nth-child(15) { top: 95%; left: 85%; }

.water-ripples {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.ripple {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  border: 2px solid rgba(144, 238, 144, 0.3);
  border-radius: 50%;
  animation: ripple-expand 4s ease-out infinite;
}

.ripple-1 { animation-delay: 0s; }
.ripple-2 { animation-delay: 1.3s; }
.ripple-3 { animation-delay: 2.6s; }

.fireflies {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.firefly {
  position: absolute;
  font-size: 1rem;
  animation: firefly-fly 8s ease-in-out infinite;
  opacity: 0.8;
}

.firefly:nth-child(1) { top: 10%; left: 10%; }
.firefly:nth-child(2) { top: 20%; right: 15%; }
.firefly:nth-child(3) { top: 60%; left: 5%; }
.firefly:nth-child(4) { top: 70%; right: 10%; }
.firefly:nth-child(5) { top: 40%; left: 20%; }
.firefly:nth-child(6) { top: 80%; right: 20%; }
.firefly:nth-child(7) { top: 30%; left: 75%; }
.firefly:nth-child(8) { top: 90%; left: 70%; }
.firefly:nth-child(9) { top: 15%; left: 45%; }
.firefly:nth-child(10) { top: 55%; right: 35%; }
.firefly:nth-child(11) { top: 85%; left: 35%; }
.firefly:nth-child(12) { top: 25%; right: 55%; }
.firefly:nth-child(13) { top: 35%; left: 85%; }
.firefly:nth-child(14) { top: 75%; right: 45%; }
.firefly:nth-child(15) { top: 95%; left: 85%; }
.firefly:nth-child(16) { top: 45%; left: 55%; }
.firefly:nth-child(17) { top: 65%; right: 65%; }
.firefly:nth-child(18) { top: 5%; left: 65%; }
.firefly:nth-child(19) { top: 95%; right: 75%; }
.firefly:nth-child(20) { top: 50%; left: 15%; }

/* Animations */
@keyframes leaf-fall {
  0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

@keyframes nature-glow {
  0% { text-shadow: 0 0 20px #32cd32, 0 0 40px #32cd32; }
  100% { text-shadow: 0 0 30px #32cd32, 0 0 60px #32cd32, 0 0 80px #32cd32; }
}

@keyframes subtitle-wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes creature-bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.1); }
}

@keyframes sparkle-twinkle {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes mushroom-grow {
  0% { transform: scale(0) rotate(0deg); }
  50% { transform: scale(1) rotate(180deg); }
  100% { transform: scale(0) rotate(360deg); }
}

@keyframes ripple-expand {
  0% { transform: translateX(-50%) scale(0); opacity: 1; }
  100% { transform: translateX(-50%) scale(3); opacity: 0; }
}

@keyframes firefly-fly {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.8; }
  25% { transform: translateY(-30px) translateX(20px); opacity: 1; }
  50% { transform: translateY(-15px) translateX(-15px); opacity: 0.8; }
  75% { transform: translateY(-40px) translateX(10px); opacity: 1; }
}

@keyframes card-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Card variations */
.nature-card-0 { animation: slide-in-left 0.5s ease-out; }
.nature-card-1 { animation: slide-in-right 0.7s ease-out; }
.nature-card-2 { animation: slide-in-top 0.9s ease-out; }
.nature-card-3 { animation: slide-in-bottom 1.1s ease-out; }
.nature-card-4 { animation: zoom-in 1.3s ease-out; }
.nature-card-5 { animation: flip-in 1.5s ease-out; }

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

.forest-btn {
  animation: forest-pulse 3s ease-in-out infinite;
}

@keyframes forest-pulse {
  0%, 100% { box-shadow: 0 0 10px rgba(50, 205, 50, 0.3); }
  50% { box-shadow: 0 0 25px rgba(50, 205, 50, 0.6); }
}
</style> 

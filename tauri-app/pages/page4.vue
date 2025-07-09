<template>
  <div class="candy-container">
    <div class="rainbow-bg"></div>
    <div class="bubble-container">
      <div v-for="i in 40" :key="`bubble-${i}`" class="bubble" :style="{ animationDelay: `${i * 0.3}s` }">
        {{ ['🍭', '🍬', '🍪', '🍩', '🧁', '🍰', '🍫', '🍡'][i % 8] }}
      </div>
    </div>
    
    <div class="header">
      <h1 class="candy-title">Sweet Paradise</h1>
      <p class="candy-subtitle">A world of sugary delights!</p>
    </div>



    <div class="sweet-grid">
      <div v-for="i in 40" :key="i" class="sweet-card" :class="`sweet-${i % 8}`">
        <div class="card-wrapper">
          <div class="card-front">
            <h3 class="card-title">Sweet {{ i }}</h3>
            <div class="sweet-icon">{{ ['🍭', '🍬', '🍪', '🍩', '🧁', '🍰', '🍫', '🍡'][i % 8] }}</div>
            <p class="card-text">Delicious treat number {{ i }}</p>
            <div class="sprinkles">
              <span v-for="j in 6" :key="j" class="sprinkle">✨</span>
            </div>
            <button class="sweet-btn">Eat Me!</button>
          </div>
          <div class="card-back">
            <h4>Yummy {{ i }}</h4>
            <p>So delicious!</p>
            <div class="heart">💖</div>
          </div>
        </div>
      </div>
    </div>

    <div class="floating-hearts">
      <div v-for="i in 20" :key="`heart-${i}`" class="heart-float" :style="{ animationDelay: `${i * 0.4}s` }">
        💖
      </div>
    </div>

    <div class="rainbow-arcs">
      <div class="arc arc-1"></div>
      <div class="arc arc-2"></div>
      <div class="arc arc-3"></div>
    </div>

    <div class="sparkle-showers">
      <div v-for="i in 30" :key="`sparkle-${i}`" class="sparkle" :style="{ animationDelay: `${i * 0.2}s` }">
        ✨
      </div>
    </div>
  </div>
</template>

<style scoped>
.candy-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 75%, #ff9a9e 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.rainbow-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 218, 185, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 224, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(221, 160, 221, 0.3) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

.bubble-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.bubble {
  position: absolute;
  font-size: 1.5rem;
  animation: bubble-rise 8s ease-in-out infinite;
  opacity: 0.8;
}

.bubble:nth-child(1) { left: 5%; animation-delay: 0s; }
.bubble:nth-child(2) { left: 15%; animation-delay: 1s; }
.bubble:nth-child(3) { left: 25%; animation-delay: 2s; }
.bubble:nth-child(4) { left: 35%; animation-delay: 3s; }
.bubble:nth-child(5) { left: 45%; animation-delay: 4s; }
.bubble:nth-child(6) { left: 55%; animation-delay: 5s; }
.bubble:nth-child(7) { left: 65%; animation-delay: 6s; }
.bubble:nth-child(8) { left: 75%; animation-delay: 7s; }
.bubble:nth-child(9) { left: 85%; animation-delay: 8s; }
.bubble:nth-child(10) { left: 95%; animation-delay: 9s; }
.bubble:nth-child(11) { left: 10%; animation-delay: 10s; }
.bubble:nth-child(12) { left: 20%; animation-delay: 11s; }
.bubble:nth-child(13) { left: 30%; animation-delay: 12s; }
.bubble:nth-child(14) { left: 40%; animation-delay: 13s; }
.bubble:nth-child(15) { left: 50%; animation-delay: 14s; }
.bubble:nth-child(16) { left: 60%; animation-delay: 15s; }
.bubble:nth-child(17) { left: 70%; animation-delay: 16s; }
.bubble:nth-child(18) { left: 80%; animation-delay: 17s; }
.bubble:nth-child(19) { left: 90%; animation-delay: 18s; }
.bubble:nth-child(20) { left: 100%; animation-delay: 19s; }
.bubble:nth-child(21) { left: 7%; animation-delay: 20s; }
.bubble:nth-child(22) { left: 17%; animation-delay: 21s; }
.bubble:nth-child(23) { left: 27%; animation-delay: 22s; }
.bubble:nth-child(24) { left: 37%; animation-delay: 23s; }
.bubble:nth-child(25) { left: 47%; animation-delay: 24s; }
.bubble:nth-child(26) { left: 57%; animation-delay: 25s; }
.bubble:nth-child(27) { left: 67%; animation-delay: 26s; }
.bubble:nth-child(28) { left: 77%; animation-delay: 27s; }
.bubble:nth-child(29) { left: 87%; animation-delay: 28s; }
.bubble:nth-child(30) { left: 97%; animation-delay: 29s; }
.bubble:nth-child(31) { left: 12%; animation-delay: 30s; }
.bubble:nth-child(32) { left: 22%; animation-delay: 31s; }
.bubble:nth-child(33) { left: 32%; animation-delay: 32s; }
.bubble:nth-child(34) { left: 42%; animation-delay: 33s; }
.bubble:nth-child(35) { left: 52%; animation-delay: 34s; }
.bubble:nth-child(36) { left: 62%; animation-delay: 35s; }
.bubble:nth-child(37) { left: 72%; animation-delay: 36s; }
.bubble:nth-child(38) { left: 82%; animation-delay: 37s; }
.bubble:nth-child(39) { left: 92%; animation-delay: 38s; }
.bubble:nth-child(40) { left: 102%; animation-delay: 39s; }

.header {
  text-align: center;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.candy-title {
  font-size: 4rem;
  background: linear-gradient(45deg, #ff6b9d, #c44569, #feca57, #ff9ff3, #54a0ff, #5f27cd);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: rainbow-text 3s ease-in-out infinite;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.candy-subtitle {
  font-size: 1.3rem;
  color: #e84393;
  animation: bounce-text 2s ease-in-out infinite;
}



.sweet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
  z-index: 10;
  position: relative;
}

.sweet-card {
  height: 220px;
  perspective: 1000px;
  cursor: pointer;
}

.card-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.sweet-card:hover .card-wrapper {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
}

.card-front {
  background: linear-gradient(135deg, rgba(255, 182, 193, 0.3), rgba(255, 218, 185, 0.3));
  border: 2px solid rgba(232, 67, 147, 0.5);
  backdrop-filter: blur(15px);
}

.card-back {
  background: linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 20, 147, 0.3));
  border: 2px solid rgba(255, 20, 147, 0.5);
  backdrop-filter: blur(15px);
  transform: rotateY(180deg);
}

.card-title {
  color: #e84393;
  font-size: 1.4rem;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.sweet-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  animation: sweet-bounce 2s ease-in-out infinite;
}

.card-text {
  color: rgba(232, 67, 147, 0.9);
  margin-bottom: 15px;
}

.sprinkles {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 15px;
}

.sprinkle {
  font-size: 1rem;
  animation: sprinkle-twinkle 1.5s ease-in-out infinite;
}

.sprinkle:nth-child(1) { animation-delay: 0s; }
.sprinkle:nth-child(2) { animation-delay: 0.3s; }
.sprinkle:nth-child(3) { animation-delay: 0.6s; }
.sprinkle:nth-child(4) { animation-delay: 0.9s; }
.sprinkle:nth-child(5) { animation-delay: 1.2s; }
.sprinkle:nth-child(6) { animation-delay: 1.5s; }

.sweet-btn {
  background: linear-gradient(45deg, #e84393, #fd79a8);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.sweet-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.sweet-btn:hover::before {
  left: 100%;
}

.sweet-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 20px rgba(232, 67, 147, 0.4);
}

.heart {
  font-size: 2rem;
  margin-top: 10px;
  animation: heart-beat 1s ease-in-out infinite;
}

.floating-hearts {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}

.heart-float {
  position: absolute;
  font-size: 1.5rem;
  animation: heart-float 6s ease-in-out infinite;
  opacity: 0.8;
}

.heart-float:nth-child(1) { top: 10%; left: 5%; }
.heart-float:nth-child(2) { top: 20%; right: 10%; }
.heart-float:nth-child(3) { top: 60%; left: 15%; }
.heart-float:nth-child(4) { top: 70%; right: 5%; }
.heart-float:nth-child(5) { top: 40%; left: 25%; }
.heart-float:nth-child(6) { top: 80%; right: 25%; }
.heart-float:nth-child(7) { top: 30%; left: 75%; }
.heart-float:nth-child(8) { top: 90%; left: 65%; }
.heart-float:nth-child(9) { top: 15%; left: 45%; }
.heart-float:nth-child(10) { top: 55%; right: 35%; }
.heart-float:nth-child(11) { top: 85%; left: 35%; }
.heart-float:nth-child(12) { top: 25%; right: 55%; }
.heart-float:nth-child(13) { top: 35%; left: 85%; }
.heart-float:nth-child(14) { top: 75%; right: 45%; }
.heart-float:nth-child(15) { top: 95%; left: 85%; }
.heart-float:nth-child(16) { top: 45%; left: 55%; }
.heart-float:nth-child(17) { top: 65%; right: 65%; }
.heart-float:nth-child(18) { top: 5%; left: 65%; }
.heart-float:nth-child(19) { top: 95%; right: 75%; }
.heart-float:nth-child(20) { top: 50%; left: 15%; }

.rainbow-arcs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.arc {
  position: absolute;
  width: 200px;
  height: 100px;
  border: 3px solid transparent;
  border-radius: 100px 100px 0 0;
  animation: arc-rainbow 4s ease-in-out infinite;
}

.arc-1 {
  top: 20%;
  left: 10%;
  border-top-color: #ff6b9d;
  animation-delay: 0s;
}

.arc-2 {
  top: 60%;
  right: 15%;
  border-top-color: #c44569;
  animation-delay: 1.3s;
}

.arc-3 {
  top: 40%;
  left: 60%;
  border-top-color: #feca57;
  animation-delay: 2.6s;
}

.sparkle-showers {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.sparkle {
  position: absolute;
  font-size: 1rem;
  animation: sparkle-fall 5s linear infinite;
  opacity: 0.8;
}

.sparkle:nth-child(1) { left: 5%; animation-delay: 0s; }
.sparkle:nth-child(2) { left: 15%; animation-delay: 1s; }
.sparkle:nth-child(3) { left: 25%; animation-delay: 2s; }
.sparkle:nth-child(4) { left: 35%; animation-delay: 3s; }
.sparkle:nth-child(5) { left: 45%; animation-delay: 4s; }
.sparkle:nth-child(6) { left: 55%; animation-delay: 5s; }
.sparkle:nth-child(7) { left: 65%; animation-delay: 6s; }
.sparkle:nth-child(8) { left: 75%; animation-delay: 7s; }
.sparkle:nth-child(9) { left: 85%; animation-delay: 8s; }
.sparkle:nth-child(10) { left: 95%; animation-delay: 9s; }
.sparkle:nth-child(11) { left: 10%; animation-delay: 10s; }
.sparkle:nth-child(12) { left: 20%; animation-delay: 11s; }
.sparkle:nth-child(13) { left: 30%; animation-delay: 12s; }
.sparkle:nth-child(14) { left: 40%; animation-delay: 13s; }
.sparkle:nth-child(15) { left: 50%; animation-delay: 14s; }
.sparkle:nth-child(16) { left: 60%; animation-delay: 15s; }
.sparkle:nth-child(17) { left: 70%; animation-delay: 16s; }
.sparkle:nth-child(18) { left: 80%; animation-delay: 17s; }
.sparkle:nth-child(19) { left: 90%; animation-delay: 18s; }
.sparkle:nth-child(20) { left: 100%; animation-delay: 19s; }
.sparkle:nth-child(21) { left: 7%; animation-delay: 20s; }
.sparkle:nth-child(22) { left: 17%; animation-delay: 21s; }
.sparkle:nth-child(23) { left: 27%; animation-delay: 22s; }
.sparkle:nth-child(24) { left: 37%; animation-delay: 23s; }
.sparkle:nth-child(25) { left: 47%; animation-delay: 24s; }
.sparkle:nth-child(26) { left: 57%; animation-delay: 25s; }
.sparkle:nth-child(27) { left: 67%; animation-delay: 26s; }
.sparkle:nth-child(28) { left: 77%; animation-delay: 27s; }
.sparkle:nth-child(29) { left: 87%; animation-delay: 28s; }
.sparkle:nth-child(30) { left: 97%; animation-delay: 29s; }

/* Animations */
@keyframes bubble-rise {
  0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
}

@keyframes rainbow-text {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes bounce-text {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes sweet-bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.1); }
}

@keyframes sprinkle-twinkle {
  0%, 100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
}

@keyframes heart-beat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes heart-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  75% { transform: translateY(-30px) rotate(-5deg); }
}

@keyframes arc-rainbow {
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.7; }
  50% { transform: scale(1.2) rotate(10deg); opacity: 1; }
}

@keyframes sparkle-fall {
  0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}

/* Card variations */
.sweet-0 { animation: slide-in-left 0.5s ease-out; }
.sweet-1 { animation: slide-in-right 0.7s ease-out; }
.sweet-2 { animation: slide-in-top 0.9s ease-out; }
.sweet-3 { animation: slide-in-bottom 1.1s ease-out; }
.sweet-4 { animation: zoom-in 1.3s ease-out; }
.sweet-5 { animation: flip-in 1.5s ease-out; }
.sweet-6 { animation: bounce-in 1.7s ease-out; }
.sweet-7 { animation: wiggle-in 1.9s ease-out; }

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

@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes wiggle-in {
  0% { opacity: 0; transform: translateX(-100px) skewX(-20deg); }
  25% { opacity: 0.5; transform: translateX(50px) skewX(20deg); }
  50% { opacity: 0.8; transform: translateX(-25px) skewX(-10deg); }
  75% { opacity: 0.9; transform: translateX(10px) skewX(5deg); }
  100% { opacity: 1; transform: translateX(0) skewX(0deg); }
}

.candy-btn {
  animation: candy-pulse 3s ease-in-out infinite;
}

@keyframes candy-pulse {
  0%, 100% { box-shadow: 0 0 15px rgba(232, 67, 147, 0.3); }
  50% { box-shadow: 0 0 30px rgba(232, 67, 147, 0.6); }
}
</style>

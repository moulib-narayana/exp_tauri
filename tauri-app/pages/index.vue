<template>
  <div class="page-container">
    <div class="header">
      <h1 class="title animate-text">Welcome to Animation World</h1>
      <p class="subtitle fade-in">Where everything moves and dances!</p>
    </div>



    <div class="cards-grid">
      <div v-for="i in 20" :key="i" class="card" :class="`card-${i % 4}`">
        <div class="card-content">
          <h3 class="card-title slide-in">Card {{ i }}</h3>
          <p class="card-text typewriter">This is card number {{ i }} with amazing animations!</p>
          <div class="card-icon rotate">🎨</div>
          <button class="card-btn pulse">Click Me!</button>
        </div>
      </div>
    </div>

    <div class="floating-elements">
      <div class="floating-icon" v-for="i in 8" :key="`float-${i}`" :style="{ animationDelay: `${i * 0.5}s` }">
        {{ ['🌟', '✨', '💫', '⭐', '🎈', '🎪', '🎭', '🎨'][i % 8] }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 3rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255,255,255,0.9);
}



.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.card {
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.card:hover::before {
  left: 100%;
}

.card-content {
  text-align: center;
}

.card-title {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-text {
  color: rgba(255,255,255,0.8);
  margin-bottom: 15px;
}

.card-icon {
  font-size: 2rem;
  margin-bottom: 15px;
  display: block;
}

.card-btn {
  background: linear-gradient(45deg, #ff6b6b, #ee5a24);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.card-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.floating-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-icon {
  position: absolute;
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.floating-icon:nth-child(1) { top: 10%; left: 10%; }
.floating-icon:nth-child(2) { top: 20%; right: 15%; }
.floating-icon:nth-child(3) { top: 60%; left: 5%; }
.floating-icon:nth-child(4) { top: 70%; right: 10%; }
.floating-icon:nth-child(5) { top: 40%; left: 20%; }
.floating-icon:nth-child(6) { top: 80%; right: 20%; }
.floating-icon:nth-child(7) { top: 30%; left: 80%; }
.floating-icon:nth-child(8) { top: 90%; left: 70%; }

/* Animations */
@keyframes animate-text {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes fade-in {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in {
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes typewriter {
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(0deg); }
  75% { transform: translateY(-30px) rotate(-5deg); }
}

/* Apply animations */
.animate-text {
  animation: animate-text 3s ease-in-out infinite;
}

.fade-in {
  animation: fade-in 2s ease-out;
}

.slide-in {
  animation: slide-in 1s ease-out;
}

.typewriter {
  animation: typewriter 2s ease-out;
}

.rotate {
  animation: rotate 4s linear infinite;
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}

.bounce {
  animation: bounce 2s infinite;
}

/* Card variations */
.card-0 { animation: slide-in 0.5s ease-out; }
.card-1 { animation: slide-in 0.7s ease-out; }
.card-2 { animation: slide-in 0.9s ease-out; }
.card-3 { animation: slide-in 1.1s ease-out; }

.card-0:hover { background: rgba(255,107,107,0.2); }
.card-1:hover { background: rgba(102,126,234,0.2); }
.card-2:hover { background: rgba(118,75,162,0.2); }
.card-3:hover { background: rgba(255,193,7,0.2); }
</style> 

<template>
  <div class="transitions-demo">
    <div class="header">
      <h1 class="title">Page Transitions Demo</h1>
      <p class="subtitle">Click the buttons below to see different transition effects</p>
    </div>

    <div class="transition-buttons">
      <NuxtLink to="/" class="transition-btn fade-btn">
        <span>Fade Transition</span>
        <small>Go to Home</small>
      </NuxtLink>
      
      <NuxtLink to="/page1" class="transition-btn slide-btn">
        <span>Slide Transition</span>
        <small>Go to Page 1</small>
      </NuxtLink>
      
      <NuxtLink to="/page2" class="transition-btn scale-btn">
        <span>Scale Transition</span>
        <small>Go to Page 2</small>
      </NuxtLink>
      
      <NuxtLink to="/page3" class="transition-btn flip-btn">
        <span>Flip Transition</span>
        <small>Go to Page 3</small>
      </NuxtLink>
      
      <NuxtLink to="/page4" class="transition-btn page-btn">
        <span>Default Page Transition</span>
        <small>Go to Page 4</small>
      </NuxtLink>
    </div>

    <div class="info-section">
      <h2>How Page Transitions Work</h2>
      <div class="info-grid">
        <div class="info-card">
          <h3>Configuration</h3>
          <p>Page transitions are configured in <code>nuxt.config.ts</code> with the <code>app.pageTransition</code> setting.</p>
        </div>
        <div class="info-card">
          <h3>CSS Classes</h3>
          <p>Nuxt automatically applies CSS classes like <code>.page-enter-active</code>, <code>.page-leave-active</code>, etc.</p>
        </div>
        <div class="info-card">
          <h3>Custom Transitions</h3>
          <p>You can define custom transition names and styles in <code>assets/transitions.css</code>.</p>
        </div>
        <div class="info-card">
          <h3>Layout Transitions</h3>
          <p>Layout transitions are also supported and configured separately from page transitions.</p>
        </div>
      </div>
    </div>

    <div class="code-example">
      <h3>Example Configuration</h3>
      <pre><code>// nuxt.config.ts
app: {
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
}</code></pre>
    </div>
  </div>
</template>

<script setup>
// This page demonstrates different transition types
definePageMeta({
  title: 'Transitions Demo'
})
</script>

<style scoped>
.transitions-demo {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  color: white;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 3rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.transition-buttons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.transition-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  padding: 30px 20px;
  text-decoration: none;
  color: white;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.transition-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.transition-btn span {
  font-size: 1.3rem;
  font-weight: bold;
}

.transition-btn small {
  opacity: 0.8;
  font-size: 0.9rem;
}

.fade-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.slide-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.scale-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.flip-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.page-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.info-section {
  margin-bottom: 60px;
}

.info-section h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.info-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.info-card h3 {
  margin-bottom: 15px;
  color: #ffd700;
}

.info-card p {
  line-height: 1.6;
  opacity: 0.9;
}

.info-card code {
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

.code-example {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.code-example h3 {
  margin-bottom: 20px;
  color: #ffd700;
}

.code-example pre {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  overflow-x: auto;
}

.code-example code {
  color: #00ff00;
  font-family: 'Courier New', monospace;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .transition-buttons {
    grid-template-columns: 1fr;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style> 

<template>
  <div class="side-menu-container">
    <!-- Menu Toggle Button -->
    <button 
      @click="toggleMenu" 
      class="menu-toggle"
      :class="{ 'active': isOpen }"
      aria-label="Toggle menu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- Overlay -->
    <div 
      v-if="isOpen" 
      @click="closeMenu" 
      class="menu-overlay"
    ></div>

    <!-- Side Menu -->
    <div 
      class="side-menu"
      :class="{ 'open': isOpen }"
    >
      <div class="menu-header">
        <h2 class="menu-title">Navigation</h2>
        <button @click="closeMenu" class="close-btn" aria-label="Close menu">
          <span>&times;</span>
        </button>
      </div>

      <nav class="menu-nav">
        <NuxtLink 
          to="/" 
          @click="handleMenuClick"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">🏠</span>
          <span class="menu-text">Home</span>
        </NuxtLink>

        <NuxtLink 
          to="/page1" 
          @click="handleMenuClick"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">🌍</span>
          <span class="menu-text">Page 1</span>
        </NuxtLink>

        <NuxtLink 
          to="/page2" 
          @click="handleMenuClick"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">🎨</span>
          <span class="menu-text">Page 2</span>
        </NuxtLink>

        <NuxtLink 
          to="/page3" 
          @click="handleMenuClick"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">🚀</span>
          <span class="menu-text">Page 3</span>
        </NuxtLink>

        <NuxtLink 
          to="/page4" 
          @click="handleMenuClick"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">⭐</span>
          <span class="menu-text">Page 4</span>
        </NuxtLink>

        <NuxtLink 
          to="/transitions-demo" 
          @click="handleMenuClick"
          class="menu-item"
          active-class="active"
        >
          <span class="menu-icon">✨</span>
          <span class="menu-text">Transitions Demo</span>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleMenuClick = () => {
  // Close menu after a small delay to ensure navigation happens first
  setTimeout(() => {
    closeMenu()
  }, 100)
}

// Close menu on escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isOpen.value) {
      closeMenu()
    }
  }
  
  const handlePopState = () => {
    if (isOpen.value) {
      closeMenu()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  window.addEventListener('popstate', handlePopState)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    window.removeEventListener('popstate', handlePopState)
  })
})

// Watch for menu state changes to manage browser history
watch(isOpen, (newValue) => {
  if (newValue) {
    // Push a new history entry when menu opens
    history.pushState({ menuOpen: true }, '', window.location.href)
  } else {
    // Remove the history entry when menu closes
    if (history.state?.menuOpen) {
      history.back()
    }
  }
})
</script>

<style scoped>
.side-menu-container {
  position: relative;
  z-index: 1000;
}

/* Menu Toggle Button */
.menu-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  z-index: 1001;
}

.menu-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.menu-toggle.active {
  background: rgba(255, 255, 255, 0.3);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

/* Side Menu */
.side-menu {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  overflow-y: auto;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
}

.side-menu.open {
  right: 0;
}

/* Menu Header */
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.menu-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

/* Menu Navigation */
.menu-nav {
  padding: 20px 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  position: relative;
  overflow: hidden;
}

.menu-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.menu-item:hover::before {
  left: 100%;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
  transform: translateX(5px);
}

.menu-item.active {
  background: rgba(255, 255, 255, 0.2);
  border-left-color: white;
  font-weight: 600;
}

.menu-icon {
  font-size: 1.5rem;
  margin-right: 15px;
  width: 30px;
  text-align: center;
  transition: transform 0.3s ease;
}

.menu-item:hover .menu-icon {
  transform: scale(1.2);
}

.menu-text {
  font-size: 1.1rem;
  font-weight: 500;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .side-menu {
    width: 280px;
    right: -280px;
  }
  
  .menu-toggle {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }
  
  .hamburger-line {
    width: 18px;
  }
}
</style> 

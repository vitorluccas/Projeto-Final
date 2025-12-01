<template>
  <div id="app">
    <!-- Header Fixo -->
    <header class="header">
      <h1 @click="$router.push('/')" class="logo">TECH EVENT</h1>
      <nav class="nav">
        <router-link 
          to="/" 
          class="nav-btn"
          :class="{ active: $route.name === 'Home' }"
        >
          Home
        </router-link>
        <router-link 
          to="/cronograma" 
          class="nav-btn"
          :class="{ active: $route.name === 'Cronograma' }"
        >
          Cronograma
        </router-link>
        <router-link 
          to="/agenda" 
          class="nav-btn"
          :class="{ active: $route.name === 'Agenda' }"
        >
          Minha Agenda
        </router-link>
        <router-link 
          to="/sobre" 
          class="nav-btn"
          :class="{ active: $route.name === 'Sobre' }"
        >
          Sobre
        </router-link>
      </nav>
    </header>

    <!-- Conteúdo Principal -->
    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #333;
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.nav {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
}

.nav-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  text-decoration: none;
  text-align: center;
}

.nav-btn.active,
.nav-btn:hover {
  background: rgba(255,255,255,0.2);
  border-color: rgba(255,255,255,0.5);
}

.main-content {
  flex: 1;
  padding: 1rem;
}

/* Responsive */
@media (max-width: 480px) {
  .nav-btn {
    font-size: 0.7rem;
    padding: 0.4rem 0.6rem;
  }
}
</style>
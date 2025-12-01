<template>
  <div class="page home-page">
    <div class="hero-section">
      <h1 class="hero-title">TECH<br>EVENT</h1>
      <p class="hero-subtitle">Acesse o Cronograma de eventos</p>
      <button @click="$router.push('/cronograma')" class="cta-button">
        Ver Cronograma
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Mantenha o mesmo CSS da home que enviei anteriormente */
.home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}

.hero-section {
  text-align: center;
  padding: 2rem 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  color: #2c3e50;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.cta-button {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}
</style>
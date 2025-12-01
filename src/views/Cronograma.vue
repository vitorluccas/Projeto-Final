<template>
  <div class="page atividades-page">
    <h2 class="page-title">Cronograma do evento</h2>
    
    <!-- Palestras -->
    <section class="categoria">
      <h3 class="categoria-title">Palestras</h3>
      <div v-for="atividade in eventStore.palestras" :key="atividade.id" class="atividade-card">
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-info">Horário: {{ atividade.horario }}</p>
        <p class="atividade-info">Palestrante: {{ atividade.palestrante }}</p>
        <p class="atividade-info">Local: {{ atividade.sala }}</p>
        <button 
          @click="inscrever(atividade)"
          :class="{ 'inscrito': eventStore.estaInscrito(atividade.id) }"
          class="inscrever-btn"
        >
          {{ eventStore.estaInscrito(atividade.id) ? 'Inscrito' : 'Inscrever-se' }}
        </button>
      </div>
    </section>

    <!-- Mesas-Redondas -->
    <section class="categoria">
      <h3 class="categoria-title">Mesas-Redondas</h3>
      <div v-for="atividade in eventStore.mesasRedondas" :key="atividade.id" class="atividade-card">
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-info">Horário: {{ atividade.horario }}</p>
        <p class="atividade-info">Participantes: {{ atividade.palestrante }}</p>
        <p class="atividade-info">Local: {{ atividade.sala }}</p>
        <button 
          @click="inscrever(atividade)"
          :class="{ 'inscrito': eventStore.estaInscrito(atividade.id) }"
          class="inscrever-btn"
        >
          {{ eventStore.estaInscrito(atividade.id) ? 'Inscrito' : 'Inscrever-se' }}
        </button>
      </div>
    </section>

    <!-- Workshops -->
    <section class="categoria">
      <h3 class="categoria-title">Workshops</h3>
      <div v-for="atividade in eventStore.workshops" :key="atividade.id" class="atividade-card">
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-info">Horário: {{ atividade.horario }}</p>
        <p class="atividade-info">Instrutor: {{ atividade.palestrante }}</p>
        <p class="atividade-info">Local: {{ atividade.sala }}</p>
        <button 
          @click="inscrever(atividade)"
          :class="{ 'inscrito': eventStore.estaInscrito(atividade.id) }"
          class="inscrever-btn"
        >
          {{ eventStore.estaInscrito(atividade.id) ? 'Inscrito' : 'Inscrever-se' }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { useEventStore } from '@/stores/eventStore'

export default {
  name: 'Cronograma',
  setup() {
    const eventStore = useEventStore()
    
    const inscrever = (atividade) => {
      const sucesso = eventStore.inscreverAtividade(atividade)
      if (sucesso) {
        alert(`Inscrito com sucesso em: ${atividade.titulo}`)
      } else {
        alert('Você já está inscrito nesta atividade!')
      }
    }

    return {
      eventStore,
      inscrever
    }
  }
}
</script>

<style scoped>
.atividades-page {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.page-title {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.categoria {
  margin-bottom: 3rem;
}

.categoria-title {
  color: white;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.atividade-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}

.atividade-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.atividade-titulo {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.atividade-info {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.inscrever-btn {
  background: #3498db;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  width: 100%;
  margin-top: 0.5rem;
  font-weight: 600;
  transition: background 0.3s ease;
}

.inscrever-btn.inscrito {
  background: #7f8c8d;
  cursor: not-allowed;
}

.inscrever-btn:not(.inscrito):hover {
  background: #2980b9;
}
</style>
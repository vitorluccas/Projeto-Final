<template>
  <div class="page agenda-page">
    <div class="agenda-header">
      <h2 class="page-title">Minha Agenda</h2>
      <div class="contador-inscricoes">
        Total de inscrições: <strong>{{ eventStore.totalInscricoes }}</strong>
      </div>
    </div>
    
    <div v-if="eventStore.totalInscricoes === 0" class="empty-state">
      <p>Você ainda não se inscreveu em nenhuma atividade.</p>
      <button @click="$router.push('/cronograma')" class="cta-button">
        Ver Cronograma de Atividades
      </button>
    </div>

    <div v-else class="inscricoes-list">
      <div v-for="atividade in eventStore.atividadesInscritas" :key="atividade.id" class="atividade-card agenda-card">
        <div class="card-header">
          <span class="tipo-badge" :class="atividade.tipo">
            {{ getTipoLabel(atividade.tipo) }}
          </span>
          <button 
            @click="desinscrever(atividade.id)"
            class="desinscrever-btn"
          >
            Cancelar
          </button>
        </div>
        
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-info">Horário: {{ atividade.horario }}</p>
        <p class="atividade-info">
          {{ atividade.tipo === 'palestra' ? 'Palestrante:' : 
             atividade.tipo === 'mesa' ? 'Participantes:' : 'Instrutor:' }}
          {{ atividade.palestrante }}
        </p>
        <p class="atividade-info">Local: {{ atividade.sala }}</p>
        <p class="inscrito-em">Inscrito em: {{ atividade.inscritoEm }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useEventStore } from '@/stores/eventStore'

export default {
  name: 'Agenda',
  setup() {
    const eventStore = useEventStore()
    
    const desinscrever = (atividadeId) => {
      if (confirm('Tem certeza que deseja cancelar esta inscrição?')) {
        eventStore.desinscreverAtividade(atividadeId)
      }
    }

    const getTipoLabel = (tipo) => {
      const labels = {
        palestra: 'Palestra',
        mesa: 'Mesa-Redonda',
        workshop: 'Workshop'
      }
      return labels[tipo] || tipo
    }

    return {
      eventStore,
      desinscrever,
      getTipoLabel
    }
  }
}
</script>

<style scoped>
.agenda-page {
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.agenda-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.page-title {
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.contador-inscricoes {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: white;
}

.cta-button {
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
}

.cta-button:hover {
  background: #2980b9;
}

.inscricoes-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.agenda-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.tipo-badge {
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.tipo-badge.palestra {
  background: #3498db;
}

.tipo-badge.mesa {
  background: #2c3e50;
}

.tipo-badge.workshop {
  background: #27ae60;
}

.desinscrever-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.desinscrever-btn:hover {
  background: #c0392b;
}

.inscrito-em {
  font-size: 0.8rem;
  color: #95a5a6;
  margin-top: 0.5rem;
}

.atividade-info {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.atividade-titulo {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}
</style>
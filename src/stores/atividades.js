<template>
  <div class="page atividades-page">
    <h2 class="page-title">Cronograma do evento</h2>
    
    <!-- Palestras -->
    <section class="categoria">
      <h3 class="categoria-title">Palestras</h3>
      <div v-for="atividade in palestras" :key="atividade.id" class="atividade-card">
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-horario">Horário: {{ atividade.horario }}</p>
        <p class="atividade-palestrante">{{ atividade.palestrante }}</p>
        <button 
          @click="$emit('inscrever', atividade)"
          :class="{ 'inscrito': estaInscrito(atividade.id) }"
          class="inscrever-btn"
        >
          {{ estaInscrito(atividade.id) ? 'Inscrito' : 'Inscrever-se' }}
        </button>
      </div>
    </section>

    <!-- Mesas-Redondas -->
    <section class="categoria">
      <h3 class="categoria-title">Mesas-Redondas</h3>
      <div v-for="atividade in mesasRedondas" :key="atividade.id" class="atividade-card">
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-horario">Horário: {{ atividade.horario }}</p>
        <p class="atividade-palestrante">{{ atividade.palestrante }}</p>
        <button 
          @click="$emit('inscrever', atividade)"
          :class="{ 'inscrito': estaInscrito(atividade.id) }"
          class="inscrever-btn"
        >
          {{ estaInscrito(atividade.id) ? 'Inscrito' : 'Inscrever-se' }}
        </button>
      </div>
    </section>

    <!-- Workshops -->
    <section class="categoria">
      <h3 class="categoria-title">Atividades / Workshops</h3>
      <div v-for="atividade in workshops" :key="atividade.id" class="atividade-card">
        <h4 class="atividade-titulo">{{ atividade.titulo }}</h4>
        <p class="atividade-horario">Horário: {{ atividade.horario }}</p>
        <p class="atividade-palestrante">{{ atividade.palestrante }}</p>
        <button 
          @click="$emit('inscrever', atividade)"
          :class="{ 'inscrito': estaInscrito(atividade.id) }"
          class="inscrever-btn"
        >
          {{ estaInscrito(atividade.id) ? 'Inscrito' : 'Inscrever-se' }}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Atividades',
  props: {
    atividadesInscritas: Array
  },
  emits: ['inscrever', 'navegar'],
  data() {
    return {
      palestras: [
        {
          id: 1,
          titulo: "A Evolução da Virtualização em Redes Ópticas",
          horario: "09:00 – 10:00",
          palestrante: "Palestrante: Dr. Helena Moraes",
          tipo: "palestra"
        },
        {
          id: 2,
          titulo: "Segurança da Informação em Ambientes de Alta Velocidade",
          horario: "10:15 – 11:00",
          palestrante: "Palestrante: Eng. Roberto Tavares",
          tipo: "palestra"
        },
        {
          id: 3,
          titulo: "Automação Inteligente para Infraestruturas de TI",
          horario: "11:15 – 12:00",
          palestrante: "Palestrante: Dra. Clarice Yamada",
          tipo: "palestra"
        }
      ],
      mesasRedondas: [
        {
          id: 4,
          titulo: "O Futuro da Internet Óptica – Desafios e Tendências",
          horario: "13:00 – 14:00",
          palestrante: "Participantes: Pesquisadores",
          tipo: "mesa"
        },
        {
          id: 5,
          titulo: "Infraestrutura Crítica: Como Garantir Disponibilidade Máxima",
          horario: "14:15 – 15:00",
          palestrante: "Participantes: Especialistas em redes",
          tipo: "mesa"
        },
        {
          id: 6,
          titulo: "Inteligência Artificial Aplicada à Gestão de Rede",
          horario: "15:15 – 16:00",
          palestrante: "Participantes: Engenheiros de automação",
          tipo: "mesa"
        }
      ],
      workshops: [
        {
          id: 7,
          titulo: "Laboratório de Configuração de Servidores (Linux e Cockpit)",
          horario: "16:15 – 17:15",
          palestrante: "Instrutor: Marcos Vieira",
          tipo: "workshop"
        },
        {
          id: 8,
          titulo: "Oficina Prática: Monitoramento de Rede com Ferramentas Open-Source",
          horario: "17:30 – 18:30",
          palestrante: "Instrutora: Ana Beatriz Feldmann",
          tipo: "workshop"
        },
        {
          id: 9,
          titulo: "Hands-On: Backup e Automação de Configurações",
          horario: "18:30 – 19:30",
          palestrante: "Instrutor: Guilherme Santos",
          tipo: "workshop"
        }
      ]
    }
  },
  methods: {
    estaInscrito(atividadeId) {
      return this.atividadesInscritas.some(a => a.id === atividadeId);
    }
  }
}
</script>
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', () => {
    // Estado para atividades inscritas
    const atividadesInscritas = ref([])
    
    // Todas as atividades disponíveis
    const todasAtividades = ref([
        // PALESTRAS
        {
            id: 1,
            titulo: "A Evolução da Virtualização em Redes Ópticas",
            horario: "09:00 – 10:00",
            palestrante: "Dr. Helena Moraes",
            tipo: "palestra",
            sala: "Auditório Principal"
        },
        {
            id: 2,
            titulo: "Segurança da Informação em Ambientes de Alta Velocidade",
            horario: "10:15 – 11:00",
            palestrante: "Eng. Roberto Tavares", 
            tipo: "palestra",
            sala: "Auditório Principal"
        },
        {
            id: 3,
            titulo: "Automação Inteligente para Infraestruturas de TI",
            horario: "11:15 – 12:00",
            palestrante: "Dra. Clarice Yamada",
            tipo: "palestra",
            sala: "Sala 101"
        },
        {
            id: 4,
            titulo: "Cloud Computing: Tendências e Melhores Práticas",
            horario: "12:15 – 13:00", 
            palestrante: "Miguel Santos",
            tipo: "palestra",
            sala: "Auditório Principal"
        },

        // MESAS-REDONDAS
        {
            id: 5,
            titulo: "O Futuro da Internet Óptica – Desafios e Tendências",
            horario: "13:00 – 14:00",
            palestrante: "Painel de Pesquisadores",
            tipo: "mesa",
            sala: "Sala de Conferências"
        },
        {
            id: 6,
            titulo: "Infraestrutura Crítica: Como Garantir Disponibilidade Máxima",
            horario: "14:15 – 15:00",
            palestrante: "Especialistas em Redes",
            tipo: "mesa", 
            sala: "Sala de Conferências"
        },
        {
            id: 7,
            titulo: "Inteligência Artificial Aplicada à Gestão de Rede",
            horario: "15:15 – 16:00",
            palestrante: "Engenheiros de Automação",
            tipo: "mesa",
            sala: "Sala 102"
        },
        {
            id: 8,
            titulo: "Cibersegurança em Ambientes Corporativos",
            horario: "16:15 – 17:00",
            palestrante: "Especialistas em Segurança",
            tipo: "mesa",
            sala: "Sala de Conferências"
        },

        // WORKSHOPS
        {
            id: 9,
            titulo: "Laboratório de Configuração de Servidores (Linux e Cockpit)",
            horario: "17:15 – 18:15",
            palestrante: "Marcos Vieira",
            tipo: "workshop",
            sala: "Laboratório 1"
        },
        {
            id: 10,
            titulo: "Oficina Prática: Monitoramento de Rede com Ferramentas Open-Source",
            horario: "18:30 – 19:30", 
            palestrante: "Ana Beatriz Feldmann",
            tipo: "workshop",
            sala: "Laboratório 2"
        },
        {
            id: 11,
            titulo: "Hands-On: Backup e Automação de Configurações",
            horario: "19:45 – 20:45",
            palestrante: "Guilherme Santos",
            tipo: "workshop",
            sala: "Laboratório 3"
        },
        {
            id: 12,
            titulo: "Desenvolvimento Ágil com Metodologias Modernas",
            horario: "21:00 – 22:00",
            palestrante: "Carlos Eduardo Lima",
            tipo: "workshop", 
            sala: "Sala 103"
        }
    ])

    // Ações
    function inscreverAtividade(atividade) {
        const jaInscrito = atividadesInscritas.value.some(a => a.id === atividade.id)
        if (!jaInscrito) {
            atividadesInscritas.value.push({
                ...atividade,
                inscritoEm: new Date().toLocaleString('pt-BR')
            })
            return true
        }
        return false
    }

    function desinscreverAtividade(atividadeId) {
        atividadesInscritas.value = atividadesInscritas.value.filter(a => a.id !== atividadeId)
    }

    // Getters computados
    const totalInscricoes = computed(() => atividadesInscritas.value.length)
    
    const estaInscrito = (atividadeId) => {
        return atividadesInscritas.value.some(a => a.id === atividadeId)
    }

    // Filtrar atividades por tipo
    const palestras = computed(() => todasAtividades.value.filter(a => a.tipo === 'palestra'))
    const mesasRedondas = computed(() => todasAtividades.value.filter(a => a.tipo === 'mesa'))
    const workshops = computed(() => todasAtividades.value.filter(a => a.tipo === 'workshop'))

    return { 
        atividadesInscritas,
        todasAtividades,
        palestras,
        mesasRedondas,
        workshops,
        inscreverAtividade,
        desinscreverAtividade,
        totalInscricoes,
        estaInscrito
    }
})
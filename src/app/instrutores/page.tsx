import { InfoTrainers } from '@/modules/Trainers'
import { Text } from '@/shared/components/Text'

const trainers = [
  {
    trainer: {
      id: '1',
      name: 'João',
      description: 'João é um cara legal',
      contact: 'joao@gmail.com',
      track: 'Faixa Preta',
      image: 'https://source.unsplash.com/random/1920x1920',
    },
    schedules: [
      {
        id: '1',
        day: 'Segunda',
        time: '12:00',
        track: 'Faixa Preta',
      },
      {
        id: '2',
        day: 'Quinta',
        time: '14:30',
        track: 'Faixa Preta',
      },
    ],
  },
  {
    trainer: {
      id: '2',
      name: 'Maria',
      description: 'Maria é uma instrutora experiente',
      contact: 'maria@gmail.com',
      track: 'Faixa Azul',
      image: 'https://source.unsplash.com/random/1920x1920',
    },
    schedules: [
      {
        id: '3',
        day: 'Terça',
        time: '10:00',
        track: 'Faixa Azul',
      },
      {
        id: '4',
        day: 'Quarta',
        time: '16:45',
        track: 'Faixa Azul',
      },
    ],
  },
  {
    trainer: {
      id: '3',
      name: 'Carlos',
      description: 'Carlos é um mestre em artes marciais',
      contact: 'carlos@gmail.com',
      track: 'Faixa Vermelha',
      image: 'https://source.unsplash.com/random/1920x1920',
    },
    schedules: [
      {
        id: '5',
        day: 'Terça',
        time: '08:30',
        track: 'Faixa Vermelha',
      },
      {
        id: '6',
        day: 'Quinta',
        time: '18:15',
        track: 'Faixa Vermelha',
      },
    ],
  },
  {
    trainer: {
      id: '4',
      name: 'Ana',
      description: 'Ana é uma especialista em defesa pessoal',
      contact: 'ana@gmail.com',
      track: 'Faixa Amarela',
      image: 'https://source.unsplash.com/random/1920x1920',
    },
    schedules: [
      {
        id: '7',
        day: 'Segunda',
        time: '09:45',
        track: 'Faixa Amarela',
      },
      {
        id: '8',
        day: 'Segunda',
        time: '14:00',
        track: 'Faixa Amarela',
      },
    ],
  },
  {
    trainer: {
      id: '5',
      name: 'Pedro',
      description: 'Pedro é um entusiasta de artes marciais',
      contact: 'pedro@gmail.com',
      track: 'Faixa Branca',
      image: 'https://source.unsplash.com/random/1920x1920',
    },
    schedules: [
      {
        id: '9',
        day: 'Sábado',
        time: '11:30',
        track: 'Faixa Branca',
      },
      {
        id: '10',
        day: 'Sexta',
        time: '17:00',
        track: 'Faixa Branca',
      },
    ],
  },
]

export default function Instrutores() {
  return (
    <section className="flex justify-center gap-4 bg-brand-primary p-4">
      <div className="w-1/2">
        <Text variant="h5" className="text-brand-light">
          Conheça nossos instrutores e seus horários
        </Text>
        <Text className="text-brand-light">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos
          voluptates, voluptatum, voluptas, quia voluptate quod quibusdam
          repellendus doloremque quidem accusantium? Quisquam quos voluptates,
          voluptatum, voluptas, quia voluptate quod quibusdam repellendus
          doloremque quidem accusantium? Quisquam quos voluptates, voluptatum,
          voluptas, quia.
        </Text>
      </div>
      <div className="w-1/2">
        <InfoTrainers trainers={trainers} />
      </div>
    </section>
  )
}

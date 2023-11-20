import { CardTrainer } from '@/modules/Trainers/components/CardTrainer/'

const trainers = [
  {
    trainer: {
      id: '1',
      name: 'João',
      description:
        'João é um cara legal que gosta de artes marciais e tal. Nascido em 1990 frenquentou a academia de artes marciais desde os 10 anos de idade. Seu pai era um grande mestre e o ensinou tudo que sabe.',
      contact: '(81) 99999-9999',
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

export const InfoTrainers = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {trainers.map((item) => (
        <CardTrainer
          key={item.trainer.id}
          trainer={item.trainer}
          schudules={item.schedules}
        />
      ))}
    </div>
  )
}

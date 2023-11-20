import { CardTrainer } from '@/modules/Trainers/components/CardTrainer/'
import { Schedule, Trainer } from '../../types'

type InfoTrainersProps = {
  trainers: {
    trainer: Trainer
    schedules: Schedule[]
  }[]
}

export const InfoTrainers = ({ trainers }: InfoTrainersProps) => {
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

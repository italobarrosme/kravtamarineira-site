import { CardTrainer } from '@/modules/Trainers/components/CardTrainer/'
import { getAllTrainers } from '../../service'
import { Trainer } from '../../types'

export const InfoTrainers = async () => {
  const { data } = await getAllTrainers()

  const trainers = data.map((item) => ({
    id: item.id.toString(),
    name: item.attributes.Name,
    description: item.attributes.Info,
    contact: item.attributes.Phone,
    track: item.attributes.Grade,
    image: '',
    schedules: item.attributes.classes.data.map((schedule) => ({
      id: schedule.id.toString(),
      day: schedule.attributes.WeekDay,
      time: schedule.attributes.Hour,
      duration: '',
      track: '',
    })),
  }))

  return (
    <div className="flex flex-wrap gap-8">
      {trainers.map((item) => (
        <CardTrainer key={item.id} trainer={item} />
      ))}
    </div>
  )
}

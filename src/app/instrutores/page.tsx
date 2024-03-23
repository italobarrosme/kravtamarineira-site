import { Text } from '@/shared/components/Text'
import { getAllTrainers } from '@/modules/Trainers/service'
import { CardTrainer } from '@/modules/Trainers/components/CardTrainer/'

export default async function Instrutores() {
  const { data } = await getAllTrainers()

  const trainers = data.map((item) => ({
    id: item.id.toString(),
    name: item.attributes.Name,
    description: item.attributes.Info,
    contact: item.attributes.Phone,
    track: item.attributes.Grade,
    // remove /
    image: item.attributes.Image.data.attributes.formats.thumbnail.url,
    schedules: item.attributes.classes.data.map((schedule) => ({
      id: schedule.id.toString(),
      day: schedule.attributes.WeekDay,
      time: schedule.attributes.Hour,
      duration: '',
      track: '',
    })),
  }))

  return (
    <section className="flex min-h-screen-hero flex-col justify-center gap-4 bg-brand-primary p-4 md:flex-row ">
      <div className="md:w-1/2">
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
      <div className="md:w-1/2">
        <div className="flex flex-wrap gap-8">
          {trainers.map((item) => (
            <CardTrainer key={item.id} trainer={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

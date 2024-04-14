import { Text } from '@/shared/components/Text'
import { getAllTrainers, getTextTrainer } from '@/modules/Trainers/service'
import { CardTrainer } from '@/modules/Trainers/components/CardTrainer/'
import { formatHtmlText } from '@/utils/formats/formatHtmlText'
import { cn } from '@/utils'

export default async function Instrutores() {
  const { data } = await getAllTrainers()

  const { data: text } = await getTextTrainer()

  const textFormatted = formatHtmlText(text.attributes.Instructors)

  const trainers = data.map((item) => ({
    id: item.id.toString(),
    name: item.attributes.Name,
    description: item.attributes.Info,
    contact: item.attributes.Phone,
    track: item.attributes.Grade,
    image: item.attributes.Image.data.attributes.url,
    schedules: item.attributes.classes.data.map((schedule) => ({
      id: schedule.id.toString(),
      day: schedule.attributes.WeekDay,
      time: schedule.attributes.Hour,
      duration: '',
      track: '',
      details: schedule.attributes.Details,
    })),
  }))

  return (
    <section className="flex min-h-screen-hero flex-col items-center gap-4 bg-brand-primary p-4">
      <div className="max-w-7xl">
        <Text variant="h2" className="text-xl text-brand-light">
          Conheça nossos instrutores e seus horários
        </Text>
        {textFormatted.text.map((paragraph: string, index: number) => (
          <Text
            key={index}
            variant="p"
            className={cn(
              'text-brand-light',
              index === 2 ||
                index === 4 ||
                index === 6 ||
                index === 8 ||
                index === 10 ||
                index === 12
                ? 'font-bold'
                : 'font-normal'
            )}
          >
            {paragraph}
          </Text>
        ))}
        <div className="flex flex-wrap gap-8">
          {trainers.map((item) => (
            <CardTrainer key={item.id} trainer={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

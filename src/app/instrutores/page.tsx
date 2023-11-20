import { InfoTrainers } from '@/modules/Trainers'
import { Text } from '@/shared/components/Text'

export default function Instrutores() {
  return (
    <section className="flex flex-col justify-center gap-4 bg-brand-primary p-4 md:flex-row">
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
        <InfoTrainers />
      </div>
    </section>
  )
}

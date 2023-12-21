'use client'

import { Button } from '@/shared/components/Button'
import { Trainer, Schedule } from '../../types'
import { Text } from '@/shared/components/Text'
import { cn } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'
import { CardInfo } from '@/shared/components/CardInfo'

export type CardTrainerProps = {
  trainer: Trainer
  schudules: Schedule[]
}

export const CardTrainer = ({ trainer, schudules }: CardTrainerProps) => {
  const [isSchudules, setIsSchudules] = useState(false)

  return (
    <div className="py-4">
      <div className="flex flex-col">
        <div className="group relative h-96 w-72 cursor-pointer rounded-lg">
          <Image
            src={trainer.image}
            alt={trainer.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg shadow-sm"
          />
          <div className="absolute bottom-0 flex w-full flex-col gap-1 rounded-lg bg-transparent p-2 font-bold text-brand-light opacity-100 shadow-sm backdrop-blur-sm duration-100 lg:opacity-0 lg:group-hover:opacity-100">
            <Text variant="h6" className="font-bold">
              {trainer.name}
            </Text>
            <Text className="font-bold">{trainer.description}</Text>
            <Text className="font-bold">{trainer.contact}</Text>
            <Text className="bg-brand-accent p-2 font-black">
              {trainer.track}
            </Text>

            <Button
              variant="primary"
              size="full"
              onClick={() => setIsSchudules(!isSchudules)}
              className="my-2"
            >
              Mostre os horarios
            </Button>
          </div>
        </div>
        <CardInfo isShow={isSchudules} title="Horários">
          <ul>
            {schudules.map((schedule) => (
              <li key={schedule.id}>
                <Text>{schedule.day}</Text>
                <Text>{schedule.time}</Text>
                <Text>{schedule.track}</Text>
              </li>
            ))}
          </ul>
        </CardInfo>
      </div>
    </div>
  )
}

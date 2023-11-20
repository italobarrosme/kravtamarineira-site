'use client'

import { Button } from '@/shared/pieces/Button'
import { Trainer, Schedule } from '../../types'
import { Text } from '@/shared/components/Text'
import { cn } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'

export type CardTrainerProps = {
  trainer: Trainer
  schudules: Schedule[]
}

export const CardTrainer = ({ trainer, schudules }: CardTrainerProps) => {
  const [isSchudules, setIsSchudules] = useState(false)

  return (
    <div className="py-4">
      <div className="flex flex-col">
        <div className="group relative h-80 w-56 cursor-pointer rounded-lg">
          <Image
            src={trainer.image}
            alt={trainer.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg shadow-sm"
          />
          <div className="absolute bottom-0 flex w-full flex-col rounded-lg bg-transparent p-2 font-bold text-brand-light opacity-0 shadow-sm backdrop-blur-sm duration-100 group-hover:opacity-100">
            <Text>{trainer.name}</Text>
            <Text>{trainer.description}</Text>
            <Text>{trainer.contact}</Text>
            <Text>{trainer.track}</Text>

            <Button
              variant="secondary"
              onClick={() => setIsSchudules(!isSchudules)}
              className="my-2"
            >
              Mostre os horarios
            </Button>
          </div>
        </div>
        <div
          className={cn(
            isSchudules ? 'flex flex-col bg-brand-light w-56 p-4' : 'hidden'
          )}
        >
          <Text variant="h6">Horários</Text>
          <ul>
            {schudules.map((schedule) => (
              <li key={schedule.id}>
                <Text>{schedule.day}</Text>
                <Text>{schedule.time}</Text>
                <Text>{schedule.track}</Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

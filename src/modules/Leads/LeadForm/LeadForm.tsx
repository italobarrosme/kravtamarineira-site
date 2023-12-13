'use client'

import { Input } from '@/shared/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LeadSchema, leadSchema } from '../schema'
import { Button } from '@/shared/components/Button'

export const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadSchema>({
    resolver: zodResolver(leadSchema),
  })

  function sendData(data: LeadSchema) {
    console.log(data)
  }

  return (
    <form
      className="flex w-full max-w-2xl flex-col gap-4"
      onSubmit={handleSubmit((data) => {
        sendData(data)
      })}
    >
      <Input
        label="Seu nome"
        hasError={!!errors.name}
        modeDark
        placeholder='Ex: "João da Silva"'
        errorMessage={errors.name?.message}
        {...register('name')}
      />
      <Input
        label="Seu Número de telefone"
        type="tel"
        hasError={!!errors.number}
        modeDark
        errorMessage={errors.number?.message}
        placeholder="(00) 00000-0000"
        pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
        {...register('number')}
      />
      <Input
        label="Seu E-mail"
        type="email"
        modeDark
        hasError={!!errors.email}
        placeholder="user@example.com"
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Melhor horário para contato"
        modeDark
        hasError={!!errors.availableContact}
        placeholder='Ex: "Segunda a Sexta das 8h às 18h"'
        type="area"
        errorMessage={errors.availableContact?.message}
        {...register('availableContact')}
      />

      <Button
        variant="outline"
        onClick={() => console.log('here')}
        className="my-2"
      >
        Enviar meus dados
      </Button>
    </form>
  )
}

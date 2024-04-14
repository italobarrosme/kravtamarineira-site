'use client'

import { Input } from '@/shared/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { LeadSchema, leadSchema } from '../schema'
import { Button } from '@/shared/components/Button'
import { formatPhoneNumber } from '@/utils/formats'
import { postCreateLead } from '../services'
import { useState } from 'react'
import { useToast } from '@/shared/components/Toast'

export const LeadForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadSchema>({
    resolver: zodResolver(leadSchema),
  })

  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function sendData(data: LeadSchema) {
    setIsLoading(true)
    try {
      const response = await postCreateLead(data)

      if (response) {
        toast({
          title: 'Dados enviados com sucesso!',
          description: 'Em breve entraremos em contato com você.',
          status: 'success',
        })
        reset()
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form
        className="flex w-full max-w-2xl flex-col gap-4"
        onSubmit={handleSubmit((data) => {
          sendData(data)
        })}
      >
        <Input
          label="Seu nome *"
          hasError={!!errors.name}
          modeDark
          placeholder='Ex: "João da Silva"'
          errorMessage={errors.name?.message}
          required
          {...register('name')}
        />
        <Input
          label="Seu Número de telefone *"
          hasError={!!errors.number}
          modeDark
          errorMessage={errors.number?.message}
          placeholder="(00) 00000-0000"
          maxLength={15}
          onInput={(e) => {
            e.currentTarget.value = formatPhoneNumber(e.currentTarget.value)
          }}
          required
          {...register('number')}
        />
        <Input
          label="Seu E-mail ( Opcional )"
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
          errorMessage={errors.availableContact?.message}
          {...register('availableContact')}
        />

        <div className="flex w-full flex-row-reverse">
          <Button
            variant="outline"
            type="submit"
            className="my-2"
            isLoading={isLoading}
          >
            Enviar meus dados
          </Button>
        </div>
      </form>
    </>
  )
}

import { z } from 'zod'

export const leadSchema = z.object({
  name: z
    .string()
    .min(3, 'Por favor, digite um nome maior')
    .max(255, 'Por favor, digite um nome menor')
    .trim()
    .nonempty('Por favor, digite seu nome'),
  number: z.number().max(11),
  email: z.string().email().nonempty('Por favor, digite seu e-mail'),
  availableContact: z.string().max(255).optional(),
})

export type LeadSchema = z.infer<typeof leadSchema>

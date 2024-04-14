'use server'

import { getCustomLog } from '@/utils/logs/logs'
import { LeadSchema } from '../schema'

export const postCreateLead = async (data: LeadSchema) => {
  const bodyRequest = {
    data: {
      Name: data.name,
      Email: data.email,
      Phone: data.number,
    },
  }

  const response = await fetch(`${process.env.BASE_URL_API}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN_JWT}`,
    },
    body: JSON.stringify(bodyRequest),
  })

  if (response.ok) {
    try {
      const data = await response.json()
      getCustomLog({
        log: `Cadastro de lead realizado com sucesso: - ${JSON.stringify(
          bodyRequest
        )}`,
        statusCode: response.status,
        type: 'success',
      })

      return data
    } catch (error) {
      getCustomLog({
        log: `Error ao tentar cadastrar lead: - ${error}`,
        statusCode: response.status,
        type: 'error',
      })
      throw new Error(`Erro na requisição: ${error}`)
    }
  } else {
    getCustomLog({
      log: `Erro ao tentar cadastrar lead: - ${response.status}`,
      statusCode: response.status,
      type: 'error',
    })
    throw new Error(`Erro na requisição: ${response.status}`)
  }
}

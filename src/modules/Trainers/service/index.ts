'use server'

import { getCustomLog } from '@/utils/logs/logs'

export type TrainerApi = {
  id: number
  attributes: {
    Name: string
    Grade: string
    Info: string
    Phone: string
    Image: ImageApi
    createdAt: string
    updatedAt: string
    publishedAt: string
    classes: ScheduleApi
  }
}

export type ScheduleApi = {
  data: {
    id: number
    attributes: {
      WeekDay: string
      Hour: string
      Details: string | null
      createdAt: string
      updatedAt: string
    }
  }[]
}

export type ImageApi = {
  data: {
    id: number
    attributes: {
      name: string
      alternativeText?: string
      caption?: string
      width: number
      height: number
      formats: {
        thumbnail: {
          ext: string
          url: string
          hash: string
          mime: string
          name: string
          path: null
          size: number
          width: number
          height: number
        }
      }
      hash: string
      ext: string
      mime: string
      size: number
      url: string
      previewUrl: null
      provider: string
      provider_metadata: null
      created_at: string
      updated_at: string
    }
  }
}

export type ResponseTrainers = {
  data: TrainerApi[]
}

export const getAllTrainers = async (): Promise<ResponseTrainers> => {
  const response = await fetch(
    `${process.env.BASE_URL_API}/instructors?populate=*`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOKEN_JWT}`,
      },
    }
  )

  if (response.ok) {
    try {
      const data = await response.json()
      getCustomLog({
        log: `Instrutores retornados com sucesso`,
        statusCode: response.status,
        type: 'success',
      })

      return data
    } catch (error) {
      getCustomLog({
        log: `Erro ao tentar pegar os instrutores: - ${error}`,
        statusCode: response.status,
        type: 'error',
      })
      throw new Error(`Erro na requisição: ${error}`)
    }
  } else {
    getCustomLog({
      log: `Erro ao tentar pegar os instrutores: - ${response.status}`,
      statusCode: response.status,
      type: 'error',
    })
    throw new Error(`Erro na requisição: ${response.status}`)
  }
}

export const getTextTrainer = async () => {
  const response = await fetch(`${process.env.BASE_URL_API}/krav-maga`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN_JWT}`,
    },
    cache: 'no-store',
  })

  if (response.ok) {
    try {
      const data = await response.json()
      getCustomLog({
        log: `Texto da pagina dos instrutores retornado com sucesso`,
        statusCode: response.status,
        type: 'success',
      })

      return data
    } catch (error) {
      getCustomLog({
        log: `Erro ao tentar pegar o texto da pagina dos instrutores: - ${error}`,
        statusCode: response.status,
        type: 'error',
      })
      throw error
    }
  } else {
    getCustomLog({
      log: `Erro ao tentar pegar o texto da pagina dos instrutores: - ${response.status}`,
      statusCode: response.status,
      type: 'error',
    })
    throw new Error(`Erro na requisição: ${response.status}`)
  }
}

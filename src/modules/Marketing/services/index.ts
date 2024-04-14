import { getCustomLog } from '@/utils/logs/logs'
import { ResponseData } from './types'

export const getCarrousels = async (): Promise<ResponseData> => {
  const response = await fetch(
    `${process.env.BASE_URL_API}/carrousels?populate=*`,
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
        log: `Busca de carrossel realizada com sucesso!`,
        statusCode: response.status,
        type: 'success',
      })

      return data
    } catch (error) {
      getCustomLog({
        log: `Error ao tentar buscar carrossel: - ${error}`,
        statusCode: response.status,
        type: 'error',
      })

      throw new Error(`Erro na requisição: ${error}`)
    }
  } else {
    throw new Error(`Erro na requisição: ${response.status}`)
  }
}

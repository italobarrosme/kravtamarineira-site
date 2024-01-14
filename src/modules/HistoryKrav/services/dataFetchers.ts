import { getCustomLog } from '@/utils/logs/logs'

export const getHistoryKrav = async () => {
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
        log: `História do Krav Maga retornado com sucesso`,
        statusCode: response.status,
        type: 'success',
      })

      return data
    } catch (error) {
      getCustomLog({
        log: `Erro ao tentar pegar a história do Krav Maga: - ${error}`,
        statusCode: response.status,
        type: 'error',
      })
      throw error
    }
  } else {
    getCustomLog({
      log: `Erro ao tentar pegar a história do Krav Maga: - ${response.status}`,
      statusCode: response.status,
      type: 'error',
    })
    throw new Error(`Erro na requisição: ${response.status}`)
  }
}

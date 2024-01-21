import { getCustomLog } from '@/utils/logs/logs'

export const getContacts = async () => {
  const response = await fetch(`${process.env.BASE_URL_API}/contact`, {
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
        log: `Contatos retornados com sucesso`,
        statusCode: response.status,
        type: 'success',
      })

      return data
    } catch (error) {
      getCustomLog({
        log: `Erro ao tentar pegar os contatos: - ${error}`,
        statusCode: response.status,
        type: 'error',
      })
      throw error
    }
  }
}

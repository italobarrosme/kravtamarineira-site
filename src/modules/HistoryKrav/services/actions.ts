'use server'

import { getHistoryKrav } from './dataFetchers'
import { extractTitlesAndParagraph } from './extractTitlesAndParagraph'

export async function getHistoryKravAction() {
  try {
    const historyKrav = await getHistoryKrav()

    const data = extractTitlesAndParagraph(historyKrav.data.attributes.History)

    return data
  } catch (error: any) {
    throw new Error('Falha ao buscar a história do Krav Maga')
  }
}

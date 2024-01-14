'use server'

import { getHistoryKrav } from './dataFetchers'
import { extractTitlesAndParagraph } from './extractTitlesAndParagraph'

export async function getHistoryKravAction() {
  const historyKrav = await getHistoryKrav()

  const data = extractTitlesAndParagraph(historyKrav.data.attributes.History)

  return data
}

interface List {
  items: string[]
}

interface TextFormatted {
  titles?: string[]
  text?: string[]
  lists?: List[]
}

export function formatHtmlText(text: string): TextFormatted {
  const objectFormatted = {} as TextFormatted

  const regexTitles = /<h([1-3])>(.*?)<\/h\1>/g
  const regexParagraph = /<p>(.*?)<\/p>|<br(.*?)<\/br>|<br>/g
  const regexLists = /<li>(.*?)<\/li>|<[ou]l>(.*?)<\/[ou]l>/g

  const titles = text.match(regexTitles)

  if (titles) {
    objectFormatted.titles = titles.map((title) =>
      title.replace(/<\/?h[1-3]>/g, '')
    )
  }

  const paragraphs = text.match(regexParagraph)
  if (paragraphs) {
    objectFormatted.text = paragraphs.map((paragrafo) =>
      paragrafo.replace(/<\/?p>|<\/?br>/g, '')
    )
  }

  const lists = text.match(regexLists)

  if (lists) {
    objectFormatted.lists = lists.map((list) => {
      const items = list.match(regexLists)

      if (!items) return { items: [] }
      return {
        items: items.map((item) =>
          item.replace(/<\/?li>|<\/?[ou]l>|<br\s*\/?>/g, '')
        ),
      }
    })
  }

  return objectFormatted
}

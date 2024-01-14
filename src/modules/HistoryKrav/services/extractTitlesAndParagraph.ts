// criar uma função que separa os h1 e paragrafos

export const extractTitlesAndParagraph = (data: any) => {
  const titles = data.match(/<h1>(.*?)<\/h1>/g).map((title: string) => {
    return title.replace(/<\/?h1>/g, '')
  })

  const paragraphs = data.match(/<p>(.*?)<\/p>/g).map((paragraph: string) => {
    return paragraph.replace(/<\/?p>/g, '')
  })

  return {
    text1: {
      title: titles[0],
      paragraph: paragraphs.slice(0, 11),
    },
    text2: {
      title: titles[1],
      paragraph: paragraphs.slice(11, 22),
    },
  }
}

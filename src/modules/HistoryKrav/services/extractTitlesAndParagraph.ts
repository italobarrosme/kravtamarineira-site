export const extractTitlesAndParagraph = (data: any) => {
  const titles = data.match(/<h1>(.*?)<\/h1>/g).map((title: string) => {
    return title.replace(/<\/?h1>/g, '')
  })

  const paragraphs = data.match(/<p>(.*?)<\/p>/g).map((paragraph: string) => {
    paragraph = paragraph.replace(/<img.*?>/g, '')
    return paragraph.replace(/<\/?p>/g, '')
  })

  const img = data.match(/<img src="(.*?)"/g).map((img: string) => {
    return img.replace(/<img src="/g, '')
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
    images: img.map((img: string) => {
      return img.replace(/"/g, '')
    }),
  }
}

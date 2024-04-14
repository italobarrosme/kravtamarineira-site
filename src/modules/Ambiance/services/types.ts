interface MediaFormat {
  id: number
  attributes: {
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: {
      large?: ImageFormat
      small?: ImageFormat
      medium?: ImageFormat
      thumbnail?: ImageFormat
    }
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
  }
}

interface ImageFormat {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

interface DataFormat {
  id: number
  attributes: {
    Academy: {
      data: MediaFormat[]
    }
  }
}

interface MetaFormat {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface ResponseFormat {
  data: DataFormat
  meta: MetaFormat
}

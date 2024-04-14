type MediaFormat = {
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

type MediaAttributes = {
  id: number
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: {
    large: MediaFormat
    small: MediaFormat
    medium: MediaFormat
    thumbnail: MediaFormat
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

type MediaData = {
  id: number
  attributes: MediaAttributes
}

type Media = {
  data: MediaData
}

type Attributes = {
  link: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  Media: Media
}

type DataItem = {
  id: number
  attributes: Attributes
}

type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

type Meta = {
  pagination: Pagination
}

export type ResponseData = {
  data: DataItem[]
  meta: Meta
}

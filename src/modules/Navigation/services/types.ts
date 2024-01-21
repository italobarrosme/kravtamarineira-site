export type Contacts = {
  data: {
    id: number
    attributes: {
      Address: string
      Instagram: string
      Facebook: string | null
      Phone_1: string
      Phone_2: string | null
      createdAt: string
      updatedAt: string
      publishedAt: string
      Email: string | null
      Whatsapp: string
    }
  }
}

export type Trainer = {
  name: string
  description: string
  contact: string
  image: string
  id: string
  track: string
}

export type Schedule = {
  id: string
  day: string
  time: string
  duration?: string
  track: string
}

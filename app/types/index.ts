export interface Artist {
  id: string
  name: string
  origin: string
  bio: string
  photo: string
  genre: string[]
}

export interface Venue {
  name: string
  city: string
  country: string
  address: string
}

export interface Event {
  id: string
  title: string
  artist: Artist
  date: string
  venue: Venue
  ticketsAvailable: number
  ticketsTotal: number
  coverImage: string
  isSoldOut: boolean
  isFeatured: boolean
}

export interface Ticket {
  eventId: string
  tier: 'standard' | 'vip' | 'platinum'
  price: number
  currency: 'EUR' | 'USD' | 'GBP'
  perks: string[]
}

export interface NavLink {
  label: string
  to: string
}

export type Country = {
  name: {
    common: string
  }
  capital: string[]
  languages: {
    [key: string]: string
  }
  population: number
  region: string
  flag: string
  area: number
}

// types/index.d.ts
export type Product = {
    _id: string
    title: string
    shortDescription?: string
    price: number
    images?: any[]
    slug?: { current: string }
}
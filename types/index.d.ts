// types/index.d.ts
export type Product = {
    _id: string
    title: string
    shortDescription?: string
    price: number
    images?: unknown[]
    slug?: { current: string }
}

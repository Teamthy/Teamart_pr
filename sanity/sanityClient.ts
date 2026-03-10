// sanity/sanityClient.ts
import SanityClient from '@sanity/client'
import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'

export const client = SanityClient({
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET || 'production',
    useCdn: process.env.NODE_ENV === 'production',
    apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: SanityImageSource) => builder.image(source)

export async function getProducts() {
    const query = `*[_type == "product" && defined(slug.current)] | order(_createdAt desc) {
    _id, title, shortDescription, price, images, slug
  }`
    return client.fetch(query)
}

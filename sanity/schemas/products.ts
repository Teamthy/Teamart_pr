// sanity/schemas/products.ts
export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        { name: 'title', type: 'string', title: 'Title' },
        { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
        { name: 'shortDescription', type: 'string' },
        { name: 'description', type: 'array', of: [{ type: 'block' }] },
        { name: 'price', type: 'number' },
        { name: 'images', type: 'array', of: [{ type: 'image' }] },
        { name: 'inStock', type: 'boolean', initialValue: true },
    ],
}
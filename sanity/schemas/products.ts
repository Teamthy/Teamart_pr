export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'price', title: 'Price', type: 'number' },
        { name: 'category', title: 'Category', type: 'string' },
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'description', title: 'Description', type: 'text' }
    ]
};

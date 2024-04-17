import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity/lib/client';

const builder = imageUrlBuilder(client);

class SanityService {
    async getAllProducts(query) {
        try {
            return await client.fetch(`*[_type=="property"] ${query} `);
        } catch (error) {
            console.error("Error fetching All products: ", error);
            throw error;
        }
    }

    async getProductById(id, query) {
        try {
            return await client.fetch(`*[_type=="product" && _id == "${id}"] ${query} `);
        } catch (error) {
            console.error("Error fetching product by ID: ", error);
            throw error;
        }
    }

    async getPropertyBySlug(slug, query) {
        try {
            return await client.fetch(`*[_type=="product" && slug.current == "${slug}"] ${query} `);
        } catch (error) {
            console.error("Error fetching product by Slug:", error);
            throw error;
        }
    }

    getImageUrl(source) {
        return builder.image(source);
    }
}

const sanityService = new SanityService();
export default sanityService;
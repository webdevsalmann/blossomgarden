import { dressCategories, dressSizes } from "@/lib/const";
import { defineType } from "sanity";

export const product = defineType({
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        // Images
        {
            title: "Images",
            name: "images",
            type: "array",
            of: [{ type: "image", title: "Image" }],
            validation: Rule => Rule.required().min(1).max(9).error('At least 1 image and maximum 9 images are allowed.')
        },
        // Name
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: Rule => Rule.required().max(100).error('Only upto 100 characters can be enter.')
        },
        // Slug
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: "name",
            },
            validation: Rule => Rule.required()
        },
        // Description
        {
            title: "Description",
            name: "description",
            type: "text",
            rows: 4,
            validation: Rule => Rule.required().max(500)
        },
        // Details
        {
            title: "Details",
            name: "details",
            type: "array",
            of: [{ type: 'block' }],
        },
        // Price
        {
            title: "Price",
            name: "price",
            type: "number",
            validation: Rule => Rule.required().positive().precision(2)
        },
        // Discount Price
        {
            title: "Discount Price",
            name: "discountPrice",
            type: "number",
            initialValue: 0
        },
        // Categories
        {
            title: "Categories",
            name: "categories",
            type: "array",
            of: [{ type: 'string' }],
            options: {
                list: dressCategories
            },
            validation: Rule => Rule.required().min(1)
        },
        // Sizes
        {
            title: "Sizes",
            name: "sizes",
            type: "array",
            of: [{ type: 'string' }],
            options: {
                list: dressSizes
            },
            validation: Rule => Rule.required().min(1).error("Please add atleast 1 size")
        },
        // Colors
        {
            title: "Colors",
            name: "colors",
            type: "array",
            of: [{ type: "string" }],
            validation: Rule => Rule.max(5)
        },
        // Materials
        {
            title: "Materials",
            name: "materials",
            type: "array",
            of: [{ type: "string" }],
            validation: Rule => Rule.max(5)
        },
        // Stock
        {
            title: "Stock",
            name: "stock",
            type: "number",
            validation: Rule => Rule.required().integer().positive()
        },
    ],
});

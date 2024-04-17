import sanityService from "@/lib/sanityConfig";
import Shop from "./Shop";

export default async function page({ searchParams:{date, price} }) {
  const priceOrder = price ? `| order(price ${price})` : "";
  const dateOrder = date ? `| order(_createdAt ${date})` : "";
  const order = `${priceOrder}${dateOrder}`

  const products = await sanityService.getAllProducts(` ${order} { "id" : _id , "slug" : slug.current , images , name , price , discountPrice }`);
  return (
    <main>
      <Shop products={products} />
    </main>
  )
}

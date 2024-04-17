import Contact from "@/components/shared/Contact";
import sanityService from "@/lib/sanityConfig";
import ProductDetails from "./ProductDetails";
import ImageGallery from "./ImageGallery";

export default async function page({ params }) {
  const product = await sanityService.getPropertyBySlug(params.slug, `[0]{"id":_id,images,name,description,price,discountPrice,categories,sizes,colors,materials,stock}`);

  return (
    <main>
      <section className="mt-block grid gap-block md:grid-cols-7">
        {/* Image Gallery */}
        <ImageGallery className="md:col-span-4" data={product} />

        {/* Product Details */}
        <ProductDetails className="md:col-span-3" data={product} />
      </section>

      {/* Contact */}
      {/* <Contact /> */}
      {/* <SimilarProperty properties={similarProperty} /> */}
    </main>
  )
}

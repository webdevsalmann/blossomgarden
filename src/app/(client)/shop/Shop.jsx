import ProductSorting from "./ProductSorting";
import ShopFilter from "./ShopFilter";
import ShopProducts from "./ShopProducts";

export default function Shop() {
    return (
        <section>
            {/* Heading */}
            <h1 className="text-center">Shop</h1>

            {/* Heading & Sorting */}
            <ProductSorting />

            {/* Content Block */}
            <div className="pt-base grid md:grid-cols-8 gap-base">
                {/* Filter */}
                <ShopFilter className="md:col-span-2" />

                {/* Products */}
                <ShopProducts className="md:col-span-6" />
            </div>
        </section>
    )
}

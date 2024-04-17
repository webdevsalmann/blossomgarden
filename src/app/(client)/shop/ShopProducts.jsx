import ShopCard from "@/components/card/ShopCard";

export default function ShopProducts({ className, products }) {
    return (
        <div className={className}>
            {/* Products */}
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
                {products && products.map(item=>(
                    <ShopCard data={item} key={item.id + "shop"} />
                ))}
            </div>
        </div>
    )
}

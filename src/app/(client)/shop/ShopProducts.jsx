import ShopCard from "@/components/card/ShopCard";

export default function ShopProducts({ className }) {
    return (
        <div className={className}>
            {/* Products */}
            <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </div>
        </div>
    )
}

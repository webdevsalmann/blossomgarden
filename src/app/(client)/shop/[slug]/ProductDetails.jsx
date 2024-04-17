import { Car, Grid3X3, Package, ShieldCheck, Waypoints } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function ProductDetails({ className, data }) {
    const { categories, name, description, price, discountPrice, stock, materials, sizes, colors, } = data || {};

    return (
        <div className={`${className}`}>
            <div className="">
                {categories.map(item => (
                    <Badge className="uppercase" key={item + name}>{item}</Badge>
                ))}
            </div>
            <h1 className="mt-base font-bold text-3xl">{name}</h1>
            <div className="mt-base font-semibold text-primary text-lg">₹{price - discountPrice}</div>
            <p className="mt-base">{description}</p>

            {/* Services */}
            <div className="my-2xl py-base px-4 flex gap-base justify-between border-b-2 border-t-2 overflow-hidden">
                {/* Free Delivery */}
                <div className="flex-center w-fit flex-col gap-1 b-background">
                    <div className="p-2 bg-muted rounded-full">
                        <Car className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-center">Free Delivery<br />within Vadodara</p>
                </div>

                {/* Gurantee */}
                <div className="flex-center w-fit flex-col gap-1 b-background">
                    <div className="p-2 bg-muted rounded-full">
                        <ShieldCheck className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-center">Guaranteed<br />Displayed Piece</p>
                </div>

                {/* Fitting */}
                <div className="flex-center w-fit flex-col gap-1 b-background">
                    <div className="p-2 bg-muted rounded-full">
                        <Waypoints className="text-muted-foreground" />
                    </div>
                    <p className="text-xs text-center">Custom Fittings<br />Available</p>
                </div>
            </div>

            {/* More Details */}
            <div className="mt-base">
                <div className="flex items-center gap-2">
                    <Package className="inline size-4" />
                    <span className="text-muted-foreground">Available: </span>
                    <span>In stock {stock}pc</span>
                </div>

                <div className="mt-5 flex items-center gap-2">
                    <Grid3X3 className="inline size-4" />
                    <span className="text-muted-foreground">Materials: </span>
                    <span>
                        {materials?.map((item, i) => (
                            <span className="" key={item + name}>{i < materials.length && i !== 0 ? "," : null} {item}</span>
                        ))}
                    </span>
                </div>
            </div>

            {/* More Details */}
            <div className="mt-base">
                <div>
                    <div className="">Size</div>
                    <div className="mt-2 w-fit divide-x rounded-md overflow-hidden border">
                        {sizes?.map(item => (
                            <div
                                className="py-2 px-4 inline-block cursor-pointer text-muted-foreground hover:bg-muted"
                                key={item + name}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-base">
                    <div className="">Colors</div>
                    <div className="mt-2 w-fit divide-x rounded-md overflow-hidden border">
                        {colors?.map(item => (
                            <div
                                className="py-2 px-4 inline-block cursor-pointer text-muted-foreground hover:bg-muted"
                                key={item + name}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="mt-base flex gap-4">
                <Link className={buttonVariants()} href="/cart">Buy Now</Link>
                <Link className={buttonVariants({variant:"secondary"})} href="/cart">Add To Cart</Link>
            </div>
        </div>
    )
}

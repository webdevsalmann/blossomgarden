import sanityService from "@/lib/sanityConfig";
import Image from "next/image";
import Link from "next/link";

export default function ShopCard({ data }) {
    const { images, name, slug, price, discountPrice } = data || {};

    return (
        <Link
            className="relative hover:bg-background transition-all border rounded overflow-hidden group"
            href={`/shop/${slug}`}
        >
            <div className="aspect-[4/4.5] overflow-hidden">
                <Image
                    className="size-full aspect-[4/4.5] object-cover object-center"
                    width={400}
                    height={500}
                    src={sanityService.getImageUrl(images[0]).width(400).url() || "/images/common/3.png"}
                    alt="hero"
                />
            </div>

            <div className="p-4 border-t">
                <div className="font-normal group-hover:underline line-clamp-2">{name}</div>
                <div className="mt-xs font-normal text-primary">₹ {price - discountPrice}</div>
            </div>
        </Link>
    )
}

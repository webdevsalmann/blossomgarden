import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function ShopCard() {
    return (
        <Link
            className="relative hover:bg-background transition-all rounded overflow-hidden group"
            href="/shop"
        >
            <div className="aspect-[4/5] overflow-hidden">
                <Image
                    className="size-full aspect-[4/5] object-cover object-center"
                    width={400}
                    height={500}
                    src="/images/common/3.png"
                    alt="hero"
                />
            </div>

            <div>
                <div className="text-lg font-semibold group-hover:underline line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel enim voluptatibus </div>
                <div className="mt-xs font-bold text-primary">₹ 3000</div>
            </div>
        </Link>
    )
}

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function FeaturedCard() {
    return (
        <div className="relative hover:bg-background transition-all rounded overflow-hidden">
            <div className="aspect-[4/5] rounded overflow-hidden">
                <Image
                    className="size-full aspect-[4/5] object-cover object-center"
                    width={400}
                    height={500}
                    src="/images/common/3.png"
                    alt="hero"
                />
            </div>

            <div className="p-xs">
                <div className="text-xl font-semibold">Name</div>
                <div className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur sed provident porro dolore quia accusantium molestias dolor maxime quis, harum fugit ad obcaecati quos repellat itaque similique magni iusto possimus culpa deserunt.</div>
                <Link className={`${buttonVariants({ variant: "outline" })} mt-xs`} href="/shop">
                    View More
                </Link>
            </div>
        </div>
    )
}

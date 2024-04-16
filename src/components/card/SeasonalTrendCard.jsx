import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function SeasonalTrendCard() {
  return (
    <div className="relative aspect-video bg-gradient-to-r from-black/50 grid grid-cols-2 items-center gap-base transition-all rounded-md border overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    className="size-full aspect-[4/5] object-cover object-center"
                    width={400}
                    height={500}
                    src="/images/common/4.png"
                    alt="hero"
                />
            </div>

            <div className="relative p-sm">
                <div className="text-xl font-semibold text-white">Name</div>
                <div className="my-sm line-clamp-3 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita consequatur sed provident porro dolore quia accusantium molestias dolor maxime quis, harum fugit ad obcaecati quos repellat itaque similique magni iusto possimus culpa deserunt.</div>
                <Link className={`${buttonVariants({ variant: "outline" })} mt-xs`} href="/shop">
                    View More
                </Link>
            </div>
        </div>
  )
}

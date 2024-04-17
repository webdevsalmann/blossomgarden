import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section className="flex-center bg-neutral-500/50">
            <div className="mx-auto w-full md:w-2/3 text-left md:text-center z-10 ">
                <h1 className="text-black">This is a starter Template</h1>
                <p className="my-base text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque, quis at distinctio magnam atque aliquid assumenda corrupti pariatur ad sapiente unde dolore maxime deleniti quasi eum modi repellendus? Quaerat ipsam quibusdam perferendis!
                </p>
                <Link className={`${buttonVariants()} mr-sm`} href="/shop">View Dresses</Link>
                <Link className={`${buttonVariants({variant:"secondary"})}`} href="/Collections">View Collections</Link>
            </div>

            <div className="absolute inset-0 size-full -z-10">
                <Image
                    className="size-full object-cover  object-right sm:object-center"
                    width={800}
                    height={450}
                    src="/images/common/5.png"
                    alt="hero"
                />
            </div>
        </section>
    )
}

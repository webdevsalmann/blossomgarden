import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <section>
            <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3 flex-center flex-col">
                    <div>
                        <h1>This is a starter Template</h1>
                        <p className="mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque, quis at distinctio magnam atque aliquid assumenda corrupti pariatur ad sapiente unde dolore maxime deleniti quasi eum modi repellendus? Quaerat ipsam quibusdam perferendis!
                        </p>
                    </div>
                    <Link className={`${buttonVariants()} mt-6 self-start`} href="/">CTA</Link>
                </div>

                <div className="p-6 w-full bg-contain flex-center md:col-span-2">
                    <Image
                        className="object-contain object-center rounded text-foreground"
                        width={800}
                        height={450}
                        src="/images/common/error.png"
                        alt="hero"
                    />
                </div>
            </div>
        </section>
    )
}

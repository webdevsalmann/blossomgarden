import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ArraivalCard() {
  return (
    <div className="relative grid gap-3xl md:grid-cols-2 items-center border rounded-md overflow-hidden">
        {/* Info */}
        <div className="p-4 order-2">
          <div className="uppercase">Title</div>
          <div className="my-base font-semibold text-3xl">Large Heading</div>
          <div className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit maxime quia amet, velit cumque ducimus recusandae inventore quas autem magnam reprehenderit perspiciatis officia alias totam, omnis quam minus impedit modi? Exercitationem, consectetur aliquid!</div>
          <Link className={`${buttonVariants({variant:"secondary"})} mt-base`} href="/shop">View More</Link>
        </div>

        {/* Image */}
        <div className="w-full aspect-square  overflow-hidden">
          <Image
            className="size-full object-cover object-center"
            width={800}
            height={450}
            src="/images/common/3.png"
            alt="hero"
          />
        </div>
      </div>
  )
}

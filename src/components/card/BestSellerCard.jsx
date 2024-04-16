import Image from "next/image";

export default function BestSellerCard() {
    return (
        <div className="relative p-4 overflow-hidden border rounded">
            <Image
                className="size-full aspect-[4/5] object-cover object-center"
                width={400}
                height={500}
                src="/images/common/3.png"
                alt="hero"
            />
        </div>
    )
}

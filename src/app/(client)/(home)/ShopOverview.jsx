import ShopCard from "@/components/card/ShopCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function ShopOverview() {
  return (
    <section>
      {/* Heading */}
      <h2>Our Shop Listings</h2>

      {/* Content Block */}
      <div className="my-block grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-base">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>

      {/* Link to shop */}
      <div className="flex-center">
        <Link className={buttonVariants({ variant: "secondary" })} href="/shop">View More</Link>
      </div>
    </section>
  )
}

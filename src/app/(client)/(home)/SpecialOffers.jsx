import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function SpecialOffers() {
  return (
    <section className="bg-foreground text-background text-center">
      <h2 className="m-0 text-lg tracking-wider uppercase">Weekend Sale</h2>
      <div className="my-xs font-bold text-5xl leading-[60px]">Flat 30% Off on any 5 Pairs</div>
      <Link className={buttonVariants({})} href="/shop" >
        Visit shop
      </Link>
    </section>
  )
}

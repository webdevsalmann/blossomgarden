import BestSellerCard from "@/components/card/BestSellerCard";

export default function Bestsellers() {
  return (
    <section className="grid gap-block lg:grid-cols-7">
      {/* Heading */}
      <div className="lg:col-span-2">
        <h2>Our Bestsellers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint excepturi voluptates?</p>
      </div>

      {/* Content Block */}
      <div className="flex gap-xl flex-col sm:flex-row md:col-span-5">
        <BestSellerCard />
        <BestSellerCard />
      </div>
    </section>
  )
}

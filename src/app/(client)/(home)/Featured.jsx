import FeaturedCard from "@/components/card/FeaturedCard";

export default function Featured() {
  return (
    <section className="bg-muted">
      {/* Heading */}
      <h2>Featured Collections</h2>

      {/* Content Block */}
      <div className="mt-block grid md:grid-cols-3 gap-base">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  )
}

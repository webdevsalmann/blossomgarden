import SeasonalTrendCard from "@/components/card/SeasonalTrendCard";

export default function SeasonalTrends() {
    return (
        <section>
            {/* Heading */}
            <h2>Seasonal Trends</h2>

            {/* Content Block */}
            <div className="mt-block grid md:grid-cols-2 gap-base">
                <SeasonalTrendCard />
                <SeasonalTrendCard />
            </div>
        </section>
    )
}

import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial, testimonialBy }) {
    return (
        <div className="relative p-4 transition-all rounded border-2 overflow-hidden">
            <div className="text-yellow-600 flex gap-1">
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
                <Star className="size-4" />
            </div>
            <div className="my-sm font-normal">{testimonial}</div>
            <div className="font-semibold">{testimonialBy}</div>
        </div>
    )
}

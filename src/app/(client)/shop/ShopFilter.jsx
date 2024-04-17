"use client"
import { Filter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { dressCategories, dressColors, dressSizes } from "@/lib/const";
import { useSearchParams } from "next/navigation";
import { setConfig } from "next/config";

export default function ShopFilter({ className }) {
    const searchParams = useSearchParams();
    return (
        <div className={`${className} md:pr-base md:border-r`}>
            <div className="text-lg font-semibold flex items-center">
                <Filter className="mr-2 size-4 inline" />
                <span>Filter</span>
            </div>

            <Accordion type="single" collapsible>
                {/* Dress Category */}
                <AccordionItem value="dressCategories">
                    <AccordionTrigger className="text-base">Category</AccordionTrigger>
                    {dressCategories.map(item => (
                        <AccordionContent className="flex gap-2 items-center" key={item.id}>
                            <Checkbox
                                id={item.id}
                                // onClick={event => {
                                //     const params = new URLSearchParams(searchParams)
                                //     const checked = event.currentTarget.dataset.state === "checked";
                                //     checked? params.delete(setConfig.id): params.set(item.id )
                                // }}
                            />
                            <label
                                htmlFor={item.id}
                                className="text-sm font-medium w-full cursor-pointer"
                            >
                                {item.title}
                            </label>
                        </AccordionContent>
                    ))}
                </AccordionItem>

                {/* Dress Sizes */}
                <AccordionItem value="dressSizes">
                    <AccordionTrigger className="text-base">Size</AccordionTrigger>
                    {dressSizes.map(item => (
                        <AccordionContent className="flex gap-2 items-center" key={item.id}>
                            <Checkbox id={item.id} />
                            <label
                                htmlFor={item.id}
                                className="text-sm font-medium w-full cursor-pointer"
                            >
                                {item.title}
                            </label>
                        </AccordionContent>
                    ))}
                </AccordionItem>

                {/* Dress Colors */}
                <AccordionItem value="dressColors">
                    <AccordionTrigger className="text-base">Colors</AccordionTrigger>
                    {dressColors.map(item => (
                        <AccordionContent className="flex gap-2 items-center" key={item.id}>
                            <Checkbox id={item.id} />
                            <label
                                htmlFor={item.id}
                                className="text-sm font-medium w-full cursor-pointer"
                            >
                                {item.title}
                            </label>
                        </AccordionContent>
                    ))}
                </AccordionItem>
            </Accordion>

        </div>
    )
}

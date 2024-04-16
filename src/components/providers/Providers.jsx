"use client"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "./ThemeProvider"


export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
        </ThemeProvider>
    )
}

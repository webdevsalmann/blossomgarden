"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  if (path.includes("/studio")) return null
  return (
    <footer className="section container border-t">
      <p className="text-muted-foreground text-sm text-center">
        &copy;Copyright-2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}

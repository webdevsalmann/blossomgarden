"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Ilogo } from "../svgs/svgs";

export default function Footer() {
  const path = usePathname();
  if (path.includes("/studio")) return null
  return (
    <footer className="border-t">
      <div className="section md:py-8 lg:py-12 container">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo */}
          <div className="px-4 ">
            <Link className="w-fit flex-center" href="/">
              <Ilogo className="mr-2 size-14 text-primary" />
              <h1 className="text-lg leading-4 font-semibold">
                Blossom <br /> Garden
              </h1>
            </Link>
            <p>Explore a world of elegance and style at BlossomGarden, where passion meets fashion in every curated selection.</p>
          </div>

          {/* Quick Links */}
          <nav className="px-4 self-start md:justify-self-center">
            <div className="">

              <h2 className="text-lg font-normal">Quick Links</h2>
              <ul className="mt-2">
                <li>
                  <Link className="leading-8 text-muted-foreground hover:text-primary hover:underline" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="leading-8 text-muted-foreground hover:text-primary hover:underline" href="/shop">
                    shop
                  </Link>
                </li>
                <li>
                  <Link className="leading-8 text-muted-foreground hover:text-primary hover:underline" href="/contact">
                    collections
                  </Link>
                </li>
                <li>
                  <Link className="leading-8 text-muted-foreground hover:text-primary hover:underline" href="/about">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Address & Contact */}
          <div className="px-4">
            <h2 className="text-lg font-normal">Contact & Address</h2>
            <div className="mt-2 space-y-2 flex flex-col gap-2">
              {/* location */}
              <div>
                <div>
                  <MapPin className="mr-1 size-4 inline" />
                  <span className="uppercase text-xs text-primary tracking-wide">Location</span>
                </div>
                <address className="mt-px block text-muted-foreground text-base">1A Vadodara GJ, India, Asia</address>
              </div>

              {/* Email */}
              <div>
                <div>
                  <Mail className="mr-1 size-4 inline" />
                  <span className="uppercase text-xs text-primary tracking-wide">Email</span>
                </div>
                <Link className="mt-px block text-muted-foreground text-base hover:underline hover:text-primary" href="mailto:info@bugbusters.com">info@blossomgarder.com</Link>
              </div>
              {/* Phone */}
              <div>
                <div>
                  <Phone className="mr-1 size-4 inline" />
                  <span className="uppercase text-xs text-primary tracking-wide">Phone No.</span>
                </div>
                <Link className="mt-px block text-muted-foreground text-base hover:underline hover:text-primary" href="tel:+123412341234">+1234 1234 1234</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <p className="py-block text-muted-foreground text-sm text-center border-t">
        &copy;Copyright-2024 / <Link className="hover:underline" href="/credits"> Credits</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.vercel.app/" target="_blank"> webdevsalmann</Link> 💖
      </p>
    </footer>
  )
}

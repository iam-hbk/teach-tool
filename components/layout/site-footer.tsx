import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ROUTES } from "@/lib/routes"

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t bg-muted/40">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1fr_1.2fr] lg:px-8">
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold">Navigation</h3>
          <Link
            href={ROUTES.home}
            className="text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href={ROUTES.competencies}
            className="text-muted-foreground hover:text-foreground"
          >
            Competencies
          </Link>
          <Link
            href={ROUTES.resources}
            className="text-muted-foreground hover:text-foreground"
          >
            Resources
          </Link>
          <Link
            href={ROUTES.forum}
            className="text-muted-foreground hover:text-foreground"
          >
            Discussion Forum
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold">Company</h3>
          <Link
            href="#about-us"
            className="text-muted-foreground hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            href="#contact-us"
            className="text-muted-foreground hover:text-foreground"
          >
            Contact Us
          </Link>
          <Link
            href="#privacy-policies"
            className="text-muted-foreground hover:text-foreground"
          >
            Privacy Policies
          </Link>
          <Link
            href="#terms-of-use"
            className="text-muted-foreground hover:text-foreground"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold">Newsletter</h3>
          <div className="flex items-center gap-3">
            <Image
              src="/assets/amico.svg"
              alt="Newsletter"
              width={120}
              height={120}
              className="hidden h-24 w-auto sm:block"
            />
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="newsletter-email"
                className="text-sm text-muted-foreground"
              >
                Enter your email address
              </label>
              <div className="flex gap-2">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="username@site.com"
                />
                <Button type="button">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

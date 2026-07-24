/* eslint-disable simple-import-sort/imports */
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function SigInPages() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[560px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Sign In
          </h2>
        </div>

        <form className="w-full max-w-2xl space-y-6">
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>
              <input
                id="subject"
                type="password"
                name="subject"
                placeholder="Enter Password"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <Link href={"/"}>
              <button
                type="button"
                className="hover:bg-muted rounded-md px-6 py-3 text-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

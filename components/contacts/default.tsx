import { Section } from "../ui/section";

export default function Contacts() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="max-w-[560px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-[600px] text-lg">
            Let's Get Connected
          </p>
        </div>

        <form className="w-full max-w-2xl space-y-6">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

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

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="How can we help you?"
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us more about your project..."
                required
                className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary/20 block w-full resize-none rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="hover:bg-muted rounded-md px-6 py-3 text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

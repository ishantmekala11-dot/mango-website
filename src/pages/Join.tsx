import { useState, type FormEvent } from "react";
import { SplitHeadline } from "../components/motion/SplitHeadline";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

const audiences = [
  "First-time delegates",
  "Experienced MUN-ers",
  "Public speakers",
  "Teachers & advisors",
  "Future chairs",
  "Schools looking to partner",
];

export default function Join() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="px-6 sm:px-10 pt-20 pb-16 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-cobalt-bright)] mb-6">Join</p>
        <SplitHeadline as="h1" immediate className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] max-w-4xl">
          Come argue with us.
        </SplitHeadline>
        <p className="mt-8 max-w-lg text-[var(--color-paper-dim)] text-[var(--text-md)]">
          No experience required. Just a willingness to be handed the floor
          before you feel ready for it.
        </p>
      </section>

      <section className="px-6 sm:px-10 py-8 max-w-[100rem] mx-auto">
        <p className="font-mono-label text-[var(--color-paper-dim)] mb-4">Who this is for</p>
        <div className="flex flex-wrap gap-3">
          {audiences.map((a) => (
            <Tag key={a}>{a}</Tag>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-10 py-16 max-w-2xl mx-auto">
        {submitted ? (
          <div
            role="status"
            className="border border-[var(--color-cobalt)] rounded-md p-8"
          >
            <h2 className="text-[var(--text-md)] text-[var(--color-cobalt-bright)]">
              Thanks for reaching out.
            </h2>
            <p className="mt-3 text-[var(--color-paper-dim)]">
              This form isn't wired up to anything yet — we don't want to
              tell you it's been sent when it hasn't. In the meantime, email
              us directly at{" "}
              <a
                href="mailto:hello@mango.org"
                className="text-[var(--color-cobalt-bright)] underline underline-offset-4"
              >
                hello@mango.org
              </a>{" "}
              and a real person will get back to you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono-label text-[var(--color-paper-dim)]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="min-h-11 bg-transparent border border-[var(--color-paper-dim)]/40 rounded-md px-4 focus:border-[var(--color-cobalt-bright)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono-label text-[var(--color-paper-dim)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="min-h-11 bg-transparent border border-[var(--color-paper-dim)]/40 rounded-md px-4 focus:border-[var(--color-cobalt-bright)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="interest" className="font-mono-label text-[var(--color-paper-dim)]">
                What are you interested in?
              </label>
              <select
                id="interest"
                name="interest"
                required
                defaultValue=""
                className="min-h-11 bg-[var(--color-ink)] border border-[var(--color-paper-dim)]/40 rounded-md px-4 focus:border-[var(--color-cobalt-bright)]"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="model-un">Model UN</option>
                <option value="public-speaking">Public Speaking</option>
                <option value="partnership">School partnership</option>
                <option value="volunteer">Volunteering as a chair/mentor</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono-label text-[var(--color-paper-dim)]">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="bg-transparent border border-[var(--color-paper-dim)]/40 rounded-md px-4 py-3 focus:border-[var(--color-cobalt-bright)]"
              />
            </div>

            <Button type="submit" className="self-start">
              Send
            </Button>
          </form>
        )}
      </section>
    </div>
  );
}

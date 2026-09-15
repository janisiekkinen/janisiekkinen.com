import { currentPartners } from "../lib/partners";

export function CurrentPartners({ label }: { label: string }) {
  return (
    <section className="border-y border-ink/10 bg-rail" aria-labelledby="current-partners">
      <div className="px-5 py-12 md:px-10 md:py-16 lg:px-16">
        <p id="current-partners" className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-brass">
          {label}
        </p>
        <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {currentPartners.map((partner) => (
            <li key={partner.href} className="border-t border-ink/15 pt-5">
              <a
                className="group block"
                href={partner.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="display-wrap font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold uppercase leading-tight transition-colors group-hover:text-brass">
                  {partner.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceLead({ href, title, body, index }: { href: string; title: string; body: string; index: string }) {
  return (
    <a href={href} className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/10 py-10 last:border-b md:gap-x-12 md:py-12">
      <span className="font-display text-lg text-brass">{index}</span>
      <span>
        <h2 className="font-display text-4xl font-semibold uppercase tracking-tight transition-colors duration-200 group-hover:text-brass md:text-5xl">
          <span
            className="bg-[length:0_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]"
            style={{ backgroundImage: "linear-gradient(var(--color-brass), var(--color-brass))" }}
          >
            {title}
          </span>
        </h2>
        <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-muted">{body}</p>
      </span>
    </a>
  );
}

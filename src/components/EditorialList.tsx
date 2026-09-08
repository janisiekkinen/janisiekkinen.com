export function EditorialList({ items }: { items: readonly { title: string; body: string }[] }) {
  return (
    <ol className="px-5 md:px-10 lg:px-16">
      {items.map((item, i) => (
        <li key={item.title} className="grid grid-cols-[auto_1fr] gap-x-6 border-t border-ink/10 py-10 last:border-b md:gap-x-14 md:py-14">
          <span className="font-display text-lg tabular-nums text-brass">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h2 className="display-wrap font-display text-[clamp(1.85rem,4vw,3.15rem)] font-semibold uppercase">{item.title}</h2>
            <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function StatsBar({ items }: { items: readonly { k: string; v: string }[] }) {
  return (
    <div className="border-y border-ink/10 bg-rail">
      <ul className="mx-auto grid max-w-[90rem] divide-y divide-ink/10 md:grid-cols-4 md:divide-x md:divide-y-0">
        {items.map((item) => (
          <li key={item.k} className="px-5 py-5 md:px-10 md:py-7">
            <p className="font-display text-3xl font-semibold tracking-wide text-brass md:text-4xl">{item.k}</p>
            <p className="mt-1 text-sm text-muted">{item.v}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

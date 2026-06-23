export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-5 pt-20 pb-12 text-center md:pt-28">
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium text-primary">{eyebrow}</p>
      ) : null}
      <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {description}
        </p>
      ) : null}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4 animate-fade-up">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-medium uppercase tracking-[0.22em] text-ink-faint">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink">{title}</h1>
        {subtitle && <p className="mt-1.5 max-w-2xl text-sm text-ink-muted">{subtitle}</p>}
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
}

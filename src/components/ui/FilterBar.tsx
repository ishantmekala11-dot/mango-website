interface FilterBarProps<T extends string> {
  options: readonly T[];
  active: T | "All";
  onChange: (value: T | "All") => void;
  label: string;
}

/** Animated (via CSS transitions) filter control — used on Achievements and Gallery. */
export function FilterBar<T extends string>({
  options,
  active,
  onChange,
  label,
}: FilterBarProps<T>) {
  const all: (T | "All")[] = ["All", ...options];

  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap gap-3"
    >
      {all.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={`font-mono-label min-h-11 px-4 rounded-full border transition-all duration-200 ${
              isActive
                ? "border-[var(--color-cobalt)] bg-[var(--color-cobalt)] text-white"
                : "border-[var(--color-paper-dim)] text-[var(--color-paper-dim)] hover:border-[var(--color-paper)] hover:text-[var(--color-paper)]"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

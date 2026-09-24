interface TagProps {
  children: string;
  active?: boolean;
}

export function Tag({ children, active = false }: TagProps) {
  return (
    <span
      className={`font-mono-label inline-flex items-center px-3 py-1 rounded-full border transition-colors duration-200 ${
        active
          ? "border-[var(--color-cobalt)] bg-[var(--color-cobalt)] text-white"
          : "border-[var(--color-paper-dim)] text-[var(--color-paper-dim)]"
      }`}
    >
      {children}
    </span>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { MagneticButton } from "../motion/MagneticButton";

const base =
  "inline-flex items-center justify-center gap-2 min-h-11 px-6 font-mono-label rounded-md transition-colors duration-200";
const variants = {
  primary: "bg-[var(--color-cobalt)] text-white hover:bg-[var(--color-cobalt-bright)]",
  secondary:
    "border border-[var(--color-paper-dim)] text-[var(--color-paper)] hover:border-[var(--color-paper)]",
  ghost: "text-[var(--color-paper)] hover:text-[var(--color-cobalt-bright)]",
};

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: keyof typeof variants;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <MagneticButton
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </MagneticButton>
  );
}

interface ButtonLinkProps extends LinkProps {
  variant?: keyof typeof variants;
  className?: string;
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className ?? ""}`} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "rounded-lg px-4 py-2 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:opacity-90"
      : "bg-surface border border-border text-foreground hover:border-accent";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}

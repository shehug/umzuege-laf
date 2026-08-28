import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  theme?: "dark" | "light";
};

export default function Breadcrumbs({ items, theme = "dark" }: BreadcrumbsProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 flex items-center flex-wrap gap-1.5 text-xs font-medium"
    >
      <Link
        href="/"
        className={`transition hover:underline ${
          isDark ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-slate-900"
        }`}
      >
        Startseite
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-1.5">
            <span
              className={isDark ? "text-slate-500" : "text-slate-400"}
              aria-hidden="true"
            >
              /
            </span>

            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={`transition hover:underline ${
                  isDark ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`font-bold ${
                  isDark ? "text-amber-400" : "text-slate-900"
                }`}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

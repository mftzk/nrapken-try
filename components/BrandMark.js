import Link from "next/link";

const focus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night";

export default function BrandMark({ href = "/", className = "" }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2.5 ${focus} ${className}`}>
      <span aria-hidden="true" className="grid h-7 w-7 place-items-center bg-brand">
        <svg
          viewBox="0 0 64 64"
          className="h-4 w-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 47V17h8.2l13.2 18.6V17H46v30h-8.2L24.6 28.4V47z" fill="#FFFFFF" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-fog">
        nrapkén<span className="text-brand">.dev</span>
      </span>
    </Link>
  );
}

import Link from "next/link";

export default function BrandMark({ href = "/", className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md font-semibold text-fog focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night ${className}`}
    >
      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-lg bg-brand"
      >
        <svg
          viewBox="0 0 64 64"
          className="h-5 w-5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 47V17h8.2l13.2 18.6V17H46v30h-8.2L24.6 28.4V47z"
            fill="#FFFFFF"
          />
        </svg>
      </span>
      <span>
        nrapkén<span className="text-brand">.dev</span>
      </span>
    </Link>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";

import Button from "~/components/Button";
import { useWindowScroll } from "~/hooks/useWindowScroll";
import { cn } from "~/utils/ui";

interface ILink {
  label: string;
  href: string;
}

interface NavbarProps {
  className?: string;
  fixed?: boolean;
}

const Navbar = ({ className, fixed }: NavbarProps) => {
  const router = useRouter();
  const [{ y }] = useWindowScroll();

  const links: ILink[] = [
    { label: "Home", href: "/" },
    { label: "Donasi", href: "/donation" },
    { label: "Petisi", href: "/petition" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={cn(
        "z-50 w-full transition duration-500",
        {
          "fixed text-white": fixed,
          "bg-white text-black shadow-md": !fixed || y > 80,
          "sticky top-0": !fixed,
        },
        className
      )}
    >
      <div
        className={cn(
          "container mx-auto flex h-20 items-center justify-between px-4"
        )}
      >
        <Link
          href="/"
          className={cn(
            "flex flex-col items-end text-lg font-semibold leading-none text-white drop-shadow-md",
            {
              "text-brand-500 drop-shadow-none": !fixed || y > 80,
            }
          )}
        >
          <span className="text-2xl">Peduli</span>
          <span>Lingkungan</span>
        </Link>
        <div className="md:hidden">Hamburger</div>
        <div className="hidden items-center gap-12 md:flex">
          <ul className="flex items-center gap-12">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={cn({
                    "hover:border-b-2 hover:pb-0.5": href !== router.route,
                    "border-black": !fixed || y > 80,
                    "border-b-2 border-brand-400 font-semibold text-brand-400":
                      href === router.route,
                  })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="w-28" onClick={() => router.push("/signin")}>
            Masuk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

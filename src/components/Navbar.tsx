import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "~/components/Button";
import { useWindowScroll } from "~/hooks/useWindowScroll";
import { cn, generateAvatarName } from "~/utils/ui";

interface ILink {
  label: string;
  href: string;
}

interface NavbarProps {
  className?: string;
  fixed?: boolean;
}

const Navbar = ({ className, fixed }: NavbarProps) => {
  const session = useSession();
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
          {session.data?.user ? (
            <div className="dropdown-end dropdown">
              <div tabIndex={0} className="placeholder avatar cursor-pointer">
                <div className={cn("w-12 rounded-full bg-gray-300 text-black")}>
                  <span className="text-lg font-semibold uppercase">
                    {generateAvatarName(session.data.user.name)}
                  </span>
                </div>
              </div>
              <ul
                tabIndex={0}
                className={cn(
                  "dropdown-content menu mt-4 w-52 rounded-md bg-base-100 p-2 text-base-content shadow",
                  { "mt-6": !fixed || y > 80 }
                )}
              >
                <li>
                  <Link href="/profile">Profil</Link>
                </li>
                <li>
                  <a onClick={() => signOut()}>Keluar</a>
                </li>
              </ul>
            </div>
          ) : (
            <Button className="w-28" onClick={() => router.push("/signin")}>
              Masuk
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

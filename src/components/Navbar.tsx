import { Menu, X } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

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
  const drawerRef = useRef<HTMLDialogElement>(null);

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
        {/* eslint-disable-next-line */}
        {/* <img
          src="/assets/logo/Icon.png"
          alt="logo"
          className="w-40 cursor-pointer"
        /> */}
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
        <div className="md:hidden">
          <button onClick={() => drawerRef.current?.showModal()}>
            <Menu />
          </button>
          <dialog className="modal" ref={drawerRef}>
            <form
              method="dialog"
              className="modal-box flex h-full max-h-full w-full max-w-full flex-col gap-6 rounded-none"
            >
              <div className="flex items-center justify-between">
                {/* eslint-disable-next-line */}
                {/* <img
                  src="/assets/logo/Icon.png"
                  alt="logo"
                  className="w-32 cursor-pointer lg:w-64"
                /> */}

                <Link
                  href="/"
                  className={cn(
                    "flex flex-col items-end text-lg font-semibold leading-none text-brand-500"
                  )}
                >
                  <span className="text-2xl">Peduli</span>
                  <span>Lingkungan</span>
                </Link>

                <button onClick={() => drawerRef.current?.close()}>
                  <X />
                </button>
              </div>
              <div className="grid flex-1 place-items-center text-center">
                <div>
                  <ul className="flex flex-col gap-4">
                    {links.map(({ label, href }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          className={cn("text-xl", {
                            "hover:border-b-2 hover:border-white hover:pb-0.5":
                              href !== router.route,
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
                    <div className="dropdown-bottom dropdown mt-6">
                      <div
                        tabIndex={1}
                        className="placeholder avatar cursor-pointer"
                      >
                        <div
                          className={cn(
                            "w-12 rounded-full bg-gray-300 text-black"
                          )}
                        >
                          <span className="text-lg font-semibold uppercase">
                            {generateAvatarName(session.data.user.name)}
                          </span>
                        </div>
                      </div>
                      <ul
                        tabIndex={1}
                        className="dropdown-content menu left-1/2 mb-4 w-52 -translate-x-1/2 rounded-md bg-base-100 p-2 text-base-content shadow"
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
                    <Button
                      className="mt-6 w-40"
                      onClick={() => router.push("/signin")}
                    >
                      Masuk
                    </Button>
                  )}
                </div>
              </div>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        {/* Navbar */}
        <div className="hidden items-center gap-12 md:flex">
          <ul className="flex items-center gap-12">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={cn({
                    "hover:border-b-2 hover:border-white hover:pb-0.5":
                      href !== router.route,
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

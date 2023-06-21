import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, type FormEvent } from "react";
import { toast } from "react-toastify";

import Button from "~/components/Button";
import Input from "~/components/Input";
import InputPassword from "~/components/InputPassword";
import Layout from "~/components/Layout";
import Link from "~/components/Link";
import { env } from "~/env.mjs";
import { getServerAuthSession } from "~/server/auth";

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);
  if (session) {
    return {
      redirect: {
        destination: env.NEXT_PUBLIC_BASE_URL,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

interface IForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = async (e: FormEvent) => {
    setIsLoading(true);
    e.preventDefault();
    const resp = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    if (!resp?.ok) {
      toast.error(resp?.error);
      setIsLoading(false);
    } else {
      if (router.query.callbackUrl) {
        window.location.href = router.query.callbackUrl as string;
      } else {
        await router.push("/");
      }
    }
  };

  return (
    <Layout>
      <div className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-xl px-4 py-20">
        <div className="card mx-auto w-96 max-w-full bg-base-100 shadow-xl">
          <div className="card-body p-6">
            <h2 className="text-2xl font-semibold">Masuk</h2>
            <hr className="mb-6 w-14 border border-base-content" />
            <form className="flex flex-col gap-4" onSubmit={handleSignIn}>
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <div className="text-right">
                <InputPassword
                  label="Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, password: e.target.value }))
                  }
                />
                <Link href="/forgot-password" className="mt-2 block">
                  Lupa Password?
                </Link>
              </div>
              <div className="card-actions justify-center">
                <Button
                  className="w-full"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  Masuk
                </Button>
                <div className="text-base">
                  <span>Belum punya akun? </span>
                  <Link href="/signup">Daftar</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;

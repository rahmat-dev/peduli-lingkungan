import { useState, type FormEvent } from "react";

import Button from "~/components/Button";
import Input from "~/components/Input";
import InputPassword from "~/components/InputPassword";
import Layout from "~/components/Layout";
import Link from "~/components/Link";

interface IForm {
  email: string;
  password: string;
}

const SignIn = () => {
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
  });

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
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
              <div className="card-actions items-center">
                <Button className="w-full">Masuk</Button>
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

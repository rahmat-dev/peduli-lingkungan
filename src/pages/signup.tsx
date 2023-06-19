import { useState, type FormEvent } from "react";

import Button from "~/components/Button";
import Input from "~/components/Input";
import InputPassword from "~/components/InputPassword";
import Layout from "~/components/Layout";
import Link from "~/components/Link";
import Radio from "~/components/Radio";
import Select from "~/components/Select";

interface IForm {
  registerAs: "user" | "community";
  name: string;
  email: string;
  password: string;
  province: string;
  city: string;
  subdistrict: string;
  area: string;
}

const SignUp = () => {
  const [form, setForm] = useState<IForm>({
    registerAs: "user",
    name: "",
    email: "",
    password: "",
    province: "",
    city: "",
    subdistrict: "",
    area: "",
  });

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-xl px-4 py-20">
        <div className="card mx-auto w-96 max-w-full bg-base-100 shadow-xl">
          <div className="card-body p-6">
            <h2 className="text-2xl font-semibold">Daftar</h2>
            <hr className="mb-6 w-14 border border-base-content" />
            <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
              <div>
                <label className="label mb-2 p-0">
                  <span className="label-text">Daftar Sebagai</span>
                </label>
                <div className="flex items-center gap-10">
                  <Radio
                    label="User"
                    name="registerAs"
                    checked={form.registerAs === "user"}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        registerAs: "user",
                      }))
                    }
                  />
                  <Radio
                    label="Komunitas"
                    name="registerAs"
                    checked={form.registerAs === "community"}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        registerAs: "community",
                      }))
                    }
                  />
                </div>
              </div>
              <Input
                label={form.registerAs === "user" ? "Nama" : "Nama Komunitas"}
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <InputPassword
                label="Password"
                value={form.password}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              {form.registerAs === "community" && (
                <>
                  <Select
                    label="Provinsi"
                    options={[
                      { label: "Sumatera Utara", value: 1 },
                      { label: "Sumatera Barat", value: 2 },
                    ]}
                    placeholder="Pilih Provinsi"
                    value={form.province}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, province: e.target.value }))
                    }
                  />
                  <Select
                    label="Kota"
                    options={[
                      { label: "Sumatera Utara", value: 1 },
                      { label: "Sumatera Barat", value: 2 },
                    ]}
                    placeholder="Pilih Kota"
                    value={form.city}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, city: e.target.value }))
                    }
                  />
                  <Select
                    label="Kecamatan"
                    options={[
                      { label: "Sumatera Utara", value: 1 },
                      { label: "Sumatera Barat", value: 2 },
                    ]}
                    placeholder="Pilih Kecamatan"
                    value={form.subdistrict}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        subdistrict: e.target.value,
                      }))
                    }
                  />
                  <Select
                    label="Kelurahan"
                    options={[
                      { label: "Sumatera Utara", value: 1 },
                      { label: "Sumatera Barat", value: 2 },
                    ]}
                    placeholder="Pilih Kelurahan"
                    value={form.area}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, area: e.target.value }))
                    }
                  />
                </>
              )}
              <div className="card-actions items-center">
                <Button className="w-full">Daftar</Button>
                <div className="text-base">
                  <span>Sudah punya akun? </span>
                  <Link href="/signin">Masuk</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;

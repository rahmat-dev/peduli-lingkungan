import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useState, type FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

import Button from "~/components/Button";
import Input from "~/components/Input";
import InputPassword from "~/components/InputPassword";
import Layout from "~/components/Layout";
import Link from "~/components/Link";
import Radio from "~/components/Radio";
import Select from "~/components/Select";
import { env } from "~/env.mjs";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

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
  const router = useRouter();

  const signUp = api.auth.signUp.useMutation({
    onError: (error) => {
      if (!error.data?.zodError) {
        toast.error(error.message);
      }
    },
    onSuccess: async () => {
      toast.success("Registrasi Berhasil");
      await router.push("/signin");
    },
  });
  const getProvinces = api.region.getProvinces.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });
  const getCities = api.region.getCities.useQuery(
    { provinceId: +form.province },
    {
      enabled: !!form.province,
      refetchOnWindowFocus: false,
    }
  );
  const getSubdistricts = api.region.getSubdistricts.useQuery(
    { cityId: +form.city },
    {
      enabled: !!form.city,
      refetchOnWindowFocus: false,
    }
  );
  const getAreas = api.region.getAreas.useQuery(
    { subdistrictId: +form.subdistrict },
    {
      enabled: !!form.subdistrict,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (form.province) {
      const refetch = async () => {
        setForm((prev) => ({ ...prev, city: "", subdistrict: "", area: "" }));
        await getCities.refetch();
      };

      void refetch();
    }
  }, [form.province]);

  useEffect(() => {
    if (form.city) {
      const refetch = async () => {
        setForm((prev) => ({ ...prev, subdistrict: "", area: "" }));
        await getSubdistricts.refetch();
      };

      void refetch();
    }
  }, [form.city]);

  useEffect(() => {
    if (form.subdistrict) {
      const refetch = async () => {
        setForm((prev) => ({ ...prev, area: "" }));
        await getAreas.refetch();
      };

      void refetch();
    }
  }, [form.subdistrict]);

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    const {
      registerAs,
      name,
      email,
      password,
      province,
      city,
      subdistrict,
      area,
    } = form;
    await signUp.mutateAsync({
      name,
      email,
      password,
      role: registerAs,
      province,
      city,
      subdistrict,
      area,
    });
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
                error={signUp.error?.data?.zodError?.fieldErrors.name?.[0]}
              />
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                error={signUp.error?.data?.zodError?.fieldErrors.email?.[0]}
              />
              <InputPassword
                label="Password"
                value={form.password}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
                error={signUp.error?.data?.zodError?.fieldErrors.password?.[0]}
              />
              {form.registerAs === "community" && (
                <>
                  <Select
                    required
                    label="Provinsi"
                    options={
                      getProvinces.data?.length
                        ? getProvinces.data.map(({ id, name }) => ({
                            label: name,
                            value: id,
                          }))
                        : []
                    }
                    placeholder="Pilih Provinsi"
                    value={form.province}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, province: e.target.value }))
                    }
                    error={
                      signUp.error?.data?.zodError?.fieldErrors.province?.[0]
                    }
                  />
                  <Select
                    required
                    label="Kota"
                    options={
                      getCities.data?.length
                        ? getCities.data.map(({ id, name }) => ({
                            label: name,
                            value: id,
                          }))
                        : []
                    }
                    placeholder="Pilih Kota"
                    value={form.city}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, city: e.target.value }))
                    }
                    error={signUp.error?.data?.zodError?.fieldErrors.city?.[0]}
                  />
                  <Select
                    required
                    label="Kecamatan"
                    options={
                      getSubdistricts.data?.length
                        ? getSubdistricts.data.map(({ id, name }) => ({
                            label: name,
                            value: id,
                          }))
                        : []
                    }
                    placeholder="Pilih Kecamatan"
                    value={form.subdistrict}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        subdistrict: e.target.value,
                      }))
                    }
                    error={
                      signUp.error?.data?.zodError?.fieldErrors.subdistrict?.[0]
                    }
                  />
                  <Select
                    required
                    label="Kelurahan"
                    options={
                      getAreas.data?.length
                        ? getAreas.data.map(({ id, name }) => ({
                            label: name,
                            value: id.toString(),
                          }))
                        : []
                    }
                    placeholder="Pilih Kelurahan"
                    value={form.area}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, area: e.target.value }))
                    }
                    error={signUp.error?.data?.zodError?.fieldErrors.area?.[0]}
                  />
                </>
              )}
              <div className="card-actions justify-center">
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

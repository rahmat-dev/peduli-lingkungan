import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

import Button from "~/components/Button";
import Layout from "~/components/Layout";
import Link from "~/components/Link";
import { env } from "~/env.mjs";
import { PetitionCard } from "~/pages/petition";

const DetailPetition = () => {
  const session = useSession();
  const router = useRouter();

  const handleShowPetitionModal = async () => {
    if (session.status === "unauthenticated") {
      await router.push(
        `${env.NEXT_PUBLIC_BASE_URL}/signin?callbackUrl=${encodeURIComponent(
          `${env.NEXT_PUBLIC_BASE_URL}${router.asPath}`
        )}`
      );
    } else {
      console.log("show modal");
    }
  };

  return (
    <Layout title="Peduli Lingkungan - Tolak Pembangunan PT ABCD">
      <div className="container mx-auto px-4 py-6 md:py-10 xl:max-w-5xl">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/petition">Petisi</Link>
            </li>
            <li>1.000 Pohon Untuk Indonesia</li>
          </ul>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <Image
              fill
              src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">
              Tolak Pembangunan PT ABCD
            </h1>
            <Link href="/" className="text-base text-brand-700">
              Komunitas Pecinta Hutan
            </Link>
            <p className="my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              omnis necessitatibus atque, incidunt obcaecati doloremque hic
              error quisquam soluta architecto. Quo consectetur ullam quasi
              magni sit.
              <br />
              <br />
              Consequuntur quasi magni sed voluptatibus quas non eos fuga
              consequatur blanditiis culpa repudiandae quidem, nemo ex fugiat.
              Repellat maiores illo magnam, rerum id fugit neque, rem laboriosam
              accusamus earum, placeat in quas temporibus suscipit aspernatur
              eligendi nobis.
            </p>
            <div>
              <progress
                className="progress-success progress"
                value={500}
                max={1000}
              ></progress>
              <p>50.000 / 100.000 Menandatangani</p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-500">Tanggal Petisi Dimulai:</span>
                <span>20/06/2023</span>
              </div>
            </div>
            <Button className="mt-6 w-full" onClick={handleShowPetitionModal}>
              Tanda Tangani
            </Button>
          </div>
        </div>
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Dari Komunitas Pecinta Pohon</h2>
            <Link href="/">Lihat Lainnya</Link>
          </div>
          <div className="mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <PetitionCard key={idx} slug="tolak-pembangunan-pt-abcd" />
              ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Petisi Lainnya</h2>
            <Link href="/">Lihat Lainnya</Link>
          </div>
          <div className="mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <PetitionCard key={idx} slug="tolak-pembangunan-pt-abcd" />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPetition;

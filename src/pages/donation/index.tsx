import Image from "next/image";
import Link from "next/link";

import Layout from "~/components/Layout";

export const DonationCard = ({ slug }: { slug: string }) => (
  <div className="card-compact card bg-base-100 shadow-xl">
    <figure className="relative h-60 w-full">
      <Image
        fill
        src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Shoes"
        className="object-cover"
      />
    </figure>
    <div className="card-body gap-6">
      <div>
        <Link href={`/donation/${slug}`} className="card-title hover:underline">
          1.000 Pohon untuk Indonesia
        </Link>
        <Link href="/" className="text-base text-brand-700">
          Komunitas Pecinta Hutan
        </Link>
      </div>
      <div>
        <progress
          className="progress-success progress"
          value={500}
          max={1000}
        ></progress>
        <p>500 / 1.000 Terkumpul</p>
      </div>
      <p className="text-gray-500">Berakhir pada 20/06/2023</p>
    </div>
  </div>
);

const Donation = () => {
  return (
    <Layout title="Peduli Lingkungan - Donasi">
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="mb-8">
          <h2 className="mb-2 text-4xl font-semibold">Donasi</h2>
          <hr className="h-1 w-24 bg-base-content" />
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array(5)
            .fill(null)
            .map((_, idx) => (
              <DonationCard key={idx} slug="1000-pohon-untuk-indonesia" />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Donation;

import { Eye, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Button from "~/components/Button";

import Layout from "~/components/Layout";
import Link from "~/components/Link";
import { BlogCard } from "~/pages/blog";

const DetailBlog = () => {
  return (
    <Layout title="Peduli Lingkungan - 1.000 Pohon Untuk Indonesia">
      <div className="container mx-auto px-4 py-6 md:py-10 xl:max-w-5xl">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>Dampak Penebangan Hutan Secara Liar</li>
          </ul>
        </div>
        <div className="mt-6">
          <div className="mb-2 flex gap-2">
            <div className="badge badge-primary badge-lg text-xs">
              Kategori 1
            </div>
            <div className="badge badge-secondary badge-lg text-xs">
              Kategori 2
            </div>
          </div>
          <h1 className="mb-1 text-3xl font-semibold lg:text-4xl">
            Dampak Penebangan Hutan Secara Liar
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 lg:text-base">
            <Link href="/">Komunitas Pecinta Hutan</Link>
            <span className="text-lg leading-5 lg:text-xl">•</span>
            <span>3 hari yang lalu</span>
            <span className="text-lg leading-5 lg:text-xl">•</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Eye size={20} /> 52
              </span>
              <span className="flex items-center gap-1 text-blue-600">
                <Share2 size={18} /> 52
              </span>
              <span className="flex items-center gap-1 text-red-600">
                <Heart size={18} /> 52
              </span>
            </div>
          </div>

          <figure className="relative mt-6 aspect-video w-full">
            <Image
              fill
              src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Shoes"
              className="object-cover"
            />
          </figure>

          <article className="my-10 flex flex-col gap-4 md:text-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              cupiditate doloribus quos temporibus voluptates qui facilis
              minima, sed placeat, ab nulla? Consectetur odit pariatur cum,
              cupiditate perspiciatis facere voluptates voluptatem dolorum
              temporibus architecto. Magni minus consequatur neque ea quis
              saepe.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
              eos architecto quasi cupiditate molestias natus laborum molestiae
              fugiat beatae, aliquam sunt maxime quos magnam nisi assumenda,
              voluptate ratione mollitia possimus? Expedita sequi, voluptas,
              iure consequuntur labore fuga fugiat beatae, aut enim deserunt
              dicta doloribus odit temporibus similique veritatis qui laborum
              voluptatum aliquid debitis omnis animi. Doloremque itaque ab
              maxime sapiente, placeat nobis saepe impedit at esse perspiciatis
              modi delectus dolor quidem consequatur adipisci ad, tenetur
              blanditiis consectetur iusto laboriosam ex natus quas est!
              Expedita alias quo aliquid eveniet non exercitationem perspiciatis
              corrupti, hic laboriosam architecto vel, sunt tempore, similique
              quam!
            </p>
          </article>

          <div className="flex gap-2">
            <Button className="border-2 border-red-300 bg-transparent font-normal text-red-600 hover:border-red-300 hover:bg-transparent">
              <Heart size={20} /> Favorit
            </Button>
            <Button className="border-2 border-blue-300 bg-transparent font-normal text-blue-600 hover:border-blue-300 hover:bg-transparent">
              <Share2 size={18} /> Share
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <textarea
              className="textarea w-full border-2 border-slate-400"
              placeholder="Komentar"
              rows={5}
            ></textarea>
            <Button className="w-full">Komentar</Button>
          </div>
          <div className="flex flex-col gap-6">
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="placeholder avatar">
                    <div className="w-12 rounded-full bg-gray-300 font-semibold text-gray-800">
                      <span>JD</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="-mb-2 text-lg">John Doe</h4>
                    <span className="text-sm text-gray-400">
                      5 menit yang lalu
                    </span>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolor corporis accusamus exercitationem repellendus
                      impedit et vel eos voluptate pariatur quam! Lorem ipsum
                      dolor, sit amet consectetur adipisicing elit. Assumenda
                      qui fugit, magnam totam dolorum cumque molestias
                      exercitationem mollitia optio cum?
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Dari Komunitas Pecinta Pohon</h2>
            <Link href="/">Lihat Lainnya</Link>
          </div>
          <div className="mt-2 flex flex-col gap-4">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <BlogCard
                  key={idx}
                  slug="dampak-penebangan-hutan-secara-liar"
                />
              ))}
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Blog Lainnya</h2>
            <Link href="/">Lihat Lainnya</Link>
          </div>
          <div className="mt-2 flex flex-col gap-4">
            {Array(3)
              .fill(null)
              .map((_, idx) => (
                <BlogCard
                  key={idx}
                  slug="dampak-penebangan-hutan-secara-liar"
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailBlog;

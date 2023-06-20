import { Eye, Filter, Heart, Search, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Layout from "~/components/Layout";
import Checkbox from "~/components/Checkbox";
import Select from "~/components/Select";
import Input from "~/components/Input";
import { cn } from "~/utils/ui";

const BlogCard = () => (
  <div className="card card-compact bg-base-100 shadow-xl md:card-side">
    <figure className="relative h-full w-full md:max-w-[360px]">
      <Image
        fill
        src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Shoes"
        className="object-cover"
      />
    </figure>
    <div className="card-body gap-6">
      <div className="flex gap-2">
        <div className="badge badge-primary badge-lg text-xs">Kategori 1</div>
        <div className="badge badge-secondary badge-lg text-xs">Kategori 2</div>
      </div>
      <div>
        <Link href="/" className="card-title hover:underline">
          Dampak Penebangan Hutan Secara Liar
        </Link>
        <Link href="/" className="text-base text-brand-700">
          Komunitas Pecinta Hutan
        </Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        officiis, similique nemo distinctio nobis rem a autem fuga cupiditate
        cum voluptate soluta nam ratione tempora voluptas hic, provident libero
        doloribus!
      </p>
      <div className="flex justify-between">
        <p className="text-gray-500">Dimulai pada 20/06/2023</p>
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
    </div>
  </div>
);

const FilterBlog = ({
  asDropdown,
  className,
}: {
  asDropdown?: boolean;
  className?: string;
}) => {
  return (
    <div
      tabIndex={asDropdown ? 0 : undefined}
      className={cn(
        "card card-compact z-10 h-min bg-white shadow-md",
        {
          "dropdown-content mt-2 w-64": asDropdown,
        },
        className
      )}
    >
      <div className="card-body">
        <h2 className="card-title">Filter</h2>
        <hr className="mb-4 border border-gray-200" />
        <Select
          label="Urut berdasarkan"
          options={[{ label: "Terbaru", value: "newest" }]}
        />
        <div className="mt-4">
          <label className="label mb-2 p-0">
            <span className="label-text">Kategori</span>
          </label>
          <div className="flex flex-col gap-2">
            <Checkbox label="Kategori 1" />
            <Checkbox label="Kategori 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h2 className="mb-2 text-4xl font-semibold">Blog</h2>
          <hr className="h-1 w-14 bg-base-content" />
        </div>
        <div className="gap-6 xl:grid xl:grid-cols-4">
          <FilterBlog className="hidden xl:block" />
          <div className="col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Cari..."
                LeftIcon={() => (
                  <Search className="absolute left-4 top-1/2 w-6 -translate-y-1/2" />
                )}
              />
              <div className="dropdown-end dropdown-bottom dropdown xl:hidden">
                <label
                  tabIndex={0}
                  className="btn-square btn bg-white shadow-md"
                >
                  <Filter />
                </label>
                <FilterBlog asDropdown />
              </div>
            </div>
            {Array(5)
              .fill(null)
              .map((_, idx) => (
                <BlogCard key={idx} />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

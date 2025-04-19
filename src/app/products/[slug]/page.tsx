import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductPageClient from "../../../components/productPageClient";
import { Product } from "@prisma/client";

type Props = {
  params: { slug: string };
};

// export const dynamicParams = false;

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true },
  });

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const product: Product | null = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return notFound();

  return <ProductPageClient product={product} />;
}
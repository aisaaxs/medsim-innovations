import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductPageClient from "../../../components/productPageClient";
import { Product } from "@prisma/client";

// ✅ Use inferred type from Next.js instead of redefining
interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true },
  });

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const product: Product | null = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return notFound();

  return <ProductPageClient product={product} />;
}

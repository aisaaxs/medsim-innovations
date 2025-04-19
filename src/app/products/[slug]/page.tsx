// src/app/products/[slug]/page.tsx

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductPageClient from "../../../components/productPageClient";
import { Product } from "@prisma/client";
import { Metadata } from "next";

// Generate static paths for all products
export async function generateStaticParams() {
  const products = await prisma.product.findMany({
    select: { slug: true },
  });

  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata per product
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
  };
}

// Page component
export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product: Product | null = await prisma.product.findUnique({
    where: { slug: params.slug },
  });

  if (!product) return notFound();

  return <ProductPageClient product={product} />;
}

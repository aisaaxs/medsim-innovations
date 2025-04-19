import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
    {
        name: "Community Bag",
        slug: "community-bag",
        description: "The Community Bag is a lightweight, durable, and organized field bag designed for healthcare professionals in community and outreach settings.",
        image: "/products/community-bag/community-bag.png",
    },
    {
        name: "Nurse Kit Pro",
        slug: "nurse-kit-pro",
        description: "Nurse Kit Pro is a sleek, ergonomic, and water-resistant nursing bag designed to support both professionals and students with organized, durable, and stylish functionality.",
        image: "/products/nurse-kit-pro/nurse-kit-pro.png",
    },
    {
        name: "Roma Kit",
        slug: "roma-kit",
        description: "ROMA Kit is an all-in-one simulation tool that helps learners confidently practice administering medications through various routes in realistic healthcare scenarios.",
        image: "/products/roma-kit/roma-kit.png",
    },
    {
        name: "Suture Kit",
        slug: "suture-kit",
        description: "Suture Kit is a compact and realistic practice tool designed to help students and professionals master essential suturing techniques with confidence.",
        image: "/products/suture-kit/suture-kit.png",
    },
    {
        name: "Task Trainers",
        slug: "task-trainers",
        description: "Task Trainers are simulation tools for practicing essential clinical procedures like IV insertion, venipuncture, infant care, and dialysis in a realistic environment.",
        image: "/products/task-trainers/iv-torso.jpeg",
    },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
        where: {
            slug: product.slug
        },
        update: {
            name: product.name,
            description: product.description,
            image: product.image
        },
        create: product,
    });
  }
}

main()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});